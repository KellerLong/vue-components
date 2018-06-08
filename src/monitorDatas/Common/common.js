/* eslint-disable */
const commonDatas = {
  moneyTypes: {
    "message":"查询成功",
    "recordsTotal":41,
    "data":[
        {
            "currencyDesc":"人民币",
            "currencyId":1,
            "currencyName":"RMB"
        },
        {
            "currencyDesc":"美金",
            "currencyId":2,
            "currencyName":"USD"
        },
        {
            "currencyDesc":"欧元",
            "currencyId":3,
            "currencyName":"EUR"
        },
        {
            "currencyDesc":"台币",
            "currencyId":4,
            "currencyName":"NTD"
        },
        {
            "currencyDesc":"巴西币",
            "currencyId":5,
            "currencyName":"BRL"
        },
        {
            "currencyDesc":"加拿大元",
            "currencyId":6,
            "currencyName":"CAD"
        },
        {
            "currencyDesc":"瑞士法郎",
            "currencyId":7,
            "currencyName":"CHF"
        },
        {
            "currencyDesc":"捷克克朗",
            "currencyId":8,
            "currencyName":"CZK"
        },
        {
            "currencyDesc":"丹麦克朗",
            "currencyId":9,
            "currencyName":"DKK"
        },
        {
            "currencyDesc":"英镑",
            "currencyId":10,
            "currencyName":"GBP"
        },
        {
            "currencyDesc":"港元",
            "currencyId":11,
            "currencyName":"HKD"
        },
        {
            "currencyDesc":"匈牙利福林",
            "currencyId":12,
            "currencyName":"HUF"
        },
        {
            "currencyDesc":"印度卢比",
            "currencyId":13,
            "currencyName":"INR"
        },
        {
            "currencyDesc":"日元",
            "currencyId":14,
            "currencyName":"JPY"
        },
        {
            "currencyDesc":"墨西哥元",
            "currencyId":15,
            "currencyName":"MXN"
        },
        {
            "currencyDesc":"马来西亚林吉特",
            "currencyId":16,
            "currencyName":"MYR"
        },
        {
            "currencyDesc":"挪威克朗",
            "currencyId":17,
            "currencyName":"NOK"
        },
        {
            "currencyDesc":"澳大利亚元",
            "currencyId":18,
            "currencyName":"AUD"
        },
        {
            "currencyDesc":"波兰兹罗提",
            "currencyId":19,
            "currencyName":"PLN"
        },
        {
            "currencyDesc":"瑞典克朗",
            "currencyId":20,
            "currencyName":"SEK"
        },
        {
            "currencyDesc":"新加坡元",
            "currencyId":21,
            "currencyName":"SGD"
        },
        {
            "currencyDesc":"斯洛伐克克朗",
            "currencyId":22,
            "currencyName":"SKK"
        },
        {
            "currencyDesc":"泰铢",
            "currencyId":23,
            "currencyName":"THB"
        },
        {
            "currencyDesc":"越南盾",
            "currencyId":24,
            "currencyName":"VND"
        },
        {
            "currencyDesc":"迪拉姆",
            "currencyId":25,
            "currencyName":"AED"
        },
        {
            "currencyDesc":"德国马克",
            "currencyId":26,
            "currencyName":"DEM"
        },
        {
            "currencyDesc":"芬兰马克",
            "currencyId":27,
            "currencyName":"FIM"
        },
        {
            "currencyDesc":"法国法郎",
            "currencyId":28,
            "currencyName":"FRF"
        },
        {
            "currencyDesc":"印尼盾",
            "currencyId":29,
            "currencyName":"IDR"
        },
        {
            "currencyDesc":"爱尔兰镑",
            "currencyId":30,
            "currencyName":"IEP"
        },
        {
            "currencyDesc":"韩国元",
            "currencyId":31,
            "currencyName":"KRW"
        },
        {
            "currencyDesc":"荷兰盾",
            "currencyId":32,
            "currencyName":"NLG"
        },
        {
            "currencyDesc":"新西兰元",
            "currencyId":33,
            "currencyName":"NZD"
        },
        {
            "currencyDesc":"菲律宾比索",
            "currencyId":34,
            "currencyName":"PHP"
        },
        {
            "currencyDesc":"罗马尼亚列伊",
            "currencyId":35,
            "currencyName":"RON"
        },
        {
            "currencyDesc":"俄罗斯卢布",
            "currencyId":36,
            "currencyName":"RUB"
        },
        {
            "currencyDesc":"西班牙比塞塔",
            "currencyId":37,
            "currencyName":"ESP"
        },
        {
            "currencyDesc":"兰特",
            "currencyId":38,
            "currencyName":"ZAR"
        },
        {
            "currencyDesc":"比利时法郎",
            "currencyId":39,
            "currencyName":"BEF"
        },
        {
            "currencyDesc":"奥地利先令",
            "currencyId":40,
            "currencyName":"ATS"
        },
        {
            "currencyDesc":"意大利里拉",
            "currencyId":41,
            "currencyName":"ITL"
        }
    ],
    "status":1
},
  arStatus: {
    "message":"查询成功",
    "recordsTotal":14,
    "data":[
        {
            "arStatusTypeEngName":"unconfirmed",
            "arStatusTypeId":1,
            "arStatusTypeName":"待確認"
        },
        {
            "arStatusTypeEngName":"confirmed",
            "arStatusTypeId":2,
            "arStatusTypeName":"已確認"
        },
        {
            "arStatusTypeEngName":"transfered",
            "arStatusTypeId":3,
            "arStatusTypeName":"已授讓"
        },
        {
            "arStatusTypeEngName":"reject",
            "arStatusTypeId":6,
            "arStatusTypeName":"授讓拒絕"
        },
        {
            "arStatusTypeEngName":"cancelTransfered",
            "arStatusTypeId":9,
            "arStatusTypeName":"授讓取消"
        },
        {
            "arStatusTypeEngName":"discountApplying",
            "arStatusTypeId":22,
            "arStatusTypeName":"貼現申請中"
        },
        {
            "arStatusTypeEngName":"discountSigning",
            "arStatusTypeId":23,
            "arStatusTypeName":"贴现合同簽署中"
        },
        {
            "arStatusTypeEngName":"discountAuditing",
            "arStatusTypeId":24,
            "arStatusTypeName":"放款核實"
        },
        {
            "arStatusTypeEngName":"discountNotLoaned",
            "arStatusTypeId":25,
            "arStatusTypeName":"未放款"
        },
        {
            "arStatusTypeEngName":"discountLoaned",
            "arStatusTypeId":26,
            "arStatusTypeName":"已放款"
        },
        {
            "arStatusTypeEngName":"discountCanceled",
            "arStatusTypeId":27,
            "arStatusTypeName":"貼現取消"
        },
        {
            "arStatusTypeEngName":"discountReject",
            "arStatusTypeId":28,
            "arStatusTypeName":"放款拒絕"
        },
        {
            "arStatusTypeEngName":"discountReceivable",
            "arStatusTypeId":29,
            "arStatusTypeName":"已回款"
        },
        {
            "arStatusTypeEngName":"discountDisabled",
            "arStatusTypeId":99,
            "arStatusTypeName":"不可用"
        }
    ],
    "status":1
},
 comdata:{
    result: 'true',
    message: ' 操作成功'
 },
 arDatas:{
    "data":[
        {
            "arStatusTypeName":"已確認",
            "billBookAmt":18406.44,
            "billBookCurr":null,
            "billDueDate":1530288000000,
            "billId":"5100002408",
            "billPayDate":null,
            "billPayStatus":null,
            "billStartDate":1520870400000,
            "buyerCustNo":"A086041",
            "checkedStatus":2,
            "companyName":"深圳富泰宏精密工業有限公司",
            "createtime":1522359044000,
            "currencyDesc":null,
            "currencyName":null,
            "custFromId":"",
            "custFromName":"",
            "custId":"09210827048265",
            "custToId":"",
            "custToName":"",
            "discountAuditStatus":1,
            "isInterfaceMode":0,
            "isMasterAr":1,
            "isNeedDiscountAudit":0,
            "loanAmt":18406.44,
            "masterChainId":"AR20180330000003",
            "parentChainId":"",
            "tableData":[
                {
                    "arStatusTypeName":"貼現取消",
                    "billBookAmt":18406.44,
                    "billBookCurr":null,
                    "billDueDate":1530288000000,
                    "billId":"5100002408",
                    "billPayDate":null,
                    "billStartDate":1520870400000,
                    "buyerCustNo":"A086041",
                    "checkedStatus":27,
                    "companyName":"深圳富泰宏精密工業有限公司",
                    "createtime":1528163811000,
                    "currencyDesc":null,
                    "currencyName":null,
                    "custFromId":"09210827048265",
                    "custFromName":"深圳市新威達電子有限公司",
                    "custId":"11031049033568",
                    "custToId":"11031049033568",
                    "custToName":"富金富",
                    "isInterfaceMode":0,
                    "isMasterAr":0,
                    "loanAmt":0,
                    "masterChainId":"AR20180605000001",
                    "parentChainId":"AR20180330000003",
                    "transSerialNo":"7c0ab60f-2997-4d89-8f6a-20c179f4dc77",
                    "transType":"discount",
                    "vendorCode":"VCN0018154",
                    "vendorName":"深圳市新威達電子有限公司"
                }
            ],
            "transSerialNo":"",
            "transType":"",
            "vendorCode":"VCN0018154",
            "vendorName":"深圳市新威達電子有限公司"
        },
        {
            "arStatusTypeName":"已確認",
            "billBookAmt":22604.4,
            "billBookCurr":null,
            "billDueDate":1532880000000,
            "billId":"5100003429",
            "billPayDate":null,
            "billPayStatus":null,
            "billStartDate":1523548800000,
            "buyerCustNo":"A086041",
            "checkedStatus":2,
            "companyName":"深圳富泰宏精密工業有限公司",
            "createtime":1523655348000,
            "currencyDesc":null,
            "currencyName":null,
            "custFromId":"",
            "custFromName":"",
            "custId":"09210827048265",
            "custToId":"",
            "custToName":"",
            "discountAuditStatus":1,
            "isInterfaceMode":0,
            "isMasterAr":1,
            "isNeedDiscountAudit":0,
            "loanAmt":22604.4,
            "masterChainId":"AR20180414000005",
            "parentChainId":"",
            "tableData":[

            ],
            "transSerialNo":"",
            "transType":"",
            "vendorCode":"VCN0018154",
            "vendorName":"深圳市新威達電子有限公司"
        },
        {
            "arStatusTypeName":"已確認",
            "billBookAmt":2260.44,
            "billBookCurr":null,
            "billDueDate":1522512000000,
            "billId":"5100011105",
            "billPayDate":null,
            "billPayStatus":null,
            "billStartDate":1512921600000,
            "buyerCustNo":"A086041",
            "checkedStatus":2,
            "companyName":"深圳富泰宏精密工業有限公司",
            "createtime":1513027773000,
            "currencyDesc":null,
            "currencyName":null,
            "custFromId":"",
            "custFromName":"",
            "custId":"09210827048265",
            "custToId":"",
            "custToName":"",
            "discountAuditStatus":1,
            "isInterfaceMode":0,
            "isMasterAr":1,
            "isNeedDiscountAudit":0,
            "loanAmt":2260.44,
            "masterChainId":"AR20171212000001",
            "parentChainId":"",
            "tableData":[

            ],
            "transSerialNo":"",
            "transType":"",
            "vendorCode":"VCN0018154",
            "vendorName":"深圳市新威達電子有限公司"
        },
        {
            "arStatusTypeName":"已確認",
            "billBookAmt":7806.24,
            "billBookCurr":null,
            "billDueDate":1525190400000,
            "billId":"9300000053",
            "billPayDate":null,
            "billPayStatus":null,
            "billStartDate":1515600000000,
            "buyerCustNo":"A086041",
            "checkedStatus":2,
            "companyName":"深圳富泰宏精密工業有限公司",
            "createtime":1515706452000,
            "currencyDesc":null,
            "currencyName":null,
            "custFromId":"",
            "custFromName":"",
            "custId":"09210827048265",
            "custToId":"",
            "custToName":"",
            "discountAuditStatus":1,
            "isInterfaceMode":0,
            "isMasterAr":1,
            "isNeedDiscountAudit":0,
            "loanAmt":7806.24,
            "masterChainId":"AR20180112000002",
            "parentChainId":"",
            "tableData":[

            ],
            "transSerialNo":"",
            "transType":"",
            "vendorCode":"VCN0018154",
            "vendorName":"深圳市新威達電子有限公司"
        },
        {
            "arStatusTypeName":"已確認",
            "billBookAmt":27927.9,
            "billBookCurr":null,
            "billDueDate":1525190400000,
            "billId":"9300000054",
            "billPayDate":null,
            "billPayStatus":null,
            "billStartDate":1515600000000,
            "buyerCustNo":"A086041",
            "checkedStatus":2,
            "companyName":"深圳富泰宏精密工業有限公司",
            "createtime":1515706453000,
            "currencyDesc":null,
            "currencyName":null,
            "custFromId":"",
            "custFromName":"",
            "custId":"09210827048265",
            "custToId":"",
            "custToName":"",
            "discountAuditStatus":1,
            "isInterfaceMode":0,
            "isMasterAr":1,
            "isNeedDiscountAudit":0,
            "loanAmt":27927.9,
            "masterChainId":"AR20180112000003",
            "parentChainId":"",
            "tableData":[

            ],
            "transSerialNo":"",
            "transType":"",
            "vendorCode":"VCN0018154",
            "vendorName":"深圳市新威達電子有限公司"
        },
        {
            "arStatusTypeName":"已確認",
            "billBookAmt":533.52,
            "billBookCurr":null,
            "billDueDate":1525190400000,
            "billId":"9300000455",
            "billPayDate":null,
            "billPayStatus":null,
            "billStartDate":1516118400000,
            "buyerCustNo":"A086041",
            "checkedStatus":2,
            "companyName":"深圳富泰宏精密工業有限公司",
            "createtime":1522359045000,
            "currencyDesc":null,
            "currencyName":null,
            "custFromId":"",
            "custFromName":"",
            "custId":"09210827048265",
            "custToId":"",
            "custToName":"",
            "discountAuditStatus":1,
            "isInterfaceMode":0,
            "isMasterAr":1,
            "isNeedDiscountAudit":0,
            "loanAmt":533.52,
            "masterChainId":"AR20180330000004",
            "parentChainId":"",
            "tableData":[

            ],
            "transSerialNo":"",
            "transType":"",
            "vendorCode":"VCN0018154",
            "vendorName":"深圳市新威達電子有限公司"
        },
        {
            "arStatusTypeName":"已確認",
            "billBookAmt":2134.08,
            "billBookCurr":null,
            "billDueDate":1525190400000,
            "billId":"9300000528",
            "billPayDate":null,
            "billPayStatus":null,
            "billStartDate":1516204800000,
            "buyerCustNo":"A086041",
            "checkedStatus":2,
            "companyName":"深圳富泰宏精密工業有限公司",
            "createtime":1522359045000,
            "currencyDesc":null,
            "currencyName":null,
            "custFromId":"",
            "custFromName":"",
            "custId":"09210827048265",
            "custToId":"",
            "custToName":"",
            "discountAuditStatus":1,
            "isInterfaceMode":0,
            "isMasterAr":1,
            "isNeedDiscountAudit":0,
            "loanAmt":2134.08,
            "masterChainId":"AR20180330000005",
            "parentChainId":"",
            "tableData":[

            ],
            "transSerialNo":"",
            "transType":"",
            "vendorCode":"VCN0018154",
            "vendorName":"深圳市新威達電子有限公司"
        },
        {
            "arStatusTypeName":"已確認",
            "billBookAmt":533.52,
            "billBookCurr":null,
            "billDueDate":1527609600000,
            "billId":"9300000873",
            "billPayDate":null,
            "billPayStatus":null,
            "billStartDate":1517414400000,
            "buyerCustNo":"A086041",
            "checkedStatus":2,
            "companyName":"深圳富泰宏精密工業有限公司",
            "createtime":1522359045000,
            "currencyDesc":null,
            "currencyName":null,
            "custFromId":"",
            "custFromName":"",
            "custId":"09210827048265",
            "custToId":"",
            "custToName":"",
            "discountAuditStatus":1,
            "isInterfaceMode":0,
            "isMasterAr":1,
            "isNeedDiscountAudit":0,
            "loanAmt":533.52,
            "masterChainId":"AR20180330000006",
            "parentChainId":"",
            "tableData":[

            ],
            "transSerialNo":"",
            "transType":"",
            "vendorCode":"VCN0018154",
            "vendorName":"深圳市新威達電子有限公司"
        },
        {
            "arStatusTypeName":"已確認",
            "billBookAmt":2134.08,
            "billBookCurr":null,
            "billDueDate":1527609600000,
            "billId":"9300000896",
            "billPayDate":null,
            "billPayStatus":null,
            "billStartDate":1517414400000,
            "buyerCustNo":"A086041",
            "checkedStatus":2,
            "companyName":"深圳富泰宏精密工業有限公司",
            "createtime":1522359045000,
            "currencyDesc":null,
            "currencyName":null,
            "custFromId":"",
            "custFromName":"",
            "custId":"09210827048265",
            "custToId":"",
            "custToName":"",
            "discountAuditStatus":1,
            "isInterfaceMode":0,
            "isMasterAr":1,
            "isNeedDiscountAudit":0,
            "loanAmt":134.08,
            "masterChainId":"AR20180330000007",
            "parentChainId":"",
            "tableData":[
                {
                    "arStatusTypeName":"不可用",
                    "billBookAmt":2000,
                    "billBookCurr":null,
                    "billDueDate":1527609600000,
                    "billId":"9300000896",
                    "billPayDate":null,
                    "billStartDate":1517414400000,
                    "buyerCustNo":"A086041",
                    "checkedStatus":99,
                    "companyName":"深圳富泰宏精密工業有限公司",
                    "createtime":1527745456000,
                    "currencyDesc":null,
                    "currencyName":null,
                    "custFromId":"09210827048265",
                    "custFromName":"深圳市新威達電子有限公司",
                    "custId":"09201912016466",
                    "custToId":"09201912016466",
                    "custToName":"山西英和貿易有限公司",
                    "isInterfaceMode":null,
                    "isMasterAr":0,
                    "loanAmt":0,
                    "masterChainId":"AR20180531000002",
                    "parentChainId":"AR20180330000007",
                    "transSerialNo":"573b069e-af2a-4de7-b7bd-4b65e83efd03",
                    "transType":"arpay",
                    "vendorCode":"VCN0018154",
                    "vendorName":"深圳市新威達電子有限公司"
                }
            ],
            "transSerialNo":"",
            "transType":"",
            "vendorCode":"VCN0018154",
            "vendorName":"深圳市新威達電子有限公司"
        },
        {
            "arStatusTypeName":"已確認",
            "billBookAmt":8292.96,
            "billBookCurr":null,
            "billDueDate":1530288000000,
            "billId":"9300001502",
            "billPayDate":null,
            "billPayStatus":null,
            "billStartDate":1520611200000,
            "buyerCustNo":"A086041",
            "checkedStatus":2,
            "companyName":"深圳富泰宏精密工業有限公司",
            "createtime":1522359045000,
            "currencyDesc":null,
            "currencyName":null,
            "custFromId":"",
            "custFromName":"",
            "custId":"09210827048265",
            "custToId":"",
            "custToName":"",
            "discountAuditStatus":1,
            "isInterfaceMode":0,
            "isMasterAr":1,
            "isNeedDiscountAudit":0,
            "loanAmt":8292.96,
            "masterChainId":"AR20180330000008",
            "parentChainId":"",
            "tableData":[

            ],
            "transSerialNo":"",
            "transType":"",
            "vendorCode":"VCN0018154",
            "vendorName":"深圳市新威達電子有限公司"
        }
    ],
    "msg":"请求成功",
    "recordsTotal":416,
    "status":1
},
arDetails:{
    "data":{
        "arAvailableAmt":102070.8,
        "arSourceDesc":"自有",
        "arStatusTypeName":"已確認",
        "billBookAmt":102070.8,
        "billPayDate":1516809600000,
        "checkedStatus":2,
        "companyName":"富泰華工業(深圳)有限公司",
        "contractList":[
            {
                "contractId":"c0b2b899-f047-4698-b3c2-84e44233d44f",
                "contractName":"國內保理業務合同（有追索權）",
                "contractStatus":2
            },
            {
                "contractId":"cf5a23ec-8340-47f6-a0ef-44934dba9863",
                "contractName":"應收賬款債權轉讓通知書（整體轉讓）",
                "contractStatus":2
            },
            {
                "contractId":"f9f53ca6-2d0c-46b1-8bd3-517af17d950f",
                "contractName":"供應商信息暨銀行資料確認書",
                "contractStatus":2
            }
        ],
        "currencyDesc":null,
        "currencyName":null,
        "custFromId":null,
        "custFromName": '转让单位',
        "custToId":null,
        "custToName":null,
        "invoiceCustomList":[
            {
                "invoiceAfterTaxAmt":102070.8,
                "invoiceCurrency":null,
                "invoiceCurrencyDesc":null,
                "invoiceDate":1512576000000,
                "invoiceIsSelected":0,
                "invoiceNo":"33759495"
            },
            {
                "invoiceAfterTaxAmt":102070.8,
                "invoiceCurrency":null,
                "invoiceCurrencyDesc":null,
                "invoiceDate":1512576000000,
                "invoiceIsSelected":0,
                "invoiceNo":"33759496"
            },
            {
                "invoiceAfterTaxAmt":102070.8,
                "invoiceCurrency":null,
                "invoiceCurrencyDesc":null,
                "invoiceDate":1512576000000,
                "invoiceIsSelected":0,
                "invoiceNo":"33759497"
            }
        ],
        "isAvailableInvoice":0,
        "isMasterAr":1,
        "parentChainId":null,
        "poNumber":null,
        "sourceChainId":null,
        "transSerial":null,
        "transSerialNo":null,
        "transType":null
    },
    "msg":"请求成功",
    "recordsTotal":1,
    "status":1
},
factories:{
    "message":"查询成功",
    "recordsTotal":5,
    "showData":[
        {
            "factoringApId":"FJF",
            "factoringCustId":"11031049033568"
        },
        {
            "factoringApId":"富泰华04",
            "factoringCustId":"89349cc9-1768-436c-8932-a37f181a23c6"
        },
        {
            "factoringApId":"富泰华03",
            "factoringCustId":"b7a95f78-349e-4689-8b7e-1a48228fd456"
        },
        {
            "factoringApId":"HLF",
            "factoringCustId":"b4e0e5f6-f17d-4b7b-9ade-99fa8f06bac8"
        },
        {
            "factoringApId":"CF",
            "factoringCustId":"15c09de8-6600-42c5-8e5a-acfe1951f8b0"
        }
    ],
    "status":1
},
fenboList:{
    "data":[
        {
            "billId":"HBA-H70010",
            "buyerCustNo":"A086348",
            "companyName":"福士瑞精密工業(鄭州)有限公司",
            "companyNameOfL1":"深圳市新威達電子有限公司",
            "custFromName":"深圳市新威達電子有限公司",
            "custId":"09210827048265",
            "isAudited":0,
            "riskPlatFormURL":"https://jurongtest.foxconn.com/report",
            "riskPlatFormVendorApi":"vendor",
            "vendorCodes":"VCN0018154"
        },
        {
            "billId":"HPF-HC0057",
            "buyerCustNo":"A086471",
            "companyName":"深圳市裕展精密科技有限公司",
            "companyNameOfL1":"VCN0000152公司名稱",
            "custFromName":"VCN0000152公司名稱",
            "custId":"10200823045270",
            "isAudited":0,
            "riskPlatFormURL":"https://jurongtest.foxconn.com/report",
            "riskPlatFormVendorApi":"vendor",
            "vendorCodes":"VCN0000152"
        },
        {
            "billId":"HTT-I40375",
            "buyerCustNo":"A086350",
            "companyName":"鴻富準精密工業(深圳)有限公司",
            "companyNameOfL1":"深圳市新威達電子有限公司",
            "custFromName":null,
            "custId":"09210827048265",
            "isAudited":1,
            "riskPlatFormURL":"https://jurongtest.foxconn.com/report",
            "riskPlatFormVendorApi":"vendor",
            "vendorCodes":"VCN0018154"
        },
        {
            "billId":"HOI-HB0014",
            "buyerCustNo":"A086440",
            "companyName":"晉城富泰華精密電子有限公司",
            "companyNameOfL1":"VCN0000152公司名稱",
            "custFromName":"VCN0000152暱稱",
            "custId":"10200823045270",
            "isAudited":1,
            "riskPlatFormURL":"https://jurongtest.foxconn.com/report",
            "riskPlatFormVendorApi":"vendor",
            "vendorCodes":"VCN0000152"
        }
    ],
    "draw":2,
    "recordsFiltered":4,
    "recordsTotal":4
},
getArData:{
    "datas":[
        {
            "arStatusTypeName":"已授讓",
            "billId":"HPF-HB0431",
            "billPayDate":1520179200000,
            "checkedStatus":2,
            "companyName":"富泰華工業(深圳)有限公司",
            "currencyDesc":null,
            "custFromName":"深圳市新威達電子有限公司",
            "custToName":"山西英和貿易有限公司",
            "invList":null,
            "masterChainId":"AR20180606000001",
            "transAmt":200,
            "transDate":1528249037000,
            "transSerialNo":"59fcc1cc-45c8-4407-8a99-40eac08b42fa"
        },
        {
            "arStatusTypeName":"已授讓",
            "billId":"HPF-HB0431",
            "billPayDate":1520179200000,
            "checkedStatus":3,
            "companyName":"富泰華工業(深圳)有限公司",
            "currencyDesc":null,
            "custFromName":"深圳市新威達電子有限公司",
            "custToName":"山西英和貿易有限公司",
            "invList":null,
            "masterChainId":"AR20180605000007",
            "transAmt":100,
            "transDate":1528185776000,
            "transSerialNo":"28de0e69-4a35-4d6f-a945-3b917e100e69"
        },
        {
            "arStatusTypeName":"已授讓",
            "billId":"HPF-HB0431",
            "billPayDate":1520179200000,
            "checkedStatus":3,
            "companyName":"富泰華工業(深圳)有限公司",
            "currencyDesc":null,
            "custFromName":"深圳市新威達電子有限公司",
            "custToName":"山西英和貿易有限公司",
            "invList":null,
            "masterChainId":"AR20180605000006",
            "transAmt":100,
            "transDate":1528185774000,
            "transSerialNo":"fae6f9eb-dfde-491f-b5ba-40f949a59b76"
        },
        {
            "arStatusTypeName":"已授讓",
            "billId":"HPF-HB0431",
            "billPayDate":1520179200000,
            "checkedStatus":3,
            "companyName":"富泰華工業(深圳)有限公司",
            "currencyDesc":null,
            "custFromName":"深圳市新威達電子有限公司",
            "custToName":"山西英和貿易有限公司",
            "invList":null,
            "masterChainId":"AR20180605000005",
            "transAmt":100,
            "transDate":1528185770000,
            "transSerialNo":"33f7a1eb-8e7e-4132-86f0-94f7030995c2"
        },
        {
            "arStatusTypeName":"已授讓",
            "billId":"5100002408",
            "billPayDate":null,
            "checkedStatus":3,
            "companyName":"深圳富泰宏精密工業有限公司",
            "currencyDesc":null,
            "custFromName":"深圳市新威達電子有限公司",
            "custToName":"山西英和貿易有限公司",
            "invList":null,
            "masterChainId":"AR20180605000004",
            "transAmt":100,
            "transDate":1528179828000,
            "transSerialNo":"faa8350b-0ea0-4b72-b17b-b6448c43d791"
        },
        {
            "arStatusTypeName":"已授讓",
            "billId":"HOI-HC0002",
            "billPayDate":1515081600000,
            "checkedStatus":3,
            "companyName":"晉城富泰華精密電子有限公司",
            "currencyDesc":null,
            "custFromName":"VCN0000152公司名稱",
            "custToName":"山西英和貿易有限公司",
            "invList":null,
            "masterChainId":"AR20180605000002",
            "transAmt":5,
            "transDate":1528165891000,
            "transSerialNo":"511f735e-8797-4e3e-8474-10e5a6252672"
        },
        {
            "arStatusTypeName":"已授讓",
            "billId":"HOI-HB0014",
            "billPayDate":1512662400000,
            "checkedStatus":3,
            "companyName":"晉城富泰華精密電子有限公司",
            "currencyDesc":null,
            "custFromName":"VCN0000152公司名稱",
            "custToName":"山西英和貿易有限公司",
            "invList":null,
            "masterChainId":"AR20180601000003",
            "transAmt":17,
            "transDate":1527837585000,
            "transSerialNo":"2c818c3c-5c9d-4743-a37a-b7149f0546f8"
        },
        {
            "arStatusTypeName":"已授讓",
            "billId":"9300000896",
            "billPayDate":null,
            "checkedStatus":3,
            "companyName":"深圳富泰宏精密工業有限公司",
            "currencyDesc":null,
            "custFromName":"深圳市新威達電子有限公司",
            "custToName":"山西英和貿易有限公司",
            "invList":null,
            "masterChainId":"AR20180531000003",
            "transAmt":2000,
            "transDate":1527746032000,
            "transSerialNo":"f96e70c6-01be-4f99-80c8-863057d54e66"
        },
        {
            "arStatusTypeName":"已授讓",
            "billId":"JJB-HA0111",
            "billPayDate":1517241600000,
            "checkedStatus":3,
            "companyName":"昆山富成科精密電子有限公司",
            "currencyDesc":"人民币",
            "custFromName":"KSYS",
            "custToName":"山西英和貿易有限公司",
            "invList":null,
            "masterChainId":"AR20171111000001",
            "transAmt":100,
            "transDate":1510381677000,
            "transSerialNo":"0909391d-63eb-44ff-b93a-93c18b6454bc"
        },
        {
            "arStatusTypeName":"已授讓",
            "billId":"JJB-H90123",
            "billPayDate":1511971200000,
            "checkedStatus":3,
            "companyName":"昆山富成科精密電子有限公司",
            "currencyDesc":"人民币",
            "custFromName":"KSYS",
            "custToName":"山西英和貿易有限公司",
            "invList":null,
            "masterChainId":"AR20171108000005",
            "transAmt":100,
            "transDate":1510118230000,
            "transSerialNo":"5a50b00f-2240-455f-9593-12732beb6d24"
        }
    ],
    "total":20
}
}

export default commonDatas
