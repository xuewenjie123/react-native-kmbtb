

export const delHtmlTag=(str)=>{  
    return str.replace(/<[^>]+>/g,"");//去掉所有的html标记  
}

export const AppID="wx3044636ca81ac440"//微信appid
export const AppSecret="fccf67fe71553916f7f2b989cac2c51b"//微信appSecret
export const date2str=(x,y)=> {
  var z = {
     y: x.getFullYear(),
     M: x.getMonth() + 1,
     d: x.getDate(),
     h: x.getHours(),
     m: x.getMinutes(),
     s: x.getSeconds()
  };
  return y.replace(/(y+|M+|d+|h+|m+|s+)/g, (v)=>{
     return ((v.length > 1 ? "0" : "") + eval('z.' + v.slice(-1))).slice(-(v.length > 2 ? v.length : 2))
  });
}

export const date1str=(time,y)=> {
    let x=new Date()
    x.setTime(time*1000)
    return date2str(x,y)
}

const Constants = {};
Constants.regionoptions=[
    {
        "value": "2",
        "lable": "北京",
        "children": [
            {
                "value": "52",
                "lable": "北京",
                "children": [
                    {
                        "value": "500",
                        "lable": "东城区"
                    },
                    {
                        "value": "501",
                        "lable": "西城区"
                    },
                    {
                        "value": "502",
                        "lable": "海淀区"
                    },
                    {
                        "value": "503",
                        "lable": "朝阳区"
                    },
                    {
                        "value": "504",
                        "lable": "崇文区"
                    },
                    {
                        "value": "505",
                        "lable": "宣武区"
                    },
                    {
                        "value": "506",
                        "lable": "丰台区"
                    },
                    {
                        "value": "507",
                        "lable": "石景山区"
                    },
                    {
                        "value": "508",
                        "lable": "房山区"
                    },
                    {
                        "value": "509",
                        "lable": "门头沟区"
                    },
                    {
                        "value": "510",
                        "lable": "通州区"
                    },
                    {
                        "value": "511",
                        "lable": "顺义区"
                    },
                    {
                        "value": "512",
                        "lable": "昌平区"
                    },
                    {
                        "value": "513",
                        "lable": "怀柔区"
                    },
                    {
                        "value": "514",
                        "lable": "平谷区"
                    },
                    {
                        "value": "515",
                        "lable": "大兴区"
                    },
                    {
                        "value": "516",
                        "lable": "密云县"
                    },
                    {
                        "value": "517",
                        "lable": "延庆县"
                    }
                ]
            }
        ]
    },
    {
        "value": "3",
        "lable": "安徽",
        "children": [
            {
                "value": "36",
                "lable": "安庆",
                "children": [
                    {
                        "value": "398",
                        "lable": "迎江区"
                    },
                    {
                        "value": "399",
                        "lable": "大观区"
                    },
                    {
                        "value": "400",
                        "lable": "宜秀区"
                    },
                    {
                        "value": "401",
                        "lable": "桐城市"
                    },
                    {
                        "value": "402",
                        "lable": "怀宁县"
                    },
                    {
                        "value": "403",
                        "lable": "枞阳县"
                    },
                    {
                        "value": "404",
                        "lable": "潜山县"
                    },
                    {
                        "value": "405",
                        "lable": "太湖县"
                    },
                    {
                        "value": "406",
                        "lable": "宿松县"
                    },
                    {
                        "value": "407",
                        "lable": "望江县"
                    },
                    {
                        "value": "408",
                        "lable": "岳西县"
                    }
                ]
            },
            {
                "value": "37",
                "lable": "蚌埠",
                "children": [
                    {
                        "value": "409",
                        "lable": "中市区"
                    },
                    {
                        "value": "410",
                        "lable": "东市区"
                    },
                    {
                        "value": "411",
                        "lable": "西市区"
                    },
                    {
                        "value": "412",
                        "lable": "郊区"
                    },
                    {
                        "value": "413",
                        "lable": "怀远县"
                    },
                    {
                        "value": "414",
                        "lable": "五河县"
                    },
                    {
                        "value": "415",
                        "lable": "固镇县"
                    }
                ]
            },
            {
                "value": "38",
                "lable": "巢湖",
                "children": [
                    {
                        "value": "416",
                        "lable": "居巢区"
                    },
                    {
                        "value": "417",
                        "lable": "庐江县"
                    },
                    {
                        "value": "418",
                        "lable": "无为县"
                    },
                    {
                        "value": "419",
                        "lable": "含山县"
                    },
                    {
                        "value": "420",
                        "lable": "和县"
                    }
                ]
            },
            {
                "value": "39",
                "lable": "池州",
                "children": [
                    {
                        "value": "421",
                        "lable": "贵池区"
                    },
                    {
                        "value": "422",
                        "lable": "东至县"
                    },
                    {
                        "value": "423",
                        "lable": "石台县"
                    },
                    {
                        "value": "424",
                        "lable": "青阳县"
                    }
                ]
            },
            {
                "value": "40",
                "lable": "滁州",
                "children": [
                    {
                        "value": "425",
                        "lable": "琅琊区"
                    },
                    {
                        "value": "426",
                        "lable": "南谯区"
                    },
                    {
                        "value": "427",
                        "lable": "天长市"
                    },
                    {
                        "value": "428",
                        "lable": "明光市"
                    },
                    {
                        "value": "429",
                        "lable": "来安县"
                    },
                    {
                        "value": "430",
                        "lable": "全椒县"
                    },
                    {
                        "value": "431",
                        "lable": "定远县"
                    },
                    {
                        "value": "432",
                        "lable": "凤阳县"
                    }
                ]
            },
            {
                "value": "41",
                "lable": "阜阳",
                "children": [
                    {
                        "value": "433",
                        "lable": "蚌山区"
                    },
                    {
                        "value": "434",
                        "lable": "龙子湖区"
                    },
                    {
                        "value": "435",
                        "lable": "禹会区"
                    },
                    {
                        "value": "436",
                        "lable": "淮上区"
                    },
                    {
                        "value": "437",
                        "lable": "颍州区"
                    },
                    {
                        "value": "438",
                        "lable": "颍东区"
                    },
                    {
                        "value": "439",
                        "lable": "颍泉区"
                    },
                    {
                        "value": "440",
                        "lable": "界首市"
                    },
                    {
                        "value": "441",
                        "lable": "临泉县"
                    },
                    {
                        "value": "442",
                        "lable": "太和县"
                    },
                    {
                        "value": "443",
                        "lable": "阜南县"
                    },
                    {
                        "value": "444",
                        "lable": "颖上县"
                    }
                ]
            },
            {
                "value": "42",
                "lable": "淮北",
                "children": [
                    {
                        "value": "445",
                        "lable": "相山区"
                    },
                    {
                        "value": "446",
                        "lable": "杜集区"
                    },
                    {
                        "value": "447",
                        "lable": "烈山区"
                    },
                    {
                        "value": "448",
                        "lable": "濉溪县"
                    }
                ]
            },
            {
                "value": "43",
                "lable": "淮南",
                "children": [
                    {
                        "value": "449",
                        "lable": "田家庵区"
                    },
                    {
                        "value": "450",
                        "lable": "大通区"
                    },
                    {
                        "value": "451",
                        "lable": "谢家集区"
                    },
                    {
                        "value": "452",
                        "lable": "八公山区"
                    },
                    {
                        "value": "453",
                        "lable": "潘集区"
                    },
                    {
                        "value": "454",
                        "lable": "凤台县"
                    }
                ]
            },
            {
                "value": "44",
                "lable": "黄山",
                "children": [
                    {
                        "value": "455",
                        "lable": "屯溪区"
                    },
                    {
                        "value": "456",
                        "lable": "黄山区"
                    },
                    {
                        "value": "457",
                        "lable": "徽州区"
                    },
                    {
                        "value": "458",
                        "lable": "歙县"
                    },
                    {
                        "value": "459",
                        "lable": "休宁县"
                    },
                    {
                        "value": "460",
                        "lable": "黟县"
                    },
                    {
                        "value": "461",
                        "lable": "祁门县"
                    }
                ]
            },
            {
                "value": "45",
                "lable": "六安",
                "children": [
                    {
                        "value": "462",
                        "lable": "金安区"
                    },
                    {
                        "value": "463",
                        "lable": "裕安区"
                    },
                    {
                        "value": "464",
                        "lable": "寿县"
                    },
                    {
                        "value": "465",
                        "lable": "霍邱县"
                    },
                    {
                        "value": "466",
                        "lable": "舒城县"
                    },
                    {
                        "value": "467",
                        "lable": "金寨县"
                    },
                    {
                        "value": "468",
                        "lable": "霍山县"
                    }
                ]
            },
            {
                "value": "46",
                "lable": "马鞍山",
                "children": [
                    {
                        "value": "469",
                        "lable": "雨山区"
                    },
                    {
                        "value": "470",
                        "lable": "花山区"
                    },
                    {
                        "value": "471",
                        "lable": "金家庄区"
                    },
                    {
                        "value": "472",
                        "lable": "当涂县"
                    }
                ]
            },
            {
                "value": "47",
                "lable": "宿州",
                "children": [
                    {
                        "value": "473",
                        "lable": "埇桥区"
                    },
                    {
                        "value": "474",
                        "lable": "砀山县"
                    },
                    {
                        "value": "475",
                        "lable": "萧县"
                    },
                    {
                        "value": "476",
                        "lable": "灵璧县"
                    },
                    {
                        "value": "477",
                        "lable": "泗县"
                    }
                ]
            },
            {
                "value": "48",
                "lable": "铜陵",
                "children": [
                    {
                        "value": "478",
                        "lable": "铜官山区"
                    },
                    {
                        "value": "479",
                        "lable": "狮子山区"
                    },
                    {
                        "value": "480",
                        "lable": "郊区"
                    },
                    {
                        "value": "481",
                        "lable": "铜陵县"
                    }
                ]
            },
            {
                "value": "49",
                "lable": "芜湖",
                "children": [
                    {
                        "value": "482",
                        "lable": "镜湖区"
                    },
                    {
                        "value": "483",
                        "lable": "弋江区"
                    },
                    {
                        "value": "484",
                        "lable": "鸠江区"
                    },
                    {
                        "value": "485",
                        "lable": "三山区"
                    },
                    {
                        "value": "486",
                        "lable": "芜湖县"
                    },
                    {
                        "value": "487",
                        "lable": "繁昌县"
                    },
                    {
                        "value": "488",
                        "lable": "南陵县"
                    }
                ]
            },
            {
                "value": "50",
                "lable": "宣城",
                "children": [
                    {
                        "value": "489",
                        "lable": "宣州区"
                    },
                    {
                        "value": "490",
                        "lable": "宁国市"
                    },
                    {
                        "value": "491",
                        "lable": "郎溪县"
                    },
                    {
                        "value": "492",
                        "lable": "广德县"
                    },
                    {
                        "value": "493",
                        "lable": "泾县"
                    },
                    {
                        "value": "494",
                        "lable": "绩溪县"
                    },
                    {
                        "value": "495",
                        "lable": "旌德县"
                    }
                ]
            },
            {
                "value": "51",
                "lable": "亳州",
                "children": [
                    {
                        "value": "496",
                        "lable": "涡阳县"
                    },
                    {
                        "value": "497",
                        "lable": "蒙城县"
                    },
                    {
                        "value": "498",
                        "lable": "利辛县"
                    },
                    {
                        "value": "499",
                        "lable": "谯城区"
                    }
                ]
            },
            {
                "value": "3401",
                "lable": "合肥",
                "children": [
                    {
                        "value": "3402",
                        "lable": "庐阳区"
                    },
                    {
                        "value": "3403",
                        "lable": "瑶海区"
                    },
                    {
                        "value": "3404",
                        "lable": "蜀山区"
                    },
                    {
                        "value": "3405",
                        "lable": "包河区"
                    },
                    {
                        "value": "3406",
                        "lable": "长丰县"
                    },
                    {
                        "value": "3407",
                        "lable": "肥东县"
                    },
                    {
                        "value": "3408",
                        "lable": "肥西县"
                    }
                ]
            }
        ]
    },
    {
        "value": "4",
        "lable": "福建",
        "children": [
            {
                "value": "53",
                "lable": "福州",
                "children": [
                    {
                        "value": "518",
                        "lable": "鼓楼区"
                    },
                    {
                        "value": "519",
                        "lable": "台江区"
                    },
                    {
                        "value": "520",
                        "lable": "仓山区"
                    },
                    {
                        "value": "521",
                        "lable": "马尾区"
                    },
                    {
                        "value": "522",
                        "lable": "晋安区"
                    },
                    {
                        "value": "523",
                        "lable": "福清市"
                    },
                    {
                        "value": "524",
                        "lable": "长乐市"
                    },
                    {
                        "value": "525",
                        "lable": "闽侯县"
                    },
                    {
                        "value": "526",
                        "lable": "连江县"
                    },
                    {
                        "value": "527",
                        "lable": "罗源县"
                    },
                    {
                        "value": "528",
                        "lable": "闽清县"
                    },
                    {
                        "value": "529",
                        "lable": "永泰县"
                    },
                    {
                        "value": "530",
                        "lable": "平潭县"
                    }
                ]
            },
            {
                "value": "54",
                "lable": "龙岩",
                "children": [
                    {
                        "value": "531",
                        "lable": "新罗区"
                    },
                    {
                        "value": "532",
                        "lable": "漳平市"
                    },
                    {
                        "value": "533",
                        "lable": "长汀县"
                    },
                    {
                        "value": "534",
                        "lable": "永定县"
                    },
                    {
                        "value": "535",
                        "lable": "上杭县"
                    },
                    {
                        "value": "536",
                        "lable": "武平县"
                    },
                    {
                        "value": "537",
                        "lable": "连城县"
                    }
                ]
            },
            {
                "value": "55",
                "lable": "南平",
                "children": [
                    {
                        "value": "538",
                        "lable": "延平区"
                    },
                    {
                        "value": "539",
                        "lable": "邵武市"
                    },
                    {
                        "value": "540",
                        "lable": "武夷山市"
                    },
                    {
                        "value": "541",
                        "lable": "建瓯市"
                    },
                    {
                        "value": "542",
                        "lable": "建阳市"
                    },
                    {
                        "value": "543",
                        "lable": "顺昌县"
                    },
                    {
                        "value": "544",
                        "lable": "浦城县"
                    },
                    {
                        "value": "545",
                        "lable": "光泽县"
                    },
                    {
                        "value": "546",
                        "lable": "松溪县"
                    },
                    {
                        "value": "547",
                        "lable": "政和县"
                    }
                ]
            },
            {
                "value": "56",
                "lable": "宁德",
                "children": [
                    {
                        "value": "548",
                        "lable": "蕉城区"
                    },
                    {
                        "value": "549",
                        "lable": "福安市"
                    },
                    {
                        "value": "550",
                        "lable": "福鼎市"
                    },
                    {
                        "value": "551",
                        "lable": "霞浦县"
                    },
                    {
                        "value": "552",
                        "lable": "古田县"
                    },
                    {
                        "value": "553",
                        "lable": "屏南县"
                    },
                    {
                        "value": "554",
                        "lable": "寿宁县"
                    },
                    {
                        "value": "555",
                        "lable": "周宁县"
                    },
                    {
                        "value": "556",
                        "lable": "柘荣县"
                    }
                ]
            },
            {
                "value": "57",
                "lable": "莆田",
                "children": [
                    {
                        "value": "557",
                        "lable": "城厢区"
                    },
                    {
                        "value": "558",
                        "lable": "涵江区"
                    },
                    {
                        "value": "559",
                        "lable": "荔城区"
                    },
                    {
                        "value": "560",
                        "lable": "秀屿区"
                    },
                    {
                        "value": "561",
                        "lable": "仙游县"
                    }
                ]
            },
            {
                "value": "58",
                "lable": "泉州",
                "children": [
                    {
                        "value": "562",
                        "lable": "鲤城区"
                    },
                    {
                        "value": "563",
                        "lable": "丰泽区"
                    },
                    {
                        "value": "564",
                        "lable": "洛江区"
                    },
                    {
                        "value": "565",
                        "lable": "清濛开发区"
                    },
                    {
                        "value": "566",
                        "lable": "泉港区"
                    },
                    {
                        "value": "567",
                        "lable": "石狮市"
                    },
                    {
                        "value": "568",
                        "lable": "晋江市"
                    },
                    {
                        "value": "569",
                        "lable": "南安市"
                    },
                    {
                        "value": "570",
                        "lable": "惠安县"
                    },
                    {
                        "value": "571",
                        "lable": "安溪县"
                    },
                    {
                        "value": "572",
                        "lable": "永春县"
                    },
                    {
                        "value": "573",
                        "lable": "德化县"
                    },
                    {
                        "value": "574",
                        "lable": "金门县"
                    }
                ]
            },
            {
                "value": "59",
                "lable": "三明",
                "children": [
                    {
                        "value": "575",
                        "lable": "梅列区"
                    },
                    {
                        "value": "576",
                        "lable": "三元区"
                    },
                    {
                        "value": "577",
                        "lable": "永安市"
                    },
                    {
                        "value": "578",
                        "lable": "明溪县"
                    },
                    {
                        "value": "579",
                        "lable": "清流县"
                    },
                    {
                        "value": "580",
                        "lable": "宁化县"
                    },
                    {
                        "value": "581",
                        "lable": "大田县"
                    },
                    {
                        "value": "582",
                        "lable": "尤溪县"
                    },
                    {
                        "value": "583",
                        "lable": "沙县"
                    },
                    {
                        "value": "584",
                        "lable": "将乐县"
                    },
                    {
                        "value": "585",
                        "lable": "泰宁县"
                    },
                    {
                        "value": "586",
                        "lable": "建宁县"
                    }
                ]
            },
            {
                "value": "60",
                "lable": "厦门",
                "children": [
                    {
                        "value": "587",
                        "lable": "思明区"
                    },
                    {
                        "value": "588",
                        "lable": "海沧区"
                    },
                    {
                        "value": "589",
                        "lable": "湖里区"
                    },
                    {
                        "value": "590",
                        "lable": "集美区"
                    },
                    {
                        "value": "591",
                        "lable": "同安区"
                    },
                    {
                        "value": "592",
                        "lable": "翔安区"
                    }
                ]
            },
            {
                "value": "61",
                "lable": "漳州",
                "children": [
                    {
                        "value": "593",
                        "lable": "芗城区"
                    },
                    {
                        "value": "594",
                        "lable": "龙文区"
                    },
                    {
                        "value": "595",
                        "lable": "龙海市"
                    },
                    {
                        "value": "596",
                        "lable": "云霄县"
                    },
                    {
                        "value": "597",
                        "lable": "漳浦县"
                    },
                    {
                        "value": "598",
                        "lable": "诏安县"
                    },
                    {
                        "value": "599",
                        "lable": "长泰县"
                    },
                    {
                        "value": "600",
                        "lable": "东山县"
                    },
                    {
                        "value": "601",
                        "lable": "南靖县"
                    },
                    {
                        "value": "602",
                        "lable": "平和县"
                    },
                    {
                        "value": "603",
                        "lable": "华安县"
                    }
                ]
            }
        ]
    },
    {
        "value": "5",
        "lable": "甘肃",
        "children": [
            {
                "value": "62",
                "lable": "兰州",
                "children": [
                    {
                        "value": "604",
                        "lable": "皋兰县"
                    },
                    {
                        "value": "605",
                        "lable": "城关区"
                    },
                    {
                        "value": "606",
                        "lable": "七里河区"
                    },
                    {
                        "value": "607",
                        "lable": "西固区"
                    },
                    {
                        "value": "608",
                        "lable": "安宁区"
                    },
                    {
                        "value": "609",
                        "lable": "红古区"
                    },
                    {
                        "value": "610",
                        "lable": "永登县"
                    },
                    {
                        "value": "611",
                        "lable": "榆中县"
                    }
                ]
            },
            {
                "value": "63",
                "lable": "白银",
                "children": [
                    {
                        "value": "612",
                        "lable": "白银区"
                    },
                    {
                        "value": "613",
                        "lable": "平川区"
                    },
                    {
                        "value": "614",
                        "lable": "会宁县"
                    },
                    {
                        "value": "615",
                        "lable": "景泰县"
                    },
                    {
                        "value": "616",
                        "lable": "靖远县"
                    }
                ]
            },
            {
                "value": "64",
                "lable": "定西",
                "children": [
                    {
                        "value": "617",
                        "lable": "临洮县"
                    },
                    {
                        "value": "618",
                        "lable": "陇西县"
                    },
                    {
                        "value": "619",
                        "lable": "通渭县"
                    },
                    {
                        "value": "620",
                        "lable": "渭源县"
                    },
                    {
                        "value": "621",
                        "lable": "漳县"
                    },
                    {
                        "value": "622",
                        "lable": "岷县"
                    },
                    {
                        "value": "623",
                        "lable": "安定区"
                    },
                    {
                        "value": "624",
                        "lable": "安定区"
                    }
                ]
            },
            {
                "value": "65",
                "lable": "甘南",
                "children": [
                    {
                        "value": "625",
                        "lable": "合作市"
                    },
                    {
                        "value": "626",
                        "lable": "临潭县"
                    },
                    {
                        "value": "627",
                        "lable": "卓尼县"
                    },
                    {
                        "value": "628",
                        "lable": "舟曲县"
                    },
                    {
                        "value": "629",
                        "lable": "迭部县"
                    },
                    {
                        "value": "630",
                        "lable": "玛曲县"
                    },
                    {
                        "value": "631",
                        "lable": "碌曲县"
                    },
                    {
                        "value": "632",
                        "lable": "夏河县"
                    }
                ]
            },
            {
                "value": "66",
                "lable": "嘉峪关",
                "children": [
                    {
                        "value": "633",
                        "lable": "嘉峪关市"
                    }
                ]
            },
            {
                "value": "67",
                "lable": "金昌",
                "children": [
                    {
                        "value": "634",
                        "lable": "金川区"
                    },
                    {
                        "value": "635",
                        "lable": "永昌县"
                    }
                ]
            },
            {
                "value": "68",
                "lable": "酒泉",
                "children": [
                    {
                        "value": "636",
                        "lable": "肃州区"
                    },
                    {
                        "value": "637",
                        "lable": "玉门市"
                    },
                    {
                        "value": "638",
                        "lable": "敦煌市"
                    },
                    {
                        "value": "639",
                        "lable": "金塔县"
                    },
                    {
                        "value": "640",
                        "lable": "瓜州县"
                    },
                    {
                        "value": "641",
                        "lable": "肃北"
                    },
                    {
                        "value": "642",
                        "lable": "阿克塞"
                    }
                ]
            },
            {
                "value": "69",
                "lable": "临夏",
                "children": [
                    {
                        "value": "643",
                        "lable": "临夏市"
                    },
                    {
                        "value": "644",
                        "lable": "临夏县"
                    },
                    {
                        "value": "645",
                        "lable": "康乐县"
                    },
                    {
                        "value": "646",
                        "lable": "永靖县"
                    },
                    {
                        "value": "647",
                        "lable": "广河县"
                    },
                    {
                        "value": "648",
                        "lable": "和政县"
                    },
                    {
                        "value": "649",
                        "lable": "东乡族自治县"
                    },
                    {
                        "value": "650",
                        "lable": "积石山"
                    }
                ]
            },
            {
                "value": "70",
                "lable": "陇南",
                "children": [
                    {
                        "value": "651",
                        "lable": "成县"
                    },
                    {
                        "value": "652",
                        "lable": "徽县"
                    },
                    {
                        "value": "653",
                        "lable": "康县"
                    },
                    {
                        "value": "654",
                        "lable": "礼县"
                    },
                    {
                        "value": "655",
                        "lable": "两当县"
                    },
                    {
                        "value": "656",
                        "lable": "文县"
                    },
                    {
                        "value": "657",
                        "lable": "西和县"
                    },
                    {
                        "value": "658",
                        "lable": "宕昌县"
                    },
                    {
                        "value": "659",
                        "lable": "武都区"
                    }
                ]
            },
            {
                "value": "71",
                "lable": "平凉",
                "children": [
                    {
                        "value": "660",
                        "lable": "崇信县"
                    },
                    {
                        "value": "661",
                        "lable": "华亭县"
                    },
                    {
                        "value": "662",
                        "lable": "静宁县"
                    },
                    {
                        "value": "663",
                        "lable": "灵台县"
                    },
                    {
                        "value": "664",
                        "lable": "崆峒区"
                    },
                    {
                        "value": "665",
                        "lable": "庄浪县"
                    },
                    {
                        "value": "666",
                        "lable": "泾川县"
                    }
                ]
            },
            {
                "value": "72",
                "lable": "庆阳",
                "children": [
                    {
                        "value": "667",
                        "lable": "合水县"
                    },
                    {
                        "value": "668",
                        "lable": "华池县"
                    },
                    {
                        "value": "669",
                        "lable": "环县"
                    },
                    {
                        "value": "670",
                        "lable": "宁县"
                    },
                    {
                        "value": "671",
                        "lable": "庆城县"
                    },
                    {
                        "value": "672",
                        "lable": "西峰区"
                    },
                    {
                        "value": "673",
                        "lable": "镇原县"
                    },
                    {
                        "value": "674",
                        "lable": "正宁县"
                    }
                ]
            },
            {
                "value": "73",
                "lable": "天水",
                "children": [
                    {
                        "value": "675",
                        "lable": "甘谷县"
                    },
                    {
                        "value": "676",
                        "lable": "秦安县"
                    },
                    {
                        "value": "677",
                        "lable": "清水县"
                    },
                    {
                        "value": "678",
                        "lable": "秦州区"
                    },
                    {
                        "value": "679",
                        "lable": "麦积区"
                    },
                    {
                        "value": "680",
                        "lable": "武山县"
                    },
                    {
                        "value": "681",
                        "lable": "张家川"
                    }
                ]
            },
            {
                "value": "74",
                "lable": "武威",
                "children": [
                    {
                        "value": "682",
                        "lable": "古浪县"
                    },
                    {
                        "value": "683",
                        "lable": "民勤县"
                    },
                    {
                        "value": "684",
                        "lable": "天祝"
                    },
                    {
                        "value": "685",
                        "lable": "凉州区"
                    }
                ]
            },
            {
                "value": "75",
                "lable": "张掖",
                "children": [
                    {
                        "value": "686",
                        "lable": "高台县"
                    },
                    {
                        "value": "687",
                        "lable": "临泽县"
                    },
                    {
                        "value": "688",
                        "lable": "民乐县"
                    },
                    {
                        "value": "689",
                        "lable": "山丹县"
                    },
                    {
                        "value": "690",
                        "lable": "肃南"
                    },
                    {
                        "value": "691",
                        "lable": "甘州区"
                    }
                ]
            }
        ]
    },
    {
        "value": "6",
        "lable": "广东",
        "children": [
            {
                "value": "76",
                "lable": "广州",
                "children": [
                    {
                        "value": "692",
                        "lable": "从化市"
                    },
                    {
                        "value": "693",
                        "lable": "天河区"
                    },
                    {
                        "value": "694",
                        "lable": "东山区"
                    },
                    {
                        "value": "695",
                        "lable": "白云区"
                    },
                    {
                        "value": "696",
                        "lable": "海珠区"
                    },
                    {
                        "value": "697",
                        "lable": "荔湾区"
                    },
                    {
                        "value": "698",
                        "lable": "越秀区"
                    },
                    {
                        "value": "699",
                        "lable": "黄埔区"
                    },
                    {
                        "value": "700",
                        "lable": "番禺区"
                    },
                    {
                        "value": "701",
                        "lable": "花都区"
                    },
                    {
                        "value": "702",
                        "lable": "增城区"
                    },
                    {
                        "value": "703",
                        "lable": "从化区"
                    },
                    {
                        "value": "704",
                        "lable": "市郊"
                    }
                ]
            },
            {
                "value": "77",
                "lable": "深圳",
                "children": [
                    {
                        "value": "705",
                        "lable": "福田区"
                    },
                    {
                        "value": "706",
                        "lable": "罗湖区"
                    },
                    {
                        "value": "707",
                        "lable": "南山区"
                    },
                    {
                        "value": "708",
                        "lable": "宝安区"
                    },
                    {
                        "value": "709",
                        "lable": "龙岗区"
                    },
                    {
                        "value": "710",
                        "lable": "盐田区"
                    }
                ]
            },
            {
                "value": "78",
                "lable": "潮州",
                "children": [
                    {
                        "value": "711",
                        "lable": "湘桥区"
                    },
                    {
                        "value": "712",
                        "lable": "潮安县"
                    },
                    {
                        "value": "713",
                        "lable": "饶平县"
                    }
                ]
            },
            {
                "value": "79",
                "lable": "东莞",
                "children": [
                    {
                        "value": "714",
                        "lable": "南城区"
                    },
                    {
                        "value": "715",
                        "lable": "东城区"
                    },
                    {
                        "value": "716",
                        "lable": "万江区"
                    },
                    {
                        "value": "717",
                        "lable": "莞城区"
                    },
                    {
                        "value": "718",
                        "lable": "石龙镇"
                    },
                    {
                        "value": "719",
                        "lable": "虎门镇"
                    },
                    {
                        "value": "720",
                        "lable": "麻涌镇"
                    },
                    {
                        "value": "721",
                        "lable": "道滘镇"
                    },
                    {
                        "value": "722",
                        "lable": "石碣镇"
                    },
                    {
                        "value": "723",
                        "lable": "沙田镇"
                    },
                    {
                        "value": "724",
                        "lable": "望牛墩镇"
                    },
                    {
                        "value": "725",
                        "lable": "洪梅镇"
                    },
                    {
                        "value": "726",
                        "lable": "茶山镇"
                    },
                    {
                        "value": "727",
                        "lable": "寮步镇"
                    },
                    {
                        "value": "728",
                        "lable": "大岭山镇"
                    },
                    {
                        "value": "729",
                        "lable": "大朗镇"
                    },
                    {
                        "value": "730",
                        "lable": "黄江镇"
                    },
                    {
                        "value": "731",
                        "lable": "樟木头"
                    },
                    {
                        "value": "732",
                        "lable": "凤岗镇"
                    },
                    {
                        "value": "733",
                        "lable": "塘厦镇"
                    },
                    {
                        "value": "734",
                        "lable": "谢岗镇"
                    },
                    {
                        "value": "735",
                        "lable": "厚街镇"
                    },
                    {
                        "value": "736",
                        "lable": "清溪镇"
                    },
                    {
                        "value": "737",
                        "lable": "常平镇"
                    },
                    {
                        "value": "738",
                        "lable": "桥头镇"
                    },
                    {
                        "value": "739",
                        "lable": "横沥镇"
                    },
                    {
                        "value": "740",
                        "lable": "东坑镇"
                    },
                    {
                        "value": "741",
                        "lable": "企石镇"
                    },
                    {
                        "value": "742",
                        "lable": "石排镇"
                    },
                    {
                        "value": "743",
                        "lable": "长安镇"
                    },
                    {
                        "value": "744",
                        "lable": "中堂镇"
                    },
                    {
                        "value": "745",
                        "lable": "高埗镇"
                    }
                ]
            },
            {
                "value": "80",
                "lable": "佛山",
                "children": [
                    {
                        "value": "746",
                        "lable": "禅城区"
                    },
                    {
                        "value": "747",
                        "lable": "南海区"
                    },
                    {
                        "value": "748",
                        "lable": "顺德区"
                    },
                    {
                        "value": "749",
                        "lable": "三水区"
                    },
                    {
                        "value": "750",
                        "lable": "高明区"
                    }
                ]
            },
            {
                "value": "81",
                "lable": "河源",
                "children": [
                    {
                        "value": "751",
                        "lable": "东源县"
                    },
                    {
                        "value": "752",
                        "lable": "和平县"
                    },
                    {
                        "value": "753",
                        "lable": "源城区"
                    },
                    {
                        "value": "754",
                        "lable": "连平县"
                    },
                    {
                        "value": "755",
                        "lable": "龙川县"
                    },
                    {
                        "value": "756",
                        "lable": "紫金县"
                    }
                ]
            },
            {
                "value": "82",
                "lable": "惠州",
                "children": [
                    {
                        "value": "757",
                        "lable": "惠阳区"
                    },
                    {
                        "value": "758",
                        "lable": "惠城区"
                    },
                    {
                        "value": "759",
                        "lable": "大亚湾"
                    },
                    {
                        "value": "760",
                        "lable": "博罗县"
                    },
                    {
                        "value": "761",
                        "lable": "惠东县"
                    },
                    {
                        "value": "762",
                        "lable": "龙门县"
                    }
                ]
            },
            {
                "value": "83",
                "lable": "江门",
                "children": [
                    {
                        "value": "763",
                        "lable": "江海区"
                    },
                    {
                        "value": "764",
                        "lable": "蓬江区"
                    },
                    {
                        "value": "765",
                        "lable": "新会区"
                    },
                    {
                        "value": "766",
                        "lable": "台山市"
                    },
                    {
                        "value": "767",
                        "lable": "开平市"
                    },
                    {
                        "value": "768",
                        "lable": "鹤山市"
                    },
                    {
                        "value": "769",
                        "lable": "恩平市"
                    }
                ]
            },
            {
                "value": "84",
                "lable": "揭阳",
                "children": [
                    {
                        "value": "770",
                        "lable": "榕城区"
                    },
                    {
                        "value": "771",
                        "lable": "普宁市"
                    },
                    {
                        "value": "772",
                        "lable": "揭东县"
                    },
                    {
                        "value": "773",
                        "lable": "揭西县"
                    },
                    {
                        "value": "774",
                        "lable": "惠来县"
                    }
                ]
            },
            {
                "value": "85",
                "lable": "茂名",
                "children": [
                    {
                        "value": "775",
                        "lable": "茂南区"
                    },
                    {
                        "value": "776",
                        "lable": "茂港区"
                    },
                    {
                        "value": "777",
                        "lable": "高州市"
                    },
                    {
                        "value": "778",
                        "lable": "化州市"
                    },
                    {
                        "value": "779",
                        "lable": "信宜市"
                    },
                    {
                        "value": "780",
                        "lable": "电白县"
                    }
                ]
            },
            {
                "value": "86",
                "lable": "梅州",
                "children": [
                    {
                        "value": "781",
                        "lable": "梅县"
                    },
                    {
                        "value": "782",
                        "lable": "梅江区"
                    },
                    {
                        "value": "783",
                        "lable": "兴宁市"
                    },
                    {
                        "value": "784",
                        "lable": "大埔县"
                    },
                    {
                        "value": "785",
                        "lable": "丰顺县"
                    },
                    {
                        "value": "786",
                        "lable": "五华县"
                    },
                    {
                        "value": "787",
                        "lable": "平远县"
                    },
                    {
                        "value": "788",
                        "lable": "蕉岭县"
                    }
                ]
            },
            {
                "value": "87",
                "lable": "清远",
                "children": [
                    {
                        "value": "789",
                        "lable": "清城区"
                    },
                    {
                        "value": "790",
                        "lable": "英德市"
                    },
                    {
                        "value": "791",
                        "lable": "连州市"
                    },
                    {
                        "value": "792",
                        "lable": "佛冈县"
                    },
                    {
                        "value": "793",
                        "lable": "阳山县"
                    },
                    {
                        "value": "794",
                        "lable": "清新县"
                    },
                    {
                        "value": "795",
                        "lable": "连山"
                    },
                    {
                        "value": "796",
                        "lable": "连南"
                    }
                ]
            },
            {
                "value": "88",
                "lable": "汕头",
                "children": [
                    {
                        "value": "797",
                        "lable": "南澳县"
                    },
                    {
                        "value": "798",
                        "lable": "潮阳区"
                    },
                    {
                        "value": "799",
                        "lable": "澄海区"
                    },
                    {
                        "value": "800",
                        "lable": "龙湖区"
                    },
                    {
                        "value": "801",
                        "lable": "金平区"
                    },
                    {
                        "value": "802",
                        "lable": "濠江区"
                    },
                    {
                        "value": "803",
                        "lable": "潮南区"
                    }
                ]
            },
            {
                "value": "89",
                "lable": "汕尾",
                "children": [
                    {
                        "value": "804",
                        "lable": "城区"
                    },
                    {
                        "value": "805",
                        "lable": "陆丰市"
                    },
                    {
                        "value": "806",
                        "lable": "海丰县"
                    },
                    {
                        "value": "807",
                        "lable": "陆河县"
                    }
                ]
            },
            {
                "value": "90",
                "lable": "韶关",
                "children": [
                    {
                        "value": "808",
                        "lable": "曲江县"
                    },
                    {
                        "value": "809",
                        "lable": "浈江区"
                    },
                    {
                        "value": "810",
                        "lable": "武江区"
                    },
                    {
                        "value": "811",
                        "lable": "曲江区"
                    },
                    {
                        "value": "812",
                        "lable": "乐昌市"
                    },
                    {
                        "value": "813",
                        "lable": "南雄市"
                    },
                    {
                        "value": "814",
                        "lable": "始兴县"
                    },
                    {
                        "value": "815",
                        "lable": "仁化县"
                    },
                    {
                        "value": "816",
                        "lable": "翁源县"
                    },
                    {
                        "value": "817",
                        "lable": "新丰县"
                    },
                    {
                        "value": "818",
                        "lable": "乳源"
                    }
                ]
            },
            {
                "value": "91",
                "lable": "阳江",
                "children": [
                    {
                        "value": "819",
                        "lable": "江城区"
                    },
                    {
                        "value": "820",
                        "lable": "阳春市"
                    },
                    {
                        "value": "821",
                        "lable": "阳西县"
                    },
                    {
                        "value": "822",
                        "lable": "阳东县"
                    }
                ]
            },
            {
                "value": "92",
                "lable": "云浮",
                "children": [
                    {
                        "value": "823",
                        "lable": "云城区"
                    },
                    {
                        "value": "824",
                        "lable": "罗定市"
                    },
                    {
                        "value": "825",
                        "lable": "新兴县"
                    },
                    {
                        "value": "826",
                        "lable": "郁南县"
                    },
                    {
                        "value": "827",
                        "lable": "云安县"
                    }
                ]
            },
            {
                "value": "93",
                "lable": "湛江",
                "children": [
                    {
                        "value": "828",
                        "lable": "赤坎区"
                    },
                    {
                        "value": "829",
                        "lable": "霞山区"
                    },
                    {
                        "value": "830",
                        "lable": "坡头区"
                    },
                    {
                        "value": "831",
                        "lable": "麻章区"
                    },
                    {
                        "value": "832",
                        "lable": "廉江市"
                    },
                    {
                        "value": "833",
                        "lable": "雷州市"
                    },
                    {
                        "value": "834",
                        "lable": "吴川市"
                    },
                    {
                        "value": "835",
                        "lable": "遂溪县"
                    },
                    {
                        "value": "836",
                        "lable": "徐闻县"
                    }
                ]
            },
            {
                "value": "94",
                "lable": "肇庆",
                "children": [
                    {
                        "value": "837",
                        "lable": "肇庆市"
                    },
                    {
                        "value": "838",
                        "lable": "高要市"
                    },
                    {
                        "value": "839",
                        "lable": "四会市"
                    },
                    {
                        "value": "840",
                        "lable": "广宁县"
                    },
                    {
                        "value": "841",
                        "lable": "怀集县"
                    },
                    {
                        "value": "842",
                        "lable": "封开县"
                    },
                    {
                        "value": "843",
                        "lable": "德庆县"
                    }
                ]
            },
            {
                "value": "95",
                "lable": "中山",
                "children": [
                    {
                        "value": "844",
                        "lable": "石岐街道"
                    },
                    {
                        "value": "845",
                        "lable": "东区街道"
                    },
                    {
                        "value": "846",
                        "lable": "西区街道"
                    },
                    {
                        "value": "847",
                        "lable": "环城街道"
                    },
                    {
                        "value": "848",
                        "lable": "中山港街道"
                    },
                    {
                        "value": "849",
                        "lable": "五桂山街道"
                    }
                ]
            },
            {
                "value": "96",
                "lable": "珠海",
                "children": [
                    {
                        "value": "850",
                        "lable": "香洲区"
                    },
                    {
                        "value": "851",
                        "lable": "斗门区"
                    },
                    {
                        "value": "852",
                        "lable": "金湾区"
                    }
                ]
            }
        ]
    },
    {
        "value": "7",
        "lable": "广西",
        "children": [
            {
                "value": "97",
                "lable": "南宁",
                "children": [
                    {
                        "value": "853",
                        "lable": "邕宁区"
                    },
                    {
                        "value": "854",
                        "lable": "青秀区"
                    },
                    {
                        "value": "855",
                        "lable": "兴宁区"
                    },
                    {
                        "value": "856",
                        "lable": "良庆区"
                    },
                    {
                        "value": "857",
                        "lable": "西乡塘区"
                    },
                    {
                        "value": "858",
                        "lable": "江南区"
                    },
                    {
                        "value": "859",
                        "lable": "武鸣县"
                    },
                    {
                        "value": "860",
                        "lable": "隆安县"
                    },
                    {
                        "value": "861",
                        "lable": "马山县"
                    },
                    {
                        "value": "862",
                        "lable": "上林县"
                    },
                    {
                        "value": "863",
                        "lable": "宾阳县"
                    },
                    {
                        "value": "864",
                        "lable": "横县"
                    }
                ]
            },
            {
                "value": "98",
                "lable": "桂林",
                "children": [
                    {
                        "value": "865",
                        "lable": "秀峰区"
                    },
                    {
                        "value": "866",
                        "lable": "叠彩区"
                    },
                    {
                        "value": "867",
                        "lable": "象山区"
                    },
                    {
                        "value": "868",
                        "lable": "七星区"
                    },
                    {
                        "value": "869",
                        "lable": "雁山区"
                    },
                    {
                        "value": "870",
                        "lable": "阳朔县"
                    },
                    {
                        "value": "871",
                        "lable": "临桂县"
                    },
                    {
                        "value": "872",
                        "lable": "灵川县"
                    },
                    {
                        "value": "873",
                        "lable": "全州县"
                    },
                    {
                        "value": "874",
                        "lable": "平乐县"
                    },
                    {
                        "value": "875",
                        "lable": "兴安县"
                    },
                    {
                        "value": "876",
                        "lable": "灌阳县"
                    },
                    {
                        "value": "877",
                        "lable": "荔浦县"
                    },
                    {
                        "value": "878",
                        "lable": "资源县"
                    },
                    {
                        "value": "879",
                        "lable": "永福县"
                    },
                    {
                        "value": "880",
                        "lable": "龙胜"
                    },
                    {
                        "value": "881",
                        "lable": "恭城"
                    }
                ]
            },
            {
                "value": "99",
                "lable": "百色",
                "children": [
                    {
                        "value": "882",
                        "lable": "右江区"
                    },
                    {
                        "value": "883",
                        "lable": "凌云县"
                    },
                    {
                        "value": "884",
                        "lable": "平果县"
                    },
                    {
                        "value": "885",
                        "lable": "西林县"
                    },
                    {
                        "value": "886",
                        "lable": "乐业县"
                    },
                    {
                        "value": "887",
                        "lable": "德保县"
                    },
                    {
                        "value": "888",
                        "lable": "田林县"
                    },
                    {
                        "value": "889",
                        "lable": "田阳县"
                    },
                    {
                        "value": "890",
                        "lable": "靖西县"
                    },
                    {
                        "value": "891",
                        "lable": "田东县"
                    },
                    {
                        "value": "892",
                        "lable": "那坡县"
                    },
                    {
                        "value": "893",
                        "lable": "隆林"
                    }
                ]
            },
            {
                "value": "100",
                "lable": "北海",
                "children": [
                    {
                        "value": "894",
                        "lable": "海城区"
                    },
                    {
                        "value": "895",
                        "lable": "银海区"
                    },
                    {
                        "value": "896",
                        "lable": "铁山港区"
                    },
                    {
                        "value": "897",
                        "lable": "合浦县"
                    }
                ]
            },
            {
                "value": "101",
                "lable": "崇左",
                "children": [
                    {
                        "value": "898",
                        "lable": "江州区"
                    },
                    {
                        "value": "899",
                        "lable": "凭祥市"
                    },
                    {
                        "value": "900",
                        "lable": "宁明县"
                    },
                    {
                        "value": "901",
                        "lable": "扶绥县"
                    },
                    {
                        "value": "902",
                        "lable": "龙州县"
                    },
                    {
                        "value": "903",
                        "lable": "大新县"
                    },
                    {
                        "value": "904",
                        "lable": "天等县"
                    }
                ]
            },
            {
                "value": "102",
                "lable": "防城港",
                "children": [
                    {
                        "value": "905",
                        "lable": "港口区"
                    },
                    {
                        "value": "906",
                        "lable": "防城区"
                    },
                    {
                        "value": "907",
                        "lable": "东兴市"
                    },
                    {
                        "value": "908",
                        "lable": "上思县"
                    }
                ]
            },
            {
                "value": "103",
                "lable": "贵港",
                "children": [
                    {
                        "value": "909",
                        "lable": "港北区"
                    },
                    {
                        "value": "910",
                        "lable": "港南区"
                    },
                    {
                        "value": "911",
                        "lable": "覃塘区"
                    },
                    {
                        "value": "912",
                        "lable": "桂平市"
                    },
                    {
                        "value": "913",
                        "lable": "平南县"
                    }
                ]
            },
            {
                "value": "104",
                "lable": "河池",
                "children": [
                    {
                        "value": "914",
                        "lable": "金城江区"
                    },
                    {
                        "value": "915",
                        "lable": "宜州市"
                    },
                    {
                        "value": "916",
                        "lable": "天峨县"
                    },
                    {
                        "value": "917",
                        "lable": "凤山县"
                    },
                    {
                        "value": "918",
                        "lable": "南丹县"
                    },
                    {
                        "value": "919",
                        "lable": "东兰县"
                    },
                    {
                        "value": "920",
                        "lable": "都安"
                    },
                    {
                        "value": "921",
                        "lable": "罗城"
                    },
                    {
                        "value": "922",
                        "lable": "巴马"
                    },
                    {
                        "value": "923",
                        "lable": "环江"
                    },
                    {
                        "value": "924",
                        "lable": "大化"
                    }
                ]
            },
            {
                "value": "105",
                "lable": "贺州",
                "children": [
                    {
                        "value": "925",
                        "lable": "八步区"
                    },
                    {
                        "value": "926",
                        "lable": "钟山县"
                    },
                    {
                        "value": "927",
                        "lable": "昭平县"
                    },
                    {
                        "value": "928",
                        "lable": "富川"
                    }
                ]
            },
            {
                "value": "106",
                "lable": "来宾",
                "children": [
                    {
                        "value": "929",
                        "lable": "兴宾区"
                    },
                    {
                        "value": "930",
                        "lable": "合山市"
                    },
                    {
                        "value": "931",
                        "lable": "象州县"
                    },
                    {
                        "value": "932",
                        "lable": "武宣县"
                    },
                    {
                        "value": "933",
                        "lable": "忻城县"
                    },
                    {
                        "value": "934",
                        "lable": "金秀"
                    }
                ]
            },
            {
                "value": "107",
                "lable": "柳州",
                "children": [
                    {
                        "value": "935",
                        "lable": "城中区"
                    },
                    {
                        "value": "936",
                        "lable": "鱼峰区"
                    },
                    {
                        "value": "937",
                        "lable": "柳北区"
                    },
                    {
                        "value": "938",
                        "lable": "柳南区"
                    },
                    {
                        "value": "939",
                        "lable": "柳江县"
                    },
                    {
                        "value": "940",
                        "lable": "柳城县"
                    },
                    {
                        "value": "941",
                        "lable": "鹿寨县"
                    },
                    {
                        "value": "942",
                        "lable": "融安县"
                    },
                    {
                        "value": "943",
                        "lable": "融水"
                    },
                    {
                        "value": "944",
                        "lable": "三江"
                    }
                ]
            },
            {
                "value": "108",
                "lable": "钦州",
                "children": [
                    {
                        "value": "945",
                        "lable": "钦南区"
                    },
                    {
                        "value": "946",
                        "lable": "钦北区"
                    },
                    {
                        "value": "947",
                        "lable": "灵山县"
                    },
                    {
                        "value": "948",
                        "lable": "浦北县"
                    }
                ]
            },
            {
                "value": "109",
                "lable": "梧州",
                "children": [
                    {
                        "value": "949",
                        "lable": "万秀区"
                    },
                    {
                        "value": "950",
                        "lable": "蝶山区"
                    },
                    {
                        "value": "951",
                        "lable": "长洲区"
                    },
                    {
                        "value": "952",
                        "lable": "岑溪市"
                    },
                    {
                        "value": "953",
                        "lable": "苍梧县"
                    },
                    {
                        "value": "954",
                        "lable": "藤县"
                    },
                    {
                        "value": "955",
                        "lable": "蒙山县"
                    }
                ]
            },
            {
                "value": "110",
                "lable": "玉林",
                "children": [
                    {
                        "value": "956",
                        "lable": "玉州区"
                    },
                    {
                        "value": "957",
                        "lable": "北流市"
                    },
                    {
                        "value": "958",
                        "lable": "容县"
                    },
                    {
                        "value": "959",
                        "lable": "陆川县"
                    },
                    {
                        "value": "960",
                        "lable": "博白县"
                    },
                    {
                        "value": "961",
                        "lable": "兴业县"
                    }
                ]
            }
        ]
    },
    {
        "value": "8",
        "lable": "贵州",
        "children": [
            {
                "value": "111",
                "lable": "贵阳",
                "children": [
                    {
                        "value": "962",
                        "lable": "南明区"
                    },
                    {
                        "value": "963",
                        "lable": "云岩区"
                    },
                    {
                        "value": "964",
                        "lable": "花溪区"
                    },
                    {
                        "value": "965",
                        "lable": "乌当区"
                    },
                    {
                        "value": "966",
                        "lable": "白云区"
                    },
                    {
                        "value": "967",
                        "lable": "小河区"
                    },
                    {
                        "value": "968",
                        "lable": "金阳新区"
                    },
                    {
                        "value": "969",
                        "lable": "新天园区"
                    },
                    {
                        "value": "970",
                        "lable": "清镇市"
                    },
                    {
                        "value": "971",
                        "lable": "开阳县"
                    },
                    {
                        "value": "972",
                        "lable": "修文县"
                    },
                    {
                        "value": "973",
                        "lable": "息烽县"
                    }
                ]
            },
            {
                "value": "112",
                "lable": "安顺",
                "children": [
                    {
                        "value": "974",
                        "lable": "西秀区"
                    },
                    {
                        "value": "975",
                        "lable": "关岭"
                    },
                    {
                        "value": "976",
                        "lable": "镇宁"
                    },
                    {
                        "value": "977",
                        "lable": "紫云"
                    },
                    {
                        "value": "978",
                        "lable": "平坝县"
                    },
                    {
                        "value": "979",
                        "lable": "普定县"
                    }
                ]
            },
            {
                "value": "113",
                "lable": "毕节",
                "children": [
                    {
                        "value": "980",
                        "lable": "毕节市"
                    },
                    {
                        "value": "981",
                        "lable": "大方县"
                    },
                    {
                        "value": "982",
                        "lable": "黔西县"
                    },
                    {
                        "value": "983",
                        "lable": "金沙县"
                    },
                    {
                        "value": "984",
                        "lable": "织金县"
                    },
                    {
                        "value": "985",
                        "lable": "纳雍县"
                    },
                    {
                        "value": "986",
                        "lable": "赫章县"
                    },
                    {
                        "value": "987",
                        "lable": "威宁"
                    }
                ]
            },
            {
                "value": "114",
                "lable": "六盘水",
                "children": [
                    {
                        "value": "988",
                        "lable": "钟山区"
                    },
                    {
                        "value": "989",
                        "lable": "六枝特区"
                    },
                    {
                        "value": "990",
                        "lable": "水城县"
                    },
                    {
                        "value": "991",
                        "lable": "盘县"
                    }
                ]
            },
            {
                "value": "115",
                "lable": "黔东南",
                "children": [
                    {
                        "value": "992",
                        "lable": "凯里市"
                    },
                    {
                        "value": "993",
                        "lable": "黄平县"
                    },
                    {
                        "value": "994",
                        "lable": "施秉县"
                    },
                    {
                        "value": "995",
                        "lable": "三穗县"
                    },
                    {
                        "value": "996",
                        "lable": "镇远县"
                    },
                    {
                        "value": "997",
                        "lable": "岑巩县"
                    },
                    {
                        "value": "998",
                        "lable": "天柱县"
                    },
                    {
                        "value": "999",
                        "lable": "锦屏县"
                    },
                    {
                        "value": "1000",
                        "lable": "剑河县"
                    },
                    {
                        "value": "1001",
                        "lable": "台江县"
                    },
                    {
                        "value": "1002",
                        "lable": "黎平县"
                    },
                    {
                        "value": "1003",
                        "lable": "榕江县"
                    },
                    {
                        "value": "1004",
                        "lable": "从江县"
                    },
                    {
                        "value": "1005",
                        "lable": "雷山县"
                    },
                    {
                        "value": "1006",
                        "lable": "麻江县"
                    },
                    {
                        "value": "1007",
                        "lable": "丹寨县"
                    }
                ]
            },
            {
                "value": "116",
                "lable": "黔南",
                "children": [
                    {
                        "value": "1008",
                        "lable": "都匀市"
                    },
                    {
                        "value": "1009",
                        "lable": "福泉市"
                    },
                    {
                        "value": "1010",
                        "lable": "荔波县"
                    },
                    {
                        "value": "1011",
                        "lable": "贵定县"
                    },
                    {
                        "value": "1012",
                        "lable": "瓮安县"
                    },
                    {
                        "value": "1013",
                        "lable": "独山县"
                    },
                    {
                        "value": "1014",
                        "lable": "平塘县"
                    },
                    {
                        "value": "1015",
                        "lable": "罗甸县"
                    },
                    {
                        "value": "1016",
                        "lable": "长顺县"
                    },
                    {
                        "value": "1017",
                        "lable": "龙里县"
                    },
                    {
                        "value": "1018",
                        "lable": "惠水县"
                    },
                    {
                        "value": "1019",
                        "lable": "三都"
                    }
                ]
            },
            {
                "value": "117",
                "lable": "黔西南",
                "children": [
                    {
                        "value": "1020",
                        "lable": "兴义市"
                    },
                    {
                        "value": "1021",
                        "lable": "兴仁县"
                    },
                    {
                        "value": "1022",
                        "lable": "普安县"
                    },
                    {
                        "value": "1023",
                        "lable": "晴隆县"
                    },
                    {
                        "value": "1024",
                        "lable": "贞丰县"
                    },
                    {
                        "value": "1025",
                        "lable": "望谟县"
                    },
                    {
                        "value": "1026",
                        "lable": "册亨县"
                    },
                    {
                        "value": "1027",
                        "lable": "安龙县"
                    }
                ]
            },
            {
                "value": "118",
                "lable": "铜仁",
                "children": [
                    {
                        "value": "1028",
                        "lable": "铜仁市"
                    },
                    {
                        "value": "1029",
                        "lable": "江口县"
                    },
                    {
                        "value": "1030",
                        "lable": "石阡县"
                    },
                    {
                        "value": "1031",
                        "lable": "思南县"
                    },
                    {
                        "value": "1032",
                        "lable": "德江县"
                    },
                    {
                        "value": "1033",
                        "lable": "玉屏"
                    },
                    {
                        "value": "1034",
                        "lable": "印江"
                    },
                    {
                        "value": "1035",
                        "lable": "沿河"
                    },
                    {
                        "value": "1036",
                        "lable": "松桃"
                    },
                    {
                        "value": "1037",
                        "lable": "万山特区"
                    }
                ]
            },
            {
                "value": "119",
                "lable": "遵义",
                "children": [
                    {
                        "value": "1038",
                        "lable": "红花岗区"
                    },
                    {
                        "value": "1039",
                        "lable": "务川县"
                    },
                    {
                        "value": "1040",
                        "lable": "道真县"
                    },
                    {
                        "value": "1041",
                        "lable": "汇川区"
                    },
                    {
                        "value": "1042",
                        "lable": "赤水市"
                    },
                    {
                        "value": "1043",
                        "lable": "仁怀市"
                    },
                    {
                        "value": "1044",
                        "lable": "遵义县"
                    },
                    {
                        "value": "1045",
                        "lable": "桐梓县"
                    },
                    {
                        "value": "1046",
                        "lable": "绥阳县"
                    },
                    {
                        "value": "1047",
                        "lable": "正安县"
                    },
                    {
                        "value": "1048",
                        "lable": "凤冈县"
                    },
                    {
                        "value": "1049",
                        "lable": "湄潭县"
                    },
                    {
                        "value": "1050",
                        "lable": "余庆县"
                    },
                    {
                        "value": "1051",
                        "lable": "习水县"
                    },
                    {
                        "value": "1052",
                        "lable": "道真"
                    },
                    {
                        "value": "1053",
                        "lable": "务川"
                    }
                ]
            }
        ]
    },
    {
        "value": "9",
        "lable": "海南",
        "children": [
            {
                "value": "120",
                "lable": "海口",
                "children": [
                    {
                        "value": "1054",
                        "lable": "秀英区"
                    },
                    {
                        "value": "1055",
                        "lable": "龙华区"
                    },
                    {
                        "value": "1056",
                        "lable": "琼山区"
                    },
                    {
                        "value": "1057",
                        "lable": "美兰区"
                    }
                ]
            },
            {
                "value": "121",
                "lable": "三亚",
                "children": null
            },
            {
                "value": "122",
                "lable": "白沙",
                "children": null
            },
            {
                "value": "123",
                "lable": "保亭",
                "children": null
            },
            {
                "value": "124",
                "lable": "昌江",
                "children": null
            },
            {
                "value": "125",
                "lable": "澄迈县",
                "children": null
            },
            {
                "value": "126",
                "lable": "定安县",
                "children": null
            },
            {
                "value": "127",
                "lable": "东方",
                "children": null
            },
            {
                "value": "128",
                "lable": "乐东",
                "children": null
            },
            {
                "value": "129",
                "lable": "临高县",
                "children": null
            },
            {
                "value": "130",
                "lable": "陵水",
                "children": null
            },
            {
                "value": "131",
                "lable": "琼海",
                "children": null
            },
            {
                "value": "132",
                "lable": "琼中",
                "children": null
            },
            {
                "value": "133",
                "lable": "屯昌县",
                "children": null
            },
            {
                "value": "134",
                "lable": "万宁",
                "children": null
            },
            {
                "value": "135",
                "lable": "文昌",
                "children": null
            },
            {
                "value": "136",
                "lable": "五指山",
                "children": null
            },
            {
                "value": "137",
                "lable": "儋州",
                "children": [
                    {
                        "value": "1058",
                        "lable": "市区"
                    },
                    {
                        "value": "1059",
                        "lable": "洋浦开发区"
                    },
                    {
                        "value": "1060",
                        "lable": "那大镇"
                    },
                    {
                        "value": "1061",
                        "lable": "王五镇"
                    },
                    {
                        "value": "1062",
                        "lable": "雅星镇"
                    },
                    {
                        "value": "1063",
                        "lable": "大成镇"
                    },
                    {
                        "value": "1064",
                        "lable": "中和镇"
                    },
                    {
                        "value": "1065",
                        "lable": "峨蔓镇"
                    },
                    {
                        "value": "1066",
                        "lable": "南丰镇"
                    },
                    {
                        "value": "1067",
                        "lable": "白马井镇"
                    },
                    {
                        "value": "1068",
                        "lable": "兰洋镇"
                    },
                    {
                        "value": "1069",
                        "lable": "和庆镇"
                    },
                    {
                        "value": "1070",
                        "lable": "海头镇"
                    },
                    {
                        "value": "1071",
                        "lable": "排浦镇"
                    },
                    {
                        "value": "1072",
                        "lable": "东成镇"
                    },
                    {
                        "value": "1073",
                        "lable": "光村镇"
                    },
                    {
                        "value": "1074",
                        "lable": "木棠镇"
                    },
                    {
                        "value": "1075",
                        "lable": "新州镇"
                    },
                    {
                        "value": "1076",
                        "lable": "三都镇"
                    },
                    {
                        "value": "1077",
                        "lable": "其他"
                    }
                ]
            }
        ]
    },
    {
        "value": "10",
        "lable": "河北",
        "children": [
            {
                "value": "138",
                "lable": "石家庄",
                "children": [
                    {
                        "value": "1078",
                        "lable": "长安区"
                    },
                    {
                        "value": "1079",
                        "lable": "桥东区"
                    },
                    {
                        "value": "1080",
                        "lable": "桥西区"
                    },
                    {
                        "value": "1081",
                        "lable": "新华区"
                    },
                    {
                        "value": "1082",
                        "lable": "裕华区"
                    },
                    {
                        "value": "1083",
                        "lable": "井陉矿区"
                    },
                    {
                        "value": "1084",
                        "lable": "高新区"
                    },
                    {
                        "value": "1085",
                        "lable": "辛集市"
                    },
                    {
                        "value": "1086",
                        "lable": "藁城市"
                    },
                    {
                        "value": "1087",
                        "lable": "晋州市"
                    },
                    {
                        "value": "1088",
                        "lable": "新乐市"
                    },
                    {
                        "value": "1089",
                        "lable": "鹿泉市"
                    },
                    {
                        "value": "1090",
                        "lable": "井陉县"
                    },
                    {
                        "value": "1091",
                        "lable": "正定县"
                    },
                    {
                        "value": "1092",
                        "lable": "栾城县"
                    },
                    {
                        "value": "1093",
                        "lable": "行唐县"
                    },
                    {
                        "value": "1094",
                        "lable": "灵寿县"
                    },
                    {
                        "value": "1095",
                        "lable": "高邑县"
                    },
                    {
                        "value": "1096",
                        "lable": "深泽县"
                    },
                    {
                        "value": "1097",
                        "lable": "赞皇县"
                    },
                    {
                        "value": "1098",
                        "lable": "无极县"
                    },
                    {
                        "value": "1099",
                        "lable": "平山县"
                    },
                    {
                        "value": "1100",
                        "lable": "元氏县"
                    },
                    {
                        "value": "1101",
                        "lable": "赵县"
                    }
                ]
            },
            {
                "value": "139",
                "lable": "保定",
                "children": [
                    {
                        "value": "1102",
                        "lable": "新市区"
                    },
                    {
                        "value": "1103",
                        "lable": "南市区"
                    },
                    {
                        "value": "1104",
                        "lable": "北市区"
                    },
                    {
                        "value": "1105",
                        "lable": "涿州市"
                    },
                    {
                        "value": "1106",
                        "lable": "定州市"
                    },
                    {
                        "value": "1107",
                        "lable": "安国市"
                    },
                    {
                        "value": "1108",
                        "lable": "高碑店市"
                    },
                    {
                        "value": "1109",
                        "lable": "满城县"
                    },
                    {
                        "value": "1110",
                        "lable": "清苑县"
                    },
                    {
                        "value": "1111",
                        "lable": "涞水县"
                    },
                    {
                        "value": "1112",
                        "lable": "阜平县"
                    },
                    {
                        "value": "1113",
                        "lable": "徐水县"
                    },
                    {
                        "value": "1114",
                        "lable": "定兴县"
                    },
                    {
                        "value": "1115",
                        "lable": "唐县"
                    },
                    {
                        "value": "1116",
                        "lable": "高阳县"
                    },
                    {
                        "value": "1117",
                        "lable": "容城县"
                    },
                    {
                        "value": "1118",
                        "lable": "涞源县"
                    },
                    {
                        "value": "1119",
                        "lable": "望都县"
                    },
                    {
                        "value": "1120",
                        "lable": "安新县"
                    },
                    {
                        "value": "1121",
                        "lable": "易县"
                    },
                    {
                        "value": "1122",
                        "lable": "曲阳县"
                    },
                    {
                        "value": "1123",
                        "lable": "蠡县"
                    },
                    {
                        "value": "1124",
                        "lable": "顺平县"
                    },
                    {
                        "value": "1125",
                        "lable": "博野县"
                    },
                    {
                        "value": "1126",
                        "lable": "雄县"
                    }
                ]
            },
            {
                "value": "140",
                "lable": "沧州",
                "children": [
                    {
                        "value": "1127",
                        "lable": "运河区"
                    },
                    {
                        "value": "1128",
                        "lable": "新华区"
                    },
                    {
                        "value": "1129",
                        "lable": "泊头市"
                    },
                    {
                        "value": "1130",
                        "lable": "任丘市"
                    },
                    {
                        "value": "1131",
                        "lable": "黄骅市"
                    },
                    {
                        "value": "1132",
                        "lable": "河间市"
                    },
                    {
                        "value": "1133",
                        "lable": "沧县"
                    },
                    {
                        "value": "1134",
                        "lable": "青县"
                    },
                    {
                        "value": "1135",
                        "lable": "东光县"
                    },
                    {
                        "value": "1136",
                        "lable": "海兴县"
                    },
                    {
                        "value": "1137",
                        "lable": "盐山县"
                    },
                    {
                        "value": "1138",
                        "lable": "肃宁县"
                    },
                    {
                        "value": "1139",
                        "lable": "南皮县"
                    },
                    {
                        "value": "1140",
                        "lable": "吴桥县"
                    },
                    {
                        "value": "1141",
                        "lable": "献县"
                    },
                    {
                        "value": "1142",
                        "lable": "孟村"
                    }
                ]
            },
            {
                "value": "141",
                "lable": "承德",
                "children": [
                    {
                        "value": "1143",
                        "lable": "双桥区"
                    },
                    {
                        "value": "1144",
                        "lable": "双滦区"
                    },
                    {
                        "value": "1145",
                        "lable": "鹰手营子矿区"
                    },
                    {
                        "value": "1146",
                        "lable": "承德县"
                    },
                    {
                        "value": "1147",
                        "lable": "兴隆县"
                    },
                    {
                        "value": "1148",
                        "lable": "平泉县"
                    },
                    {
                        "value": "1149",
                        "lable": "滦平县"
                    },
                    {
                        "value": "1150",
                        "lable": "隆化县"
                    },
                    {
                        "value": "1151",
                        "lable": "丰宁"
                    },
                    {
                        "value": "1152",
                        "lable": "宽城"
                    },
                    {
                        "value": "1153",
                        "lable": "围场"
                    }
                ]
            },
            {
                "value": "142",
                "lable": "邯郸",
                "children": [
                    {
                        "value": "1154",
                        "lable": "从台区"
                    },
                    {
                        "value": "1155",
                        "lable": "复兴区"
                    },
                    {
                        "value": "1156",
                        "lable": "邯山区"
                    },
                    {
                        "value": "1157",
                        "lable": "峰峰矿区"
                    },
                    {
                        "value": "1158",
                        "lable": "武安市"
                    },
                    {
                        "value": "1159",
                        "lable": "邯郸县"
                    },
                    {
                        "value": "1160",
                        "lable": "临漳县"
                    },
                    {
                        "value": "1161",
                        "lable": "成安县"
                    },
                    {
                        "value": "1162",
                        "lable": "大名县"
                    },
                    {
                        "value": "1163",
                        "lable": "涉县"
                    },
                    {
                        "value": "1164",
                        "lable": "磁县"
                    },
                    {
                        "value": "1165",
                        "lable": "肥乡县"
                    },
                    {
                        "value": "1166",
                        "lable": "永年县"
                    },
                    {
                        "value": "1167",
                        "lable": "邱县"
                    },
                    {
                        "value": "1168",
                        "lable": "鸡泽县"
                    },
                    {
                        "value": "1169",
                        "lable": "广平县"
                    },
                    {
                        "value": "1170",
                        "lable": "馆陶县"
                    },
                    {
                        "value": "1171",
                        "lable": "魏县"
                    },
                    {
                        "value": "1172",
                        "lable": "曲周县"
                    }
                ]
            },
            {
                "value": "143",
                "lable": "衡水",
                "children": [
                    {
                        "value": "1173",
                        "lable": "桃城区"
                    },
                    {
                        "value": "1174",
                        "lable": "冀州市"
                    },
                    {
                        "value": "1175",
                        "lable": "深州市"
                    },
                    {
                        "value": "1176",
                        "lable": "枣强县"
                    },
                    {
                        "value": "1177",
                        "lable": "武邑县"
                    },
                    {
                        "value": "1178",
                        "lable": "武强县"
                    },
                    {
                        "value": "1179",
                        "lable": "饶阳县"
                    },
                    {
                        "value": "1180",
                        "lable": "安平县"
                    },
                    {
                        "value": "1181",
                        "lable": "故城县"
                    },
                    {
                        "value": "1182",
                        "lable": "景县"
                    },
                    {
                        "value": "1183",
                        "lable": "阜城县"
                    }
                ]
            },
            {
                "value": "144",
                "lable": "廊坊",
                "children": [
                    {
                        "value": "1184",
                        "lable": "安次区"
                    },
                    {
                        "value": "1185",
                        "lable": "广阳区"
                    },
                    {
                        "value": "1186",
                        "lable": "霸州市"
                    },
                    {
                        "value": "1187",
                        "lable": "三河市"
                    },
                    {
                        "value": "1188",
                        "lable": "固安县"
                    },
                    {
                        "value": "1189",
                        "lable": "永清县"
                    },
                    {
                        "value": "1190",
                        "lable": "香河县"
                    },
                    {
                        "value": "1191",
                        "lable": "大城县"
                    },
                    {
                        "value": "1192",
                        "lable": "文安县"
                    },
                    {
                        "value": "1193",
                        "lable": "大厂"
                    }
                ]
            },
            {
                "value": "145",
                "lable": "秦皇岛",
                "children": [
                    {
                        "value": "1194",
                        "lable": "海港区"
                    },
                    {
                        "value": "1195",
                        "lable": "山海关区"
                    },
                    {
                        "value": "1196",
                        "lable": "北戴河区"
                    },
                    {
                        "value": "1197",
                        "lable": "昌黎县"
                    },
                    {
                        "value": "1198",
                        "lable": "抚宁县"
                    },
                    {
                        "value": "1199",
                        "lable": "卢龙县"
                    },
                    {
                        "value": "1200",
                        "lable": "青龙县"
                    },
                    {
                        "value": "3409",
                        "lable": "南戴河"
                    },
                    {
                        "value": "3410",
                        "lable": "开发区"
                    }
                ]
            },
            {
                "value": "146",
                "lable": "唐山",
                "children": [
                    {
                        "value": "1201",
                        "lable": "路北区"
                    },
                    {
                        "value": "1202",
                        "lable": "路南区"
                    },
                    {
                        "value": "1203",
                        "lable": "古冶区"
                    },
                    {
                        "value": "1204",
                        "lable": "开平区"
                    },
                    {
                        "value": "1205",
                        "lable": "丰南区"
                    },
                    {
                        "value": "1206",
                        "lable": "丰润区"
                    },
                    {
                        "value": "1207",
                        "lable": "遵化市"
                    },
                    {
                        "value": "1208",
                        "lable": "迁安市"
                    },
                    {
                        "value": "1209",
                        "lable": "滦县"
                    },
                    {
                        "value": "1210",
                        "lable": "滦南县"
                    },
                    {
                        "value": "1211",
                        "lable": "乐亭县"
                    },
                    {
                        "value": "1212",
                        "lable": "迁西县"
                    },
                    {
                        "value": "1213",
                        "lable": "玉田县"
                    },
                    {
                        "value": "1214",
                        "lable": "唐海县"
                    }
                ]
            },
            {
                "value": "147",
                "lable": "邢台",
                "children": [
                    {
                        "value": "1215",
                        "lable": "桥东区"
                    },
                    {
                        "value": "1216",
                        "lable": "桥西区"
                    },
                    {
                        "value": "1217",
                        "lable": "南宫市"
                    },
                    {
                        "value": "1218",
                        "lable": "沙河市"
                    },
                    {
                        "value": "1219",
                        "lable": "邢台县"
                    },
                    {
                        "value": "1220",
                        "lable": "临城县"
                    },
                    {
                        "value": "1221",
                        "lable": "内丘县"
                    },
                    {
                        "value": "1222",
                        "lable": "柏乡县"
                    },
                    {
                        "value": "1223",
                        "lable": "隆尧县"
                    },
                    {
                        "value": "1224",
                        "lable": "任县"
                    },
                    {
                        "value": "1225",
                        "lable": "南和县"
                    },
                    {
                        "value": "1226",
                        "lable": "宁晋县"
                    },
                    {
                        "value": "1227",
                        "lable": "巨鹿县"
                    },
                    {
                        "value": "1228",
                        "lable": "新河县"
                    },
                    {
                        "value": "1229",
                        "lable": "广宗县"
                    },
                    {
                        "value": "1230",
                        "lable": "平乡县"
                    },
                    {
                        "value": "1231",
                        "lable": "威县"
                    },
                    {
                        "value": "1232",
                        "lable": "清河县"
                    },
                    {
                        "value": "1233",
                        "lable": "临西县"
                    }
                ]
            },
            {
                "value": "148",
                "lable": "张家口",
                "children": [
                    {
                        "value": "1234",
                        "lable": "桥西区"
                    },
                    {
                        "value": "1235",
                        "lable": "桥东区"
                    },
                    {
                        "value": "1236",
                        "lable": "宣化区"
                    },
                    {
                        "value": "1237",
                        "lable": "下花园区"
                    },
                    {
                        "value": "1238",
                        "lable": "宣化县"
                    },
                    {
                        "value": "1239",
                        "lable": "张北县"
                    },
                    {
                        "value": "1240",
                        "lable": "康保县"
                    },
                    {
                        "value": "1241",
                        "lable": "沽源县"
                    },
                    {
                        "value": "1242",
                        "lable": "尚义县"
                    },
                    {
                        "value": "1243",
                        "lable": "蔚县"
                    },
                    {
                        "value": "1244",
                        "lable": "阳原县"
                    },
                    {
                        "value": "1245",
                        "lable": "怀安县"
                    },
                    {
                        "value": "1246",
                        "lable": "万全县"
                    },
                    {
                        "value": "1247",
                        "lable": "怀来县"
                    },
                    {
                        "value": "1248",
                        "lable": "涿鹿县"
                    },
                    {
                        "value": "1249",
                        "lable": "赤城县"
                    },
                    {
                        "value": "1250",
                        "lable": "崇礼县"
                    }
                ]
            }
        ]
    },
    {
        "value": "11",
        "lable": "河南",
        "children": [
            {
                "value": "149",
                "lable": "郑州",
                "children": [
                    {
                        "value": "1251",
                        "lable": "金水区"
                    },
                    {
                        "value": "1252",
                        "lable": "邙山区"
                    },
                    {
                        "value": "1253",
                        "lable": "二七区"
                    },
                    {
                        "value": "1254",
                        "lable": "管城区"
                    },
                    {
                        "value": "1255",
                        "lable": "中原区"
                    },
                    {
                        "value": "1256",
                        "lable": "上街区"
                    },
                    {
                        "value": "1257",
                        "lable": "惠济区"
                    },
                    {
                        "value": "1258",
                        "lable": "郑东新区"
                    },
                    {
                        "value": "1259",
                        "lable": "经济技术开发区"
                    },
                    {
                        "value": "1260",
                        "lable": "高新开发区"
                    },
                    {
                        "value": "1261",
                        "lable": "出口加工区"
                    },
                    {
                        "value": "1262",
                        "lable": "巩义市"
                    },
                    {
                        "value": "1263",
                        "lable": "荥阳市"
                    },
                    {
                        "value": "1264",
                        "lable": "新密市"
                    },
                    {
                        "value": "1265",
                        "lable": "新郑市"
                    },
                    {
                        "value": "1266",
                        "lable": "登封市"
                    },
                    {
                        "value": "1267",
                        "lable": "中牟县"
                    }
                ]
            },
            {
                "value": "150",
                "lable": "洛阳",
                "children": [
                    {
                        "value": "1268",
                        "lable": "西工区"
                    },
                    {
                        "value": "1269",
                        "lable": "老城区"
                    },
                    {
                        "value": "1270",
                        "lable": "涧西区"
                    },
                    {
                        "value": "1271",
                        "lable": "瀍河回族区"
                    },
                    {
                        "value": "1272",
                        "lable": "洛龙区"
                    },
                    {
                        "value": "1273",
                        "lable": "吉利区"
                    },
                    {
                        "value": "1274",
                        "lable": "偃师市"
                    },
                    {
                        "value": "1275",
                        "lable": "孟津县"
                    },
                    {
                        "value": "1276",
                        "lable": "新安县"
                    },
                    {
                        "value": "1277",
                        "lable": "栾川县"
                    },
                    {
                        "value": "1278",
                        "lable": "嵩县"
                    },
                    {
                        "value": "1279",
                        "lable": "汝阳县"
                    },
                    {
                        "value": "1280",
                        "lable": "宜阳县"
                    },
                    {
                        "value": "1281",
                        "lable": "洛宁县"
                    },
                    {
                        "value": "1282",
                        "lable": "伊川县"
                    }
                ]
            },
            {
                "value": "151",
                "lable": "开封",
                "children": [
                    {
                        "value": "1283",
                        "lable": "鼓楼区"
                    },
                    {
                        "value": "1284",
                        "lable": "龙亭区"
                    },
                    {
                        "value": "1285",
                        "lable": "顺河回族区"
                    },
                    {
                        "value": "1286",
                        "lable": "金明区"
                    },
                    {
                        "value": "1287",
                        "lable": "禹王台区"
                    },
                    {
                        "value": "1288",
                        "lable": "杞县"
                    },
                    {
                        "value": "1289",
                        "lable": "通许县"
                    },
                    {
                        "value": "1290",
                        "lable": "尉氏县"
                    },
                    {
                        "value": "1291",
                        "lable": "开封县"
                    },
                    {
                        "value": "1292",
                        "lable": "兰考县"
                    }
                ]
            },
            {
                "value": "152",
                "lable": "安阳",
                "children": [
                    {
                        "value": "1293",
                        "lable": "北关区"
                    },
                    {
                        "value": "1294",
                        "lable": "文峰区"
                    },
                    {
                        "value": "1295",
                        "lable": "殷都区"
                    },
                    {
                        "value": "1296",
                        "lable": "龙安区"
                    },
                    {
                        "value": "1297",
                        "lable": "林州市"
                    },
                    {
                        "value": "1298",
                        "lable": "安阳县"
                    },
                    {
                        "value": "1299",
                        "lable": "汤阴县"
                    },
                    {
                        "value": "1300",
                        "lable": "滑县"
                    },
                    {
                        "value": "1301",
                        "lable": "内黄县"
                    }
                ]
            },
            {
                "value": "153",
                "lable": "鹤壁",
                "children": [
                    {
                        "value": "1302",
                        "lable": "淇滨区"
                    },
                    {
                        "value": "1303",
                        "lable": "山城区"
                    },
                    {
                        "value": "1304",
                        "lable": "鹤山区"
                    },
                    {
                        "value": "1305",
                        "lable": "浚县"
                    },
                    {
                        "value": "1306",
                        "lable": "淇县"
                    }
                ]
            },
            {
                "value": "154",
                "lable": "济源",
                "children": [
                    {
                        "value": "1307",
                        "lable": "济源市"
                    }
                ]
            },
            {
                "value": "155",
                "lable": "焦作",
                "children": [
                    {
                        "value": "1308",
                        "lable": "解放区"
                    },
                    {
                        "value": "1309",
                        "lable": "中站区"
                    },
                    {
                        "value": "1310",
                        "lable": "马村区"
                    },
                    {
                        "value": "1311",
                        "lable": "山阳区"
                    },
                    {
                        "value": "1312",
                        "lable": "沁阳市"
                    },
                    {
                        "value": "1313",
                        "lable": "孟州市"
                    },
                    {
                        "value": "1314",
                        "lable": "修武县"
                    },
                    {
                        "value": "1315",
                        "lable": "博爱县"
                    },
                    {
                        "value": "1316",
                        "lable": "武陟县"
                    },
                    {
                        "value": "1317",
                        "lable": "温县"
                    }
                ]
            },
            {
                "value": "156",
                "lable": "南阳",
                "children": [
                    {
                        "value": "1318",
                        "lable": "卧龙区"
                    },
                    {
                        "value": "1319",
                        "lable": "宛城区"
                    },
                    {
                        "value": "1320",
                        "lable": "邓州市"
                    },
                    {
                        "value": "1321",
                        "lable": "南召县"
                    },
                    {
                        "value": "1322",
                        "lable": "方城县"
                    },
                    {
                        "value": "1323",
                        "lable": "西峡县"
                    },
                    {
                        "value": "1324",
                        "lable": "镇平县"
                    },
                    {
                        "value": "1325",
                        "lable": "内乡县"
                    },
                    {
                        "value": "1326",
                        "lable": "淅川县"
                    },
                    {
                        "value": "1327",
                        "lable": "社旗县"
                    },
                    {
                        "value": "1328",
                        "lable": "唐河县"
                    },
                    {
                        "value": "1329",
                        "lable": "新野县"
                    },
                    {
                        "value": "1330",
                        "lable": "桐柏县"
                    }
                ]
            },
            {
                "value": "157",
                "lable": "平顶山",
                "children": [
                    {
                        "value": "1331",
                        "lable": "新华区"
                    },
                    {
                        "value": "1332",
                        "lable": "卫东区"
                    },
                    {
                        "value": "1333",
                        "lable": "湛河区"
                    },
                    {
                        "value": "1334",
                        "lable": "石龙区"
                    },
                    {
                        "value": "1335",
                        "lable": "舞钢市"
                    },
                    {
                        "value": "1336",
                        "lable": "汝州市"
                    },
                    {
                        "value": "1337",
                        "lable": "宝丰县"
                    },
                    {
                        "value": "1338",
                        "lable": "叶县"
                    },
                    {
                        "value": "1339",
                        "lable": "鲁山县"
                    },
                    {
                        "value": "1340",
                        "lable": "郏县"
                    }
                ]
            },
            {
                "value": "158",
                "lable": "三门峡",
                "children": [
                    {
                        "value": "1341",
                        "lable": "湖滨区"
                    },
                    {
                        "value": "1342",
                        "lable": "义马市"
                    },
                    {
                        "value": "1343",
                        "lable": "灵宝市"
                    },
                    {
                        "value": "1344",
                        "lable": "渑池县"
                    },
                    {
                        "value": "1345",
                        "lable": "陕县"
                    },
                    {
                        "value": "1346",
                        "lable": "卢氏县"
                    }
                ]
            },
            {
                "value": "159",
                "lable": "商丘",
                "children": [
                    {
                        "value": "1347",
                        "lable": "梁园区"
                    },
                    {
                        "value": "1348",
                        "lable": "睢阳区"
                    },
                    {
                        "value": "1349",
                        "lable": "永城市"
                    },
                    {
                        "value": "1350",
                        "lable": "民权县"
                    },
                    {
                        "value": "1351",
                        "lable": "睢县"
                    },
                    {
                        "value": "1352",
                        "lable": "宁陵县"
                    },
                    {
                        "value": "1353",
                        "lable": "虞城县"
                    },
                    {
                        "value": "1354",
                        "lable": "柘城县"
                    },
                    {
                        "value": "1355",
                        "lable": "夏邑县"
                    }
                ]
            },
            {
                "value": "160",
                "lable": "新乡",
                "children": [
                    {
                        "value": "1356",
                        "lable": "卫滨区"
                    },
                    {
                        "value": "1357",
                        "lable": "红旗区"
                    },
                    {
                        "value": "1358",
                        "lable": "凤泉区"
                    },
                    {
                        "value": "1359",
                        "lable": "牧野区"
                    },
                    {
                        "value": "1360",
                        "lable": "卫辉市"
                    },
                    {
                        "value": "1361",
                        "lable": "辉县市"
                    },
                    {
                        "value": "1362",
                        "lable": "新乡县"
                    },
                    {
                        "value": "1363",
                        "lable": "获嘉县"
                    },
                    {
                        "value": "1364",
                        "lable": "原阳县"
                    },
                    {
                        "value": "1365",
                        "lable": "延津县"
                    },
                    {
                        "value": "1366",
                        "lable": "封丘县"
                    },
                    {
                        "value": "1367",
                        "lable": "长垣县"
                    }
                ]
            },
            {
                "value": "161",
                "lable": "信阳",
                "children": [
                    {
                        "value": "1368",
                        "lable": "浉河区"
                    },
                    {
                        "value": "1369",
                        "lable": "平桥区"
                    },
                    {
                        "value": "1370",
                        "lable": "罗山县"
                    },
                    {
                        "value": "1371",
                        "lable": "光山县"
                    },
                    {
                        "value": "1372",
                        "lable": "新县"
                    },
                    {
                        "value": "1373",
                        "lable": "商城县"
                    },
                    {
                        "value": "1374",
                        "lable": "固始县"
                    },
                    {
                        "value": "1375",
                        "lable": "潢川县"
                    },
                    {
                        "value": "1376",
                        "lable": "淮滨县"
                    },
                    {
                        "value": "1377",
                        "lable": "息县"
                    }
                ]
            },
            {
                "value": "162",
                "lable": "许昌",
                "children": [
                    {
                        "value": "1378",
                        "lable": "魏都区"
                    },
                    {
                        "value": "1379",
                        "lable": "禹州市"
                    },
                    {
                        "value": "1380",
                        "lable": "长葛市"
                    },
                    {
                        "value": "1381",
                        "lable": "许昌县"
                    },
                    {
                        "value": "1382",
                        "lable": "鄢陵县"
                    },
                    {
                        "value": "1383",
                        "lable": "襄城县"
                    }
                ]
            },
            {
                "value": "163",
                "lable": "周口",
                "children": [
                    {
                        "value": "1384",
                        "lable": "川汇区"
                    },
                    {
                        "value": "1385",
                        "lable": "项城市"
                    },
                    {
                        "value": "1386",
                        "lable": "扶沟县"
                    },
                    {
                        "value": "1387",
                        "lable": "西华县"
                    },
                    {
                        "value": "1388",
                        "lable": "商水县"
                    },
                    {
                        "value": "1389",
                        "lable": "沈丘县"
                    },
                    {
                        "value": "1390",
                        "lable": "郸城县"
                    },
                    {
                        "value": "1391",
                        "lable": "淮阳县"
                    },
                    {
                        "value": "1392",
                        "lable": "太康县"
                    },
                    {
                        "value": "1393",
                        "lable": "鹿邑县"
                    }
                ]
            },
            {
                "value": "164",
                "lable": "驻马店",
                "children": [
                    {
                        "value": "1394",
                        "lable": "驿城区"
                    },
                    {
                        "value": "1395",
                        "lable": "西平县"
                    },
                    {
                        "value": "1396",
                        "lable": "上蔡县"
                    },
                    {
                        "value": "1397",
                        "lable": "平舆县"
                    },
                    {
                        "value": "1398",
                        "lable": "正阳县"
                    },
                    {
                        "value": "1399",
                        "lable": "确山县"
                    },
                    {
                        "value": "1400",
                        "lable": "泌阳县"
                    },
                    {
                        "value": "1401",
                        "lable": "汝南县"
                    },
                    {
                        "value": "1402",
                        "lable": "遂平县"
                    },
                    {
                        "value": "1403",
                        "lable": "新蔡县"
                    }
                ]
            },
            {
                "value": "165",
                "lable": "漯河",
                "children": [
                    {
                        "value": "1404",
                        "lable": "郾城区"
                    },
                    {
                        "value": "1405",
                        "lable": "源汇区"
                    },
                    {
                        "value": "1406",
                        "lable": "召陵区"
                    },
                    {
                        "value": "1407",
                        "lable": "舞阳县"
                    },
                    {
                        "value": "1408",
                        "lable": "临颍县"
                    }
                ]
            },
            {
                "value": "166",
                "lable": "濮阳",
                "children": [
                    {
                        "value": "1409",
                        "lable": "华龙区"
                    },
                    {
                        "value": "1410",
                        "lable": "清丰县"
                    },
                    {
                        "value": "1411",
                        "lable": "南乐县"
                    },
                    {
                        "value": "1412",
                        "lable": "范县"
                    },
                    {
                        "value": "1413",
                        "lable": "台前县"
                    },
                    {
                        "value": "1414",
                        "lable": "濮阳县"
                    }
                ]
            }
        ]
    },
    {
        "value": "12",
        "lable": "黑龙江",
        "children": [
            {
                "value": "167",
                "lable": "哈尔滨",
                "children": [
                    {
                        "value": "1415",
                        "lable": "道里区"
                    },
                    {
                        "value": "1416",
                        "lable": "南岗区"
                    },
                    {
                        "value": "1417",
                        "lable": "动力区"
                    },
                    {
                        "value": "1418",
                        "lable": "平房区"
                    },
                    {
                        "value": "1419",
                        "lable": "香坊区"
                    },
                    {
                        "value": "1420",
                        "lable": "太平区"
                    },
                    {
                        "value": "1421",
                        "lable": "道外区"
                    },
                    {
                        "value": "1422",
                        "lable": "阿城区"
                    },
                    {
                        "value": "1423",
                        "lable": "呼兰区"
                    },
                    {
                        "value": "1424",
                        "lable": "松北区"
                    },
                    {
                        "value": "1425",
                        "lable": "尚志市"
                    },
                    {
                        "value": "1426",
                        "lable": "双城市"
                    },
                    {
                        "value": "1427",
                        "lable": "五常市"
                    },
                    {
                        "value": "1428",
                        "lable": "方正县"
                    },
                    {
                        "value": "1429",
                        "lable": "宾县"
                    },
                    {
                        "value": "1430",
                        "lable": "依兰县"
                    },
                    {
                        "value": "1431",
                        "lable": "巴彦县"
                    },
                    {
                        "value": "1432",
                        "lable": "通河县"
                    },
                    {
                        "value": "1433",
                        "lable": "木兰县"
                    },
                    {
                        "value": "1434",
                        "lable": "延寿县"
                    }
                ]
            },
            {
                "value": "168",
                "lable": "大庆",
                "children": [
                    {
                        "value": "1435",
                        "lable": "萨尔图区"
                    },
                    {
                        "value": "1436",
                        "lable": "红岗区"
                    },
                    {
                        "value": "1437",
                        "lable": "龙凤区"
                    },
                    {
                        "value": "1438",
                        "lable": "让胡路区"
                    },
                    {
                        "value": "1439",
                        "lable": "大同区"
                    },
                    {
                        "value": "1440",
                        "lable": "肇州县"
                    },
                    {
                        "value": "1441",
                        "lable": "肇源县"
                    },
                    {
                        "value": "1442",
                        "lable": "林甸县"
                    },
                    {
                        "value": "1443",
                        "lable": "杜尔伯特"
                    }
                ]
            },
            {
                "value": "169",
                "lable": "大兴安岭",
                "children": [
                    {
                        "value": "1444",
                        "lable": "呼玛县"
                    },
                    {
                        "value": "1445",
                        "lable": "漠河县"
                    },
                    {
                        "value": "1446",
                        "lable": "塔河县"
                    }
                ]
            },
            {
                "value": "170",
                "lable": "鹤岗",
                "children": [
                    {
                        "value": "1447",
                        "lable": "兴山区"
                    },
                    {
                        "value": "1448",
                        "lable": "工农区"
                    },
                    {
                        "value": "1449",
                        "lable": "南山区"
                    },
                    {
                        "value": "1450",
                        "lable": "兴安区"
                    },
                    {
                        "value": "1451",
                        "lable": "向阳区"
                    },
                    {
                        "value": "1452",
                        "lable": "东山区"
                    },
                    {
                        "value": "1453",
                        "lable": "萝北县"
                    },
                    {
                        "value": "1454",
                        "lable": "绥滨县"
                    }
                ]
            },
            {
                "value": "171",
                "lable": "黑河",
                "children": [
                    {
                        "value": "1455",
                        "lable": "爱辉区"
                    },
                    {
                        "value": "1456",
                        "lable": "五大连池市"
                    },
                    {
                        "value": "1457",
                        "lable": "北安市"
                    },
                    {
                        "value": "1458",
                        "lable": "嫩江县"
                    },
                    {
                        "value": "1459",
                        "lable": "逊克县"
                    },
                    {
                        "value": "1460",
                        "lable": "孙吴县"
                    }
                ]
            },
            {
                "value": "172",
                "lable": "鸡西",
                "children": [
                    {
                        "value": "1461",
                        "lable": "鸡冠区"
                    },
                    {
                        "value": "1462",
                        "lable": "恒山区"
                    },
                    {
                        "value": "1463",
                        "lable": "城子河区"
                    },
                    {
                        "value": "1464",
                        "lable": "滴道区"
                    },
                    {
                        "value": "1465",
                        "lable": "梨树区"
                    },
                    {
                        "value": "1466",
                        "lable": "虎林市"
                    },
                    {
                        "value": "1467",
                        "lable": "密山市"
                    },
                    {
                        "value": "1468",
                        "lable": "鸡东县"
                    }
                ]
            },
            {
                "value": "173",
                "lable": "佳木斯",
                "children": [
                    {
                        "value": "1469",
                        "lable": "前进区"
                    },
                    {
                        "value": "1470",
                        "lable": "郊区"
                    },
                    {
                        "value": "1471",
                        "lable": "向阳区"
                    },
                    {
                        "value": "1472",
                        "lable": "东风区"
                    },
                    {
                        "value": "1473",
                        "lable": "同江市"
                    },
                    {
                        "value": "1474",
                        "lable": "富锦市"
                    },
                    {
                        "value": "1475",
                        "lable": "桦南县"
                    },
                    {
                        "value": "1476",
                        "lable": "桦川县"
                    },
                    {
                        "value": "1477",
                        "lable": "汤原县"
                    },
                    {
                        "value": "1478",
                        "lable": "抚远县"
                    }
                ]
            },
            {
                "value": "174",
                "lable": "牡丹江",
                "children": [
                    {
                        "value": "1479",
                        "lable": "爱民区"
                    },
                    {
                        "value": "1480",
                        "lable": "东安区"
                    },
                    {
                        "value": "1481",
                        "lable": "阳明区"
                    },
                    {
                        "value": "1482",
                        "lable": "西安区"
                    },
                    {
                        "value": "1483",
                        "lable": "绥芬河市"
                    },
                    {
                        "value": "1484",
                        "lable": "海林市"
                    },
                    {
                        "value": "1485",
                        "lable": "宁安市"
                    },
                    {
                        "value": "1486",
                        "lable": "穆棱市"
                    },
                    {
                        "value": "1487",
                        "lable": "东宁县"
                    },
                    {
                        "value": "1488",
                        "lable": "林口县"
                    }
                ]
            },
            {
                "value": "175",
                "lable": "七台河",
                "children": [
                    {
                        "value": "1489",
                        "lable": "桃山区"
                    },
                    {
                        "value": "1490",
                        "lable": "新兴区"
                    },
                    {
                        "value": "1491",
                        "lable": "茄子河区"
                    },
                    {
                        "value": "1492",
                        "lable": "勃利县"
                    }
                ]
            },
            {
                "value": "176",
                "lable": "齐齐哈尔",
                "children": [
                    {
                        "value": "1493",
                        "lable": "龙沙区"
                    },
                    {
                        "value": "1494",
                        "lable": "昂昂溪区"
                    },
                    {
                        "value": "1495",
                        "lable": "铁峰区"
                    },
                    {
                        "value": "1496",
                        "lable": "建华区"
                    },
                    {
                        "value": "1497",
                        "lable": "富拉尔基区"
                    },
                    {
                        "value": "1498",
                        "lable": "碾子山区"
                    },
                    {
                        "value": "1499",
                        "lable": "梅里斯达斡尔区"
                    },
                    {
                        "value": "1500",
                        "lable": "讷河市"
                    },
                    {
                        "value": "1501",
                        "lable": "龙江县"
                    },
                    {
                        "value": "1502",
                        "lable": "依安县"
                    },
                    {
                        "value": "1503",
                        "lable": "泰来县"
                    },
                    {
                        "value": "1504",
                        "lable": "甘南县"
                    },
                    {
                        "value": "1505",
                        "lable": "富裕县"
                    },
                    {
                        "value": "1506",
                        "lable": "克山县"
                    },
                    {
                        "value": "1507",
                        "lable": "克东县"
                    },
                    {
                        "value": "1508",
                        "lable": "拜泉县"
                    }
                ]
            },
            {
                "value": "177",
                "lable": "双鸭山",
                "children": [
                    {
                        "value": "1509",
                        "lable": "尖山区"
                    },
                    {
                        "value": "1510",
                        "lable": "岭东区"
                    },
                    {
                        "value": "1511",
                        "lable": "四方台区"
                    },
                    {
                        "value": "1512",
                        "lable": "宝山区"
                    },
                    {
                        "value": "1513",
                        "lable": "集贤县"
                    },
                    {
                        "value": "1514",
                        "lable": "友谊县"
                    },
                    {
                        "value": "1515",
                        "lable": "宝清县"
                    },
                    {
                        "value": "1516",
                        "lable": "饶河县"
                    }
                ]
            },
            {
                "value": "178",
                "lable": "绥化",
                "children": [
                    {
                        "value": "1517",
                        "lable": "北林区"
                    },
                    {
                        "value": "1518",
                        "lable": "安达市"
                    },
                    {
                        "value": "1519",
                        "lable": "肇东市"
                    },
                    {
                        "value": "1520",
                        "lable": "海伦市"
                    },
                    {
                        "value": "1521",
                        "lable": "望奎县"
                    },
                    {
                        "value": "1522",
                        "lable": "兰西县"
                    },
                    {
                        "value": "1523",
                        "lable": "青冈县"
                    },
                    {
                        "value": "1524",
                        "lable": "庆安县"
                    },
                    {
                        "value": "1525",
                        "lable": "明水县"
                    },
                    {
                        "value": "1526",
                        "lable": "绥棱县"
                    }
                ]
            },
            {
                "value": "179",
                "lable": "伊春",
                "children": [
                    {
                        "value": "1527",
                        "lable": "伊春区"
                    },
                    {
                        "value": "1528",
                        "lable": "带岭区"
                    },
                    {
                        "value": "1529",
                        "lable": "南岔区"
                    },
                    {
                        "value": "1530",
                        "lable": "金山屯区"
                    },
                    {
                        "value": "1531",
                        "lable": "西林区"
                    },
                    {
                        "value": "1532",
                        "lable": "美溪区"
                    },
                    {
                        "value": "1533",
                        "lable": "乌马河区"
                    },
                    {
                        "value": "1534",
                        "lable": "翠峦区"
                    },
                    {
                        "value": "1535",
                        "lable": "友好区"
                    },
                    {
                        "value": "1536",
                        "lable": "上甘岭区"
                    },
                    {
                        "value": "1537",
                        "lable": "五营区"
                    },
                    {
                        "value": "1538",
                        "lable": "红星区"
                    },
                    {
                        "value": "1539",
                        "lable": "新青区"
                    },
                    {
                        "value": "1540",
                        "lable": "汤旺河区"
                    },
                    {
                        "value": "1541",
                        "lable": "乌伊岭区"
                    },
                    {
                        "value": "1542",
                        "lable": "铁力市"
                    },
                    {
                        "value": "1543",
                        "lable": "嘉荫县"
                    }
                ]
            }
        ]
    },
    {
        "value": "13",
        "lable": "湖北",
        "children": [
            {
                "value": "180",
                "lable": "武汉",
                "children": [
                    {
                        "value": "1544",
                        "lable": "江岸区"
                    },
                    {
                        "value": "1545",
                        "lable": "武昌区"
                    },
                    {
                        "value": "1546",
                        "lable": "江汉区"
                    },
                    {
                        "value": "1547",
                        "lable": "硚口区"
                    },
                    {
                        "value": "1548",
                        "lable": "汉阳区"
                    },
                    {
                        "value": "1549",
                        "lable": "青山区"
                    },
                    {
                        "value": "1550",
                        "lable": "洪山区"
                    },
                    {
                        "value": "1551",
                        "lable": "东西湖区"
                    },
                    {
                        "value": "1552",
                        "lable": "汉南区"
                    },
                    {
                        "value": "1553",
                        "lable": "蔡甸区"
                    },
                    {
                        "value": "1554",
                        "lable": "江夏区"
                    },
                    {
                        "value": "1555",
                        "lable": "黄陂区"
                    },
                    {
                        "value": "1556",
                        "lable": "新洲区"
                    },
                    {
                        "value": "1557",
                        "lable": "经济开发区"
                    }
                ]
            },
            {
                "value": "181",
                "lable": "仙桃",
                "children": [
                    {
                        "value": "1558",
                        "lable": "仙桃市"
                    }
                ]
            },
            {
                "value": "182",
                "lable": "鄂州",
                "children": [
                    {
                        "value": "1559",
                        "lable": "鄂城区"
                    },
                    {
                        "value": "1560",
                        "lable": "华容区"
                    },
                    {
                        "value": "1561",
                        "lable": "梁子湖区"
                    }
                ]
            },
            {
                "value": "183",
                "lable": "黄冈",
                "children": [
                    {
                        "value": "1562",
                        "lable": "黄州区"
                    },
                    {
                        "value": "1563",
                        "lable": "麻城市"
                    },
                    {
                        "value": "1564",
                        "lable": "武穴市"
                    },
                    {
                        "value": "1565",
                        "lable": "团风县"
                    },
                    {
                        "value": "1566",
                        "lable": "红安县"
                    },
                    {
                        "value": "1567",
                        "lable": "罗田县"
                    },
                    {
                        "value": "1568",
                        "lable": "英山县"
                    },
                    {
                        "value": "1569",
                        "lable": "浠水县"
                    },
                    {
                        "value": "1570",
                        "lable": "蕲春县"
                    },
                    {
                        "value": "1571",
                        "lable": "黄梅县"
                    }
                ]
            },
            {
                "value": "184",
                "lable": "黄石",
                "children": [
                    {
                        "value": "1572",
                        "lable": "黄石港区"
                    },
                    {
                        "value": "1573",
                        "lable": "西塞山区"
                    },
                    {
                        "value": "1574",
                        "lable": "下陆区"
                    },
                    {
                        "value": "1575",
                        "lable": "铁山区"
                    },
                    {
                        "value": "1576",
                        "lable": "大冶市"
                    },
                    {
                        "value": "1577",
                        "lable": "阳新县"
                    }
                ]
            },
            {
                "value": "185",
                "lable": "荆门",
                "children": [
                    {
                        "value": "1578",
                        "lable": "东宝区"
                    },
                    {
                        "value": "1579",
                        "lable": "掇刀区"
                    },
                    {
                        "value": "1580",
                        "lable": "钟祥市"
                    },
                    {
                        "value": "1581",
                        "lable": "京山县"
                    },
                    {
                        "value": "1582",
                        "lable": "沙洋县"
                    }
                ]
            },
            {
                "value": "186",
                "lable": "荆州",
                "children": [
                    {
                        "value": "1583",
                        "lable": "沙市区"
                    },
                    {
                        "value": "1584",
                        "lable": "荆州区"
                    },
                    {
                        "value": "1585",
                        "lable": "石首市"
                    },
                    {
                        "value": "1586",
                        "lable": "洪湖市"
                    },
                    {
                        "value": "1587",
                        "lable": "松滋市"
                    },
                    {
                        "value": "1588",
                        "lable": "公安县"
                    },
                    {
                        "value": "1589",
                        "lable": "监利县"
                    },
                    {
                        "value": "1590",
                        "lable": "江陵县"
                    }
                ]
            },
            {
                "value": "187",
                "lable": "潜江",
                "children": [
                    {
                        "value": "1591",
                        "lable": "潜江市"
                    }
                ]
            },
            {
                "value": "188",
                "lable": "神农架林区",
                "children": [
                    {
                        "value": "1592",
                        "lable": "神农架林区"
                    }
                ]
            },
            {
                "value": "189",
                "lable": "十堰",
                "children": [
                    {
                        "value": "1593",
                        "lable": "张湾区"
                    },
                    {
                        "value": "1594",
                        "lable": "茅箭区"
                    },
                    {
                        "value": "1595",
                        "lable": "丹江口市"
                    },
                    {
                        "value": "1596",
                        "lable": "郧县"
                    },
                    {
                        "value": "1597",
                        "lable": "郧西县"
                    },
                    {
                        "value": "1598",
                        "lable": "竹山县"
                    },
                    {
                        "value": "1599",
                        "lable": "竹溪县"
                    },
                    {
                        "value": "1600",
                        "lable": "房县"
                    }
                ]
            },
            {
                "value": "190",
                "lable": "随州",
                "children": [
                    {
                        "value": "1601",
                        "lable": "曾都区"
                    },
                    {
                        "value": "1602",
                        "lable": "广水市"
                    }
                ]
            },
            {
                "value": "191",
                "lable": "天门",
                "children": [
                    {
                        "value": "1603",
                        "lable": "天门市"
                    }
                ]
            },
            {
                "value": "192",
                "lable": "咸宁",
                "children": [
                    {
                        "value": "1604",
                        "lable": "咸安区"
                    },
                    {
                        "value": "1605",
                        "lable": "赤壁市"
                    },
                    {
                        "value": "1606",
                        "lable": "嘉鱼县"
                    },
                    {
                        "value": "1607",
                        "lable": "通城县"
                    },
                    {
                        "value": "1608",
                        "lable": "崇阳县"
                    },
                    {
                        "value": "1609",
                        "lable": "通山县"
                    }
                ]
            },
            {
                "value": "193",
                "lable": "襄樊",
                "children": [
                    {
                        "value": "1610",
                        "lable": "襄城区"
                    },
                    {
                        "value": "1611",
                        "lable": "樊城区"
                    },
                    {
                        "value": "1612",
                        "lable": "襄阳区"
                    },
                    {
                        "value": "1613",
                        "lable": "老河口市"
                    },
                    {
                        "value": "1614",
                        "lable": "枣阳市"
                    },
                    {
                        "value": "1615",
                        "lable": "宜城市"
                    },
                    {
                        "value": "1616",
                        "lable": "南漳县"
                    },
                    {
                        "value": "1617",
                        "lable": "谷城县"
                    },
                    {
                        "value": "1618",
                        "lable": "保康县"
                    }
                ]
            },
            {
                "value": "194",
                "lable": "孝感",
                "children": [
                    {
                        "value": "1619",
                        "lable": "孝南区"
                    },
                    {
                        "value": "1620",
                        "lable": "应城市"
                    },
                    {
                        "value": "1621",
                        "lable": "安陆市"
                    },
                    {
                        "value": "1622",
                        "lable": "汉川市"
                    },
                    {
                        "value": "1623",
                        "lable": "孝昌县"
                    },
                    {
                        "value": "1624",
                        "lable": "大悟县"
                    },
                    {
                        "value": "1625",
                        "lable": "云梦县"
                    }
                ]
            },
            {
                "value": "195",
                "lable": "宜昌",
                "children": [
                    {
                        "value": "1626",
                        "lable": "长阳"
                    },
                    {
                        "value": "1627",
                        "lable": "五峰"
                    },
                    {
                        "value": "1628",
                        "lable": "西陵区"
                    },
                    {
                        "value": "1629",
                        "lable": "伍家岗区"
                    },
                    {
                        "value": "1630",
                        "lable": "点军区"
                    },
                    {
                        "value": "1631",
                        "lable": "猇亭区"
                    },
                    {
                        "value": "1632",
                        "lable": "夷陵区"
                    },
                    {
                        "value": "1633",
                        "lable": "宜都市"
                    },
                    {
                        "value": "1634",
                        "lable": "当阳市"
                    },
                    {
                        "value": "1635",
                        "lable": "枝江市"
                    },
                    {
                        "value": "1636",
                        "lable": "远安县"
                    },
                    {
                        "value": "1637",
                        "lable": "兴山县"
                    },
                    {
                        "value": "1638",
                        "lable": "秭归县"
                    }
                ]
            },
            {
                "value": "196",
                "lable": "恩施",
                "children": [
                    {
                        "value": "1639",
                        "lable": "恩施市"
                    },
                    {
                        "value": "1640",
                        "lable": "利川市"
                    },
                    {
                        "value": "1641",
                        "lable": "建始县"
                    },
                    {
                        "value": "1642",
                        "lable": "巴东县"
                    },
                    {
                        "value": "1643",
                        "lable": "宣恩县"
                    },
                    {
                        "value": "1644",
                        "lable": "咸丰县"
                    },
                    {
                        "value": "1645",
                        "lable": "来凤县"
                    },
                    {
                        "value": "1646",
                        "lable": "鹤峰县"
                    }
                ]
            }
        ]
    },
    {
        "value": "14",
        "lable": "湖南",
        "children": [
            {
                "value": "197",
                "lable": "长沙",
                "children": [
                    {
                        "value": "1647",
                        "lable": "岳麓区"
                    },
                    {
                        "value": "1648",
                        "lable": "芙蓉区"
                    },
                    {
                        "value": "1649",
                        "lable": "天心区"
                    },
                    {
                        "value": "1650",
                        "lable": "开福区"
                    },
                    {
                        "value": "1651",
                        "lable": "雨花区"
                    },
                    {
                        "value": "1652",
                        "lable": "开发区"
                    },
                    {
                        "value": "1653",
                        "lable": "浏阳市"
                    },
                    {
                        "value": "1654",
                        "lable": "长沙县"
                    },
                    {
                        "value": "1655",
                        "lable": "望城县"
                    },
                    {
                        "value": "1656",
                        "lable": "宁乡县"
                    }
                ]
            },
            {
                "value": "198",
                "lable": "张家界",
                "children": [
                    {
                        "value": "1657",
                        "lable": "永定区"
                    },
                    {
                        "value": "1658",
                        "lable": "武陵源区"
                    },
                    {
                        "value": "1659",
                        "lable": "慈利县"
                    },
                    {
                        "value": "1660",
                        "lable": "桑植县"
                    }
                ]
            },
            {
                "value": "199",
                "lable": "常德",
                "children": [
                    {
                        "value": "1661",
                        "lable": "武陵区"
                    },
                    {
                        "value": "1662",
                        "lable": "鼎城区"
                    },
                    {
                        "value": "1663",
                        "lable": "津市市"
                    },
                    {
                        "value": "1664",
                        "lable": "安乡县"
                    },
                    {
                        "value": "1665",
                        "lable": "汉寿县"
                    },
                    {
                        "value": "1666",
                        "lable": "澧县"
                    },
                    {
                        "value": "1667",
                        "lable": "临澧县"
                    },
                    {
                        "value": "1668",
                        "lable": "桃源县"
                    },
                    {
                        "value": "1669",
                        "lable": "石门县"
                    }
                ]
            },
            {
                "value": "200",
                "lable": "郴州",
                "children": [
                    {
                        "value": "1670",
                        "lable": "北湖区"
                    },
                    {
                        "value": "1671",
                        "lable": "苏仙区"
                    },
                    {
                        "value": "1672",
                        "lable": "资兴市"
                    },
                    {
                        "value": "1673",
                        "lable": "桂阳县"
                    },
                    {
                        "value": "1674",
                        "lable": "宜章县"
                    },
                    {
                        "value": "1675",
                        "lable": "永兴县"
                    },
                    {
                        "value": "1676",
                        "lable": "嘉禾县"
                    },
                    {
                        "value": "1677",
                        "lable": "临武县"
                    },
                    {
                        "value": "1678",
                        "lable": "汝城县"
                    },
                    {
                        "value": "1679",
                        "lable": "桂东县"
                    },
                    {
                        "value": "1680",
                        "lable": "安仁县"
                    }
                ]
            },
            {
                "value": "201",
                "lable": "衡阳",
                "children": [
                    {
                        "value": "1681",
                        "lable": "雁峰区"
                    },
                    {
                        "value": "1682",
                        "lable": "珠晖区"
                    },
                    {
                        "value": "1683",
                        "lable": "石鼓区"
                    },
                    {
                        "value": "1684",
                        "lable": "蒸湘区"
                    },
                    {
                        "value": "1685",
                        "lable": "南岳区"
                    },
                    {
                        "value": "1686",
                        "lable": "耒阳市"
                    },
                    {
                        "value": "1687",
                        "lable": "常宁市"
                    },
                    {
                        "value": "1688",
                        "lable": "衡阳县"
                    },
                    {
                        "value": "1689",
                        "lable": "衡南县"
                    },
                    {
                        "value": "1690",
                        "lable": "衡山县"
                    },
                    {
                        "value": "1691",
                        "lable": "衡东县"
                    },
                    {
                        "value": "1692",
                        "lable": "祁东县"
                    }
                ]
            },
            {
                "value": "202",
                "lable": "怀化",
                "children": [
                    {
                        "value": "1693",
                        "lable": "鹤城区"
                    },
                    {
                        "value": "1694",
                        "lable": "靖州"
                    },
                    {
                        "value": "1695",
                        "lable": "麻阳"
                    },
                    {
                        "value": "1696",
                        "lable": "通道"
                    },
                    {
                        "value": "1697",
                        "lable": "新晃"
                    },
                    {
                        "value": "1698",
                        "lable": "芷江"
                    },
                    {
                        "value": "1699",
                        "lable": "沅陵县"
                    },
                    {
                        "value": "1700",
                        "lable": "辰溪县"
                    },
                    {
                        "value": "1701",
                        "lable": "溆浦县"
                    },
                    {
                        "value": "1702",
                        "lable": "中方县"
                    },
                    {
                        "value": "1703",
                        "lable": "会同县"
                    },
                    {
                        "value": "1704",
                        "lable": "洪江市"
                    }
                ]
            },
            {
                "value": "203",
                "lable": "娄底",
                "children": [
                    {
                        "value": "1705",
                        "lable": "娄星区"
                    },
                    {
                        "value": "1706",
                        "lable": "冷水江市"
                    },
                    {
                        "value": "1707",
                        "lable": "涟源市"
                    },
                    {
                        "value": "1708",
                        "lable": "双峰县"
                    },
                    {
                        "value": "1709",
                        "lable": "新化县"
                    }
                ]
            },
            {
                "value": "204",
                "lable": "邵阳",
                "children": [
                    {
                        "value": "1710",
                        "lable": "城步"
                    },
                    {
                        "value": "1711",
                        "lable": "双清区"
                    },
                    {
                        "value": "1712",
                        "lable": "大祥区"
                    },
                    {
                        "value": "1713",
                        "lable": "北塔区"
                    },
                    {
                        "value": "1714",
                        "lable": "武冈市"
                    },
                    {
                        "value": "1715",
                        "lable": "邵东县"
                    },
                    {
                        "value": "1716",
                        "lable": "新邵县"
                    },
                    {
                        "value": "1717",
                        "lable": "邵阳县"
                    },
                    {
                        "value": "1718",
                        "lable": "隆回县"
                    },
                    {
                        "value": "1719",
                        "lable": "洞口县"
                    },
                    {
                        "value": "1720",
                        "lable": "绥宁县"
                    },
                    {
                        "value": "1721",
                        "lable": "新宁县"
                    }
                ]
            },
            {
                "value": "205",
                "lable": "湘潭",
                "children": [
                    {
                        "value": "1722",
                        "lable": "岳塘区"
                    },
                    {
                        "value": "1723",
                        "lable": "雨湖区"
                    },
                    {
                        "value": "1724",
                        "lable": "湘乡市"
                    },
                    {
                        "value": "1725",
                        "lable": "韶山市"
                    },
                    {
                        "value": "1726",
                        "lable": "湘潭县"
                    }
                ]
            },
            {
                "value": "206",
                "lable": "湘西",
                "children": [
                    {
                        "value": "1727",
                        "lable": "吉首市"
                    },
                    {
                        "value": "1728",
                        "lable": "泸溪县"
                    },
                    {
                        "value": "1729",
                        "lable": "凤凰县"
                    },
                    {
                        "value": "1730",
                        "lable": "花垣县"
                    },
                    {
                        "value": "1731",
                        "lable": "保靖县"
                    },
                    {
                        "value": "1732",
                        "lable": "古丈县"
                    },
                    {
                        "value": "1733",
                        "lable": "永顺县"
                    },
                    {
                        "value": "1734",
                        "lable": "龙山县"
                    }
                ]
            },
            {
                "value": "207",
                "lable": "益阳",
                "children": [
                    {
                        "value": "1735",
                        "lable": "赫山区"
                    },
                    {
                        "value": "1736",
                        "lable": "资阳区"
                    },
                    {
                        "value": "1737",
                        "lable": "沅江市"
                    },
                    {
                        "value": "1738",
                        "lable": "南县"
                    },
                    {
                        "value": "1739",
                        "lable": "桃江县"
                    },
                    {
                        "value": "1740",
                        "lable": "安化县"
                    }
                ]
            },
            {
                "value": "208",
                "lable": "永州",
                "children": [
                    {
                        "value": "1741",
                        "lable": "江华"
                    },
                    {
                        "value": "1742",
                        "lable": "冷水滩区"
                    },
                    {
                        "value": "1743",
                        "lable": "零陵区"
                    },
                    {
                        "value": "1744",
                        "lable": "祁阳县"
                    },
                    {
                        "value": "1745",
                        "lable": "东安县"
                    },
                    {
                        "value": "1746",
                        "lable": "双牌县"
                    },
                    {
                        "value": "1747",
                        "lable": "道县"
                    },
                    {
                        "value": "1748",
                        "lable": "江永县"
                    },
                    {
                        "value": "1749",
                        "lable": "宁远县"
                    },
                    {
                        "value": "1750",
                        "lable": "蓝山县"
                    },
                    {
                        "value": "1751",
                        "lable": "新田县"
                    }
                ]
            },
            {
                "value": "209",
                "lable": "岳阳",
                "children": [
                    {
                        "value": "1752",
                        "lable": "岳阳楼区"
                    },
                    {
                        "value": "1753",
                        "lable": "君山区"
                    },
                    {
                        "value": "1754",
                        "lable": "云溪区"
                    },
                    {
                        "value": "1755",
                        "lable": "汨罗市"
                    },
                    {
                        "value": "1756",
                        "lable": "临湘市"
                    },
                    {
                        "value": "1757",
                        "lable": "岳阳县"
                    },
                    {
                        "value": "1758",
                        "lable": "华容县"
                    },
                    {
                        "value": "1759",
                        "lable": "湘阴县"
                    },
                    {
                        "value": "1760",
                        "lable": "平江县"
                    }
                ]
            },
            {
                "value": "210",
                "lable": "株洲",
                "children": [
                    {
                        "value": "1761",
                        "lable": "天元区"
                    },
                    {
                        "value": "1762",
                        "lable": "荷塘区"
                    },
                    {
                        "value": "1763",
                        "lable": "芦淞区"
                    },
                    {
                        "value": "1764",
                        "lable": "石峰区"
                    },
                    {
                        "value": "1765",
                        "lable": "醴陵市"
                    },
                    {
                        "value": "1766",
                        "lable": "株洲县"
                    },
                    {
                        "value": "1767",
                        "lable": "攸县"
                    },
                    {
                        "value": "1768",
                        "lable": "茶陵县"
                    },
                    {
                        "value": "1769",
                        "lable": "炎陵县"
                    }
                ]
            }
        ]
    },
    {
        "value": "15",
        "lable": "吉林",
        "children": [
            {
                "value": "211",
                "lable": "长春",
                "children": [
                    {
                        "value": "1770",
                        "lable": "朝阳区"
                    },
                    {
                        "value": "1771",
                        "lable": "宽城区"
                    },
                    {
                        "value": "1772",
                        "lable": "二道区"
                    },
                    {
                        "value": "1773",
                        "lable": "南关区"
                    },
                    {
                        "value": "1774",
                        "lable": "绿园区"
                    },
                    {
                        "value": "1775",
                        "lable": "双阳区"
                    },
                    {
                        "value": "1776",
                        "lable": "净月潭开发区"
                    },
                    {
                        "value": "1777",
                        "lable": "高新技术开发区"
                    },
                    {
                        "value": "1778",
                        "lable": "经济技术开发区"
                    },
                    {
                        "value": "1779",
                        "lable": "汽车产业开发区"
                    },
                    {
                        "value": "1780",
                        "lable": "德惠市"
                    },
                    {
                        "value": "1781",
                        "lable": "九台市"
                    },
                    {
                        "value": "1782",
                        "lable": "榆树市"
                    },
                    {
                        "value": "1783",
                        "lable": "农安县"
                    }
                ]
            },
            {
                "value": "212",
                "lable": "吉林",
                "children": [
                    {
                        "value": "1784",
                        "lable": "船营区"
                    },
                    {
                        "value": "1785",
                        "lable": "昌邑区"
                    },
                    {
                        "value": "1786",
                        "lable": "龙潭区"
                    },
                    {
                        "value": "1787",
                        "lable": "丰满区"
                    },
                    {
                        "value": "1788",
                        "lable": "蛟河市"
                    },
                    {
                        "value": "1789",
                        "lable": "桦甸市"
                    },
                    {
                        "value": "1790",
                        "lable": "舒兰市"
                    },
                    {
                        "value": "1791",
                        "lable": "磐石市"
                    },
                    {
                        "value": "1792",
                        "lable": "永吉县"
                    }
                ]
            },
            {
                "value": "213",
                "lable": "白城",
                "children": [
                    {
                        "value": "1793",
                        "lable": "洮北区"
                    },
                    {
                        "value": "1794",
                        "lable": "洮南市"
                    },
                    {
                        "value": "1795",
                        "lable": "大安市"
                    },
                    {
                        "value": "1796",
                        "lable": "镇赉县"
                    },
                    {
                        "value": "1797",
                        "lable": "通榆县"
                    }
                ]
            },
            {
                "value": "214",
                "lable": "白山",
                "children": [
                    {
                        "value": "1798",
                        "lable": "江源区"
                    },
                    {
                        "value": "1799",
                        "lable": "八道江区"
                    },
                    {
                        "value": "1800",
                        "lable": "长白"
                    },
                    {
                        "value": "1801",
                        "lable": "临江市"
                    },
                    {
                        "value": "1802",
                        "lable": "抚松县"
                    },
                    {
                        "value": "1803",
                        "lable": "靖宇县"
                    }
                ]
            },
            {
                "value": "215",
                "lable": "辽源",
                "children": [
                    {
                        "value": "1804",
                        "lable": "龙山区"
                    },
                    {
                        "value": "1805",
                        "lable": "西安区"
                    },
                    {
                        "value": "1806",
                        "lable": "东丰县"
                    },
                    {
                        "value": "1807",
                        "lable": "东辽县"
                    }
                ]
            },
            {
                "value": "216",
                "lable": "四平",
                "children": [
                    {
                        "value": "1808",
                        "lable": "铁西区"
                    },
                    {
                        "value": "1809",
                        "lable": "铁东区"
                    },
                    {
                        "value": "1810",
                        "lable": "伊通"
                    },
                    {
                        "value": "1811",
                        "lable": "公主岭市"
                    },
                    {
                        "value": "1812",
                        "lable": "双辽市"
                    },
                    {
                        "value": "1813",
                        "lable": "梨树县"
                    }
                ]
            },
            {
                "value": "217",
                "lable": "松原",
                "children": [
                    {
                        "value": "1814",
                        "lable": "前郭尔罗斯"
                    },
                    {
                        "value": "1815",
                        "lable": "宁江区"
                    },
                    {
                        "value": "1816",
                        "lable": "长岭县"
                    },
                    {
                        "value": "1817",
                        "lable": "乾安县"
                    },
                    {
                        "value": "1818",
                        "lable": "扶余县"
                    }
                ]
            },
            {
                "value": "218",
                "lable": "通化",
                "children": [
                    {
                        "value": "1819",
                        "lable": "东昌区"
                    },
                    {
                        "value": "1820",
                        "lable": "二道江区"
                    },
                    {
                        "value": "1821",
                        "lable": "梅河口市"
                    },
                    {
                        "value": "1822",
                        "lable": "集安市"
                    },
                    {
                        "value": "1823",
                        "lable": "通化县"
                    },
                    {
                        "value": "1824",
                        "lable": "辉南县"
                    },
                    {
                        "value": "1825",
                        "lable": "柳河县"
                    }
                ]
            },
            {
                "value": "219",
                "lable": "延边",
                "children": [
                    {
                        "value": "1826",
                        "lable": "延吉市"
                    },
                    {
                        "value": "1827",
                        "lable": "图们市"
                    },
                    {
                        "value": "1828",
                        "lable": "敦化市"
                    },
                    {
                        "value": "1829",
                        "lable": "珲春市"
                    },
                    {
                        "value": "1830",
                        "lable": "龙井市"
                    },
                    {
                        "value": "1831",
                        "lable": "和龙市"
                    },
                    {
                        "value": "1832",
                        "lable": "安图县"
                    },
                    {
                        "value": "1833",
                        "lable": "汪清县"
                    }
                ]
            }
        ]
    },
    {
        "value": "16",
        "lable": "江苏",
        "children": [
            {
                "value": "220",
                "lable": "南京",
                "children": [
                    {
                        "value": "1834",
                        "lable": "玄武区"
                    },
                    {
                        "value": "1835",
                        "lable": "鼓楼区"
                    },
                    {
                        "value": "1836",
                        "lable": "白下区"
                    },
                    {
                        "value": "1837",
                        "lable": "建邺区"
                    },
                    {
                        "value": "1838",
                        "lable": "秦淮区"
                    },
                    {
                        "value": "1839",
                        "lable": "雨花台区"
                    },
                    {
                        "value": "1840",
                        "lable": "下关区"
                    },
                    {
                        "value": "1841",
                        "lable": "栖霞区"
                    },
                    {
                        "value": "1842",
                        "lable": "浦口区"
                    },
                    {
                        "value": "1843",
                        "lable": "江宁区"
                    },
                    {
                        "value": "1844",
                        "lable": "六合区"
                    },
                    {
                        "value": "1845",
                        "lable": "溧水县"
                    },
                    {
                        "value": "1846",
                        "lable": "高淳县"
                    }
                ]
            },
            {
                "value": "221",
                "lable": "苏州",
                "children": [
                    {
                        "value": "1847",
                        "lable": "沧浪区"
                    },
                    {
                        "value": "1848",
                        "lable": "金阊区"
                    },
                    {
                        "value": "1849",
                        "lable": "平江区"
                    },
                    {
                        "value": "1850",
                        "lable": "虎丘区"
                    },
                    {
                        "value": "1851",
                        "lable": "吴中区"
                    },
                    {
                        "value": "1852",
                        "lable": "相城区"
                    },
                    {
                        "value": "1853",
                        "lable": "园区"
                    },
                    {
                        "value": "1854",
                        "lable": "新区"
                    },
                    {
                        "value": "1855",
                        "lable": "常熟市"
                    },
                    {
                        "value": "1856",
                        "lable": "张家港市"
                    },
                    {
                        "value": "1857",
                        "lable": "玉山镇"
                    },
                    {
                        "value": "1858",
                        "lable": "巴城镇"
                    },
                    {
                        "value": "1859",
                        "lable": "周市镇"
                    },
                    {
                        "value": "1860",
                        "lable": "陆家镇"
                    },
                    {
                        "value": "1861",
                        "lable": "花桥镇"
                    },
                    {
                        "value": "1862",
                        "lable": "淀山湖镇"
                    },
                    {
                        "value": "1863",
                        "lable": "张浦镇"
                    },
                    {
                        "value": "1864",
                        "lable": "周庄镇"
                    },
                    {
                        "value": "1865",
                        "lable": "千灯镇"
                    },
                    {
                        "value": "1866",
                        "lable": "锦溪镇"
                    },
                    {
                        "value": "1867",
                        "lable": "开发区"
                    },
                    {
                        "value": "1868",
                        "lable": "吴江市"
                    },
                    {
                        "value": "1869",
                        "lable": "太仓市"
                    }
                ]
            },
            {
                "value": "222",
                "lable": "无锡",
                "children": [
                    {
                        "value": "1870",
                        "lable": "崇安区"
                    },
                    {
                        "value": "1871",
                        "lable": "北塘区"
                    },
                    {
                        "value": "1872",
                        "lable": "南长区"
                    },
                    {
                        "value": "1873",
                        "lable": "锡山区"
                    },
                    {
                        "value": "1874",
                        "lable": "惠山区"
                    },
                    {
                        "value": "1875",
                        "lable": "滨湖区"
                    },
                    {
                        "value": "1876",
                        "lable": "新区"
                    },
                    {
                        "value": "1877",
                        "lable": "江阴市"
                    },
                    {
                        "value": "1878",
                        "lable": "宜兴市"
                    }
                ]
            },
            {
                "value": "223",
                "lable": "常州",
                "children": [
                    {
                        "value": "1879",
                        "lable": "天宁区"
                    },
                    {
                        "value": "1880",
                        "lable": "钟楼区"
                    },
                    {
                        "value": "1881",
                        "lable": "戚墅堰区"
                    },
                    {
                        "value": "1882",
                        "lable": "郊区"
                    },
                    {
                        "value": "1883",
                        "lable": "新北区"
                    },
                    {
                        "value": "1884",
                        "lable": "武进区"
                    },
                    {
                        "value": "1885",
                        "lable": "溧阳市"
                    },
                    {
                        "value": "1886",
                        "lable": "金坛市"
                    }
                ]
            },
            {
                "value": "224",
                "lable": "淮安",
                "children": [
                    {
                        "value": "1887",
                        "lable": "清河区"
                    },
                    {
                        "value": "1888",
                        "lable": "清浦区"
                    },
                    {
                        "value": "1889",
                        "lable": "楚州区"
                    },
                    {
                        "value": "1890",
                        "lable": "淮阴区"
                    },
                    {
                        "value": "1891",
                        "lable": "涟水县"
                    },
                    {
                        "value": "1892",
                        "lable": "洪泽县"
                    },
                    {
                        "value": "1893",
                        "lable": "盱眙县"
                    },
                    {
                        "value": "1894",
                        "lable": "金湖县"
                    }
                ]
            },
            {
                "value": "225",
                "lable": "连云港",
                "children": [
                    {
                        "value": "1895",
                        "lable": "新浦区"
                    },
                    {
                        "value": "1896",
                        "lable": "连云区"
                    },
                    {
                        "value": "1897",
                        "lable": "海州区"
                    },
                    {
                        "value": "1898",
                        "lable": "赣榆县"
                    },
                    {
                        "value": "1899",
                        "lable": "东海县"
                    },
                    {
                        "value": "1900",
                        "lable": "灌云县"
                    },
                    {
                        "value": "1901",
                        "lable": "灌南县"
                    }
                ]
            },
            {
                "value": "226",
                "lable": "南通",
                "children": [
                    {
                        "value": "1902",
                        "lable": "崇川区"
                    },
                    {
                        "value": "1903",
                        "lable": "港闸区"
                    },
                    {
                        "value": "1904",
                        "lable": "经济开发区"
                    },
                    {
                        "value": "1905",
                        "lable": "启东市"
                    },
                    {
                        "value": "1906",
                        "lable": "如皋市"
                    },
                    {
                        "value": "1907",
                        "lable": "通州市"
                    },
                    {
                        "value": "1908",
                        "lable": "海门市"
                    },
                    {
                        "value": "1909",
                        "lable": "海安县"
                    },
                    {
                        "value": "1910",
                        "lable": "如东县"
                    }
                ]
            },
            {
                "value": "227",
                "lable": "宿迁",
                "children": [
                    {
                        "value": "1911",
                        "lable": "宿城区"
                    },
                    {
                        "value": "1912",
                        "lable": "宿豫区"
                    },
                    {
                        "value": "1913",
                        "lable": "宿豫县"
                    },
                    {
                        "value": "1914",
                        "lable": "沭阳县"
                    },
                    {
                        "value": "1915",
                        "lable": "泗阳县"
                    },
                    {
                        "value": "1916",
                        "lable": "泗洪县"
                    }
                ]
            },
            {
                "value": "228",
                "lable": "泰州",
                "children": [
                    {
                        "value": "1917",
                        "lable": "海陵区"
                    },
                    {
                        "value": "1918",
                        "lable": "高港区"
                    },
                    {
                        "value": "1919",
                        "lable": "兴化市"
                    },
                    {
                        "value": "1920",
                        "lable": "靖江市"
                    },
                    {
                        "value": "1921",
                        "lable": "泰兴市"
                    },
                    {
                        "value": "1922",
                        "lable": "姜堰市"
                    }
                ]
            },
            {
                "value": "229",
                "lable": "徐州",
                "children": [
                    {
                        "value": "1923",
                        "lable": "云龙区"
                    },
                    {
                        "value": "1924",
                        "lable": "鼓楼区"
                    },
                    {
                        "value": "1925",
                        "lable": "九里区"
                    },
                    {
                        "value": "1926",
                        "lable": "贾汪区"
                    },
                    {
                        "value": "1927",
                        "lable": "泉山区"
                    },
                    {
                        "value": "1928",
                        "lable": "新沂市"
                    },
                    {
                        "value": "1929",
                        "lable": "邳州市"
                    },
                    {
                        "value": "1930",
                        "lable": "丰县"
                    },
                    {
                        "value": "1931",
                        "lable": "沛县"
                    },
                    {
                        "value": "1932",
                        "lable": "铜山县"
                    },
                    {
                        "value": "1933",
                        "lable": "睢宁县"
                    }
                ]
            },
            {
                "value": "230",
                "lable": "盐城",
                "children": [
                    {
                        "value": "1934",
                        "lable": "城区"
                    },
                    {
                        "value": "1935",
                        "lable": "亭湖区"
                    },
                    {
                        "value": "1936",
                        "lable": "盐都区"
                    },
                    {
                        "value": "1937",
                        "lable": "盐都县"
                    },
                    {
                        "value": "1938",
                        "lable": "东台市"
                    },
                    {
                        "value": "1939",
                        "lable": "大丰市"
                    },
                    {
                        "value": "1940",
                        "lable": "响水县"
                    },
                    {
                        "value": "1941",
                        "lable": "滨海县"
                    },
                    {
                        "value": "1942",
                        "lable": "阜宁县"
                    },
                    {
                        "value": "1943",
                        "lable": "射阳县"
                    },
                    {
                        "value": "1944",
                        "lable": "建湖县"
                    }
                ]
            },
            {
                "value": "231",
                "lable": "扬州",
                "children": [
                    {
                        "value": "1945",
                        "lable": "广陵区"
                    },
                    {
                        "value": "1946",
                        "lable": "维扬区"
                    },
                    {
                        "value": "1947",
                        "lable": "邗江区"
                    },
                    {
                        "value": "1948",
                        "lable": "仪征市"
                    },
                    {
                        "value": "1949",
                        "lable": "高邮市"
                    },
                    {
                        "value": "1950",
                        "lable": "江都市"
                    },
                    {
                        "value": "1951",
                        "lable": "宝应县"
                    }
                ]
            },
            {
                "value": "232",
                "lable": "镇江",
                "children": [
                    {
                        "value": "1952",
                        "lable": "京口区"
                    },
                    {
                        "value": "1953",
                        "lable": "润州区"
                    },
                    {
                        "value": "1954",
                        "lable": "丹徒区"
                    },
                    {
                        "value": "1955",
                        "lable": "丹阳市"
                    },
                    {
                        "value": "1956",
                        "lable": "扬中市"
                    },
                    {
                        "value": "1957",
                        "lable": "句容市"
                    }
                ]
            }
        ]
    },
    {
        "value": "17",
        "lable": "江西",
        "children": [
            {
                "value": "233",
                "lable": "南昌",
                "children": [
                    {
                        "value": "1958",
                        "lable": "东湖区"
                    },
                    {
                        "value": "1959",
                        "lable": "西湖区"
                    },
                    {
                        "value": "1960",
                        "lable": "青云谱区"
                    },
                    {
                        "value": "1961",
                        "lable": "湾里区"
                    },
                    {
                        "value": "1962",
                        "lable": "青山湖区"
                    },
                    {
                        "value": "1963",
                        "lable": "红谷滩新区"
                    },
                    {
                        "value": "1964",
                        "lable": "昌北区"
                    },
                    {
                        "value": "1965",
                        "lable": "高新区"
                    },
                    {
                        "value": "1966",
                        "lable": "南昌县"
                    },
                    {
                        "value": "1967",
                        "lable": "新建县"
                    },
                    {
                        "value": "1968",
                        "lable": "安义县"
                    },
                    {
                        "value": "1969",
                        "lable": "进贤县"
                    }
                ]
            },
            {
                "value": "234",
                "lable": "抚州",
                "children": [
                    {
                        "value": "1970",
                        "lable": "临川区"
                    },
                    {
                        "value": "1971",
                        "lable": "南城县"
                    },
                    {
                        "value": "1972",
                        "lable": "黎川县"
                    },
                    {
                        "value": "1973",
                        "lable": "南丰县"
                    },
                    {
                        "value": "1974",
                        "lable": "崇仁县"
                    },
                    {
                        "value": "1975",
                        "lable": "乐安县"
                    },
                    {
                        "value": "1976",
                        "lable": "宜黄县"
                    },
                    {
                        "value": "1977",
                        "lable": "金溪县"
                    },
                    {
                        "value": "1978",
                        "lable": "资溪县"
                    },
                    {
                        "value": "1979",
                        "lable": "东乡县"
                    },
                    {
                        "value": "1980",
                        "lable": "广昌县"
                    }
                ]
            },
            {
                "value": "235",
                "lable": "赣州",
                "children": [
                    {
                        "value": "1981",
                        "lable": "章贡区"
                    },
                    {
                        "value": "1982",
                        "lable": "于都县"
                    },
                    {
                        "value": "1983",
                        "lable": "瑞金市"
                    },
                    {
                        "value": "1984",
                        "lable": "南康市"
                    },
                    {
                        "value": "1985",
                        "lable": "赣县"
                    },
                    {
                        "value": "1986",
                        "lable": "信丰县"
                    },
                    {
                        "value": "1987",
                        "lable": "大余县"
                    },
                    {
                        "value": "1988",
                        "lable": "上犹县"
                    },
                    {
                        "value": "1989",
                        "lable": "崇义县"
                    },
                    {
                        "value": "1990",
                        "lable": "安远县"
                    },
                    {
                        "value": "1991",
                        "lable": "龙南县"
                    },
                    {
                        "value": "1992",
                        "lable": "定南县"
                    },
                    {
                        "value": "1993",
                        "lable": "全南县"
                    },
                    {
                        "value": "1994",
                        "lable": "宁都县"
                    },
                    {
                        "value": "1995",
                        "lable": "兴国县"
                    },
                    {
                        "value": "1996",
                        "lable": "会昌县"
                    },
                    {
                        "value": "1997",
                        "lable": "寻乌县"
                    },
                    {
                        "value": "1998",
                        "lable": "石城县"
                    }
                ]
            },
            {
                "value": "236",
                "lable": "吉安",
                "children": [
                    {
                        "value": "1999",
                        "lable": "安福县"
                    },
                    {
                        "value": "2000",
                        "lable": "吉州区"
                    },
                    {
                        "value": "2001",
                        "lable": "青原区"
                    },
                    {
                        "value": "2002",
                        "lable": "井冈山市"
                    },
                    {
                        "value": "2003",
                        "lable": "吉安县"
                    },
                    {
                        "value": "2004",
                        "lable": "吉水县"
                    },
                    {
                        "value": "2005",
                        "lable": "峡江县"
                    },
                    {
                        "value": "2006",
                        "lable": "新干县"
                    },
                    {
                        "value": "2007",
                        "lable": "永丰县"
                    },
                    {
                        "value": "2008",
                        "lable": "泰和县"
                    },
                    {
                        "value": "2009",
                        "lable": "遂川县"
                    },
                    {
                        "value": "2010",
                        "lable": "万安县"
                    },
                    {
                        "value": "2011",
                        "lable": "永新县"
                    }
                ]
            },
            {
                "value": "237",
                "lable": "景德镇",
                "children": [
                    {
                        "value": "2012",
                        "lable": "珠山区"
                    },
                    {
                        "value": "2013",
                        "lable": "昌江区"
                    },
                    {
                        "value": "2014",
                        "lable": "乐平市"
                    },
                    {
                        "value": "2015",
                        "lable": "浮梁县"
                    }
                ]
            },
            {
                "value": "238",
                "lable": "九江",
                "children": [
                    {
                        "value": "2016",
                        "lable": "浔阳区"
                    },
                    {
                        "value": "2017",
                        "lable": "庐山区"
                    },
                    {
                        "value": "2018",
                        "lable": "瑞昌市"
                    },
                    {
                        "value": "2019",
                        "lable": "九江县"
                    },
                    {
                        "value": "2020",
                        "lable": "武宁县"
                    },
                    {
                        "value": "2021",
                        "lable": "修水县"
                    },
                    {
                        "value": "2022",
                        "lable": "永修县"
                    },
                    {
                        "value": "2023",
                        "lable": "德安县"
                    },
                    {
                        "value": "2024",
                        "lable": "星子县"
                    },
                    {
                        "value": "2025",
                        "lable": "都昌县"
                    },
                    {
                        "value": "2026",
                        "lable": "湖口县"
                    },
                    {
                        "value": "2027",
                        "lable": "彭泽县"
                    }
                ]
            },
            {
                "value": "239",
                "lable": "萍乡",
                "children": [
                    {
                        "value": "2028",
                        "lable": "安源区"
                    },
                    {
                        "value": "2029",
                        "lable": "湘东区"
                    },
                    {
                        "value": "2030",
                        "lable": "莲花县"
                    },
                    {
                        "value": "2031",
                        "lable": "芦溪县"
                    },
                    {
                        "value": "2032",
                        "lable": "上栗县"
                    }
                ]
            },
            {
                "value": "240",
                "lable": "上饶",
                "children": [
                    {
                        "value": "2033",
                        "lable": "信州区"
                    },
                    {
                        "value": "2034",
                        "lable": "德兴市"
                    },
                    {
                        "value": "2035",
                        "lable": "上饶县"
                    },
                    {
                        "value": "2036",
                        "lable": "广丰县"
                    },
                    {
                        "value": "2037",
                        "lable": "玉山县"
                    },
                    {
                        "value": "2038",
                        "lable": "铅山县"
                    },
                    {
                        "value": "2039",
                        "lable": "横峰县"
                    },
                    {
                        "value": "2040",
                        "lable": "弋阳县"
                    },
                    {
                        "value": "2041",
                        "lable": "余干县"
                    },
                    {
                        "value": "2042",
                        "lable": "波阳县"
                    },
                    {
                        "value": "2043",
                        "lable": "万年县"
                    },
                    {
                        "value": "2044",
                        "lable": "婺源县"
                    }
                ]
            },
            {
                "value": "241",
                "lable": "新余",
                "children": [
                    {
                        "value": "2045",
                        "lable": "渝水区"
                    },
                    {
                        "value": "2046",
                        "lable": "分宜县"
                    }
                ]
            },
            {
                "value": "242",
                "lable": "宜春",
                "children": [
                    {
                        "value": "2047",
                        "lable": "袁州区"
                    },
                    {
                        "value": "2048",
                        "lable": "丰城市"
                    },
                    {
                        "value": "2049",
                        "lable": "樟树市"
                    },
                    {
                        "value": "2050",
                        "lable": "高安市"
                    },
                    {
                        "value": "2051",
                        "lable": "奉新县"
                    },
                    {
                        "value": "2052",
                        "lable": "万载县"
                    },
                    {
                        "value": "2053",
                        "lable": "上高县"
                    },
                    {
                        "value": "2054",
                        "lable": "宜丰县"
                    },
                    {
                        "value": "2055",
                        "lable": "靖安县"
                    },
                    {
                        "value": "2056",
                        "lable": "铜鼓县"
                    }
                ]
            },
            {
                "value": "243",
                "lable": "鹰潭",
                "children": [
                    {
                        "value": "2057",
                        "lable": "月湖区"
                    },
                    {
                        "value": "2058",
                        "lable": "贵溪市"
                    },
                    {
                        "value": "2059",
                        "lable": "余江县"
                    }
                ]
            }
        ]
    },
    {
        "value": "18",
        "lable": "辽宁",
        "children": [
            {
                "value": "244",
                "lable": "沈阳",
                "children": [
                    {
                        "value": "2060",
                        "lable": "沈河区"
                    },
                    {
                        "value": "2061",
                        "lable": "皇姑区"
                    },
                    {
                        "value": "2062",
                        "lable": "和平区"
                    },
                    {
                        "value": "2063",
                        "lable": "大东区"
                    },
                    {
                        "value": "2064",
                        "lable": "铁西区"
                    },
                    {
                        "value": "2065",
                        "lable": "苏家屯区"
                    },
                    {
                        "value": "2066",
                        "lable": "东陵区"
                    },
                    {
                        "value": "2067",
                        "lable": "沈北新区"
                    },
                    {
                        "value": "2068",
                        "lable": "于洪区"
                    },
                    {
                        "value": "2069",
                        "lable": "浑南新区"
                    },
                    {
                        "value": "2070",
                        "lable": "新民市"
                    },
                    {
                        "value": "2071",
                        "lable": "辽中县"
                    },
                    {
                        "value": "2072",
                        "lable": "康平县"
                    },
                    {
                        "value": "2073",
                        "lable": "法库县"
                    }
                ]
            },
            {
                "value": "245",
                "lable": "大连",
                "children": [
                    {
                        "value": "2074",
                        "lable": "西岗区"
                    },
                    {
                        "value": "2075",
                        "lable": "中山区"
                    },
                    {
                        "value": "2076",
                        "lable": "沙河口区"
                    },
                    {
                        "value": "2077",
                        "lable": "甘井子区"
                    },
                    {
                        "value": "2078",
                        "lable": "旅顺口区"
                    },
                    {
                        "value": "2079",
                        "lable": "金州区"
                    },
                    {
                        "value": "2080",
                        "lable": "开发区"
                    },
                    {
                        "value": "2081",
                        "lable": "瓦房店市"
                    },
                    {
                        "value": "2082",
                        "lable": "普兰店市"
                    },
                    {
                        "value": "2083",
                        "lable": "庄河市"
                    },
                    {
                        "value": "2084",
                        "lable": "长海县"
                    }
                ]
            },
            {
                "value": "246",
                "lable": "鞍山",
                "children": [
                    {
                        "value": "2085",
                        "lable": "铁东区"
                    },
                    {
                        "value": "2086",
                        "lable": "铁西区"
                    },
                    {
                        "value": "2087",
                        "lable": "立山区"
                    },
                    {
                        "value": "2088",
                        "lable": "千山区"
                    },
                    {
                        "value": "2089",
                        "lable": "岫岩"
                    },
                    {
                        "value": "2090",
                        "lable": "海城市"
                    },
                    {
                        "value": "2091",
                        "lable": "台安县"
                    }
                ]
            },
            {
                "value": "247",
                "lable": "本溪",
                "children": [
                    {
                        "value": "2092",
                        "lable": "本溪"
                    },
                    {
                        "value": "2093",
                        "lable": "平山区"
                    },
                    {
                        "value": "2094",
                        "lable": "明山区"
                    },
                    {
                        "value": "2095",
                        "lable": "溪湖区"
                    },
                    {
                        "value": "2096",
                        "lable": "南芬区"
                    },
                    {
                        "value": "2097",
                        "lable": "桓仁"
                    }
                ]
            },
            {
                "value": "248",
                "lable": "朝阳",
                "children": [
                    {
                        "value": "2098",
                        "lable": "双塔区"
                    },
                    {
                        "value": "2099",
                        "lable": "龙城区"
                    },
                    {
                        "value": "2100",
                        "lable": "喀喇沁左翼蒙古族自治县"
                    },
                    {
                        "value": "2101",
                        "lable": "北票市"
                    },
                    {
                        "value": "2102",
                        "lable": "凌源市"
                    },
                    {
                        "value": "2103",
                        "lable": "朝阳县"
                    },
                    {
                        "value": "2104",
                        "lable": "建平县"
                    }
                ]
            },
            {
                "value": "249",
                "lable": "丹东",
                "children": [
                    {
                        "value": "2105",
                        "lable": "振兴区"
                    },
                    {
                        "value": "2106",
                        "lable": "元宝区"
                    },
                    {
                        "value": "2107",
                        "lable": "振安区"
                    },
                    {
                        "value": "2108",
                        "lable": "宽甸"
                    },
                    {
                        "value": "2109",
                        "lable": "东港市"
                    },
                    {
                        "value": "2110",
                        "lable": "凤城市"
                    }
                ]
            },
            {
                "value": "250",
                "lable": "抚顺",
                "children": [
                    {
                        "value": "2111",
                        "lable": "顺城区"
                    },
                    {
                        "value": "2112",
                        "lable": "新抚区"
                    },
                    {
                        "value": "2113",
                        "lable": "东洲区"
                    },
                    {
                        "value": "2114",
                        "lable": "望花区"
                    },
                    {
                        "value": "2115",
                        "lable": "清原"
                    },
                    {
                        "value": "2116",
                        "lable": "新宾"
                    },
                    {
                        "value": "2117",
                        "lable": "抚顺县"
                    }
                ]
            },
            {
                "value": "251",
                "lable": "阜新",
                "children": [
                    {
                        "value": "2118",
                        "lable": "阜新"
                    },
                    {
                        "value": "2119",
                        "lable": "海州区"
                    },
                    {
                        "value": "2120",
                        "lable": "新邱区"
                    },
                    {
                        "value": "2121",
                        "lable": "太平区"
                    },
                    {
                        "value": "2122",
                        "lable": "清河门区"
                    },
                    {
                        "value": "2123",
                        "lable": "细河区"
                    },
                    {
                        "value": "2124",
                        "lable": "彰武县"
                    }
                ]
            },
            {
                "value": "252",
                "lable": "葫芦岛",
                "children": [
                    {
                        "value": "2125",
                        "lable": "龙港区"
                    },
                    {
                        "value": "2126",
                        "lable": "南票区"
                    },
                    {
                        "value": "2127",
                        "lable": "连山区"
                    },
                    {
                        "value": "2128",
                        "lable": "兴城市"
                    },
                    {
                        "value": "2129",
                        "lable": "绥中县"
                    },
                    {
                        "value": "2130",
                        "lable": "建昌县"
                    }
                ]
            },
            {
                "value": "253",
                "lable": "锦州",
                "children": [
                    {
                        "value": "2131",
                        "lable": "太和区"
                    },
                    {
                        "value": "2132",
                        "lable": "古塔区"
                    },
                    {
                        "value": "2133",
                        "lable": "凌河区"
                    },
                    {
                        "value": "2134",
                        "lable": "凌海市"
                    },
                    {
                        "value": "2135",
                        "lable": "北镇市"
                    },
                    {
                        "value": "2136",
                        "lable": "黑山县"
                    },
                    {
                        "value": "2137",
                        "lable": "义县"
                    }
                ]
            },
            {
                "value": "254",
                "lable": "辽阳",
                "children": [
                    {
                        "value": "2138",
                        "lable": "白塔区"
                    },
                    {
                        "value": "2139",
                        "lable": "文圣区"
                    },
                    {
                        "value": "2140",
                        "lable": "宏伟区"
                    },
                    {
                        "value": "2141",
                        "lable": "太子河区"
                    },
                    {
                        "value": "2142",
                        "lable": "弓长岭区"
                    },
                    {
                        "value": "2143",
                        "lable": "灯塔市"
                    },
                    {
                        "value": "2144",
                        "lable": "辽阳县"
                    }
                ]
            },
            {
                "value": "255",
                "lable": "盘锦",
                "children": [
                    {
                        "value": "2145",
                        "lable": "双台子区"
                    },
                    {
                        "value": "2146",
                        "lable": "兴隆台区"
                    },
                    {
                        "value": "2147",
                        "lable": "大洼县"
                    },
                    {
                        "value": "2148",
                        "lable": "盘山县"
                    }
                ]
            },
            {
                "value": "256",
                "lable": "铁岭",
                "children": [
                    {
                        "value": "2149",
                        "lable": "银州区"
                    },
                    {
                        "value": "2150",
                        "lable": "清河区"
                    },
                    {
                        "value": "2151",
                        "lable": "调兵山市"
                    },
                    {
                        "value": "2152",
                        "lable": "开原市"
                    },
                    {
                        "value": "2153",
                        "lable": "铁岭县"
                    },
                    {
                        "value": "2154",
                        "lable": "西丰县"
                    },
                    {
                        "value": "2155",
                        "lable": "昌图县"
                    }
                ]
            },
            {
                "value": "257",
                "lable": "营口",
                "children": [
                    {
                        "value": "2156",
                        "lable": "站前区"
                    },
                    {
                        "value": "2157",
                        "lable": "西市区"
                    },
                    {
                        "value": "2158",
                        "lable": "鲅鱼圈区"
                    },
                    {
                        "value": "2159",
                        "lable": "老边区"
                    },
                    {
                        "value": "2160",
                        "lable": "盖州市"
                    },
                    {
                        "value": "2161",
                        "lable": "大石桥市"
                    }
                ]
            }
        ]
    },
    {
        "value": "19",
        "lable": "内蒙古",
        "children": [
            {
                "value": "258",
                "lable": "呼和浩特",
                "children": [
                    {
                        "value": "2162",
                        "lable": "回民区"
                    },
                    {
                        "value": "2163",
                        "lable": "玉泉区"
                    },
                    {
                        "value": "2164",
                        "lable": "新城区"
                    },
                    {
                        "value": "2165",
                        "lable": "赛罕区"
                    },
                    {
                        "value": "2166",
                        "lable": "清水河县"
                    },
                    {
                        "value": "2167",
                        "lable": "土默特左旗"
                    },
                    {
                        "value": "2168",
                        "lable": "托克托县"
                    },
                    {
                        "value": "2169",
                        "lable": "和林格尔县"
                    },
                    {
                        "value": "2170",
                        "lable": "武川县"
                    }
                ]
            },
            {
                "value": "259",
                "lable": "阿拉善盟",
                "children": [
                    {
                        "value": "2171",
                        "lable": "阿拉善左旗"
                    },
                    {
                        "value": "2172",
                        "lable": "阿拉善右旗"
                    },
                    {
                        "value": "2173",
                        "lable": "额济纳旗"
                    }
                ]
            },
            {
                "value": "260",
                "lable": "巴彦淖尔盟",
                "children": [
                    {
                        "value": "2174",
                        "lable": "临河区"
                    },
                    {
                        "value": "2175",
                        "lable": "五原县"
                    },
                    {
                        "value": "2176",
                        "lable": "磴口县"
                    },
                    {
                        "value": "2177",
                        "lable": "乌拉特前旗"
                    },
                    {
                        "value": "2178",
                        "lable": "乌拉特中旗"
                    },
                    {
                        "value": "2179",
                        "lable": "乌拉特后旗"
                    },
                    {
                        "value": "2180",
                        "lable": "杭锦后旗"
                    }
                ]
            },
            {
                "value": "261",
                "lable": "包头",
                "children": [
                    {
                        "value": "2181",
                        "lable": "昆都仑区"
                    },
                    {
                        "value": "2182",
                        "lable": "青山区"
                    },
                    {
                        "value": "2183",
                        "lable": "东河区"
                    },
                    {
                        "value": "2184",
                        "lable": "九原区"
                    },
                    {
                        "value": "2185",
                        "lable": "石拐区"
                    },
                    {
                        "value": "2186",
                        "lable": "白云矿区"
                    },
                    {
                        "value": "2187",
                        "lable": "土默特右旗"
                    },
                    {
                        "value": "2188",
                        "lable": "固阳县"
                    },
                    {
                        "value": "2189",
                        "lable": "达尔罕茂明安联合旗"
                    }
                ]
            },
            {
                "value": "262",
                "lable": "赤峰",
                "children": [
                    {
                        "value": "2190",
                        "lable": "红山区"
                    },
                    {
                        "value": "2191",
                        "lable": "元宝山区"
                    },
                    {
                        "value": "2192",
                        "lable": "松山区"
                    },
                    {
                        "value": "2193",
                        "lable": "阿鲁科尔沁旗"
                    },
                    {
                        "value": "2194",
                        "lable": "巴林左旗"
                    },
                    {
                        "value": "2195",
                        "lable": "巴林右旗"
                    },
                    {
                        "value": "2196",
                        "lable": "林西县"
                    },
                    {
                        "value": "2197",
                        "lable": "克什克腾旗"
                    },
                    {
                        "value": "2198",
                        "lable": "翁牛特旗"
                    },
                    {
                        "value": "2199",
                        "lable": "喀喇沁旗"
                    },
                    {
                        "value": "2200",
                        "lable": "宁城县"
                    },
                    {
                        "value": "2201",
                        "lable": "敖汉旗"
                    }
                ]
            },
            {
                "value": "263",
                "lable": "鄂尔多斯",
                "children": [
                    {
                        "value": "2202",
                        "lable": "东胜区"
                    },
                    {
                        "value": "2203",
                        "lable": "达拉特旗"
                    },
                    {
                        "value": "2204",
                        "lable": "准格尔旗"
                    },
                    {
                        "value": "2205",
                        "lable": "鄂托克前旗"
                    },
                    {
                        "value": "2206",
                        "lable": "鄂托克旗"
                    },
                    {
                        "value": "2207",
                        "lable": "杭锦旗"
                    },
                    {
                        "value": "2208",
                        "lable": "乌审旗"
                    },
                    {
                        "value": "2209",
                        "lable": "伊金霍洛旗"
                    }
                ]
            },
            {
                "value": "264",
                "lable": "呼伦贝尔",
                "children": [
                    {
                        "value": "2210",
                        "lable": "海拉尔区"
                    },
                    {
                        "value": "2211",
                        "lable": "莫力达瓦"
                    },
                    {
                        "value": "2212",
                        "lable": "满洲里市"
                    },
                    {
                        "value": "2213",
                        "lable": "牙克石市"
                    },
                    {
                        "value": "2214",
                        "lable": "扎兰屯市"
                    },
                    {
                        "value": "2215",
                        "lable": "额尔古纳市"
                    },
                    {
                        "value": "2216",
                        "lable": "根河市"
                    },
                    {
                        "value": "2217",
                        "lable": "阿荣旗"
                    },
                    {
                        "value": "2218",
                        "lable": "鄂伦春自治旗"
                    },
                    {
                        "value": "2219",
                        "lable": "鄂温克族自治旗"
                    },
                    {
                        "value": "2220",
                        "lable": "陈巴尔虎旗"
                    },
                    {
                        "value": "2221",
                        "lable": "新巴尔虎左旗"
                    },
                    {
                        "value": "2222",
                        "lable": "新巴尔虎右旗"
                    }
                ]
            },
            {
                "value": "265",
                "lable": "通辽",
                "children": [
                    {
                        "value": "2223",
                        "lable": "科尔沁区"
                    },
                    {
                        "value": "2224",
                        "lable": "霍林郭勒市"
                    },
                    {
                        "value": "2225",
                        "lable": "科尔沁左翼中旗"
                    },
                    {
                        "value": "2226",
                        "lable": "科尔沁左翼后旗"
                    },
                    {
                        "value": "2227",
                        "lable": "开鲁县"
                    },
                    {
                        "value": "2228",
                        "lable": "库伦旗"
                    },
                    {
                        "value": "2229",
                        "lable": "奈曼旗"
                    },
                    {
                        "value": "2230",
                        "lable": "扎鲁特旗"
                    }
                ]
            },
            {
                "value": "266",
                "lable": "乌海",
                "children": [
                    {
                        "value": "2231",
                        "lable": "海勃湾区"
                    },
                    {
                        "value": "2232",
                        "lable": "乌达区"
                    },
                    {
                        "value": "2233",
                        "lable": "海南区"
                    }
                ]
            },
            {
                "value": "267",
                "lable": "乌兰察布市",
                "children": [
                    {
                        "value": "2234",
                        "lable": "化德县"
                    },
                    {
                        "value": "2235",
                        "lable": "集宁区"
                    },
                    {
                        "value": "2236",
                        "lable": "丰镇市"
                    },
                    {
                        "value": "2237",
                        "lable": "卓资县"
                    },
                    {
                        "value": "2238",
                        "lable": "商都县"
                    },
                    {
                        "value": "2239",
                        "lable": "兴和县"
                    },
                    {
                        "value": "2240",
                        "lable": "凉城县"
                    },
                    {
                        "value": "2241",
                        "lable": "察哈尔右翼前旗"
                    },
                    {
                        "value": "2242",
                        "lable": "察哈尔右翼中旗"
                    },
                    {
                        "value": "2243",
                        "lable": "察哈尔右翼后旗"
                    },
                    {
                        "value": "2244",
                        "lable": "四子王旗"
                    }
                ]
            },
            {
                "value": "268",
                "lable": "锡林郭勒盟",
                "children": [
                    {
                        "value": "2245",
                        "lable": "二连浩特市"
                    },
                    {
                        "value": "2246",
                        "lable": "锡林浩特市"
                    },
                    {
                        "value": "2247",
                        "lable": "阿巴嘎旗"
                    },
                    {
                        "value": "2248",
                        "lable": "苏尼特左旗"
                    },
                    {
                        "value": "2249",
                        "lable": "苏尼特右旗"
                    },
                    {
                        "value": "2250",
                        "lable": "东乌珠穆沁旗"
                    },
                    {
                        "value": "2251",
                        "lable": "西乌珠穆沁旗"
                    },
                    {
                        "value": "2252",
                        "lable": "太仆寺旗"
                    },
                    {
                        "value": "2253",
                        "lable": "镶黄旗"
                    },
                    {
                        "value": "2254",
                        "lable": "正镶白旗"
                    },
                    {
                        "value": "2255",
                        "lable": "正蓝旗"
                    },
                    {
                        "value": "2256",
                        "lable": "多伦县"
                    }
                ]
            },
            {
                "value": "269",
                "lable": "兴安盟",
                "children": [
                    {
                        "value": "2257",
                        "lable": "乌兰浩特市"
                    },
                    {
                        "value": "2258",
                        "lable": "阿尔山市"
                    },
                    {
                        "value": "2259",
                        "lable": "科尔沁右翼前旗"
                    },
                    {
                        "value": "2260",
                        "lable": "科尔沁右翼中旗"
                    },
                    {
                        "value": "2261",
                        "lable": "扎赉特旗"
                    },
                    {
                        "value": "2262",
                        "lable": "突泉县"
                    }
                ]
            }
        ]
    },
    {
        "value": "20",
        "lable": "宁夏",
        "children": [
            {
                "value": "270",
                "lable": "银川",
                "children": [
                    {
                        "value": "2263",
                        "lable": "西夏区"
                    },
                    {
                        "value": "2264",
                        "lable": "金凤区"
                    },
                    {
                        "value": "2265",
                        "lable": "兴庆区"
                    },
                    {
                        "value": "2266",
                        "lable": "灵武市"
                    },
                    {
                        "value": "2267",
                        "lable": "永宁县"
                    },
                    {
                        "value": "2268",
                        "lable": "贺兰县"
                    }
                ]
            },
            {
                "value": "271",
                "lable": "固原",
                "children": [
                    {
                        "value": "2269",
                        "lable": "原州区"
                    },
                    {
                        "value": "2270",
                        "lable": "海原县"
                    },
                    {
                        "value": "2271",
                        "lable": "西吉县"
                    },
                    {
                        "value": "2272",
                        "lable": "隆德县"
                    },
                    {
                        "value": "2273",
                        "lable": "泾源县"
                    },
                    {
                        "value": "2274",
                        "lable": "彭阳县"
                    }
                ]
            },
            {
                "value": "272",
                "lable": "石嘴山",
                "children": [
                    {
                        "value": "2275",
                        "lable": "惠农县"
                    },
                    {
                        "value": "2276",
                        "lable": "大武口区"
                    },
                    {
                        "value": "2277",
                        "lable": "惠农区"
                    },
                    {
                        "value": "2278",
                        "lable": "陶乐县"
                    },
                    {
                        "value": "2279",
                        "lable": "平罗县"
                    }
                ]
            },
            {
                "value": "273",
                "lable": "吴忠",
                "children": [
                    {
                        "value": "2280",
                        "lable": "利通区"
                    },
                    {
                        "value": "2281",
                        "lable": "中卫县"
                    },
                    {
                        "value": "2282",
                        "lable": "青铜峡市"
                    },
                    {
                        "value": "2283",
                        "lable": "中宁县"
                    },
                    {
                        "value": "2284",
                        "lable": "盐池县"
                    },
                    {
                        "value": "2285",
                        "lable": "同心县"
                    }
                ]
            },
            {
                "value": "274",
                "lable": "中卫",
                "children": [
                    {
                        "value": "2286",
                        "lable": "沙坡头区"
                    },
                    {
                        "value": "2287",
                        "lable": "海原县"
                    },
                    {
                        "value": "2288",
                        "lable": "中宁县"
                    }
                ]
            }
        ]
    },
    {
        "value": "21",
        "lable": "青海",
        "children": [
            {
                "value": "275",
                "lable": "西宁",
                "children": [
                    {
                        "value": "2289",
                        "lable": "城中区"
                    },
                    {
                        "value": "2290",
                        "lable": "城东区"
                    },
                    {
                        "value": "2291",
                        "lable": "城西区"
                    },
                    {
                        "value": "2292",
                        "lable": "城北区"
                    },
                    {
                        "value": "2293",
                        "lable": "湟中县"
                    },
                    {
                        "value": "2294",
                        "lable": "湟源县"
                    },
                    {
                        "value": "2295",
                        "lable": "大通"
                    }
                ]
            },
            {
                "value": "276",
                "lable": "果洛",
                "children": [
                    {
                        "value": "2296",
                        "lable": "玛沁县"
                    },
                    {
                        "value": "2297",
                        "lable": "班玛县"
                    },
                    {
                        "value": "2298",
                        "lable": "甘德县"
                    },
                    {
                        "value": "2299",
                        "lable": "达日县"
                    },
                    {
                        "value": "2300",
                        "lable": "久治县"
                    },
                    {
                        "value": "2301",
                        "lable": "玛多县"
                    }
                ]
            },
            {
                "value": "277",
                "lable": "海北",
                "children": [
                    {
                        "value": "2302",
                        "lable": "海晏县"
                    },
                    {
                        "value": "2303",
                        "lable": "祁连县"
                    },
                    {
                        "value": "2304",
                        "lable": "刚察县"
                    },
                    {
                        "value": "2305",
                        "lable": "门源"
                    }
                ]
            },
            {
                "value": "278",
                "lable": "海东",
                "children": [
                    {
                        "value": "2306",
                        "lable": "平安县"
                    },
                    {
                        "value": "2307",
                        "lable": "乐都县"
                    },
                    {
                        "value": "2308",
                        "lable": "民和"
                    },
                    {
                        "value": "2309",
                        "lable": "互助"
                    },
                    {
                        "value": "2310",
                        "lable": "化隆"
                    },
                    {
                        "value": "2311",
                        "lable": "循化"
                    }
                ]
            },
            {
                "value": "279",
                "lable": "海南",
                "children": [
                    {
                        "value": "2312",
                        "lable": "共和县"
                    },
                    {
                        "value": "2313",
                        "lable": "同德县"
                    },
                    {
                        "value": "2314",
                        "lable": "贵德县"
                    },
                    {
                        "value": "2315",
                        "lable": "兴海县"
                    },
                    {
                        "value": "2316",
                        "lable": "贵南县"
                    }
                ]
            },
            {
                "value": "280",
                "lable": "海西",
                "children": [
                    {
                        "value": "2317",
                        "lable": "德令哈市"
                    },
                    {
                        "value": "2318",
                        "lable": "格尔木市"
                    },
                    {
                        "value": "2319",
                        "lable": "乌兰县"
                    },
                    {
                        "value": "2320",
                        "lable": "都兰县"
                    },
                    {
                        "value": "2321",
                        "lable": "天峻县"
                    }
                ]
            },
            {
                "value": "281",
                "lable": "黄南",
                "children": [
                    {
                        "value": "2322",
                        "lable": "同仁县"
                    },
                    {
                        "value": "2323",
                        "lable": "尖扎县"
                    },
                    {
                        "value": "2324",
                        "lable": "泽库县"
                    },
                    {
                        "value": "2325",
                        "lable": "河南蒙古族自治县"
                    }
                ]
            },
            {
                "value": "282",
                "lable": "玉树",
                "children": [
                    {
                        "value": "2326",
                        "lable": "玉树县"
                    },
                    {
                        "value": "2327",
                        "lable": "杂多县"
                    },
                    {
                        "value": "2328",
                        "lable": "称多县"
                    },
                    {
                        "value": "2329",
                        "lable": "治多县"
                    },
                    {
                        "value": "2330",
                        "lable": "囊谦县"
                    },
                    {
                        "value": "2331",
                        "lable": "曲麻莱县"
                    }
                ]
            }
        ]
    },
    {
        "value": "22",
        "lable": "山东",
        "children": [
            {
                "value": "283",
                "lable": "济南",
                "children": [
                    {
                        "value": "2332",
                        "lable": "市中区"
                    },
                    {
                        "value": "2333",
                        "lable": "历下区"
                    },
                    {
                        "value": "2334",
                        "lable": "天桥区"
                    },
                    {
                        "value": "2335",
                        "lable": "槐荫区"
                    },
                    {
                        "value": "2336",
                        "lable": "历城区"
                    },
                    {
                        "value": "2337",
                        "lable": "长清区"
                    },
                    {
                        "value": "2338",
                        "lable": "章丘市"
                    },
                    {
                        "value": "2339",
                        "lable": "平阴县"
                    },
                    {
                        "value": "2340",
                        "lable": "济阳县"
                    },
                    {
                        "value": "2341",
                        "lable": "商河县"
                    }
                ]
            },
            {
                "value": "284",
                "lable": "青岛",
                "children": [
                    {
                        "value": "2342",
                        "lable": "市南区"
                    },
                    {
                        "value": "2343",
                        "lable": "市北区"
                    },
                    {
                        "value": "2344",
                        "lable": "城阳区"
                    },
                    {
                        "value": "2345",
                        "lable": "四方区"
                    },
                    {
                        "value": "2346",
                        "lable": "李沧区"
                    },
                    {
                        "value": "2347",
                        "lable": "黄岛区"
                    },
                    {
                        "value": "2348",
                        "lable": "崂山区"
                    },
                    {
                        "value": "2349",
                        "lable": "胶州市"
                    },
                    {
                        "value": "2350",
                        "lable": "即墨市"
                    },
                    {
                        "value": "2351",
                        "lable": "平度市"
                    },
                    {
                        "value": "2352",
                        "lable": "胶南市"
                    },
                    {
                        "value": "2353",
                        "lable": "莱西市"
                    }
                ]
            },
            {
                "value": "285",
                "lable": "滨州",
                "children": [
                    {
                        "value": "2354",
                        "lable": "滨城区"
                    },
                    {
                        "value": "2355",
                        "lable": "惠民县"
                    },
                    {
                        "value": "2356",
                        "lable": "阳信县"
                    },
                    {
                        "value": "2357",
                        "lable": "无棣县"
                    },
                    {
                        "value": "2358",
                        "lable": "沾化县"
                    },
                    {
                        "value": "2359",
                        "lable": "博兴县"
                    },
                    {
                        "value": "2360",
                        "lable": "邹平县"
                    }
                ]
            },
            {
                "value": "286",
                "lable": "德州",
                "children": [
                    {
                        "value": "2361",
                        "lable": "德城区"
                    },
                    {
                        "value": "2362",
                        "lable": "陵县"
                    },
                    {
                        "value": "2363",
                        "lable": "乐陵市"
                    },
                    {
                        "value": "2364",
                        "lable": "禹城市"
                    },
                    {
                        "value": "2365",
                        "lable": "宁津县"
                    },
                    {
                        "value": "2366",
                        "lable": "庆云县"
                    },
                    {
                        "value": "2367",
                        "lable": "临邑县"
                    },
                    {
                        "value": "2368",
                        "lable": "齐河县"
                    },
                    {
                        "value": "2369",
                        "lable": "平原县"
                    },
                    {
                        "value": "2370",
                        "lable": "夏津县"
                    },
                    {
                        "value": "2371",
                        "lable": "武城县"
                    }
                ]
            },
            {
                "value": "287",
                "lable": "东营",
                "children": [
                    {
                        "value": "2372",
                        "lable": "东营区"
                    },
                    {
                        "value": "2373",
                        "lable": "河口区"
                    },
                    {
                        "value": "2374",
                        "lable": "垦利县"
                    },
                    {
                        "value": "2375",
                        "lable": "利津县"
                    },
                    {
                        "value": "2376",
                        "lable": "广饶县"
                    }
                ]
            },
            {
                "value": "288",
                "lable": "菏泽",
                "children": [
                    {
                        "value": "2377",
                        "lable": "牡丹区"
                    },
                    {
                        "value": "2378",
                        "lable": "曹县"
                    },
                    {
                        "value": "2379",
                        "lable": "单县"
                    },
                    {
                        "value": "2380",
                        "lable": "成武县"
                    },
                    {
                        "value": "2381",
                        "lable": "巨野县"
                    },
                    {
                        "value": "2382",
                        "lable": "郓城县"
                    },
                    {
                        "value": "2383",
                        "lable": "鄄城县"
                    },
                    {
                        "value": "2384",
                        "lable": "定陶县"
                    },
                    {
                        "value": "2385",
                        "lable": "东明县"
                    }
                ]
            },
            {
                "value": "289",
                "lable": "济宁",
                "children": [
                    {
                        "value": "2386",
                        "lable": "市中区"
                    },
                    {
                        "value": "2387",
                        "lable": "任城区"
                    },
                    {
                        "value": "2388",
                        "lable": "曲阜市"
                    },
                    {
                        "value": "2389",
                        "lable": "兖州市"
                    },
                    {
                        "value": "2390",
                        "lable": "邹城市"
                    },
                    {
                        "value": "2391",
                        "lable": "微山县"
                    },
                    {
                        "value": "2392",
                        "lable": "鱼台县"
                    },
                    {
                        "value": "2393",
                        "lable": "金乡县"
                    },
                    {
                        "value": "2394",
                        "lable": "嘉祥县"
                    },
                    {
                        "value": "2395",
                        "lable": "汶上县"
                    },
                    {
                        "value": "2396",
                        "lable": "泗水县"
                    },
                    {
                        "value": "2397",
                        "lable": "梁山县"
                    }
                ]
            },
            {
                "value": "290",
                "lable": "莱芜",
                "children": [
                    {
                        "value": "2398",
                        "lable": "莱城区"
                    },
                    {
                        "value": "2399",
                        "lable": "钢城区"
                    }
                ]
            },
            {
                "value": "291",
                "lable": "聊城",
                "children": [
                    {
                        "value": "2400",
                        "lable": "东昌府区"
                    },
                    {
                        "value": "2401",
                        "lable": "临清市"
                    },
                    {
                        "value": "2402",
                        "lable": "阳谷县"
                    },
                    {
                        "value": "2403",
                        "lable": "莘县"
                    },
                    {
                        "value": "2404",
                        "lable": "茌平县"
                    },
                    {
                        "value": "2405",
                        "lable": "东阿县"
                    },
                    {
                        "value": "2406",
                        "lable": "冠县"
                    },
                    {
                        "value": "2407",
                        "lable": "高唐县"
                    }
                ]
            },
            {
                "value": "292",
                "lable": "临沂",
                "children": [
                    {
                        "value": "2408",
                        "lable": "兰山区"
                    },
                    {
                        "value": "2409",
                        "lable": "罗庄区"
                    },
                    {
                        "value": "2410",
                        "lable": "河东区"
                    },
                    {
                        "value": "2411",
                        "lable": "沂南县"
                    },
                    {
                        "value": "2412",
                        "lable": "郯城县"
                    },
                    {
                        "value": "2413",
                        "lable": "沂水县"
                    },
                    {
                        "value": "2414",
                        "lable": "苍山县"
                    },
                    {
                        "value": "2415",
                        "lable": "费县"
                    },
                    {
                        "value": "2416",
                        "lable": "平邑县"
                    },
                    {
                        "value": "2417",
                        "lable": "莒南县"
                    },
                    {
                        "value": "2418",
                        "lable": "蒙阴县"
                    },
                    {
                        "value": "2419",
                        "lable": "临沭县"
                    }
                ]
            },
            {
                "value": "293",
                "lable": "日照",
                "children": [
                    {
                        "value": "2420",
                        "lable": "东港区"
                    },
                    {
                        "value": "2421",
                        "lable": "岚山区"
                    },
                    {
                        "value": "2422",
                        "lable": "五莲县"
                    },
                    {
                        "value": "2423",
                        "lable": "莒县"
                    }
                ]
            },
            {
                "value": "294",
                "lable": "泰安",
                "children": [
                    {
                        "value": "2424",
                        "lable": "泰山区"
                    },
                    {
                        "value": "2425",
                        "lable": "岱岳区"
                    },
                    {
                        "value": "2426",
                        "lable": "新泰市"
                    },
                    {
                        "value": "2427",
                        "lable": "肥城市"
                    },
                    {
                        "value": "2428",
                        "lable": "宁阳县"
                    },
                    {
                        "value": "2429",
                        "lable": "东平县"
                    }
                ]
            },
            {
                "value": "295",
                "lable": "威海",
                "children": [
                    {
                        "value": "2430",
                        "lable": "荣成市"
                    },
                    {
                        "value": "2431",
                        "lable": "乳山市"
                    },
                    {
                        "value": "2432",
                        "lable": "环翠区"
                    },
                    {
                        "value": "2433",
                        "lable": "文登市"
                    }
                ]
            },
            {
                "value": "296",
                "lable": "潍坊",
                "children": [
                    {
                        "value": "2434",
                        "lable": "潍城区"
                    },
                    {
                        "value": "2435",
                        "lable": "寒亭区"
                    },
                    {
                        "value": "2436",
                        "lable": "坊子区"
                    },
                    {
                        "value": "2437",
                        "lable": "奎文区"
                    },
                    {
                        "value": "2438",
                        "lable": "青州市"
                    },
                    {
                        "value": "2439",
                        "lable": "诸城市"
                    },
                    {
                        "value": "2440",
                        "lable": "寿光市"
                    },
                    {
                        "value": "2441",
                        "lable": "安丘市"
                    },
                    {
                        "value": "2442",
                        "lable": "高密市"
                    },
                    {
                        "value": "2443",
                        "lable": "昌邑市"
                    },
                    {
                        "value": "2444",
                        "lable": "临朐县"
                    },
                    {
                        "value": "2445",
                        "lable": "昌乐县"
                    }
                ]
            },
            {
                "value": "297",
                "lable": "烟台",
                "children": [
                    {
                        "value": "2446",
                        "lable": "芝罘区"
                    },
                    {
                        "value": "2447",
                        "lable": "福山区"
                    },
                    {
                        "value": "2448",
                        "lable": "牟平区"
                    },
                    {
                        "value": "2449",
                        "lable": "莱山区"
                    },
                    {
                        "value": "2450",
                        "lable": "开发区"
                    },
                    {
                        "value": "2451",
                        "lable": "龙口市"
                    },
                    {
                        "value": "2452",
                        "lable": "莱阳市"
                    },
                    {
                        "value": "2453",
                        "lable": "莱州市"
                    },
                    {
                        "value": "2454",
                        "lable": "蓬莱市"
                    },
                    {
                        "value": "2455",
                        "lable": "招远市"
                    },
                    {
                        "value": "2456",
                        "lable": "栖霞市"
                    },
                    {
                        "value": "2457",
                        "lable": "海阳市"
                    },
                    {
                        "value": "2458",
                        "lable": "长岛县"
                    }
                ]
            },
            {
                "value": "298",
                "lable": "枣庄",
                "children": [
                    {
                        "value": "2459",
                        "lable": "市中区"
                    },
                    {
                        "value": "2460",
                        "lable": "山亭区"
                    },
                    {
                        "value": "2461",
                        "lable": "峄城区"
                    },
                    {
                        "value": "2462",
                        "lable": "台儿庄区"
                    },
                    {
                        "value": "2463",
                        "lable": "薛城区"
                    },
                    {
                        "value": "2464",
                        "lable": "滕州市"
                    }
                ]
            },
            {
                "value": "299",
                "lable": "淄博",
                "children": [
                    {
                        "value": "2465",
                        "lable": "张店区"
                    },
                    {
                        "value": "2466",
                        "lable": "临淄区"
                    },
                    {
                        "value": "2467",
                        "lable": "淄川区"
                    },
                    {
                        "value": "2468",
                        "lable": "博山区"
                    },
                    {
                        "value": "2469",
                        "lable": "周村区"
                    },
                    {
                        "value": "2470",
                        "lable": "桓台县"
                    },
                    {
                        "value": "2471",
                        "lable": "高青县"
                    },
                    {
                        "value": "2472",
                        "lable": "沂源县"
                    }
                ]
            }
        ]
    },
    {
        "value": "23",
        "lable": "山西",
        "children": [
            {
                "value": "300",
                "lable": "太原",
                "children": [
                    {
                        "value": "2473",
                        "lable": "杏花岭区"
                    },
                    {
                        "value": "2474",
                        "lable": "小店区"
                    },
                    {
                        "value": "2475",
                        "lable": "迎泽区"
                    },
                    {
                        "value": "2476",
                        "lable": "尖草坪区"
                    },
                    {
                        "value": "2477",
                        "lable": "万柏林区"
                    },
                    {
                        "value": "2478",
                        "lable": "晋源区"
                    },
                    {
                        "value": "2479",
                        "lable": "高新开发区"
                    },
                    {
                        "value": "2480",
                        "lable": "民营经济开发区"
                    },
                    {
                        "value": "2481",
                        "lable": "经济技术开发区"
                    },
                    {
                        "value": "2482",
                        "lable": "清徐县"
                    },
                    {
                        "value": "2483",
                        "lable": "阳曲县"
                    },
                    {
                        "value": "2484",
                        "lable": "娄烦县"
                    },
                    {
                        "value": "2485",
                        "lable": "古交市"
                    }
                ]
            },
            {
                "value": "301",
                "lable": "长治",
                "children": [
                    {
                        "value": "2486",
                        "lable": "城区"
                    },
                    {
                        "value": "2487",
                        "lable": "郊区"
                    },
                    {
                        "value": "2488",
                        "lable": "沁县"
                    },
                    {
                        "value": "2489",
                        "lable": "潞城市"
                    },
                    {
                        "value": "2490",
                        "lable": "长治县"
                    },
                    {
                        "value": "2491",
                        "lable": "襄垣县"
                    },
                    {
                        "value": "2492",
                        "lable": "屯留县"
                    },
                    {
                        "value": "2493",
                        "lable": "平顺县"
                    },
                    {
                        "value": "2494",
                        "lable": "黎城县"
                    },
                    {
                        "value": "2495",
                        "lable": "壶关县"
                    },
                    {
                        "value": "2496",
                        "lable": "长子县"
                    },
                    {
                        "value": "2497",
                        "lable": "武乡县"
                    },
                    {
                        "value": "2498",
                        "lable": "沁源县"
                    }
                ]
            },
            {
                "value": "302",
                "lable": "大同",
                "children": [
                    {
                        "value": "2499",
                        "lable": "城区"
                    },
                    {
                        "value": "2500",
                        "lable": "矿区"
                    },
                    {
                        "value": "2501",
                        "lable": "南郊区"
                    },
                    {
                        "value": "2502",
                        "lable": "新荣区"
                    },
                    {
                        "value": "2503",
                        "lable": "阳高县"
                    },
                    {
                        "value": "2504",
                        "lable": "天镇县"
                    },
                    {
                        "value": "2505",
                        "lable": "广灵县"
                    },
                    {
                        "value": "2506",
                        "lable": "灵丘县"
                    },
                    {
                        "value": "2507",
                        "lable": "浑源县"
                    },
                    {
                        "value": "2508",
                        "lable": "左云县"
                    },
                    {
                        "value": "2509",
                        "lable": "大同县"
                    }
                ]
            },
            {
                "value": "303",
                "lable": "晋城",
                "children": [
                    {
                        "value": "2510",
                        "lable": "城区"
                    },
                    {
                        "value": "2511",
                        "lable": "高平市"
                    },
                    {
                        "value": "2512",
                        "lable": "沁水县"
                    },
                    {
                        "value": "2513",
                        "lable": "阳城县"
                    },
                    {
                        "value": "2514",
                        "lable": "陵川县"
                    },
                    {
                        "value": "2515",
                        "lable": "泽州县"
                    }
                ]
            },
            {
                "value": "304",
                "lable": "晋中",
                "children": [
                    {
                        "value": "2516",
                        "lable": "榆次区"
                    },
                    {
                        "value": "2517",
                        "lable": "介休市"
                    },
                    {
                        "value": "2518",
                        "lable": "榆社县"
                    },
                    {
                        "value": "2519",
                        "lable": "左权县"
                    },
                    {
                        "value": "2520",
                        "lable": "和顺县"
                    },
                    {
                        "value": "2521",
                        "lable": "昔阳县"
                    },
                    {
                        "value": "2522",
                        "lable": "寿阳县"
                    },
                    {
                        "value": "2523",
                        "lable": "太谷县"
                    },
                    {
                        "value": "2524",
                        "lable": "祁县"
                    },
                    {
                        "value": "2525",
                        "lable": "平遥县"
                    },
                    {
                        "value": "2526",
                        "lable": "灵石县"
                    }
                ]
            },
            {
                "value": "305",
                "lable": "临汾",
                "children": [
                    {
                        "value": "2527",
                        "lable": "尧都区"
                    },
                    {
                        "value": "2528",
                        "lable": "侯马市"
                    },
                    {
                        "value": "2529",
                        "lable": "霍州市"
                    },
                    {
                        "value": "2530",
                        "lable": "曲沃县"
                    },
                    {
                        "value": "2531",
                        "lable": "翼城县"
                    },
                    {
                        "value": "2532",
                        "lable": "襄汾县"
                    },
                    {
                        "value": "2533",
                        "lable": "洪洞县"
                    },
                    {
                        "value": "2534",
                        "lable": "吉县"
                    },
                    {
                        "value": "2535",
                        "lable": "安泽县"
                    },
                    {
                        "value": "2536",
                        "lable": "浮山县"
                    },
                    {
                        "value": "2537",
                        "lable": "古县"
                    },
                    {
                        "value": "2538",
                        "lable": "乡宁县"
                    },
                    {
                        "value": "2539",
                        "lable": "大宁县"
                    },
                    {
                        "value": "2540",
                        "lable": "隰县"
                    },
                    {
                        "value": "2541",
                        "lable": "永和县"
                    },
                    {
                        "value": "2542",
                        "lable": "蒲县"
                    },
                    {
                        "value": "2543",
                        "lable": "汾西县"
                    }
                ]
            },
            {
                "value": "306",
                "lable": "吕梁",
                "children": [
                    {
                        "value": "2544",
                        "lable": "离石市"
                    },
                    {
                        "value": "2545",
                        "lable": "离石区"
                    },
                    {
                        "value": "2546",
                        "lable": "孝义市"
                    },
                    {
                        "value": "2547",
                        "lable": "汾阳市"
                    },
                    {
                        "value": "2548",
                        "lable": "文水县"
                    },
                    {
                        "value": "2549",
                        "lable": "交城县"
                    },
                    {
                        "value": "2550",
                        "lable": "兴县"
                    },
                    {
                        "value": "2551",
                        "lable": "临县"
                    },
                    {
                        "value": "2552",
                        "lable": "柳林县"
                    },
                    {
                        "value": "2553",
                        "lable": "石楼县"
                    },
                    {
                        "value": "2554",
                        "lable": "岚县"
                    },
                    {
                        "value": "2555",
                        "lable": "方山县"
                    },
                    {
                        "value": "2556",
                        "lable": "中阳县"
                    },
                    {
                        "value": "2557",
                        "lable": "交口县"
                    }
                ]
            },
            {
                "value": "307",
                "lable": "朔州",
                "children": [
                    {
                        "value": "2558",
                        "lable": "朔城区"
                    },
                    {
                        "value": "2559",
                        "lable": "平鲁区"
                    },
                    {
                        "value": "2560",
                        "lable": "山阴县"
                    },
                    {
                        "value": "2561",
                        "lable": "应县"
                    },
                    {
                        "value": "2562",
                        "lable": "右玉县"
                    },
                    {
                        "value": "2563",
                        "lable": "怀仁县"
                    }
                ]
            },
            {
                "value": "308",
                "lable": "忻州",
                "children": [
                    {
                        "value": "2564",
                        "lable": "忻府区"
                    },
                    {
                        "value": "2565",
                        "lable": "原平市"
                    },
                    {
                        "value": "2566",
                        "lable": "定襄县"
                    },
                    {
                        "value": "2567",
                        "lable": "五台县"
                    },
                    {
                        "value": "2568",
                        "lable": "代县"
                    },
                    {
                        "value": "2569",
                        "lable": "繁峙县"
                    },
                    {
                        "value": "2570",
                        "lable": "宁武县"
                    },
                    {
                        "value": "2571",
                        "lable": "静乐县"
                    },
                    {
                        "value": "2572",
                        "lable": "神池县"
                    },
                    {
                        "value": "2573",
                        "lable": "五寨县"
                    },
                    {
                        "value": "2574",
                        "lable": "岢岚县"
                    },
                    {
                        "value": "2575",
                        "lable": "河曲县"
                    },
                    {
                        "value": "2576",
                        "lable": "保德县"
                    },
                    {
                        "value": "2577",
                        "lable": "偏关县"
                    }
                ]
            },
            {
                "value": "309",
                "lable": "阳泉",
                "children": [
                    {
                        "value": "2578",
                        "lable": "城区"
                    },
                    {
                        "value": "2579",
                        "lable": "矿区"
                    },
                    {
                        "value": "2580",
                        "lable": "郊区"
                    },
                    {
                        "value": "2581",
                        "lable": "平定县"
                    },
                    {
                        "value": "2582",
                        "lable": "盂县"
                    }
                ]
            },
            {
                "value": "310",
                "lable": "运城",
                "children": [
                    {
                        "value": "2583",
                        "lable": "盐湖区"
                    },
                    {
                        "value": "2584",
                        "lable": "永济市"
                    },
                    {
                        "value": "2585",
                        "lable": "河津市"
                    },
                    {
                        "value": "2586",
                        "lable": "临猗县"
                    },
                    {
                        "value": "2587",
                        "lable": "万荣县"
                    },
                    {
                        "value": "2588",
                        "lable": "闻喜县"
                    },
                    {
                        "value": "2589",
                        "lable": "稷山县"
                    },
                    {
                        "value": "2590",
                        "lable": "新绛县"
                    },
                    {
                        "value": "2591",
                        "lable": "绛县"
                    },
                    {
                        "value": "2592",
                        "lable": "垣曲县"
                    },
                    {
                        "value": "2593",
                        "lable": "夏县"
                    },
                    {
                        "value": "2594",
                        "lable": "平陆县"
                    },
                    {
                        "value": "2595",
                        "lable": "芮城县"
                    }
                ]
            }
        ]
    },
    {
        "value": "24",
        "lable": "陕西",
        "children": [
            {
                "value": "311",
                "lable": "西安",
                "children": [
                    {
                        "value": "2596",
                        "lable": "莲湖区"
                    },
                    {
                        "value": "2597",
                        "lable": "新城区"
                    },
                    {
                        "value": "2598",
                        "lable": "碑林区"
                    },
                    {
                        "value": "2599",
                        "lable": "雁塔区"
                    },
                    {
                        "value": "2600",
                        "lable": "灞桥区"
                    },
                    {
                        "value": "2601",
                        "lable": "未央区"
                    },
                    {
                        "value": "2602",
                        "lable": "阎良区"
                    },
                    {
                        "value": "2603",
                        "lable": "临潼区"
                    },
                    {
                        "value": "2604",
                        "lable": "长安区"
                    },
                    {
                        "value": "2605",
                        "lable": "蓝田县"
                    },
                    {
                        "value": "2606",
                        "lable": "周至县"
                    },
                    {
                        "value": "2607",
                        "lable": "户县"
                    },
                    {
                        "value": "2608",
                        "lable": "高陵县"
                    }
                ]
            },
            {
                "value": "312",
                "lable": "安康",
                "children": [
                    {
                        "value": "2609",
                        "lable": "汉滨区"
                    },
                    {
                        "value": "2610",
                        "lable": "汉阴县"
                    },
                    {
                        "value": "2611",
                        "lable": "石泉县"
                    },
                    {
                        "value": "2612",
                        "lable": "宁陕县"
                    },
                    {
                        "value": "2613",
                        "lable": "紫阳县"
                    },
                    {
                        "value": "2614",
                        "lable": "岚皋县"
                    },
                    {
                        "value": "2615",
                        "lable": "平利县"
                    },
                    {
                        "value": "2616",
                        "lable": "镇坪县"
                    },
                    {
                        "value": "2617",
                        "lable": "旬阳县"
                    },
                    {
                        "value": "2618",
                        "lable": "白河县"
                    }
                ]
            },
            {
                "value": "313",
                "lable": "宝鸡",
                "children": [
                    {
                        "value": "2619",
                        "lable": "陈仓区"
                    },
                    {
                        "value": "2620",
                        "lable": "渭滨区"
                    },
                    {
                        "value": "2621",
                        "lable": "金台区"
                    },
                    {
                        "value": "2622",
                        "lable": "凤翔县"
                    },
                    {
                        "value": "2623",
                        "lable": "岐山县"
                    },
                    {
                        "value": "2624",
                        "lable": "扶风县"
                    },
                    {
                        "value": "2625",
                        "lable": "眉县"
                    },
                    {
                        "value": "2626",
                        "lable": "陇县"
                    },
                    {
                        "value": "2627",
                        "lable": "千阳县"
                    },
                    {
                        "value": "2628",
                        "lable": "麟游县"
                    },
                    {
                        "value": "2629",
                        "lable": "凤县"
                    },
                    {
                        "value": "2630",
                        "lable": "太白县"
                    }
                ]
            },
            {
                "value": "314",
                "lable": "汉中",
                "children": [
                    {
                        "value": "2631",
                        "lable": "汉台区"
                    },
                    {
                        "value": "2632",
                        "lable": "南郑县"
                    },
                    {
                        "value": "2633",
                        "lable": "城固县"
                    },
                    {
                        "value": "2634",
                        "lable": "洋县"
                    },
                    {
                        "value": "2635",
                        "lable": "西乡县"
                    },
                    {
                        "value": "2636",
                        "lable": "勉县"
                    },
                    {
                        "value": "2637",
                        "lable": "宁强县"
                    },
                    {
                        "value": "2638",
                        "lable": "略阳县"
                    },
                    {
                        "value": "2639",
                        "lable": "镇巴县"
                    },
                    {
                        "value": "2640",
                        "lable": "留坝县"
                    },
                    {
                        "value": "2641",
                        "lable": "佛坪县"
                    }
                ]
            },
            {
                "value": "315",
                "lable": "商洛",
                "children": [
                    {
                        "value": "2642",
                        "lable": "商州区"
                    },
                    {
                        "value": "2643",
                        "lable": "洛南县"
                    },
                    {
                        "value": "2644",
                        "lable": "丹凤县"
                    },
                    {
                        "value": "2645",
                        "lable": "商南县"
                    },
                    {
                        "value": "2646",
                        "lable": "山阳县"
                    },
                    {
                        "value": "2647",
                        "lable": "镇安县"
                    },
                    {
                        "value": "2648",
                        "lable": "柞水县"
                    }
                ]
            },
            {
                "value": "316",
                "lable": "铜川",
                "children": [
                    {
                        "value": "2649",
                        "lable": "耀州区"
                    },
                    {
                        "value": "2650",
                        "lable": "王益区"
                    },
                    {
                        "value": "2651",
                        "lable": "印台区"
                    },
                    {
                        "value": "2652",
                        "lable": "宜君县"
                    }
                ]
            },
            {
                "value": "317",
                "lable": "渭南",
                "children": [
                    {
                        "value": "2653",
                        "lable": "临渭区"
                    },
                    {
                        "value": "2654",
                        "lable": "韩城市"
                    },
                    {
                        "value": "2655",
                        "lable": "华阴市"
                    },
                    {
                        "value": "2656",
                        "lable": "华县"
                    },
                    {
                        "value": "2657",
                        "lable": "潼关县"
                    },
                    {
                        "value": "2658",
                        "lable": "大荔县"
                    },
                    {
                        "value": "2659",
                        "lable": "合阳县"
                    },
                    {
                        "value": "2660",
                        "lable": "澄城县"
                    },
                    {
                        "value": "2661",
                        "lable": "蒲城县"
                    },
                    {
                        "value": "2662",
                        "lable": "白水县"
                    },
                    {
                        "value": "2663",
                        "lable": "富平县"
                    }
                ]
            },
            {
                "value": "318",
                "lable": "咸阳",
                "children": [
                    {
                        "value": "2664",
                        "lable": "秦都区"
                    },
                    {
                        "value": "2665",
                        "lable": "渭城区"
                    },
                    {
                        "value": "2666",
                        "lable": "杨陵区"
                    },
                    {
                        "value": "2667",
                        "lable": "兴平市"
                    },
                    {
                        "value": "2668",
                        "lable": "三原县"
                    },
                    {
                        "value": "2669",
                        "lable": "泾阳县"
                    },
                    {
                        "value": "2670",
                        "lable": "乾县"
                    },
                    {
                        "value": "2671",
                        "lable": "礼泉县"
                    },
                    {
                        "value": "2672",
                        "lable": "永寿县"
                    },
                    {
                        "value": "2673",
                        "lable": "彬县"
                    },
                    {
                        "value": "2674",
                        "lable": "长武县"
                    },
                    {
                        "value": "2675",
                        "lable": "旬邑县"
                    },
                    {
                        "value": "2676",
                        "lable": "淳化县"
                    },
                    {
                        "value": "2677",
                        "lable": "武功县"
                    }
                ]
            },
            {
                "value": "319",
                "lable": "延安",
                "children": [
                    {
                        "value": "2678",
                        "lable": "吴起县"
                    },
                    {
                        "value": "2679",
                        "lable": "宝塔区"
                    },
                    {
                        "value": "2680",
                        "lable": "延长县"
                    },
                    {
                        "value": "2681",
                        "lable": "延川县"
                    },
                    {
                        "value": "2682",
                        "lable": "子长县"
                    },
                    {
                        "value": "2683",
                        "lable": "安塞县"
                    },
                    {
                        "value": "2684",
                        "lable": "志丹县"
                    },
                    {
                        "value": "2685",
                        "lable": "甘泉县"
                    },
                    {
                        "value": "2686",
                        "lable": "富县"
                    },
                    {
                        "value": "2687",
                        "lable": "洛川县"
                    },
                    {
                        "value": "2688",
                        "lable": "宜川县"
                    },
                    {
                        "value": "2689",
                        "lable": "黄龙县"
                    },
                    {
                        "value": "2690",
                        "lable": "黄陵县"
                    }
                ]
            },
            {
                "value": "320",
                "lable": "榆林",
                "children": [
                    {
                        "value": "2691",
                        "lable": "榆阳区"
                    },
                    {
                        "value": "2692",
                        "lable": "神木县"
                    },
                    {
                        "value": "2693",
                        "lable": "府谷县"
                    },
                    {
                        "value": "2694",
                        "lable": "横山县"
                    },
                    {
                        "value": "2695",
                        "lable": "靖边县"
                    },
                    {
                        "value": "2696",
                        "lable": "定边县"
                    },
                    {
                        "value": "2697",
                        "lable": "绥德县"
                    },
                    {
                        "value": "2698",
                        "lable": "米脂县"
                    },
                    {
                        "value": "2699",
                        "lable": "佳县"
                    },
                    {
                        "value": "2700",
                        "lable": "吴堡县"
                    },
                    {
                        "value": "2701",
                        "lable": "清涧县"
                    },
                    {
                        "value": "2702",
                        "lable": "子洲县"
                    }
                ]
            }
        ]
    },
    {
        "value": "25",
        "lable": "上海",
        "children": [
            {
                "value": "321",
                "lable": "上海",
                "children": [
                    {
                        "value": "2703",
                        "lable": "长宁区"
                    },
                    {
                        "value": "2704",
                        "lable": "闸北区"
                    },
                    {
                        "value": "2705",
                        "lable": "闵行区"
                    },
                    {
                        "value": "2706",
                        "lable": "徐汇区"
                    },
                    {
                        "value": "2707",
                        "lable": "浦东新区"
                    },
                    {
                        "value": "2708",
                        "lable": "杨浦区"
                    },
                    {
                        "value": "2709",
                        "lable": "普陀区"
                    },
                    {
                        "value": "2710",
                        "lable": "静安区"
                    },
                    {
                        "value": "2711",
                        "lable": "卢湾区"
                    },
                    {
                        "value": "2712",
                        "lable": "虹口区"
                    },
                    {
                        "value": "2713",
                        "lable": "黄浦区"
                    },
                    {
                        "value": "2714",
                        "lable": "南汇区"
                    },
                    {
                        "value": "2715",
                        "lable": "松江区"
                    },
                    {
                        "value": "2716",
                        "lable": "嘉定区"
                    },
                    {
                        "value": "2717",
                        "lable": "宝山区"
                    },
                    {
                        "value": "2718",
                        "lable": "青浦区"
                    },
                    {
                        "value": "2719",
                        "lable": "金山区"
                    },
                    {
                        "value": "2720",
                        "lable": "奉贤区"
                    },
                    {
                        "value": "2721",
                        "lable": "崇明县"
                    }
                ]
            }
        ]
    },
    {
        "value": "26",
        "lable": "四川",
        "children": [
            {
                "value": "322",
                "lable": "成都",
                "children": [
                    {
                        "value": "2722",
                        "lable": "青羊区"
                    },
                    {
                        "value": "2723",
                        "lable": "锦江区"
                    },
                    {
                        "value": "2724",
                        "lable": "金牛区"
                    },
                    {
                        "value": "2725",
                        "lable": "武侯区"
                    },
                    {
                        "value": "2726",
                        "lable": "成华区"
                    },
                    {
                        "value": "2727",
                        "lable": "龙泉驿区"
                    },
                    {
                        "value": "2728",
                        "lable": "青白江区"
                    },
                    {
                        "value": "2729",
                        "lable": "新都区"
                    },
                    {
                        "value": "2730",
                        "lable": "温江区"
                    },
                    {
                        "value": "2731",
                        "lable": "高新区"
                    },
                    {
                        "value": "2732",
                        "lable": "高新西区"
                    },
                    {
                        "value": "2733",
                        "lable": "都江堰市"
                    },
                    {
                        "value": "2734",
                        "lable": "彭州市"
                    },
                    {
                        "value": "2735",
                        "lable": "邛崃市"
                    },
                    {
                        "value": "2736",
                        "lable": "崇州市"
                    },
                    {
                        "value": "2737",
                        "lable": "金堂县"
                    },
                    {
                        "value": "2738",
                        "lable": "双流县"
                    },
                    {
                        "value": "2739",
                        "lable": "郫县"
                    },
                    {
                        "value": "2740",
                        "lable": "大邑县"
                    },
                    {
                        "value": "2741",
                        "lable": "蒲江县"
                    },
                    {
                        "value": "2742",
                        "lable": "新津县"
                    },
                    {
                        "value": "2743",
                        "lable": "都江堰市"
                    },
                    {
                        "value": "2744",
                        "lable": "彭州市"
                    },
                    {
                        "value": "2745",
                        "lable": "邛崃市"
                    },
                    {
                        "value": "2746",
                        "lable": "崇州市"
                    },
                    {
                        "value": "2747",
                        "lable": "金堂县"
                    },
                    {
                        "value": "2748",
                        "lable": "双流县"
                    },
                    {
                        "value": "2749",
                        "lable": "郫县"
                    },
                    {
                        "value": "2750",
                        "lable": "大邑县"
                    },
                    {
                        "value": "2751",
                        "lable": "蒲江县"
                    },
                    {
                        "value": "2752",
                        "lable": "新津县"
                    }
                ]
            },
            {
                "value": "323",
                "lable": "绵阳",
                "children": [
                    {
                        "value": "2753",
                        "lable": "涪城区"
                    },
                    {
                        "value": "2754",
                        "lable": "游仙区"
                    },
                    {
                        "value": "2755",
                        "lable": "江油市"
                    },
                    {
                        "value": "2756",
                        "lable": "盐亭县"
                    },
                    {
                        "value": "2757",
                        "lable": "三台县"
                    },
                    {
                        "value": "2758",
                        "lable": "平武县"
                    },
                    {
                        "value": "2759",
                        "lable": "安县"
                    },
                    {
                        "value": "2760",
                        "lable": "梓潼县"
                    },
                    {
                        "value": "2761",
                        "lable": "北川县"
                    }
                ]
            },
            {
                "value": "324",
                "lable": "阿坝",
                "children": [
                    {
                        "value": "2762",
                        "lable": "马尔康县"
                    },
                    {
                        "value": "2763",
                        "lable": "汶川县"
                    },
                    {
                        "value": "2764",
                        "lable": "理县"
                    },
                    {
                        "value": "2765",
                        "lable": "茂县"
                    },
                    {
                        "value": "2766",
                        "lable": "松潘县"
                    },
                    {
                        "value": "2767",
                        "lable": "九寨沟县"
                    },
                    {
                        "value": "2768",
                        "lable": "金川县"
                    },
                    {
                        "value": "2769",
                        "lable": "小金县"
                    },
                    {
                        "value": "2770",
                        "lable": "黑水县"
                    },
                    {
                        "value": "2771",
                        "lable": "壤塘县"
                    },
                    {
                        "value": "2772",
                        "lable": "阿坝县"
                    },
                    {
                        "value": "2773",
                        "lable": "若尔盖县"
                    },
                    {
                        "value": "2774",
                        "lable": "红原县"
                    }
                ]
            },
            {
                "value": "325",
                "lable": "巴中",
                "children": [
                    {
                        "value": "2775",
                        "lable": "巴州区"
                    },
                    {
                        "value": "2776",
                        "lable": "通江县"
                    },
                    {
                        "value": "2777",
                        "lable": "南江县"
                    },
                    {
                        "value": "2778",
                        "lable": "平昌县"
                    }
                ]
            },
            {
                "value": "326",
                "lable": "达州",
                "children": [
                    {
                        "value": "2779",
                        "lable": "通川区"
                    },
                    {
                        "value": "2780",
                        "lable": "万源市"
                    },
                    {
                        "value": "2781",
                        "lable": "达县"
                    },
                    {
                        "value": "2782",
                        "lable": "宣汉县"
                    },
                    {
                        "value": "2783",
                        "lable": "开江县"
                    },
                    {
                        "value": "2784",
                        "lable": "大竹县"
                    },
                    {
                        "value": "2785",
                        "lable": "渠县"
                    }
                ]
            },
            {
                "value": "327",
                "lable": "德阳",
                "children": [
                    {
                        "value": "2786",
                        "lable": "旌阳区"
                    },
                    {
                        "value": "2787",
                        "lable": "广汉市"
                    },
                    {
                        "value": "2788",
                        "lable": "什邡市"
                    },
                    {
                        "value": "2789",
                        "lable": "绵竹市"
                    },
                    {
                        "value": "2790",
                        "lable": "罗江县"
                    },
                    {
                        "value": "2791",
                        "lable": "中江县"
                    }
                ]
            },
            {
                "value": "328",
                "lable": "甘孜",
                "children": [
                    {
                        "value": "2792",
                        "lable": "康定县"
                    },
                    {
                        "value": "2793",
                        "lable": "丹巴县"
                    },
                    {
                        "value": "2794",
                        "lable": "泸定县"
                    },
                    {
                        "value": "2795",
                        "lable": "炉霍县"
                    },
                    {
                        "value": "2796",
                        "lable": "九龙县"
                    },
                    {
                        "value": "2797",
                        "lable": "甘孜县"
                    },
                    {
                        "value": "2798",
                        "lable": "雅江县"
                    },
                    {
                        "value": "2799",
                        "lable": "新龙县"
                    },
                    {
                        "value": "2800",
                        "lable": "道孚县"
                    },
                    {
                        "value": "2801",
                        "lable": "白玉县"
                    },
                    {
                        "value": "2802",
                        "lable": "理塘县"
                    },
                    {
                        "value": "2803",
                        "lable": "德格县"
                    },
                    {
                        "value": "2804",
                        "lable": "乡城县"
                    },
                    {
                        "value": "2805",
                        "lable": "石渠县"
                    },
                    {
                        "value": "2806",
                        "lable": "稻城县"
                    },
                    {
                        "value": "2807",
                        "lable": "色达县"
                    },
                    {
                        "value": "2808",
                        "lable": "巴塘县"
                    },
                    {
                        "value": "2809",
                        "lable": "得荣县"
                    }
                ]
            },
            {
                "value": "329",
                "lable": "广安",
                "children": [
                    {
                        "value": "2810",
                        "lable": "广安区"
                    },
                    {
                        "value": "2811",
                        "lable": "华蓥市"
                    },
                    {
                        "value": "2812",
                        "lable": "岳池县"
                    },
                    {
                        "value": "2813",
                        "lable": "武胜县"
                    },
                    {
                        "value": "2814",
                        "lable": "邻水县"
                    }
                ]
            },
            {
                "value": "330",
                "lable": "广元",
                "children": [
                    {
                        "value": "2815",
                        "lable": "利州区"
                    },
                    {
                        "value": "2816",
                        "lable": "元坝区"
                    },
                    {
                        "value": "2817",
                        "lable": "朝天区"
                    },
                    {
                        "value": "2818",
                        "lable": "旺苍县"
                    },
                    {
                        "value": "2819",
                        "lable": "青川县"
                    },
                    {
                        "value": "2820",
                        "lable": "剑阁县"
                    },
                    {
                        "value": "2821",
                        "lable": "苍溪县"
                    }
                ]
            },
            {
                "value": "331",
                "lable": "乐山",
                "children": [
                    {
                        "value": "2822",
                        "lable": "峨眉山市"
                    },
                    {
                        "value": "2823",
                        "lable": "乐山市"
                    },
                    {
                        "value": "2824",
                        "lable": "犍为县"
                    },
                    {
                        "value": "2825",
                        "lable": "井研县"
                    },
                    {
                        "value": "2826",
                        "lable": "夹江县"
                    },
                    {
                        "value": "2827",
                        "lable": "沐川县"
                    },
                    {
                        "value": "2828",
                        "lable": "峨边"
                    },
                    {
                        "value": "2829",
                        "lable": "马边"
                    }
                ]
            },
            {
                "value": "332",
                "lable": "凉山",
                "children": [
                    {
                        "value": "2830",
                        "lable": "西昌市"
                    },
                    {
                        "value": "2831",
                        "lable": "盐源县"
                    },
                    {
                        "value": "2832",
                        "lable": "德昌县"
                    },
                    {
                        "value": "2833",
                        "lable": "会理县"
                    },
                    {
                        "value": "2834",
                        "lable": "会东县"
                    },
                    {
                        "value": "2835",
                        "lable": "宁南县"
                    },
                    {
                        "value": "2836",
                        "lable": "普格县"
                    },
                    {
                        "value": "2837",
                        "lable": "布拖县"
                    },
                    {
                        "value": "2838",
                        "lable": "金阳县"
                    },
                    {
                        "value": "2839",
                        "lable": "昭觉县"
                    },
                    {
                        "value": "2840",
                        "lable": "喜德县"
                    },
                    {
                        "value": "2841",
                        "lable": "冕宁县"
                    },
                    {
                        "value": "2842",
                        "lable": "越西县"
                    },
                    {
                        "value": "2843",
                        "lable": "甘洛县"
                    },
                    {
                        "value": "2844",
                        "lable": "美姑县"
                    },
                    {
                        "value": "2845",
                        "lable": "雷波县"
                    },
                    {
                        "value": "2846",
                        "lable": "木里"
                    }
                ]
            },
            {
                "value": "333",
                "lable": "眉山",
                "children": [
                    {
                        "value": "2847",
                        "lable": "东坡区"
                    },
                    {
                        "value": "2848",
                        "lable": "仁寿县"
                    },
                    {
                        "value": "2849",
                        "lable": "彭山县"
                    },
                    {
                        "value": "2850",
                        "lable": "洪雅县"
                    },
                    {
                        "value": "2851",
                        "lable": "丹棱县"
                    },
                    {
                        "value": "2852",
                        "lable": "青神县"
                    }
                ]
            },
            {
                "value": "334",
                "lable": "南充",
                "children": [
                    {
                        "value": "2853",
                        "lable": "阆中市"
                    },
                    {
                        "value": "2854",
                        "lable": "南部县"
                    },
                    {
                        "value": "2855",
                        "lable": "营山县"
                    },
                    {
                        "value": "2856",
                        "lable": "蓬安县"
                    },
                    {
                        "value": "2857",
                        "lable": "仪陇县"
                    },
                    {
                        "value": "2858",
                        "lable": "顺庆区"
                    },
                    {
                        "value": "2859",
                        "lable": "高坪区"
                    },
                    {
                        "value": "2860",
                        "lable": "嘉陵区"
                    },
                    {
                        "value": "2861",
                        "lable": "西充县"
                    }
                ]
            },
            {
                "value": "335",
                "lable": "内江",
                "children": [
                    {
                        "value": "2862",
                        "lable": "市中区"
                    },
                    {
                        "value": "2863",
                        "lable": "东兴区"
                    },
                    {
                        "value": "2864",
                        "lable": "威远县"
                    },
                    {
                        "value": "2865",
                        "lable": "资中县"
                    },
                    {
                        "value": "2866",
                        "lable": "隆昌县"
                    }
                ]
            },
            {
                "value": "336",
                "lable": "攀枝花",
                "children": [
                    {
                        "value": "2867",
                        "lable": "东  区"
                    },
                    {
                        "value": "2868",
                        "lable": "西  区"
                    },
                    {
                        "value": "2869",
                        "lable": "仁和区"
                    },
                    {
                        "value": "2870",
                        "lable": "米易县"
                    },
                    {
                        "value": "2871",
                        "lable": "盐边县"
                    }
                ]
            },
            {
                "value": "337",
                "lable": "遂宁",
                "children": [
                    {
                        "value": "2872",
                        "lable": "船山区"
                    },
                    {
                        "value": "2873",
                        "lable": "安居区"
                    },
                    {
                        "value": "2874",
                        "lable": "蓬溪县"
                    },
                    {
                        "value": "2875",
                        "lable": "射洪县"
                    },
                    {
                        "value": "2876",
                        "lable": "大英县"
                    }
                ]
            },
            {
                "value": "338",
                "lable": "雅安",
                "children": [
                    {
                        "value": "2877",
                        "lable": "雨城区"
                    },
                    {
                        "value": "2878",
                        "lable": "名山县"
                    },
                    {
                        "value": "2879",
                        "lable": "荥经县"
                    },
                    {
                        "value": "2880",
                        "lable": "汉源县"
                    },
                    {
                        "value": "2881",
                        "lable": "石棉县"
                    },
                    {
                        "value": "2882",
                        "lable": "天全县"
                    },
                    {
                        "value": "2883",
                        "lable": "芦山县"
                    },
                    {
                        "value": "2884",
                        "lable": "宝兴县"
                    }
                ]
            },
            {
                "value": "339",
                "lable": "宜宾",
                "children": [
                    {
                        "value": "2885",
                        "lable": "翠屏区"
                    },
                    {
                        "value": "2886",
                        "lable": "宜宾县"
                    },
                    {
                        "value": "2887",
                        "lable": "南溪县"
                    },
                    {
                        "value": "2888",
                        "lable": "江安县"
                    },
                    {
                        "value": "2889",
                        "lable": "长宁县"
                    },
                    {
                        "value": "2890",
                        "lable": "高县"
                    },
                    {
                        "value": "2891",
                        "lable": "珙县"
                    },
                    {
                        "value": "2892",
                        "lable": "筠连县"
                    },
                    {
                        "value": "2893",
                        "lable": "兴文县"
                    },
                    {
                        "value": "2894",
                        "lable": "屏山县"
                    }
                ]
            },
            {
                "value": "340",
                "lable": "资阳",
                "children": [
                    {
                        "value": "2895",
                        "lable": "雁江区"
                    },
                    {
                        "value": "2896",
                        "lable": "简阳市"
                    },
                    {
                        "value": "2897",
                        "lable": "安岳县"
                    },
                    {
                        "value": "2898",
                        "lable": "乐至县"
                    }
                ]
            },
            {
                "value": "341",
                "lable": "自贡",
                "children": [
                    {
                        "value": "2899",
                        "lable": "大安区"
                    },
                    {
                        "value": "2900",
                        "lable": "自流井区"
                    },
                    {
                        "value": "2901",
                        "lable": "贡井区"
                    },
                    {
                        "value": "2902",
                        "lable": "沿滩区"
                    },
                    {
                        "value": "2903",
                        "lable": "荣县"
                    },
                    {
                        "value": "2904",
                        "lable": "富顺县"
                    }
                ]
            },
            {
                "value": "342",
                "lable": "泸州",
                "children": [
                    {
                        "value": "2905",
                        "lable": "江阳区"
                    },
                    {
                        "value": "2906",
                        "lable": "纳溪区"
                    },
                    {
                        "value": "2907",
                        "lable": "龙马潭区"
                    },
                    {
                        "value": "2908",
                        "lable": "泸县"
                    },
                    {
                        "value": "2909",
                        "lable": "合江县"
                    },
                    {
                        "value": "2910",
                        "lable": "叙永县"
                    },
                    {
                        "value": "2911",
                        "lable": "古蔺县"
                    }
                ]
            }
        ]
    },
    {
        "value": "27",
        "lable": "天津",
        "children": [
            {
                "value": "343",
                "lable": "天津",
                "children": [
                    {
                        "value": "2912",
                        "lable": "和平区"
                    },
                    {
                        "value": "2913",
                        "lable": "河西区"
                    },
                    {
                        "value": "2914",
                        "lable": "南开区"
                    },
                    {
                        "value": "2915",
                        "lable": "河北区"
                    },
                    {
                        "value": "2916",
                        "lable": "河东区"
                    },
                    {
                        "value": "2917",
                        "lable": "红桥区"
                    },
                    {
                        "value": "2918",
                        "lable": "东丽区"
                    },
                    {
                        "value": "2919",
                        "lable": "津南区"
                    },
                    {
                        "value": "2920",
                        "lable": "西青区"
                    },
                    {
                        "value": "2921",
                        "lable": "北辰区"
                    },
                    {
                        "value": "2922",
                        "lable": "塘沽区"
                    },
                    {
                        "value": "2923",
                        "lable": "汉沽区"
                    },
                    {
                        "value": "2924",
                        "lable": "大港区"
                    },
                    {
                        "value": "2925",
                        "lable": "武清区"
                    },
                    {
                        "value": "2926",
                        "lable": "宝坻区"
                    },
                    {
                        "value": "2927",
                        "lable": "经济开发区"
                    },
                    {
                        "value": "2928",
                        "lable": "宁河县"
                    },
                    {
                        "value": "2929",
                        "lable": "静海县"
                    },
                    {
                        "value": "2930",
                        "lable": "蓟县"
                    }
                ]
            }
        ]
    },
    {
        "value": "28",
        "lable": "西藏",
        "children": [
            {
                "value": "344",
                "lable": "拉萨",
                "children": [
                    {
                        "value": "2931",
                        "lable": "城关区"
                    },
                    {
                        "value": "2932",
                        "lable": "林周县"
                    },
                    {
                        "value": "2933",
                        "lable": "当雄县"
                    },
                    {
                        "value": "2934",
                        "lable": "尼木县"
                    },
                    {
                        "value": "2935",
                        "lable": "曲水县"
                    },
                    {
                        "value": "2936",
                        "lable": "堆龙德庆县"
                    },
                    {
                        "value": "2937",
                        "lable": "达孜县"
                    },
                    {
                        "value": "2938",
                        "lable": "墨竹工卡县"
                    }
                ]
            },
            {
                "value": "345",
                "lable": "阿里",
                "children": [
                    {
                        "value": "2939",
                        "lable": "噶尔县"
                    },
                    {
                        "value": "2940",
                        "lable": "普兰县"
                    },
                    {
                        "value": "2941",
                        "lable": "札达县"
                    },
                    {
                        "value": "2942",
                        "lable": "日土县"
                    },
                    {
                        "value": "2943",
                        "lable": "革吉县"
                    },
                    {
                        "value": "2944",
                        "lable": "改则县"
                    },
                    {
                        "value": "2945",
                        "lable": "措勤县"
                    }
                ]
            },
            {
                "value": "346",
                "lable": "昌都",
                "children": [
                    {
                        "value": "2946",
                        "lable": "昌都县"
                    },
                    {
                        "value": "2947",
                        "lable": "江达县"
                    },
                    {
                        "value": "2948",
                        "lable": "贡觉县"
                    },
                    {
                        "value": "2949",
                        "lable": "类乌齐县"
                    },
                    {
                        "value": "2950",
                        "lable": "丁青县"
                    },
                    {
                        "value": "2951",
                        "lable": "察雅县"
                    },
                    {
                        "value": "2952",
                        "lable": "八宿县"
                    },
                    {
                        "value": "2953",
                        "lable": "左贡县"
                    },
                    {
                        "value": "2954",
                        "lable": "芒康县"
                    },
                    {
                        "value": "2955",
                        "lable": "洛隆县"
                    },
                    {
                        "value": "2956",
                        "lable": "边坝县"
                    }
                ]
            },
            {
                "value": "347",
                "lable": "林芝",
                "children": [
                    {
                        "value": "2957",
                        "lable": "林芝县"
                    },
                    {
                        "value": "2958",
                        "lable": "工布江达县"
                    },
                    {
                        "value": "2959",
                        "lable": "米林县"
                    },
                    {
                        "value": "2960",
                        "lable": "墨脱县"
                    },
                    {
                        "value": "2961",
                        "lable": "波密县"
                    },
                    {
                        "value": "2962",
                        "lable": "察隅县"
                    },
                    {
                        "value": "2963",
                        "lable": "朗县"
                    }
                ]
            },
            {
                "value": "348",
                "lable": "那曲",
                "children": [
                    {
                        "value": "2964",
                        "lable": "那曲县"
                    },
                    {
                        "value": "2965",
                        "lable": "嘉黎县"
                    },
                    {
                        "value": "2966",
                        "lable": "比如县"
                    },
                    {
                        "value": "2967",
                        "lable": "聂荣县"
                    },
                    {
                        "value": "2968",
                        "lable": "安多县"
                    },
                    {
                        "value": "2969",
                        "lable": "申扎县"
                    },
                    {
                        "value": "2970",
                        "lable": "索县"
                    },
                    {
                        "value": "2971",
                        "lable": "班戈县"
                    },
                    {
                        "value": "2972",
                        "lable": "巴青县"
                    },
                    {
                        "value": "2973",
                        "lable": "尼玛县"
                    }
                ]
            },
            {
                "value": "349",
                "lable": "日喀则",
                "children": [
                    {
                        "value": "2974",
                        "lable": "日喀则市"
                    },
                    {
                        "value": "2975",
                        "lable": "南木林县"
                    },
                    {
                        "value": "2976",
                        "lable": "江孜县"
                    },
                    {
                        "value": "2977",
                        "lable": "定日县"
                    },
                    {
                        "value": "2978",
                        "lable": "萨迦县"
                    },
                    {
                        "value": "2979",
                        "lable": "拉孜县"
                    },
                    {
                        "value": "2980",
                        "lable": "昂仁县"
                    },
                    {
                        "value": "2981",
                        "lable": "谢通门县"
                    },
                    {
                        "value": "2982",
                        "lable": "白朗县"
                    },
                    {
                        "value": "2983",
                        "lable": "仁布县"
                    },
                    {
                        "value": "2984",
                        "lable": "康马县"
                    },
                    {
                        "value": "2985",
                        "lable": "定结县"
                    },
                    {
                        "value": "2986",
                        "lable": "仲巴县"
                    },
                    {
                        "value": "2987",
                        "lable": "亚东县"
                    },
                    {
                        "value": "2988",
                        "lable": "吉隆县"
                    },
                    {
                        "value": "2989",
                        "lable": "聂拉木县"
                    },
                    {
                        "value": "2990",
                        "lable": "萨嘎县"
                    },
                    {
                        "value": "2991",
                        "lable": "岗巴县"
                    }
                ]
            },
            {
                "value": "350",
                "lable": "山南",
                "children": [
                    {
                        "value": "2992",
                        "lable": "乃东县"
                    },
                    {
                        "value": "2993",
                        "lable": "扎囊县"
                    },
                    {
                        "value": "2994",
                        "lable": "贡嘎县"
                    },
                    {
                        "value": "2995",
                        "lable": "桑日县"
                    },
                    {
                        "value": "2996",
                        "lable": "琼结县"
                    },
                    {
                        "value": "2997",
                        "lable": "曲松县"
                    },
                    {
                        "value": "2998",
                        "lable": "措美县"
                    },
                    {
                        "value": "2999",
                        "lable": "洛扎县"
                    },
                    {
                        "value": "3000",
                        "lable": "加查县"
                    },
                    {
                        "value": "3001",
                        "lable": "隆子县"
                    },
                    {
                        "value": "3002",
                        "lable": "错那县"
                    },
                    {
                        "value": "3003",
                        "lable": "浪卡子县"
                    }
                ]
            }
        ]
    },
    {
        "value": "29",
        "lable": "新疆",
        "children": [
            {
                "value": "351",
                "lable": "乌鲁木齐",
                "children": [
                    {
                        "value": "3004",
                        "lable": "天山区"
                    },
                    {
                        "value": "3005",
                        "lable": "沙依巴克区"
                    },
                    {
                        "value": "3006",
                        "lable": "新市区"
                    },
                    {
                        "value": "3007",
                        "lable": "水磨沟区"
                    },
                    {
                        "value": "3008",
                        "lable": "头屯河区"
                    },
                    {
                        "value": "3009",
                        "lable": "达坂城区"
                    },
                    {
                        "value": "3010",
                        "lable": "米东区"
                    },
                    {
                        "value": "3011",
                        "lable": "乌鲁木齐县"
                    }
                ]
            },
            {
                "value": "352",
                "lable": "阿克苏",
                "children": [
                    {
                        "value": "3012",
                        "lable": "阿克苏市"
                    },
                    {
                        "value": "3013",
                        "lable": "温宿县"
                    },
                    {
                        "value": "3014",
                        "lable": "库车县"
                    },
                    {
                        "value": "3015",
                        "lable": "沙雅县"
                    },
                    {
                        "value": "3016",
                        "lable": "新和县"
                    },
                    {
                        "value": "3017",
                        "lable": "拜城县"
                    },
                    {
                        "value": "3018",
                        "lable": "乌什县"
                    },
                    {
                        "value": "3019",
                        "lable": "阿瓦提县"
                    },
                    {
                        "value": "3020",
                        "lable": "柯坪县"
                    }
                ]
            },
            {
                "value": "353",
                "lable": "阿拉尔",
                "children": [
                    {
                        "value": "3021",
                        "lable": "阿拉尔市"
                    }
                ]
            },
            {
                "value": "354",
                "lable": "巴音郭楞",
                "children": [
                    {
                        "value": "3022",
                        "lable": "库尔勒市"
                    },
                    {
                        "value": "3023",
                        "lable": "轮台县"
                    },
                    {
                        "value": "3024",
                        "lable": "尉犁县"
                    },
                    {
                        "value": "3025",
                        "lable": "若羌县"
                    },
                    {
                        "value": "3026",
                        "lable": "且末县"
                    },
                    {
                        "value": "3027",
                        "lable": "焉耆"
                    },
                    {
                        "value": "3028",
                        "lable": "和静县"
                    },
                    {
                        "value": "3029",
                        "lable": "和硕县"
                    },
                    {
                        "value": "3030",
                        "lable": "博湖县"
                    }
                ]
            },
            {
                "value": "355",
                "lable": "博尔塔拉",
                "children": [
                    {
                        "value": "3031",
                        "lable": "博乐市"
                    },
                    {
                        "value": "3032",
                        "lable": "精河县"
                    },
                    {
                        "value": "3033",
                        "lable": "温泉县"
                    }
                ]
            },
            {
                "value": "356",
                "lable": "昌吉",
                "children": [
                    {
                        "value": "3034",
                        "lable": "呼图壁县"
                    },
                    {
                        "value": "3035",
                        "lable": "米泉市"
                    },
                    {
                        "value": "3036",
                        "lable": "昌吉市"
                    },
                    {
                        "value": "3037",
                        "lable": "阜康市"
                    },
                    {
                        "value": "3038",
                        "lable": "玛纳斯县"
                    },
                    {
                        "value": "3039",
                        "lable": "奇台县"
                    },
                    {
                        "value": "3040",
                        "lable": "吉木萨尔县"
                    },
                    {
                        "value": "3041",
                        "lable": "木垒"
                    }
                ]
            },
            {
                "value": "357",
                "lable": "哈密",
                "children": [
                    {
                        "value": "3042",
                        "lable": "哈密市"
                    },
                    {
                        "value": "3043",
                        "lable": "伊吾县"
                    },
                    {
                        "value": "3044",
                        "lable": "巴里坤"
                    }
                ]
            },
            {
                "value": "358",
                "lable": "和田",
                "children": [
                    {
                        "value": "3045",
                        "lable": "和田市"
                    },
                    {
                        "value": "3046",
                        "lable": "和田县"
                    },
                    {
                        "value": "3047",
                        "lable": "墨玉县"
                    },
                    {
                        "value": "3048",
                        "lable": "皮山县"
                    },
                    {
                        "value": "3049",
                        "lable": "洛浦县"
                    },
                    {
                        "value": "3050",
                        "lable": "策勒县"
                    },
                    {
                        "value": "3051",
                        "lable": "于田县"
                    },
                    {
                        "value": "3052",
                        "lable": "民丰县"
                    }
                ]
            },
            {
                "value": "359",
                "lable": "喀什",
                "children": [
                    {
                        "value": "3053",
                        "lable": "喀什市"
                    },
                    {
                        "value": "3054",
                        "lable": "疏附县"
                    },
                    {
                        "value": "3055",
                        "lable": "疏勒县"
                    },
                    {
                        "value": "3056",
                        "lable": "英吉沙县"
                    },
                    {
                        "value": "3057",
                        "lable": "泽普县"
                    },
                    {
                        "value": "3058",
                        "lable": "莎车县"
                    },
                    {
                        "value": "3059",
                        "lable": "叶城县"
                    },
                    {
                        "value": "3060",
                        "lable": "麦盖提县"
                    },
                    {
                        "value": "3061",
                        "lable": "岳普湖县"
                    },
                    {
                        "value": "3062",
                        "lable": "伽师县"
                    },
                    {
                        "value": "3063",
                        "lable": "巴楚县"
                    },
                    {
                        "value": "3064",
                        "lable": "塔什库尔干"
                    }
                ]
            },
            {
                "value": "360",
                "lable": "克拉玛依",
                "children": [
                    {
                        "value": "3065",
                        "lable": "克拉玛依市"
                    }
                ]
            },
            {
                "value": "361",
                "lable": "克孜勒苏",
                "children": [
                    {
                        "value": "3066",
                        "lable": "阿图什市"
                    },
                    {
                        "value": "3067",
                        "lable": "阿克陶县"
                    },
                    {
                        "value": "3068",
                        "lable": "阿合奇县"
                    },
                    {
                        "value": "3069",
                        "lable": "乌恰县"
                    }
                ]
            },
            {
                "value": "362",
                "lable": "石河子",
                "children": [
                    {
                        "value": "3070",
                        "lable": "石河子市"
                    }
                ]
            },
            {
                "value": "363",
                "lable": "图木舒克",
                "children": [
                    {
                        "value": "3071",
                        "lable": "图木舒克市"
                    }
                ]
            },
            {
                "value": "364",
                "lable": "吐鲁番",
                "children": [
                    {
                        "value": "3072",
                        "lable": "吐鲁番市"
                    },
                    {
                        "value": "3073",
                        "lable": "鄯善县"
                    },
                    {
                        "value": "3074",
                        "lable": "托克逊县"
                    }
                ]
            },
            {
                "value": "365",
                "lable": "五家渠",
                "children": [
                    {
                        "value": "3075",
                        "lable": "五家渠市"
                    }
                ]
            },
            {
                "value": "366",
                "lable": "伊犁",
                "children": [
                    {
                        "value": "3076",
                        "lable": "阿勒泰市"
                    },
                    {
                        "value": "3077",
                        "lable": "布克赛尔"
                    },
                    {
                        "value": "3078",
                        "lable": "伊宁市"
                    },
                    {
                        "value": "3079",
                        "lable": "布尔津县"
                    },
                    {
                        "value": "3080",
                        "lable": "奎屯市"
                    },
                    {
                        "value": "3081",
                        "lable": "乌苏市"
                    },
                    {
                        "value": "3082",
                        "lable": "额敏县"
                    },
                    {
                        "value": "3083",
                        "lable": "富蕴县"
                    },
                    {
                        "value": "3084",
                        "lable": "伊宁县"
                    },
                    {
                        "value": "3085",
                        "lable": "福海县"
                    },
                    {
                        "value": "3086",
                        "lable": "霍城县"
                    },
                    {
                        "value": "3087",
                        "lable": "沙湾县"
                    },
                    {
                        "value": "3088",
                        "lable": "巩留县"
                    },
                    {
                        "value": "3089",
                        "lable": "哈巴河县"
                    },
                    {
                        "value": "3090",
                        "lable": "托里县"
                    },
                    {
                        "value": "3091",
                        "lable": "青河县"
                    },
                    {
                        "value": "3092",
                        "lable": "新源县"
                    },
                    {
                        "value": "3093",
                        "lable": "裕民县"
                    },
                    {
                        "value": "3094",
                        "lable": "和布克赛尔"
                    },
                    {
                        "value": "3095",
                        "lable": "吉木乃县"
                    },
                    {
                        "value": "3096",
                        "lable": "昭苏县"
                    },
                    {
                        "value": "3097",
                        "lable": "特克斯县"
                    },
                    {
                        "value": "3098",
                        "lable": "尼勒克县"
                    },
                    {
                        "value": "3099",
                        "lable": "察布查尔"
                    }
                ]
            }
        ]
    },
    {
        "value": "30",
        "lable": "云南",
        "children": [
            {
                "value": "367",
                "lable": "昆明",
                "children": [
                    {
                        "value": "3100",
                        "lable": "盘龙区"
                    },
                    {
                        "value": "3101",
                        "lable": "五华区"
                    },
                    {
                        "value": "3102",
                        "lable": "官渡区"
                    },
                    {
                        "value": "3103",
                        "lable": "西山区"
                    },
                    {
                        "value": "3104",
                        "lable": "东川区"
                    },
                    {
                        "value": "3105",
                        "lable": "安宁市"
                    },
                    {
                        "value": "3106",
                        "lable": "呈贡县"
                    },
                    {
                        "value": "3107",
                        "lable": "晋宁县"
                    },
                    {
                        "value": "3108",
                        "lable": "富民县"
                    },
                    {
                        "value": "3109",
                        "lable": "宜良县"
                    },
                    {
                        "value": "3110",
                        "lable": "嵩明县"
                    },
                    {
                        "value": "3111",
                        "lable": "石林县"
                    },
                    {
                        "value": "3112",
                        "lable": "禄劝"
                    },
                    {
                        "value": "3113",
                        "lable": "寻甸"
                    }
                ]
            },
            {
                "value": "368",
                "lable": "怒江",
                "children": [
                    {
                        "value": "3114",
                        "lable": "兰坪"
                    },
                    {
                        "value": "3115",
                        "lable": "泸水县"
                    },
                    {
                        "value": "3116",
                        "lable": "福贡县"
                    },
                    {
                        "value": "3117",
                        "lable": "贡山"
                    }
                ]
            },
            {
                "value": "369",
                "lable": "普洱",
                "children": [
                    {
                        "value": "3118",
                        "lable": "宁洱"
                    },
                    {
                        "value": "3119",
                        "lable": "思茅区"
                    },
                    {
                        "value": "3120",
                        "lable": "墨江"
                    },
                    {
                        "value": "3121",
                        "lable": "景东"
                    },
                    {
                        "value": "3122",
                        "lable": "景谷"
                    },
                    {
                        "value": "3123",
                        "lable": "镇沅"
                    },
                    {
                        "value": "3124",
                        "lable": "江城"
                    },
                    {
                        "value": "3125",
                        "lable": "孟连"
                    },
                    {
                        "value": "3126",
                        "lable": "澜沧"
                    },
                    {
                        "value": "3127",
                        "lable": "西盟"
                    }
                ]
            },
            {
                "value": "370",
                "lable": "丽江",
                "children": [
                    {
                        "value": "3128",
                        "lable": "古城区"
                    },
                    {
                        "value": "3129",
                        "lable": "宁蒗"
                    },
                    {
                        "value": "3130",
                        "lable": "玉龙"
                    },
                    {
                        "value": "3131",
                        "lable": "永胜县"
                    },
                    {
                        "value": "3132",
                        "lable": "华坪县"
                    }
                ]
            },
            {
                "value": "371",
                "lable": "保山",
                "children": [
                    {
                        "value": "3133",
                        "lable": "隆阳区"
                    },
                    {
                        "value": "3134",
                        "lable": "施甸县"
                    },
                    {
                        "value": "3135",
                        "lable": "腾冲县"
                    },
                    {
                        "value": "3136",
                        "lable": "龙陵县"
                    },
                    {
                        "value": "3137",
                        "lable": "昌宁县"
                    }
                ]
            },
            {
                "value": "372",
                "lable": "楚雄",
                "children": [
                    {
                        "value": "3138",
                        "lable": "楚雄市"
                    },
                    {
                        "value": "3139",
                        "lable": "双柏县"
                    },
                    {
                        "value": "3140",
                        "lable": "牟定县"
                    },
                    {
                        "value": "3141",
                        "lable": "南华县"
                    },
                    {
                        "value": "3142",
                        "lable": "姚安县"
                    },
                    {
                        "value": "3143",
                        "lable": "大姚县"
                    },
                    {
                        "value": "3144",
                        "lable": "永仁县"
                    },
                    {
                        "value": "3145",
                        "lable": "元谋县"
                    },
                    {
                        "value": "3146",
                        "lable": "武定县"
                    },
                    {
                        "value": "3147",
                        "lable": "禄丰县"
                    }
                ]
            },
            {
                "value": "373",
                "lable": "大理",
                "children": [
                    {
                        "value": "3148",
                        "lable": "大理市"
                    },
                    {
                        "value": "3149",
                        "lable": "祥云县"
                    },
                    {
                        "value": "3150",
                        "lable": "宾川县"
                    },
                    {
                        "value": "3151",
                        "lable": "弥渡县"
                    },
                    {
                        "value": "3152",
                        "lable": "永平县"
                    },
                    {
                        "value": "3153",
                        "lable": "云龙县"
                    },
                    {
                        "value": "3154",
                        "lable": "洱源县"
                    },
                    {
                        "value": "3155",
                        "lable": "剑川县"
                    },
                    {
                        "value": "3156",
                        "lable": "鹤庆县"
                    },
                    {
                        "value": "3157",
                        "lable": "漾濞"
                    },
                    {
                        "value": "3158",
                        "lable": "南涧"
                    },
                    {
                        "value": "3159",
                        "lable": "巍山"
                    }
                ]
            },
            {
                "value": "374",
                "lable": "德宏",
                "children": [
                    {
                        "value": "3160",
                        "lable": "潞西市"
                    },
                    {
                        "value": "3161",
                        "lable": "瑞丽市"
                    },
                    {
                        "value": "3162",
                        "lable": "梁河县"
                    },
                    {
                        "value": "3163",
                        "lable": "盈江县"
                    },
                    {
                        "value": "3164",
                        "lable": "陇川县"
                    }
                ]
            },
            {
                "value": "375",
                "lable": "迪庆",
                "children": [
                    {
                        "value": "3165",
                        "lable": "香格里拉县"
                    },
                    {
                        "value": "3166",
                        "lable": "德钦县"
                    },
                    {
                        "value": "3167",
                        "lable": "维西"
                    }
                ]
            },
            {
                "value": "376",
                "lable": "红河",
                "children": [
                    {
                        "value": "3168",
                        "lable": "泸西县"
                    },
                    {
                        "value": "3169",
                        "lable": "蒙自县"
                    },
                    {
                        "value": "3170",
                        "lable": "个旧市"
                    },
                    {
                        "value": "3171",
                        "lable": "开远市"
                    },
                    {
                        "value": "3172",
                        "lable": "绿春县"
                    },
                    {
                        "value": "3173",
                        "lable": "建水县"
                    },
                    {
                        "value": "3174",
                        "lable": "石屏县"
                    },
                    {
                        "value": "3175",
                        "lable": "弥勒县"
                    },
                    {
                        "value": "3176",
                        "lable": "元阳县"
                    },
                    {
                        "value": "3177",
                        "lable": "红河县"
                    },
                    {
                        "value": "3178",
                        "lable": "金平"
                    },
                    {
                        "value": "3179",
                        "lable": "河口"
                    },
                    {
                        "value": "3180",
                        "lable": "屏边"
                    }
                ]
            },
            {
                "value": "377",
                "lable": "临沧",
                "children": [
                    {
                        "value": "3181",
                        "lable": "临翔区"
                    },
                    {
                        "value": "3182",
                        "lable": "凤庆县"
                    },
                    {
                        "value": "3183",
                        "lable": "云县"
                    },
                    {
                        "value": "3184",
                        "lable": "永德县"
                    },
                    {
                        "value": "3185",
                        "lable": "镇康县"
                    },
                    {
                        "value": "3186",
                        "lable": "双江"
                    },
                    {
                        "value": "3187",
                        "lable": "耿马"
                    },
                    {
                        "value": "3188",
                        "lable": "沧源"
                    }
                ]
            },
            {
                "value": "378",
                "lable": "曲靖",
                "children": [
                    {
                        "value": "3189",
                        "lable": "麒麟区"
                    },
                    {
                        "value": "3190",
                        "lable": "宣威市"
                    },
                    {
                        "value": "3191",
                        "lable": "马龙县"
                    },
                    {
                        "value": "3192",
                        "lable": "陆良县"
                    },
                    {
                        "value": "3193",
                        "lable": "师宗县"
                    },
                    {
                        "value": "3194",
                        "lable": "罗平县"
                    },
                    {
                        "value": "3195",
                        "lable": "富源县"
                    },
                    {
                        "value": "3196",
                        "lable": "会泽县"
                    },
                    {
                        "value": "3197",
                        "lable": "沾益县"
                    }
                ]
            },
            {
                "value": "379",
                "lable": "文山",
                "children": [
                    {
                        "value": "3198",
                        "lable": "文山县"
                    },
                    {
                        "value": "3199",
                        "lable": "砚山县"
                    },
                    {
                        "value": "3200",
                        "lable": "西畴县"
                    },
                    {
                        "value": "3201",
                        "lable": "麻栗坡县"
                    },
                    {
                        "value": "3202",
                        "lable": "马关县"
                    },
                    {
                        "value": "3203",
                        "lable": "丘北县"
                    },
                    {
                        "value": "3204",
                        "lable": "广南县"
                    },
                    {
                        "value": "3205",
                        "lable": "富宁县"
                    }
                ]
            },
            {
                "value": "380",
                "lable": "西双版纳",
                "children": [
                    {
                        "value": "3206",
                        "lable": "景洪市"
                    },
                    {
                        "value": "3207",
                        "lable": "勐海县"
                    },
                    {
                        "value": "3208",
                        "lable": "勐腊县"
                    }
                ]
            },
            {
                "value": "381",
                "lable": "玉溪",
                "children": [
                    {
                        "value": "3209",
                        "lable": "红塔区"
                    },
                    {
                        "value": "3210",
                        "lable": "江川县"
                    },
                    {
                        "value": "3211",
                        "lable": "澄江县"
                    },
                    {
                        "value": "3212",
                        "lable": "通海县"
                    },
                    {
                        "value": "3213",
                        "lable": "华宁县"
                    },
                    {
                        "value": "3214",
                        "lable": "易门县"
                    },
                    {
                        "value": "3215",
                        "lable": "峨山"
                    },
                    {
                        "value": "3216",
                        "lable": "新平"
                    },
                    {
                        "value": "3217",
                        "lable": "元江"
                    }
                ]
            },
            {
                "value": "382",
                "lable": "昭通",
                "children": [
                    {
                        "value": "3218",
                        "lable": "昭阳区"
                    },
                    {
                        "value": "3219",
                        "lable": "鲁甸县"
                    },
                    {
                        "value": "3220",
                        "lable": "巧家县"
                    },
                    {
                        "value": "3221",
                        "lable": "盐津县"
                    },
                    {
                        "value": "3222",
                        "lable": "大关县"
                    },
                    {
                        "value": "3223",
                        "lable": "永善县"
                    },
                    {
                        "value": "3224",
                        "lable": "绥江县"
                    },
                    {
                        "value": "3225",
                        "lable": "镇雄县"
                    },
                    {
                        "value": "3226",
                        "lable": "彝良县"
                    },
                    {
                        "value": "3227",
                        "lable": "威信县"
                    },
                    {
                        "value": "3228",
                        "lable": "水富县"
                    }
                ]
            }
        ]
    },
    {
        "value": "31",
        "lable": "浙江",
        "children": [
            {
                "value": "383",
                "lable": "杭州",
                "children": [
                    {
                        "value": "3229",
                        "lable": "西湖区"
                    },
                    {
                        "value": "3230",
                        "lable": "上城区"
                    },
                    {
                        "value": "3231",
                        "lable": "下城区"
                    },
                    {
                        "value": "3232",
                        "lable": "拱墅区"
                    },
                    {
                        "value": "3233",
                        "lable": "滨江区"
                    },
                    {
                        "value": "3234",
                        "lable": "江干区"
                    },
                    {
                        "value": "3235",
                        "lable": "萧山区"
                    },
                    {
                        "value": "3236",
                        "lable": "余杭区"
                    },
                    {
                        "value": "3237",
                        "lable": "市郊"
                    },
                    {
                        "value": "3238",
                        "lable": "建德市"
                    },
                    {
                        "value": "3239",
                        "lable": "富阳市"
                    },
                    {
                        "value": "3240",
                        "lable": "临安市"
                    },
                    {
                        "value": "3241",
                        "lable": "桐庐县"
                    },
                    {
                        "value": "3242",
                        "lable": "淳安县"
                    }
                ]
            },
            {
                "value": "384",
                "lable": "湖州",
                "children": [
                    {
                        "value": "3243",
                        "lable": "吴兴区"
                    },
                    {
                        "value": "3244",
                        "lable": "南浔区"
                    },
                    {
                        "value": "3245",
                        "lable": "德清县"
                    },
                    {
                        "value": "3246",
                        "lable": "长兴县"
                    },
                    {
                        "value": "3247",
                        "lable": "安吉县"
                    }
                ]
            },
            {
                "value": "385",
                "lable": "嘉兴",
                "children": [
                    {
                        "value": "3248",
                        "lable": "南湖区"
                    },
                    {
                        "value": "3249",
                        "lable": "秀洲区"
                    },
                    {
                        "value": "3250",
                        "lable": "海宁市"
                    },
                    {
                        "value": "3251",
                        "lable": "嘉善县"
                    },
                    {
                        "value": "3252",
                        "lable": "平湖市"
                    },
                    {
                        "value": "3253",
                        "lable": "桐乡市"
                    },
                    {
                        "value": "3254",
                        "lable": "海盐县"
                    }
                ]
            },
            {
                "value": "386",
                "lable": "金华",
                "children": [
                    {
                        "value": "3255",
                        "lable": "婺城区"
                    },
                    {
                        "value": "3256",
                        "lable": "金东区"
                    },
                    {
                        "value": "3257",
                        "lable": "兰溪市"
                    },
                    {
                        "value": "3258",
                        "lable": "市区"
                    },
                    {
                        "value": "3259",
                        "lable": "佛堂镇"
                    },
                    {
                        "value": "3260",
                        "lable": "上溪镇"
                    },
                    {
                        "value": "3261",
                        "lable": "义亭镇"
                    },
                    {
                        "value": "3262",
                        "lable": "大陈镇"
                    },
                    {
                        "value": "3263",
                        "lable": "苏溪镇"
                    },
                    {
                        "value": "3264",
                        "lable": "赤岸镇"
                    },
                    {
                        "value": "3265",
                        "lable": "东阳市"
                    },
                    {
                        "value": "3266",
                        "lable": "永康市"
                    },
                    {
                        "value": "3267",
                        "lable": "武义县"
                    },
                    {
                        "value": "3268",
                        "lable": "浦江县"
                    },
                    {
                        "value": "3269",
                        "lable": "磐安县"
                    }
                ]
            },
            {
                "value": "387",
                "lable": "丽水",
                "children": [
                    {
                        "value": "3270",
                        "lable": "莲都区"
                    },
                    {
                        "value": "3271",
                        "lable": "龙泉市"
                    },
                    {
                        "value": "3272",
                        "lable": "青田县"
                    },
                    {
                        "value": "3273",
                        "lable": "缙云县"
                    },
                    {
                        "value": "3274",
                        "lable": "遂昌县"
                    },
                    {
                        "value": "3275",
                        "lable": "松阳县"
                    },
                    {
                        "value": "3276",
                        "lable": "云和县"
                    },
                    {
                        "value": "3277",
                        "lable": "庆元县"
                    },
                    {
                        "value": "3278",
                        "lable": "景宁"
                    }
                ]
            },
            {
                "value": "388",
                "lable": "宁波",
                "children": [
                    {
                        "value": "3279",
                        "lable": "海曙区"
                    },
                    {
                        "value": "3280",
                        "lable": "江东区"
                    },
                    {
                        "value": "3281",
                        "lable": "江北区"
                    },
                    {
                        "value": "3282",
                        "lable": "镇海区"
                    },
                    {
                        "value": "3283",
                        "lable": "北仑区"
                    },
                    {
                        "value": "3284",
                        "lable": "鄞州区"
                    },
                    {
                        "value": "3285",
                        "lable": "余姚市"
                    },
                    {
                        "value": "3286",
                        "lable": "慈溪市"
                    },
                    {
                        "value": "3287",
                        "lable": "奉化市"
                    },
                    {
                        "value": "3288",
                        "lable": "象山县"
                    },
                    {
                        "value": "3289",
                        "lable": "宁海县"
                    }
                ]
            },
            {
                "value": "389",
                "lable": "绍兴",
                "children": [
                    {
                        "value": "3290",
                        "lable": "越城区"
                    },
                    {
                        "value": "3291",
                        "lable": "上虞市"
                    },
                    {
                        "value": "3292",
                        "lable": "嵊州市"
                    },
                    {
                        "value": "3293",
                        "lable": "绍兴县"
                    },
                    {
                        "value": "3294",
                        "lable": "新昌县"
                    },
                    {
                        "value": "3295",
                        "lable": "诸暨市"
                    }
                ]
            },
            {
                "value": "390",
                "lable": "台州",
                "children": [
                    {
                        "value": "3296",
                        "lable": "椒江区"
                    },
                    {
                        "value": "3297",
                        "lable": "黄岩区"
                    },
                    {
                        "value": "3298",
                        "lable": "路桥区"
                    },
                    {
                        "value": "3299",
                        "lable": "温岭市"
                    },
                    {
                        "value": "3300",
                        "lable": "临海市"
                    },
                    {
                        "value": "3301",
                        "lable": "玉环县"
                    },
                    {
                        "value": "3302",
                        "lable": "三门县"
                    },
                    {
                        "value": "3303",
                        "lable": "天台县"
                    },
                    {
                        "value": "3304",
                        "lable": "仙居县"
                    }
                ]
            },
            {
                "value": "391",
                "lable": "温州",
                "children": [
                    {
                        "value": "3305",
                        "lable": "鹿城区"
                    },
                    {
                        "value": "3306",
                        "lable": "龙湾区"
                    },
                    {
                        "value": "3307",
                        "lable": "瓯海区"
                    },
                    {
                        "value": "3308",
                        "lable": "瑞安市"
                    },
                    {
                        "value": "3309",
                        "lable": "乐清市"
                    },
                    {
                        "value": "3310",
                        "lable": "洞头县"
                    },
                    {
                        "value": "3311",
                        "lable": "永嘉县"
                    },
                    {
                        "value": "3312",
                        "lable": "平阳县"
                    },
                    {
                        "value": "3313",
                        "lable": "苍南县"
                    },
                    {
                        "value": "3314",
                        "lable": "文成县"
                    },
                    {
                        "value": "3315",
                        "lable": "泰顺县"
                    }
                ]
            },
            {
                "value": "392",
                "lable": "舟山",
                "children": [
                    {
                        "value": "3316",
                        "lable": "定海区"
                    },
                    {
                        "value": "3317",
                        "lable": "普陀区"
                    },
                    {
                        "value": "3318",
                        "lable": "岱山县"
                    },
                    {
                        "value": "3319",
                        "lable": "嵊泗县"
                    }
                ]
            },
            {
                "value": "393",
                "lable": "衢州",
                "children": [
                    {
                        "value": "3320",
                        "lable": "衢州市"
                    },
                    {
                        "value": "3321",
                        "lable": "江山市"
                    },
                    {
                        "value": "3322",
                        "lable": "常山县"
                    },
                    {
                        "value": "3323",
                        "lable": "开化县"
                    },
                    {
                        "value": "3324",
                        "lable": "龙游县"
                    }
                ]
            }
        ]
    },
    {
        "value": "32",
        "lable": "重庆",
        "children": [
            {
                "value": "394",
                "lable": "重庆",
                "children": [
                    {
                        "value": "3325",
                        "lable": "合川区"
                    },
                    {
                        "value": "3326",
                        "lable": "江津区"
                    },
                    {
                        "value": "3327",
                        "lable": "南川区"
                    },
                    {
                        "value": "3328",
                        "lable": "永川区"
                    },
                    {
                        "value": "3329",
                        "lable": "南岸区"
                    },
                    {
                        "value": "3330",
                        "lable": "渝北区"
                    },
                    {
                        "value": "3331",
                        "lable": "万盛区"
                    },
                    {
                        "value": "3332",
                        "lable": "大渡口区"
                    },
                    {
                        "value": "3333",
                        "lable": "万州区"
                    },
                    {
                        "value": "3334",
                        "lable": "北碚区"
                    },
                    {
                        "value": "3335",
                        "lable": "沙坪坝区"
                    },
                    {
                        "value": "3336",
                        "lable": "巴南区"
                    },
                    {
                        "value": "3337",
                        "lable": "涪陵区"
                    },
                    {
                        "value": "3338",
                        "lable": "江北区"
                    },
                    {
                        "value": "3339",
                        "lable": "九龙坡区"
                    },
                    {
                        "value": "3340",
                        "lable": "渝中区"
                    },
                    {
                        "value": "3341",
                        "lable": "黔江开发区"
                    },
                    {
                        "value": "3342",
                        "lable": "长寿区"
                    },
                    {
                        "value": "3343",
                        "lable": "双桥区"
                    },
                    {
                        "value": "3344",
                        "lable": "綦江县"
                    },
                    {
                        "value": "3345",
                        "lable": "潼南县"
                    },
                    {
                        "value": "3346",
                        "lable": "铜梁县"
                    },
                    {
                        "value": "3347",
                        "lable": "大足县"
                    },
                    {
                        "value": "3348",
                        "lable": "荣昌县"
                    },
                    {
                        "value": "3349",
                        "lable": "璧山县"
                    },
                    {
                        "value": "3350",
                        "lable": "垫江县"
                    },
                    {
                        "value": "3351",
                        "lable": "武隆县"
                    },
                    {
                        "value": "3352",
                        "lable": "丰都县"
                    },
                    {
                        "value": "3353",
                        "lable": "城口县"
                    },
                    {
                        "value": "3354",
                        "lable": "梁平县"
                    },
                    {
                        "value": "3355",
                        "lable": "开县"
                    },
                    {
                        "value": "3356",
                        "lable": "巫溪县"
                    },
                    {
                        "value": "3357",
                        "lable": "巫山县"
                    },
                    {
                        "value": "3358",
                        "lable": "奉节县"
                    },
                    {
                        "value": "3359",
                        "lable": "云阳县"
                    },
                    {
                        "value": "3360",
                        "lable": "忠县"
                    },
                    {
                        "value": "3361",
                        "lable": "石柱"
                    },
                    {
                        "value": "3362",
                        "lable": "彭水"
                    },
                    {
                        "value": "3363",
                        "lable": "酉阳"
                    },
                    {
                        "value": "3364",
                        "lable": "秀山"
                    }
                ]
            }
        ]
    },
    {
        "value": "33",
        "lable": "香港",
        "children": [
            {
                "value": "395",
                "lable": "香港",
                "children": [
                    {
                        "value": "3365",
                        "lable": "沙田区"
                    },
                    {
                        "value": "3366",
                        "lable": "东区"
                    },
                    {
                        "value": "3367",
                        "lable": "观塘区"
                    },
                    {
                        "value": "3368",
                        "lable": "黄大仙区"
                    },
                    {
                        "value": "3369",
                        "lable": "九龙城区"
                    },
                    {
                        "value": "3370",
                        "lable": "屯门区"
                    },
                    {
                        "value": "3371",
                        "lable": "葵青区"
                    },
                    {
                        "value": "3372",
                        "lable": "元朗区"
                    },
                    {
                        "value": "3373",
                        "lable": "深水埗区"
                    },
                    {
                        "value": "3374",
                        "lable": "西贡区"
                    },
                    {
                        "value": "3375",
                        "lable": "大埔区"
                    },
                    {
                        "value": "3376",
                        "lable": "湾仔区"
                    },
                    {
                        "value": "3377",
                        "lable": "油尖旺区"
                    },
                    {
                        "value": "3378",
                        "lable": "北区"
                    },
                    {
                        "value": "3379",
                        "lable": "南区"
                    },
                    {
                        "value": "3380",
                        "lable": "荃湾区"
                    },
                    {
                        "value": "3381",
                        "lable": "中西区"
                    },
                    {
                        "value": "3382",
                        "lable": "离岛区"
                    }
                ]
            }
        ]
    },
    {
        "value": "34",
        "lable": "澳门",
        "children": [
            {
                "value": "396",
                "lable": "澳门",
                "children": [
                    {
                        "value": "3383",
                        "lable": "澳门"
                    }
                ]
            }
        ]
    },
    {
        "value": "35",
        "lable": "台湾",
        "children": [
            {
                "value": "397",
                "lable": "台湾",
                "children": [
                    {
                        "value": "3384",
                        "lable": "台北"
                    },
                    {
                        "value": "3385",
                        "lable": "高雄"
                    },
                    {
                        "value": "3386",
                        "lable": "基隆"
                    },
                    {
                        "value": "3387",
                        "lable": "台中"
                    },
                    {
                        "value": "3388",
                        "lable": "台南"
                    },
                    {
                        "value": "3389",
                        "lable": "新竹"
                    },
                    {
                        "value": "3390",
                        "lable": "嘉义"
                    },
                    {
                        "value": "3391",
                        "lable": "宜兰县"
                    },
                    {
                        "value": "3392",
                        "lable": "桃园县"
                    },
                    {
                        "value": "3393",
                        "lable": "苗栗县"
                    },
                    {
                        "value": "3394",
                        "lable": "彰化县"
                    },
                    {
                        "value": "3395",
                        "lable": "南投县"
                    },
                    {
                        "value": "3396",
                        "lable": "云林县"
                    },
                    {
                        "value": "3397",
                        "lable": "屏东县"
                    },
                    {
                        "value": "3398",
                        "lable": "台东县"
                    },
                    {
                        "value": "3399",
                        "lable": "花莲县"
                    },
                    {
                        "value": "3400",
                        "lable": "澎湖县"
                    }
                ]
            }
        ]
    }
]
export default Constants;
