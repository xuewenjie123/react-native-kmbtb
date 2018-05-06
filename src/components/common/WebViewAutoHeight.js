import React, {Component,propTypes} from 'react';
import {WebView, View,Platform,Linking, PlatformIOS} from "react-native";
import {width,scale, height} from './Dimensions'

const BODY_TAG_PATTERN = /\<\/ *body\>/;
const isAndroid=Platform.OS=="android"?true:false
// Do not add any comments to this! It will break because all line breaks will removed for
// some weird reason when this script is injected.
var script = `
;(function() {
document.body.style.width=${width-60*scale}+"px";
var wrapper = document.createElement("div");
var oImgs = document.getElementsByTagName("img");
document.body.style.overflow="hidden";
wrapper.style.overflow ="hidden";
for(var i=0;i<oImgs.length;i++){
    var imgWidth=getComputedStyle(oImgs[i],false).width
    var imgHeight=getComputedStyle(oImgs[i],false).height
    if(parseFloat(imgWidth)==0){
        oImgs[i].style.width=100+"px"
    }
    if(parseFloat(imgWidth)>${width-60*scale}){
        oImgs[i].style.width=${width-60*scale}+"px"
    }
}
wrapper.id = "height-wrapper";
while (document.body.firstChild) {
    wrapper.appendChild(document.body.firstChild);
}
document.body.appendChild(wrapper);
var i = 0;
function updateHeight() {
    document.title = wrapper.clientHeight;  
    window.location.hash = ++i;
}
updateHeight();
window.addEventListener("load", function() {
    updateHeight();
    setTimeout(updateHeight, 500);
});
window.addEventListener("resize", updateHeight);
}());
`;
const style = `
<style>
body,html{
    padding:0,
    margin:0,
}
#height-wrapper {
  padding-top:5px;
  font-family: "san francisco";
  font-size:15px;
  margin: 0;
}
</style>
<script>
${script}
</script>
`;


// padding:${5*scale}px;

const codeInject = (html) => html.replace(BODY_TAG_PATTERN, style + "</body>");
/**
 * Wrapped Webview which automatically sets the height according to the
 * content. Scrolling is always disabled. Required when the Webview is embedded
 * into a ScrollView with other components.
 *
 * Inspired by this SO answer http://stackoverflow.com/a/33012545
 * */
var _this;
export default class WebViewAutoHeight extends Component{
    constructor(props){
        super(props)
        this.state={
            realContentHeight:100
        }
    }
    // onShouldStartLoadWithRequest(event){
    //     if(event.url.startsWith('http://') || event.url.startsWith('https://')) {
    //         return true;
    //     }else{
    //         Linking.canOpenURL(event.url)
    //             .then(supported => {
    //                 if(supported){
    //                   return Linking.openURL(url);
    //                 }else{
    //                     return false;
    //                 }
    //             }).catch(err => {
    //                 return false;
    //         })
    //     }
    //   }
    _injectJavaScript = () => `
        var a = document.getElementsByTagName('a');
        for(var i = 0; i < a.length; i++){
            a[i].onclick = function (event) {
                // window.postMessage(this.href);
                event.preventDefault();
                return false
            }
        }
    `
    onMessage(e){
        // console.log("jinglaid")
        // console.log(e)
        _this.setState({
            realContentHeight:paseFloat(e.nativeEvent.data)
        })
    }
    componentWillUnmount(){
        this.timer&&clearTimeout(this.timer)
    }
    handleNavigationChange(navState) {
        _this.timer=setTimeout(()=>{
            if (navState.title) {

                const realContentHeight = parseInt(navState.title) || 0; // turn NaN to 0

                _this.setState({realContentHeight});
            }
        },1000)
    }
    render() {
        _this=this
        const {source, style, minHeight, ...otherProps} = this.props;
        const html = source.html;

        if (!html) {
            throw new Error("WebViewAutoHeight supports only source.html");
        }

        if (!BODY_TAG_PATTERN.test(html)) {
            throw new Error("Cannot find </body> from: " + html);
        }

        return (
                <WebView
                    {...otherProps}
                    source={{html:codeInject(html), baseUrl: ''}}
                    scrollEnabled={true}                
                    style={[style, {height: Math.max(this.state.realContentHeight, minHeight)}]}
                    javaScriptEnabled={true}
                    scalesPageToFit={true}
                    automaticallyAdjustContentInsets={true}
                    onMessage={_this.onMessage}
                    bounces={false}
                     injectedJavaScript={this._injectJavaScript()}
                    // onShouldStartLoadWithRequest={_this.onShouldStartLoadWithRequest}
                    // contentInset={{top: 0, right:0, bottom: 0, left:0}}
                    onNavigationStateChange={this.handleNavigationChange}
                />
        );
    }

};

