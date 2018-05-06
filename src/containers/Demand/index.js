import React, { Component } from 'react';
import {
	FlatList,
	Alert,
	View,
	TouchableOpacity,
	Image,
	ToastAndroid,
	Text,
	InteractionManager,
	DeviceEventEmitter
} from 'react-native';
import { width, height, scale } from '../../components/common/Dimensions';
import NavigatorTopBar from '../../components/common/NavigatorTopBar';
import Swiper from 'react-native-swiper';
import styles from './style';
import color from '../../constant/color';
import text from '../../constant/text';
import { date1str } from '../../constant/constants';
import { getCanOfferRequireList, getRequireList } from '../../services/demand'; //接口方法
import Lost from '../../components/common/Lost'; //丢失页面
import Naviwait from '../../components/common/NavWait';
import { connect } from '../../components/common/connect';
import * as loginAction from '../../actions/loginAction';
let _this, _state, _navigator;
import { getStorage } from '../../constant/storage';
import { toastShort } from '../../constant/toast';
//轮播图假数据
let imgList = [
	{ url: require('../../images/person.png') },
	{ url: require('../../images/house.png') },
	{ url: require('../../images/house.png') }
];
//数据

class Demand extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imgList: [],
			login: false, //是否登录
			footLoad: false, //flatList是否显示尾部加载中
			dataSource: [],
			refreshing: false,
			label: [],
			option: 'Find',
			visible: false,
			order: '0',
			order_json: { user_rank: 1, offer_num: 0, end_time: 0 }, //后台所需字段
			screenList: [ '买家信用', '报价数', '剩余天数' ],
			page: 1, //当前页
			reset: true, //是否加载分页第一页
			loading: true, //是否显示加载中状态
			size: 10,
			failLoad: true,
			canOfferList: []
		};
	}

	fetchUI() {
		getCanOfferRequireList(`page_num=${_state.page}`, _this.demandListResult, _this.FailFuc);
	}
	// 进来加载函数
	componentDidMount() {
		InteractionManager.runAfterInteractions(() => {
			this.scriptOption = DeviceEventEmitter.addListener('DemandUI', _this.fetchUI);
			if (this.props.option) {
				this.setState({
					option: this.props.navigation.state.params.option,
					imgList: imgList
				});
				getStorage('login', (error, data) => {
					if (data && _this.props.loginProps.supplier_flag == 1) {
						getCanOfferRequireList(`page_num=${_state.page}`, _this.demandListResult, _this.FailFuc);
					} else {
						getRequireList(
							`page_num=${_state.page}&order_json=${JSON.stringify(_state.order_json)}`,
							_this.demandListResult,
							_this.FailFuc
						);
					}
				});
			} else {
				getRequireList(
					`page_num=${_state.page}&order_json=${JSON.stringify(_state.order_json)}`,
					_this.demandListResult,
					_this.FailFuc
				);
			}
		});
	}

	componentWillUnmount() {
		this.scriptOption.remove();
	}
	//需求列表
	demandListResult(result) {
		if (result.returnCode == 200) {
			let list = [],
				labelList = [];
			if (_state.option == 'Yes') {
				list = result.require_list.filter((item) => {
					return item.stage == 2;
				});
				labelList = result.user_label ? result.user_label : [];
			}
			_this.setState({
				imgList: result.ad_list
			});
			if (_state.reset) {
				_this.setState({
					label: labelList,
					canOfferList: list,
					dataSource: result.require_list,
					total: Number(result.total_count),
					page: Number(result.page_num),
					footLoad: false,
					reset: false,
					loading: false,
					refreshing: false,
					size: Number(result.page_count) || 10
				});
			} else {
				_this.setState({
					canOfferList: list,
					dataSource: _state.dataSource.concat(result.require_list),
					total: Number(result.total_count),
					refreshing: false,
					page: Number(result.page_num),
					footLoad: false,
					loading: false,
					size: Number(result.page_count) || 10
				});
			}
		} else {
			_this.setState({
				loading: false,
				total: 0,
				page: 1,
				footLoad: false,
				reset: false,
				refreshing: false
			});
		}
	}

	FailFuc() {
		_this.setState({
			loading: false,
			failLoad: false
		});
	}

	//切换找需求和可报价需求
	tabOption(option) {
		_this.setState({ option, reset: true, loading: true,refreshing:true }, () => {
			if (option == 'Find') {
				getRequireList(
					`page_num=1&order_json=${JSON.stringify(_state.order_json)}`,
					_this.demandListResult,
					_this.FailFuc
				);
			} else {
				getStorage('login', (error, data) => {
					if (data && _this.props.loginProps.supplier_flag == 1) {
						getCanOfferRequireList(`page_num=1`, _this.demandListResult, _this.FailFuc);
					} else {
						getRequireList(
							`page_num=1&order_json=${JSON.stringify(_state.order_json)}`,
							_this.demandListResult,
							_this.FailFuc
						);
					}
				});
			}
		});
	}

	openModal() {
		_this.setState({
			visible: true
		});
	}

	closeModal() {
		_this.setState({
			visible: false
		});
	}
	//报价
	offerPrice(project_id, user_id) {
		getStorage('login', (error, data) => {
			if (data) {
				switch (_this.props.loginProps.supplier_flag) {
					case '1':
						if (data.userId == user_id) {
							Alert.alert('温馨提示', '您不能给自己报价', [ { text: '确认' } ]);
						} else {
							_navigator.navigate('OfferPrice', { project_id });
						}
						break;
					default:
						Alert.alert('温馨提示', '开店审核通过后方可报价', [ { text: '确认' } ]);
				}
			} else {
				Alert.alert('温馨提示', '请先登陆', [
					{ text: '稍后登陆' },
					{
						text: '确认',
						onPress: () => {
							_navigator.navigate('Login', { router: 'DemandDetail' });
						}
					}
				]);
			}
		});
	}
	publishDemandAction() {}
	render() {
		_this = this;
		_navigator = this.props.navigation;
		_state = this.state;
		let NavigatorTopBarProps = {
			visible: true,
			centerView: (
				<View
					style={{
						width: 380 * scale,
						height: 48 * scale,
						borderColor: '#fff',
						borderWidth: 1,
						borderRadius: 5 * scale,
						flexDirection: 'row'
					}}
				>
					<TouchableOpacity
						activeOpacity={0.7}
						style={_state.option == 'Find' ? styles.activeBtn : styles.transBtn}
						onPress={() => _this.tabOption('Find')}
					>
						<Text style={_state.option == 'Find' ? text.lan12 : text.bai12}>找需求</Text>
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.7}
						style={_state.option == 'Yes' ? styles.activeBtn : styles.transBtn}
						onPress={() => _this.tabOption('Yes')}
					>
						<Text style={_state.option == 'Yes' ? text.lan12 : text.bai12}>可报价的需求</Text>
					</TouchableOpacity>
				</View>
			),
			rightView: (
				<TouchableOpacity
					style={{ flex: 1 }}
					underlayColor="transparent"
					onPress={() => {
						_this.navigateRouter('PublishDemand');
					}}
				>
					<View
						style={{
							flex: 1,
							paddingRight: 12,
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'flex-end'
						}}
					>
						<Image
							style={{ width: 44 * scale, height: 44 * scale }}
							source={require('../../images/right_add.png')}
						/>
					</View>
				</TouchableOpacity>
			)
		};

		return (
			<View style={styles.main}>
				<NavigatorTopBar {...NavigatorTopBarProps} />
				{_state.option != 'Yes' ? (
					<View style={styles.selectBox} ref={(selectBox) => (this.selectBox = selectBox)}>
						{_state.screenList.map((item, index) => (
							<TouchableOpacity
								style={styles.btnBox}
								onPress={() => {
									_this.tablist(index);
								}}
								key={index}
							>
								<View style={styles.selectBtn}>
									<Text style={[ styles.textBtn, { marginRight: 10 * scale } ]}>{item}</Text>
									{_state.order == index ? (
										<Image source={require('../../images/arow1.png')} style={styles.seicon} />
									) : (
										<Image source={require('../../images/arow2.png')} style={styles.seicon} />
									)}
								</View>
								<Image source={require('../../images/logiLine.png')} style={styles.line} />
							</TouchableOpacity>
						))}
					</View>
				) : null}

				<FlatList
					style={{ flex: 1, backgroundColor: '#fff', width: width }}
					ref={(flatList) => (this._flatList = flatList)}
					extraData={this.state}
					removeClippedSubviews={true}
					keyExtractor={(item, index) => index}
					data={_state.dataSource}
					renderItem={this._renderItem}
					ItemSeparatorComponent={this._renderItemSeparatorComponent}
					onRefresh={() => this._renderRefresh()}
					refreshing={this.state.refreshing}
					ListHeaderComponent={() => this._renderHeader()}
					onEndReached={this._onEndReached}
					onEndReachedThreshold={0.1}
					ListFooterComponent={this._renderFooter}
					ListEmptyComponent={this._renderEmperty}
				/>
			</View>
		);
	}
	_renderEmperty() {
		return (
			<View style={{ flex: 1 }}>
				{_state.loading ? (
					<Naviwait />
				) : (
					<Lost
						title={_state.failLoad ? '暂时还没有需求' : '您的网络不给力哦~~~'}
						imgUrl={require('../../images/loadFail.gif')}
						imgStyle={{ width: 240 * scale, height: 240 * scale }}
					/>
				)}
			</View>
		);
	}
	_renderFooter() {
		return _state.footLoad ? (
			<View style={{ padding: 15, justifyContent: 'center', alignItems: 'center' }}>
				<Text style={{ fontSize: 12, color: '#999', textAlign: 'center' }}>'努力加载中...'</Text>
			</View>
		) : null;
	}
	//上拉加载
	_onEndReached() {
		if (_state.page * _state.size < _state.total && !_state.footLoad) {
			_this.setState({ footLoad: true });
			if (_state.option == 'Find') {
				getRequireList(
					`page_num=${_state.page + 1}&order_json=${JSON.stringify(_state.order_json)}`,
					_this.demandListResult,
					_this.FailFuc
				);
			} else {
				getCanOfferRequireList(`page_num=${_state.page + 1}`, _this.demandListResult, _this.FailFuc);
			}
		}
	}
	// 下拉刷新
	_renderRefresh = () => {
		this.setState({ reset: true, refreshing: true, loading: true }); //开始刷新
		if (_state.option == 'Find') {
			getRequireList(
				`page_num=1&order_json=${JSON.stringify(_state.order_json)}`,
				_this.demandListResult,
				_this.FailFuc
			);
		} else {
			getCanOfferRequireList(`page_num=1`, _this.demandListResult, _this.FailFuc);
		}
	};

	tablist(order) {
		let order_json;
		if (order == _state.order) {
			order_json = { user_rank: 1, offer_num: 0, end_time: 0 };
			_this.setState({ order_json, order: '99', loading: true, reset: true });
		} else {
			switch (order) {
				case 0:
					order_json = { user_rank: 0, offer_num: 0, end_time: 0 };
					break;
				case 1:
					order_json = { user_rank: 0, offer_num: 1, end_time: 0 };
					break;
				default:
					order_json = { user_rank: 0, offer_num: 0, end_time: 1 };
					break;
			}
			_this.setState({ order_json, order, loading: true, reset: true });
		}

		getRequireList(
			`page_num=${_state.page}&order_json=${JSON.stringify(order_json)}`,
			_this.demandListResult,
			_this.FailFuc
		);
	}
	//登陆跳转
	navigateRouter(str, routerData) {
		getStorage('login', (error, data) => {
			if (data) {
				// console.log(data)
				if(str=="LabelSelectCompany"){
					if(_this.props.loginProps.supplier_flag!=1){
						toastShort("通过开店审核后方可选择标签")
					}else{
						_navigator.navigate(str, routerData);
					}
				}else{
					_navigator.navigate(str, routerData);
				}
				
			} else {
				Alert.alert('温馨提示', '请先登陆', [
					{ text: '稍后登陆' },
					{
						text: '确认',
						onPress: () => {
							_navigator.navigate('Login', { router: 'Demand' });
						}
					}
				]);
			}
		});
	}

	//轮播图跳转
	// onpushRouter() {}
	//头部
	_renderHeader() {
		let SwiperProps = {
			showsPagination: true,
			horizontal: true,
			autoplay: true,
			autoplayTimeout: 10,
			loop: true,
			showsButtons: false,
			paginationStyle: { position: 'absolute', bottom: 30 * scale, height: 10, width: width },
			dot: (
				<View
					style={{
						backgroundColor: 'rgba(0,0,0,.3)',
						width: 16 * scale,
						height: 16 * scale,
						borderRadius: 8 * scale,
						marginLeft: 4,
						marginRight: 4,
						marginTop: 3,
						marginBottom: 3
					}}
				/>
			),
			activeDot: (
				<View
					style={{
						backgroundColor: color.bluebg,
						width: 16 * scale,
						height: 16 * scale,
						borderRadius: 8 * scale,
						marginLeft: 4,
						marginRight: 4,
						marginTop: 3,
						marginBottom: 3
					}}
				/>
			)
		};
		return _state.option == 'Yes' ? (
			<View style={{ height: 344 * scale }}>
				<View style={styles.banner}>
					{_state.imgList.length ? (
						<Swiper {...SwiperProps}>
							{_state.imgList.map((d, index) => (
								<TouchableOpacity activeOpacity={1} key={index}>
									{d.ad_code ? (
										<Image
											style={{ width: width, height: 270 * scale }}
											source={{ uri: d.ad_code }}
										/>
									) : null}
								</TouchableOpacity>
							))}
						</Swiper>
					) : null}
				</View>

				<View style={styles.interval}>
					<View style={styles.interLeft}>
						<Text style={[ text.hei12, { marginRight: 20 * scale } ]}>我的标签</Text>
						{_state.label.length ? (
							_state.label.map((item, i) => (
								<View style={styles.labelTextBox} key={i}>
									<Text style={styles.labelText} numberOfLines={1}>
										{item}
									</Text>
								</View>
							))
						) : null}
					</View>
					<TouchableOpacity onPress={() => _this.navigateRouter('LabelSelectCompany', { router: 'Demand' })}>
						<Text style={styles.resetLabel}>{_state.label.length ? '重新设置标签' : '去设置标签'}</Text>
					</TouchableOpacity>
				</View>
			</View>
		) : null;
	}
	_renderItemSeparatorComponent() {
		return <View style={{ height: 10 * scale, width: width, backgroundColor: color.main }} />;
	}

	_renderItem({ item }) {
		let {
			user_name,
			project_name,
			stage,
			label_name,
			province,
			county,
			area,
			offer_num,
			rank_name,
			end_time
		} = item;
		//1"审核中"  2"报价中" 3 选择中 4 交易中 5 完成
		let stageText = stage == 2 ? '报价中' : stage == 1 ? '审核中' : stage == 4 ? '交易中' : stage == 3 ? '选择中' : '已完成';

		let styleBoxState =
			stage == 2 || stage == 1
				? { borderColor: '#ff7200' }
				: stage == 4
					? { borderColor: '#ff5e84' }
					: stage == 3 ? { borderColor: '#0eb8ff' } : { borderColor: '#cbcbcb' };
		let styleTextState =
			stage == 2 || stage == 1
				? { color: '#ff7200' }
				: stage == 4 ? { color: '#ff5e84' } : stage == 3 ? { color: '#0eb8ff' } : { color: '#cbcbcb' };
		if (stage != 2) {
			return null;
		} else {
			return (
				<View style={styles.itemstyle}>
					<TouchableOpacity
						style={styles.itemInfo}
						onPress={() => _navigator.navigate('DemandDetail', { project_id: item.project_id })}
					>
						<View style={styles.textbox}>
							<Text numberOfLines={1} style={text.hei15}>
								{project_name}
							</Text>
							<Text numberOfLines={1} style={text.hei15}>
								{label_name}
							</Text>
							<View style={[ styles.stateBox, { marginLeft: 20 * scale }, styleBoxState ]}>
								<Text numberOfLines={1} style={[ text.hei10, { color: '#ff6600' }, styleTextState ]}>
									{stageText}
								</Text>
							</View>
						</View>
						<View style={[ styles.textbox, { marginBottom: 5 * scale, marginTop: 10 * scale } ]}>
							<Text numberOfLines={1} style={text.qianhei12}>
								买家：
							</Text>
							<View style={styles.seriesbox}>
								<Text numberOfLines={1} style={text.bai10}>
									{rank_name}
								</Text>
							</View>
							<Text numberOfLines={1} style={text.hei12}>
								{user_name}
							</Text>
						</View>
						<View style={[ styles.textbox, { marginBottom: 30 * scale } ]}>
							<Text numberOfLines={1} style={text.qianhei12}>
								地址：
							</Text>
							<Text numberOfLines={1} style={text.hei12}>
								{province + county + area}
							</Text>
						</View>
						<View style={styles.textbox}>
							<Text numberOfLines={1} style={text.qianhei12}>
								截止日期：
							</Text>
							<Text numberOfLines={1} style={text.hei12}>
								{date1str(end_time, 'yyyy年MM月dd日')}
							</Text>
						</View>
					</TouchableOpacity>
					{stage == 2 ? (
						<View style={styles.itemRight}>
							<Text numberOfLines={1} style={text.hei12}>
								报价数
							</Text>
							<Text numberOfLines={1} style={[ styles.textnum, { marginBottom: 30 * scale } ]}>
								{offer_num}
							</Text>
							<TouchableOpacity
								style={styles.offerNum}
								onPress={() => _this.offerPrice(item.project_id, item.user_id)}
							>
								<Text numberOfLines={1} style={text.bai12}>
									我要报价
								</Text>
							</TouchableOpacity>
						</View>
					) : null}
				</View>
			);
		}
	}
}
export default connect(
	(state) => ({
		loginProps: state.loginReducer
	}),
	(dispatch) => ({
		login: (payLoad) => dispatch(loginAction.login(payLoad))
	})
)(Demand);
