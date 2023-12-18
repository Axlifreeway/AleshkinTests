/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 98.0, "series": [{"data": [[0.0, 90.0], [100.0, 10.0]], "isOverall": false, "label": "/js/basket.min.js-46", "isController": false}, {"data": [[0.0, 88.0], [100.0, 12.0]], "isOverall": false, "label": "/js/search.min.js-98", "isController": false}, {"data": [[0.0, 92.0], [300.0, 1.0], [100.0, 7.0]], "isOverall": false, "label": "/js/orderModel.min.js-177", "isController": false}, {"data": [[0.0, 92.0], [100.0, 8.0]], "isOverall": false, "label": "/css/loader.css-14", "isController": false}, {"data": [[0.0, 92.0], [100.0, 8.0]], "isOverall": false, "label": "/css/checkout-modals.css-127", "isController": false}, {"data": [[0.0, 97.0], [100.0, 3.0]], "isOverall": false, "label": "/images/btn-location.svg-138", "isController": false}, {"data": [[0.0, 86.0], [100.0, 14.0]], "isOverall": false, "label": "/css/filters.css-57", "isController": false}, {"data": [[0.0, 94.0], [100.0, 6.0]], "isOverall": false, "label": "/js/search.min.js-175", "isController": false}, {"data": [[0.0, 95.0], [100.0, 5.0]], "isOverall": false, "label": "/css/index-page.css-155", "isController": false}, {"data": [[0.0, 68.0], [100.0, 32.0]], "isOverall": false, "label": "/css/basket-page.css-83", "isController": false}, {"data": [[600.0, 2.0], [700.0, 8.0], [800.0, 4.0], [900.0, 2.0], [1000.0, 9.0], [1100.0, 7.0], [1200.0, 2.0], [1300.0, 6.0], [1400.0, 8.0], [1500.0, 7.0], [1600.0, 2.0], [1700.0, 1.0], [1800.0, 3.0], [2000.0, 2.0], [2500.0, 1.0], [2800.0, 3.0], [2700.0, 1.0], [3200.0, 2.0], [3300.0, 1.0], [3400.0, 1.0], [3500.0, 3.0], [3600.0, 1.0], [3700.0, 4.0], [3900.0, 1.0], [4000.0, 1.0], [4100.0, 4.0], [4200.0, 1.0], [4300.0, 1.0], [4500.0, 1.0], [4400.0, 1.0], [4700.0, 1.0], [5100.0, 3.0], [400.0, 2.0], [500.0, 4.0]], "isOverall": false, "label": "/-1", "isController": false}, {"data": [[0.0, 87.0], [100.0, 13.0]], "isOverall": false, "label": "/css/paging.css-58", "isController": false}, {"data": [[0.0, 74.0], [100.0, 26.0]], "isOverall": false, "label": "/js/catalogItem.min.js-85", "isController": false}, {"data": [[0.0, 74.0], [300.0, 1.0], [100.0, 25.0]], "isOverall": false, "label": "/fonts/Graphik-Regular-Web.woff2-23", "isController": false}, {"data": [[0.0, 92.0], [100.0, 8.0]], "isOverall": false, "label": "/css/checkout-page.css-121", "isController": false}, {"data": [[0.0, 81.0], [100.0, 19.0]], "isOverall": false, "label": "/css/product-card.css-59", "isController": false}, {"data": [[0.0, 87.0], [100.0, 13.0]], "isOverall": false, "label": "/css/checkout-page.css-126", "isController": false}, {"data": [[0.0, 77.0], [100.0, 23.0]], "isOverall": false, "label": "/images/emo-chortle.svg-50", "isController": false}, {"data": [[0.0, 95.0], [100.0, 5.0]], "isOverall": false, "label": "/images/gen-warning.svg-118", "isController": false}, {"data": [[0.0, 93.0], [100.0, 7.0]], "isOverall": false, "label": "/css/checkout-modals.css-120", "isController": false}, {"data": [[0.0, 87.0], [100.0, 13.0]], "isOverall": false, "label": "/images/app-google-play-logo.png-11", "isController": false}, {"data": [[0.0, 91.0], [100.0, 9.0]], "isOverall": false, "label": "/js/basket.min.js-34", "isController": false}, {"data": [[0.0, 90.0], [100.0, 10.0]], "isOverall": false, "label": "/images/jcb-96.png-112", "isController": false}, {"data": [[0.0, 84.0], [100.0, 16.0]], "isOverall": false, "label": "/js/slick.1.8.0.min.js-32", "isController": false}, {"data": [[0.0, 88.0], [100.0, 12.0]], "isOverall": false, "label": "/js/yii.activeForm.min.js-29", "isController": false}, {"data": [[0.0, 91.0], [100.0, 9.0]], "isOverall": false, "label": "/images/mir-96.png-110", "isController": false}, {"data": [[0.0, 93.0], [100.0, 7.0]], "isOverall": false, "label": "/css/catalog-item.css-42", "isController": false}, {"data": [[0.0, 90.0], [100.0, 10.0]], "isOverall": false, "label": "/images/app-icon.png-52", "isController": false}, {"data": [[0.0, 88.0], [100.0, 12.0]], "isOverall": false, "label": "/css/category.css-56", "isController": false}, {"data": [[0.0, 79.0], [100.0, 21.0]], "isOverall": false, "label": "/css/products-in-shops-modal.css-96", "isController": false}, {"data": [[0.0, 87.0], [100.0, 13.0]], "isOverall": false, "label": "/css/common.css-168", "isController": false}, {"data": [[0.0, 72.0], [400.0, 1.0], [100.0, 27.0]], "isOverall": false, "label": "/css/common.css-69", "isController": false}, {"data": [[600.0, 16.0], [700.0, 8.0], [800.0, 3.0], [900.0, 4.0], [1000.0, 1.0], [1100.0, 2.0], [1800.0, 1.0], [2400.0, 1.0], [2500.0, 1.0], [2600.0, 1.0], [2800.0, 1.0], [2900.0, 2.0], [3100.0, 2.0], [3200.0, 1.0], [3500.0, 2.0], [3600.0, 1.0], [3900.0, 3.0], [4000.0, 2.0], [4200.0, 2.0], [4300.0, 1.0], [4600.0, 1.0], [4500.0, 2.0], [300.0, 3.0], [4900.0, 2.0], [5100.0, 1.0], [5300.0, 1.0], [5200.0, 1.0], [5600.0, 1.0], [400.0, 15.0], [500.0, 18.0]], "isOverall": false, "label": "/shop/map/product/9791-104", "isController": false}, {"data": [[0.0, 93.0], [100.0, 7.0]], "isOverall": false, "label": "/js/forms.min.js-114", "isController": false}, {"data": [[0.0, 82.0], [100.0, 18.0]], "isOverall": false, "label": "/css/common.css-2", "isController": false}, {"data": [[600.0, 13.0], [700.0, 10.0], [800.0, 12.0], [900.0, 6.0], [1000.0, 10.0], [1100.0, 1.0], [1200.0, 1.0], [1300.0, 3.0], [1700.0, 1.0], [1800.0, 2.0], [1900.0, 1.0], [2100.0, 2.0], [2600.0, 2.0], [2800.0, 2.0], [2900.0, 3.0], [3100.0, 1.0], [3300.0, 2.0], [3500.0, 1.0], [3700.0, 1.0], [3800.0, 2.0], [4300.0, 2.0], [4600.0, 1.0], [4800.0, 1.0], [5000.0, 1.0], [5200.0, 1.0], [5700.0, 1.0], [400.0, 4.0], [500.0, 13.0]], "isOverall": false, "label": "/-68", "isController": false}, {"data": [[0.0, 80.0], [100.0, 20.0]], "isOverall": false, "label": "/css/plugins/slick.css-94", "isController": false}, {"data": [[0.0, 93.0], [100.0, 7.0]], "isOverall": false, "label": "/css/order-complete.css-147", "isController": false}, {"data": [[0.0, 90.0], [100.0, 10.0]], "isOverall": false, "label": "/css/catalog-page.css-55", "isController": false}, {"data": [[0.0, 91.0], [100.0, 9.0]], "isOverall": false, "label": "/images/loc-point-heart.svg-48", "isController": false}, {"data": [[600.0, 3.0], [700.0, 3.0], [800.0, 3.0], [900.0, 1.0], [1200.0, 1.0], [1400.0, 1.0], [1500.0, 2.0], [1600.0, 2.0], [1700.0, 1.0], [1900.0, 1.0], [2300.0, 2.0], [2200.0, 1.0], [2400.0, 2.0], [2500.0, 1.0], [3100.0, 2.0], [3400.0, 2.0], [3500.0, 1.0], [3700.0, 1.0], [3900.0, 1.0], [4100.0, 1.0], [4400.0, 1.0], [300.0, 27.0], [4700.0, 1.0], [400.0, 28.0], [500.0, 11.0]], "isOverall": false, "label": "/dostavka-107", "isController": false}, {"data": [[0.0, 91.0], [100.0, 9.0]], "isOverall": false, "label": "/images/arrow_menu.svg-137", "isController": false}, {"data": [[0.0, 89.0], [100.0, 11.0]], "isOverall": false, "label": "/css/catalog-item.css-5", "isController": false}, {"data": [[600.0, 21.0], [700.0, 15.0], [800.0, 7.0], [900.0, 3.0], [1000.0, 3.0], [1100.0, 3.0], [1200.0, 1.0], [1300.0, 2.0], [1400.0, 4.0], [1500.0, 1.0], [1600.0, 3.0], [1700.0, 2.0], [1800.0, 1.0], [1900.0, 3.0], [2000.0, 1.0], [2100.0, 2.0], [2300.0, 1.0], [2600.0, 2.0], [2700.0, 3.0], [2900.0, 2.0], [3000.0, 1.0], [3100.0, 1.0], [3300.0, 1.0], [3700.0, 1.0], [4200.0, 1.0], [4500.0, 1.0], [400.0, 1.0], [500.0, 13.0]], "isOverall": false, "label": "/-151", "isController": false}, {"data": [[0.0, 93.0], [100.0, 7.0]], "isOverall": false, "label": "/js/search.min.js-156", "isController": false}, {"data": [[0.0, 76.0], [100.0, 24.0]], "isOverall": false, "label": "/js/indexPage.min.js-74", "isController": false}, {"data": [[0.0, 92.0], [100.0, 8.0]], "isOverall": false, "label": "/css/delivery-status.css-169", "isController": false}, {"data": [[0.0, 97.0], [100.0, 3.0]], "isOverall": false, "label": "/css/order-table.css-172", "isController": false}, {"data": [[0.0, 90.0], [100.0, 10.0]], "isOverall": false, "label": "/js/jquery.matchHeight.0.7.2.min.js-26", "isController": false}, {"data": [[0.0, 89.0], [100.0, 11.0]], "isOverall": false, "label": "/images/slider-arrow.svg-36", "isController": false}, {"data": [[0.0, 91.0], [100.0, 9.0]], "isOverall": false, "label": "/js/store.min.js-105", "isController": false}, {"data": [[0.0, 86.0], [100.0, 14.0]], "isOverall": false, "label": "/images/arrow.svg-54", "isController": false}, {"data": [[0.0, 91.0], [100.0, 9.0]], "isOverall": false, "label": "/images/mastercard-96.png-111", "isController": false}, {"data": [[0.0, 55.0], [300.0, 3.0], [100.0, 37.0], [200.0, 2.0], [400.0, 2.0], [800.0, 1.0]], "isOverall": false, "label": "/city/get-by-ip-35", "isController": false}, {"data": [[700.0, 11.0], [800.0, 9.0], [900.0, 11.0], [1000.0, 6.0], [1100.0, 2.0], [1200.0, 7.0], [1300.0, 5.0], [1400.0, 4.0], [1500.0, 1.0], [1600.0, 5.0], [1700.0, 3.0], [1800.0, 1.0], [2000.0, 1.0], [2100.0, 4.0], [2300.0, 2.0], [2200.0, 2.0], [2400.0, 1.0], [2500.0, 2.0], [2600.0, 1.0], [2800.0, 1.0], [2700.0, 2.0], [2900.0, 1.0], [3000.0, 1.0], [3300.0, 2.0], [3200.0, 2.0], [3400.0, 4.0], [3500.0, 2.0], [3600.0, 2.0], [3700.0, 3.0], [4000.0, 1.0], [4100.0, 1.0]], "isOverall": false, "label": "/customer-167", "isController": false}, {"data": [[0.0, 45.0], [600.0, 3.0], [700.0, 5.0], [200.0, 5.0], [800.0, 1.0], [900.0, 1.0], [1000.0, 2.0], [300.0, 1.0], [1300.0, 2.0], [1400.0, 1.0], [100.0, 23.0], [400.0, 5.0], [500.0, 6.0]], "isOverall": false, "label": "/customer-167-0", "isController": false}, {"data": [[0.0, 48.0], [600.0, 3.0], [700.0, 1.0], [200.0, 6.0], [800.0, 2.0], [900.0, 1.0], [1000.0, 2.0], [1100.0, 1.0], [300.0, 3.0], [1300.0, 1.0], [1400.0, 2.0], [1500.0, 1.0], [100.0, 25.0], [1800.0, 1.0], [500.0, 3.0]], "isOverall": false, "label": "/customer-167-1", "isController": false}, {"data": [[0.0, 94.0], [100.0, 6.0]], "isOverall": false, "label": "/css/cabinet.css-173", "isController": false}, {"data": [[0.0, 90.0], [100.0, 10.0]], "isOverall": false, "label": "/css/static-page.css-108", "isController": false}, {"data": [[2100.0, 2.0], [2200.0, 2.0], [600.0, 23.0], [2400.0, 3.0], [2600.0, 1.0], [700.0, 14.0], [2700.0, 2.0], [2800.0, 3.0], [2900.0, 1.0], [3000.0, 2.0], [3100.0, 2.0], [800.0, 8.0], [3200.0, 4.0], [3300.0, 1.0], [900.0, 4.0], [1000.0, 6.0], [1100.0, 1.0], [500.0, 19.0], [2000.0, 2.0]], "isOverall": false, "label": "/customer-167-2", "isController": false}, {"data": [[0.0, 92.0], [100.0, 8.0]], "isOverall": false, "label": "/css/plugins/slick.css-41", "isController": false}, {"data": [[0.0, 90.0], [100.0, 10.0]], "isOverall": false, "label": "/images/present-bg.svg-101", "isController": false}, {"data": [[0.0, 90.0], [100.0, 10.0]], "isOverall": false, "label": "/images/modal-close.svg-106", "isController": false}, {"data": [[0.0, 92.0], [100.0, 8.0]], "isOverall": false, "label": "/css/filters.css-162", "isController": false}, {"data": [[0.0, 96.0], [100.0, 4.0]], "isOverall": false, "label": "/js/orderModel.min.js-183", "isController": false}, {"data": [[0.0, 95.0], [100.0, 5.0]], "isOverall": false, "label": "/images/close-modal.svg-119", "isController": false}, {"data": [[0.0, 93.0], [100.0, 7.0]], "isOverall": false, "label": "/images/basket-icon-green.svg-25", "isController": false}, {"data": [[0.0, 94.0], [100.0, 6.0]], "isOverall": false, "label": "/css/products-in-shops-modal.css-125", "isController": false}, {"data": [[0.0, 94.0], [100.0, 6.0]], "isOverall": false, "label": "/images/app-apple-logo.png-10", "isController": false}, {"data": [[0.0, 70.0], [100.0, 30.0]], "isOverall": false, "label": "/js/jquery.nicescroll.3.7.6.min.js-8", "isController": false}, {"data": [[0.0, 91.0], [100.0, 9.0]], "isOverall": false, "label": "/images/close-modal-w.svg-65", "isController": false}, {"data": [[0.0, 94.0], [100.0, 6.0]], "isOverall": false, "label": "/css/cabinet.css-181", "isController": false}, {"data": [[0.0, 94.0], [100.0, 6.0]], "isOverall": false, "label": "/images/sale_arrow_small.svg-37", "isController": false}, {"data": [[0.0, 86.0], [100.0, 14.0]], "isOverall": false, "label": "/images/app-huawei-logo.png-15", "isController": false}, {"data": [[2100.0, 2.0], [2200.0, 4.0], [2300.0, 1.0], [600.0, 14.0], [2600.0, 1.0], [700.0, 12.0], [2800.0, 1.0], [3000.0, 1.0], [800.0, 13.0], [900.0, 8.0], [1000.0, 7.0], [1100.0, 3.0], [1200.0, 5.0], [1300.0, 1.0], [1400.0, 4.0], [1500.0, 3.0], [1600.0, 2.0], [1700.0, 3.0], [1800.0, 1.0], [1900.0, 4.0], [500.0, 8.0], [2000.0, 2.0]], "isOverall": false, "label": "/site/login-38", "isController": false}, {"data": [[600.0, 2.0], [700.0, 19.0], [800.0, 7.0], [900.0, 7.0], [1000.0, 5.0], [1100.0, 5.0], [1200.0, 4.0], [1300.0, 2.0], [1400.0, 1.0], [1500.0, 5.0], [1600.0, 3.0], [1700.0, 1.0], [1800.0, 2.0], [1900.0, 2.0], [2000.0, 4.0], [2100.0, 3.0], [2400.0, 2.0], [2500.0, 3.0], [2600.0, 1.0], [2700.0, 4.0], [2800.0, 2.0], [3000.0, 1.0], [3100.0, 2.0], [3200.0, 3.0], [3300.0, 1.0], [3500.0, 2.0], [3600.0, 2.0], [3700.0, 1.0], [3800.0, 2.0], [4000.0, 1.0], [4200.0, 1.0]], "isOverall": false, "label": "/customer/order-179", "isController": false}, {"data": [[0.0, 84.0], [100.0, 16.0]], "isOverall": false, "label": "/css/common.css-40", "isController": false}, {"data": [[0.0, 96.0], [100.0, 4.0]], "isOverall": false, "label": "/images/visa-96.png-109", "isController": false}, {"data": [[0.0, 82.0], [100.0, 18.0]], "isOverall": false, "label": "/css/plugins/slick.css-3", "isController": false}, {"data": [[0.0, 73.0], [100.0, 27.0]], "isOverall": false, "label": "/css/category.css-78", "isController": false}, {"data": [[0.0, 93.0], [100.0, 7.0]], "isOverall": false, "label": "/images/basket-icon-gray.svg-24", "isController": false}, {"data": [[300.0, 5.0], [200.0, 95.0]], "isOverall": false, "label": "/js/forms.min.js-100", "isController": false}, {"data": [[0.0, 89.0], [100.0, 11.0]], "isOverall": false, "label": "/css/common.css-146", "isController": false}, {"data": [[0.0, 92.0], [100.0, 8.0]], "isOverall": false, "label": "/js/forms.min.js-178", "isController": false}, {"data": [[0.0, 79.0], [100.0, 21.0]], "isOverall": false, "label": "/fonts/Graphik-Medium-Web.woff2-22", "isController": false}, {"data": [[0.0, 90.0], [100.0, 10.0]], "isOverall": false, "label": "/css/common.css-153", "isController": false}, {"data": [[0.0, 82.0], [100.0, 18.0]], "isOverall": false, "label": "/js/catalogItem.min.js-97", "isController": false}, {"data": [[0.0, 6.0], [600.0, 1.0], [2700.0, 1.0], [700.0, 3.0], [200.0, 6.0], [800.0, 1.0], [900.0, 2.0], [1100.0, 5.0], [300.0, 5.0], [1300.0, 2.0], [1500.0, 1.0], [100.0, 57.0], [1600.0, 1.0], [400.0, 4.0], [1700.0, 3.0], [1800.0, 1.0], [500.0, 1.0]], "isOverall": false, "label": "/order/index-144", "isController": false}, {"data": [[0.0, 91.0], [100.0, 9.0]], "isOverall": false, "label": "/css/index-page.css-43", "isController": false}, {"data": [[0.0, 1.0], [300.0, 1.0], [100.0, 78.0], [200.0, 20.0]], "isOverall": false, "label": "/images/app-modal-phone.png-16", "isController": false}, {"data": [[0.0, 82.0], [100.0, 18.0]], "isOverall": false, "label": "/css/catalog-page.css-77", "isController": false}, {"data": [[0.0, 92.0], [100.0, 8.0]], "isOverall": false, "label": "/css/paging.css-163", "isController": false}, {"data": [[0.0, 83.0], [100.0, 17.0]], "isOverall": false, "label": "/css/product-card.css-95", "isController": false}, {"data": [[0.0, 83.0], [100.0, 17.0]], "isOverall": false, "label": "/css/jquery.fancybox.min.css-13", "isController": false}, {"data": [[0.0, 89.0], [100.0, 11.0]], "isOverall": false, "label": "/js/js.cookie.3.0.1.min.js-27", "isController": false}, {"data": [[0.0, 84.0], [100.0, 16.0]], "isOverall": false, "label": "/images/veh-lorry-2.svg-49", "isController": false}, {"data": [[0.0, 92.0], [200.0, 1.0], [100.0, 7.0]], "isOverall": false, "label": "/js/search.min.js-131", "isController": false}, {"data": [[0.0, 86.0], [100.0, 14.0]], "isOverall": false, "label": "/css/products-in-shops-modal.css-60", "isController": false}, {"data": [[0.0, 59.0], [2200.0, 1.0], [600.0, 1.0], [2800.0, 1.0], [700.0, 1.0], [200.0, 1.0], [800.0, 2.0], [900.0, 1.0], [1000.0, 1.0], [1100.0, 3.0], [1200.0, 3.0], [300.0, 5.0], [1300.0, 1.0], [1500.0, 1.0], [100.0, 14.0], [400.0, 2.0], [1600.0, 1.0], [500.0, 2.0]], "isOverall": false, "label": "/order/update-delivery-type-dependent-info-142", "isController": false}, {"data": [[0.0, 93.0], [100.0, 7.0]], "isOverall": false, "label": "/js/forms.min.js-51", "isController": false}, {"data": [[0.0, 89.0], [100.0, 11.0]], "isOverall": false, "label": "/css/catalog-item.css-70", "isController": false}, {"data": [[0.0, 69.0], [100.0, 31.0]], "isOverall": false, "label": "/images/delivery-icon.svg-90", "isController": false}, {"data": [[0.0, 93.0], [100.0, 7.0]], "isOverall": false, "label": "/js/indexPage.min.js-157", "isController": false}, {"data": [[0.0, 98.0], [100.0, 2.0]], "isOverall": false, "label": "/css/paging.css-170", "isController": false}, {"data": [[0.0, 86.0], [100.0, 14.0]], "isOverall": false, "label": "/css/index-page.css-4", "isController": false}, {"data": [[0.0, 34.0], [2100.0, 1.0], [2200.0, 1.0], [600.0, 2.0], [2500.0, 2.0], [2600.0, 2.0], [2800.0, 1.0], [2700.0, 1.0], [2900.0, 1.0], [200.0, 3.0], [800.0, 2.0], [3300.0, 1.0], [900.0, 1.0], [1000.0, 1.0], [1100.0, 1.0], [300.0, 3.0], [1300.0, 1.0], [1400.0, 1.0], [1500.0, 2.0], [100.0, 36.0], [400.0, 1.0], [1700.0, 1.0], [500.0, 1.0]], "isOverall": false, "label": "/order-123-0", "isController": false}, {"data": [[0.0, 93.0], [100.0, 7.0]], "isOverall": false, "label": "/js/search.min.js-44", "isController": false}, {"data": [[0.0, 58.0], [100.0, 40.0], [200.0, 2.0]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-64", "isController": false}, {"data": [[0.0, 86.0], [100.0, 14.0]], "isOverall": false, "label": "/images/counter-minus.svg-103", "isController": false}, {"data": [[0.0, 91.0], [100.0, 9.0]], "isOverall": false, "label": "/js/search.min.js-148", "isController": false}, {"data": [[0.0, 73.0], [100.0, 27.0]], "isOverall": false, "label": "/js/jquery.fancybox.3.5.6.min.js-53", "isController": false}, {"data": [[0.0, 94.0], [100.0, 6.0]], "isOverall": false, "label": "/css/order-information.css-182", "isController": false}, {"data": [[0.0, 93.0], [100.0, 7.0]], "isOverall": false, "label": "/css/plugins/slick.css-152", "isController": false}, {"data": [[0.0, 92.0], [100.0, 8.0]], "isOverall": false, "label": "/js/orderModel.min.js-128", "isController": false}, {"data": [[0.0, 77.0], [100.0, 23.0]], "isOverall": false, "label": "/js/basket.min.js-75", "isController": false}, {"data": [[0.0, 91.0], [100.0, 9.0]], "isOverall": false, "label": "/css/category.css-161", "isController": false}, {"data": [[0.0, 73.0], [100.0, 27.0]], "isOverall": false, "label": "/css/paging.css-80", "isController": false}, {"data": [[2100.0, 2.0], [600.0, 6.0], [2400.0, 1.0], [2500.0, 3.0], [2600.0, 1.0], [700.0, 1.0], [2900.0, 1.0], [3100.0, 1.0], [200.0, 8.0], [3300.0, 2.0], [800.0, 6.0], [900.0, 1.0], [3800.0, 1.0], [1000.0, 3.0], [1100.0, 1.0], [300.0, 21.0], [1200.0, 1.0], [1300.0, 2.0], [400.0, 28.0], [1600.0, 1.0], [1800.0, 2.0], [1900.0, 1.0], [500.0, 5.0], [2000.0, 1.0]], "isOverall": false, "label": "/order-123-1", "isController": false}, {"data": [[0.0, 85.0], [100.0, 15.0]], "isOverall": false, "label": "/css/common.css-124", "isController": false}, {"data": [[0.0, 91.0], [100.0, 8.0], [400.0, 1.0]], "isOverall": false, "label": "/images/search-icon.svg-19", "isController": false}, {"data": [[0.0, 61.0], [2300.0, 1.0], [2400.0, 2.0], [700.0, 1.0], [800.0, 3.0], [200.0, 4.0], [900.0, 1.0], [1000.0, 1.0], [4500.0, 1.0], [1100.0, 1.0], [300.0, 3.0], [1200.0, 1.0], [1300.0, 1.0], [1400.0, 1.0], [1500.0, 2.0], [100.0, 12.0], [1600.0, 1.0], [1700.0, 1.0], [500.0, 2.0]], "isOverall": false, "label": "/basket/recalculate-basket-122", "isController": false}, {"data": [[0.0, 34.0], [2300.0, 3.0], [600.0, 1.0], [2600.0, 1.0], [700.0, 1.0], [800.0, 1.0], [200.0, 1.0], [900.0, 2.0], [1000.0, 2.0], [300.0, 2.0], [1400.0, 1.0], [100.0, 48.0], [400.0, 3.0]], "isOverall": false, "label": "/site/login-62", "isController": false}, {"data": [[0.0, 92.0], [100.0, 8.0]], "isOverall": false, "label": "/js/forms.min.js-159", "isController": false}, {"data": [[0.0, 91.0], [100.0, 9.0]], "isOverall": false, "label": "/css/jquery.fias.min.css-129", "isController": false}, {"data": [[0.0, 94.0], [100.0, 6.0]], "isOverall": false, "label": "/fonts/graphik.css-12", "isController": false}, {"data": [[0.0, 53.0], [2200.0, 1.0], [2400.0, 1.0], [700.0, 1.0], [200.0, 5.0], [900.0, 2.0], [1000.0, 1.0], [1100.0, 1.0], [300.0, 2.0], [1200.0, 2.0], [1300.0, 1.0], [100.0, 26.0], [400.0, 2.0], [500.0, 1.0], [2000.0, 1.0]], "isOverall": false, "label": "/site/login-67", "isController": false}, {"data": [[0.0, 94.0], [100.0, 6.0]], "isOverall": false, "label": "/css/basket-table.css-180", "isController": false}, {"data": [[0.0, 77.0], [300.0, 1.0], [100.0, 22.0]], "isOverall": false, "label": "/images/counter-minus-dis.svg-86", "isController": false}, {"data": [[0.0, 87.0], [100.0, 13.0]], "isOverall": false, "label": "/js/basket.min.js-158", "isController": false}, {"data": [[0.0, 92.0], [100.0, 8.0]], "isOverall": false, "label": "/images/basket-icon.svg-20", "isController": false}, {"data": [[0.0, 76.0], [100.0, 23.0], [400.0, 1.0]], "isOverall": false, "label": "/images/favicon.ico-66", "isController": false}, {"data": [[0.0, 96.0], [100.0, 4.0]], "isOverall": false, "label": "/css/images/fias-spinner.png-141", "isController": false}, {"data": [[0.0, 89.0], [100.0, 11.0]], "isOverall": false, "label": "/css/basket-page.css-102", "isController": false}, {"data": [[0.0, 91.0], [300.0, 1.0], [100.0, 8.0]], "isOverall": false, "label": "/assets/b165c12b/yii.js-136", "isController": false}, {"data": [[0.0, 89.0], [100.0, 11.0]], "isOverall": false, "label": "/images/sho-basket-love.svg-47", "isController": false}, {"data": [[0.0, 78.0], [100.0, 22.0]], "isOverall": false, "label": "/images/in-shop-icon.svg-89", "isController": false}, {"data": [[0.0, 94.0], [100.0, 6.0]], "isOverall": false, "label": "/js/order.min.js-130", "isController": false}, {"data": [[600.0, 2.0], [700.0, 2.0], [900.0, 1.0], [1000.0, 2.0], [1100.0, 2.0], [1200.0, 1.0], [1300.0, 1.0], [1400.0, 2.0], [1500.0, 4.0], [1600.0, 1.0], [1700.0, 4.0], [1800.0, 2.0], [2000.0, 1.0], [2200.0, 1.0], [2300.0, 1.0], [2400.0, 1.0], [2700.0, 1.0], [2900.0, 2.0], [3100.0, 2.0], [200.0, 11.0], [3200.0, 1.0], [3400.0, 1.0], [3800.0, 1.0], [3900.0, 1.0], [4000.0, 1.0], [4100.0, 1.0], [300.0, 17.0], [4700.0, 1.0], [5300.0, 1.0], [400.0, 22.0], [500.0, 9.0]], "isOverall": false, "label": "/basket-116", "isController": false}, {"data": [[0.0, 94.0], [100.0, 6.0]], "isOverall": false, "label": "/js/jquery.fias.min.js-133", "isController": false}, {"data": [[0.0, 85.0], [100.0, 15.0]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-132", "isController": false}, {"data": [[0.0, 95.0], [100.0, 5.0]], "isOverall": false, "label": "/css/order-again.css-174", "isController": false}, {"data": [[0.0, 82.0], [100.0, 18.0]], "isOverall": false, "label": "/js/twitter.typeahead.0.11.1.min.js-6", "isController": false}, {"data": [[0.0, 93.0], [100.0, 7.0]], "isOverall": false, "label": "/images/lorry.svg-117", "isController": false}, {"data": [[0.0, 91.0], [100.0, 9.0]], "isOverall": false, "label": "/js/common.min.js-31", "isController": false}, {"data": [[0.0, 77.0], [100.0, 23.0]], "isOverall": false, "label": "/css/index-page.css-72", "isController": false}, {"data": [[0.0, 63.0], [100.0, 37.0]], "isOverall": false, "label": "/css/common.css-93", "isController": false}, {"data": [[0.0, 82.0], [100.0, 18.0]], "isOverall": false, "label": "/css/filters.css-79", "isController": false}, {"data": [[0.0, 81.0], [100.0, 19.0]], "isOverall": false, "label": "/js/forms.min.js-76", "isController": false}, {"data": [[0.0, 63.0], [2400.0, 1.0], [300.0, 4.0], [1200.0, 1.0], [1400.0, 1.0], [100.0, 14.0], [400.0, 3.0], [200.0, 4.0], [800.0, 1.0], [900.0, 3.0], [500.0, 4.0], [1000.0, 1.0]], "isOverall": false, "label": "/order/render-delivery-time-dropdown-143", "isController": false}, {"data": [[0.0, 50.0], [700.0, 1.0], [200.0, 4.0], [800.0, 2.0], [1000.0, 5.0], [1100.0, 1.0], [300.0, 4.0], [1200.0, 2.0], [1400.0, 4.0], [1500.0, 2.0], [100.0, 20.0], [1600.0, 1.0], [500.0, 4.0]], "isOverall": false, "label": "/customer/order-179-0", "isController": false}, {"data": [[0.0, 96.0], [100.0, 4.0]], "isOverall": false, "label": "/js/indexPage.min.js-33", "isController": false}, {"data": [[0.0, 84.0], [100.0, 16.0]], "isOverall": false, "label": "/js/search.min.js-73", "isController": false}, {"data": [[0.0, 93.0], [100.0, 7.0]], "isOverall": false, "label": "/css/product-card.css-164", "isController": false}, {"data": [[600.0, 14.0], [700.0, 18.0], [800.0, 8.0], [900.0, 2.0], [1000.0, 1.0], [1100.0, 1.0], [1200.0, 1.0], [1300.0, 1.0], [1400.0, 1.0], [1500.0, 1.0], [1700.0, 1.0], [1900.0, 1.0], [2000.0, 2.0], [2300.0, 2.0], [2200.0, 3.0], [2400.0, 2.0], [2500.0, 2.0], [2600.0, 2.0], [2700.0, 2.0], [2900.0, 1.0], [3000.0, 2.0], [3100.0, 1.0], [3400.0, 1.0], [3500.0, 1.0], [400.0, 4.0], [500.0, 25.0]], "isOverall": false, "label": "/customer/order-179-2", "isController": false}, {"data": [[0.0, 57.0], [600.0, 3.0], [1200.0, 1.0], [700.0, 2.0], [1400.0, 3.0], [1500.0, 1.0], [800.0, 3.0], [100.0, 20.0], [400.0, 1.0], [200.0, 7.0], [1700.0, 1.0], [900.0, 1.0]], "isOverall": false, "label": "/customer/order-179-1", "isController": false}, {"data": [[0.0, 83.0], [100.0, 17.0]], "isOverall": false, "label": "/css/basket-page.css-61", "isController": false}, {"data": [[0.0, 82.0], [100.0, 18.0]], "isOverall": false, "label": "/css/products-in-shops-modal.css-82", "isController": false}, {"data": [[800.0, 3.0], [900.0, 12.0], [1000.0, 10.0], [1100.0, 11.0], [1200.0, 8.0], [1400.0, 5.0], [1500.0, 1.0], [1600.0, 3.0], [1700.0, 3.0], [1800.0, 1.0], [1900.0, 1.0], [2000.0, 2.0], [2300.0, 1.0], [2600.0, 1.0], [2800.0, 1.0], [2900.0, 1.0], [3000.0, 1.0], [3200.0, 2.0], [3300.0, 1.0], [3400.0, 1.0], [3600.0, 1.0], [3700.0, 1.0], [3800.0, 1.0], [3900.0, 1.0], [4200.0, 1.0], [4100.0, 1.0], [4600.0, 2.0], [4500.0, 3.0], [4400.0, 1.0], [4800.0, 1.0], [4700.0, 2.0], [5100.0, 3.0], [5300.0, 2.0], [5200.0, 1.0], [5400.0, 2.0], [5700.0, 2.0], [6100.0, 4.0], [5900.0, 1.0], [6200.0, 1.0]], "isOverall": false, "label": "/catalog/ptitsy/korma/popugai_srednie/rio_korm_dlya_srednikh_popugaev-92", "isController": false}, {"data": [[0.0, 74.0], [100.0, 26.0]], "isOverall": false, "label": "/images/status-available.svg-87", "isController": false}, {"data": [[800.0, 3.0], [900.0, 8.0], [1000.0, 19.0], [1100.0, 9.0], [1200.0, 5.0], [1300.0, 8.0], [1400.0, 6.0], [1500.0, 4.0], [1600.0, 3.0], [1700.0, 4.0], [1800.0, 2.0], [1900.0, 2.0], [2000.0, 1.0], [2200.0, 2.0], [2500.0, 1.0], [2900.0, 1.0], [3100.0, 1.0], [3300.0, 1.0], [3400.0, 1.0], [3500.0, 1.0], [3700.0, 1.0], [3800.0, 2.0], [4100.0, 1.0], [4200.0, 1.0], [4600.0, 1.0], [4400.0, 1.0], [4800.0, 4.0], [5000.0, 1.0], [4900.0, 1.0], [5100.0, 1.0], [5600.0, 1.0], [5700.0, 1.0], [6000.0, 1.0], [6400.0, 1.0]], "isOverall": false, "label": "/catalog/sobaki/korma_sukhie/wonderfur/wonderfur_adult_all_breeds_yagnenok_ris_dlya_sobak-84", "isController": false}, {"data": [[0.0, 81.0], [100.0, 19.0]], "isOverall": false, "label": "/js/ua-parser.2.0.0-alpha.2.min.js-30", "isController": false}, {"data": [[0.0, 96.0], [100.0, 4.0]], "isOverall": false, "label": "/js/forms.min.js-149", "isController": false}, {"data": [[0.0, 95.0], [100.0, 5.0]], "isOverall": false, "label": "/css/pay-status.css-171", "isController": false}, {"data": [[0.0, 91.0], [100.0, 9.0]], "isOverall": false, "label": "/js/yii.min.js-28", "isController": false}, {"data": [[0.0, 69.0], [100.0, 31.0]], "isOverall": false, "label": "/js/jquery.min.js-7", "isController": false}, {"data": [[0.0, 48.0], [1100.0, 1.0], [300.0, 3.0], [600.0, 1.0], [700.0, 1.0], [1400.0, 1.0], [100.0, 34.0], [200.0, 7.0], [400.0, 3.0], [500.0, 1.0]], "isOverall": false, "label": "/site/login-38-0", "isController": false}, {"data": [[2100.0, 3.0], [2200.0, 1.0], [600.0, 16.0], [700.0, 12.0], [2700.0, 1.0], [2900.0, 1.0], [800.0, 7.0], [900.0, 4.0], [1000.0, 3.0], [1100.0, 3.0], [1200.0, 4.0], [1300.0, 4.0], [1400.0, 2.0], [1500.0, 1.0], [1600.0, 1.0], [400.0, 6.0], [1700.0, 1.0], [1800.0, 6.0], [1900.0, 2.0], [500.0, 21.0], [2000.0, 1.0]], "isOverall": false, "label": "/site/login-38-1", "isController": false}, {"data": [[0.0, 50.0], [600.0, 2.0], [700.0, 5.0], [800.0, 2.0], [900.0, 1.0], [1100.0, 1.0], [1200.0, 2.0], [1300.0, 1.0], [1400.0, 1.0], [1500.0, 2.0], [100.0, 9.0], [1700.0, 1.0], [2000.0, 1.0], [2100.0, 2.0], [2300.0, 2.0], [2500.0, 1.0], [2600.0, 2.0], [2800.0, 1.0], [3000.0, 2.0], [3300.0, 1.0], [3200.0, 1.0], [200.0, 2.0], [3400.0, 1.0], [3700.0, 2.0], [3600.0, 1.0], [400.0, 2.0], [500.0, 2.0]], "isOverall": false, "label": "/basket/add-to-basket-115", "isController": false}, {"data": [[0.0, 87.0], [100.0, 13.0]], "isOverall": false, "label": "/js/jquery.pjax.min.js-63", "isController": false}, {"data": [[0.0, 69.0], [100.0, 31.0]], "isOverall": false, "label": "/css/product-card.css-81", "isController": false}, {"data": [[0.0, 77.0], [100.0, 23.0]], "isOverall": false, "label": "/images/counter-plus.svg-88", "isController": false}, {"data": [[0.0, 91.0], [100.0, 9.0]], "isOverall": false, "label": "/css/products-in-shops-modal.css-165", "isController": false}, {"data": [[0.0, 95.0], [100.0, 5.0]], "isOverall": false, "label": "/js/search.min.js-9", "isController": false}, {"data": [[0.0, 88.0], [100.0, 12.0]], "isOverall": false, "label": "/images/logo.svg-17", "isController": false}, {"data": [[0.0, 93.0], [100.0, 7.0]], "isOverall": false, "label": "/js/forms.min.js-140", "isController": false}, {"data": [[0.0, 97.0], [100.0, 3.0]], "isOverall": false, "label": "/images/deco01.png-150", "isController": false}, {"data": [[0.0, 92.0], [100.0, 8.0]], "isOverall": false, "label": "/js/indexPage.min.js-45", "isController": false}, {"data": [[0.0, 95.0], [100.0, 5.0]], "isOverall": false, "label": "/css/catalog-item.css-154", "isController": false}, {"data": [[0.0, 90.0], [100.0, 10.0]], "isOverall": false, "label": "/js/basket.min.js-99", "isController": false}, {"data": [[0.0, 94.0], [100.0, 6.0]], "isOverall": false, "label": "/images/delivery-home.png-113", "isController": false}, {"data": [[0.0, 12.0], [600.0, 1.0], [700.0, 1.0], [800.0, 1.0], [900.0, 1.0], [1000.0, 1.0], [1400.0, 1.0], [100.0, 49.0], [1600.0, 1.0], [1700.0, 2.0], [1900.0, 2.0], [2100.0, 3.0], [2200.0, 2.0], [2500.0, 1.0], [2800.0, 3.0], [2900.0, 2.0], [3000.0, 1.0], [3100.0, 1.0], [200.0, 4.0], [3300.0, 1.0], [3400.0, 1.0], [3800.0, 1.0], [3900.0, 1.0], [4000.0, 2.0], [300.0, 3.0], [4700.0, 1.0], [400.0, 1.0]], "isOverall": false, "label": "/catalog/autocomplete-91", "isController": false}, {"data": [[600.0, 5.0], [700.0, 4.0], [800.0, 1.0], [900.0, 4.0], [1000.0, 3.0], [1100.0, 4.0], [1200.0, 3.0], [1300.0, 1.0], [1400.0, 2.0], [1500.0, 1.0], [1600.0, 2.0], [1700.0, 1.0], [1800.0, 1.0], [1900.0, 2.0], [2000.0, 2.0], [2100.0, 2.0], [2200.0, 1.0], [2300.0, 1.0], [2500.0, 2.0], [2600.0, 3.0], [2700.0, 1.0], [3000.0, 2.0], [3200.0, 1.0], [3300.0, 1.0], [3400.0, 2.0], [3800.0, 1.0], [4000.0, 1.0], [4200.0, 1.0], [4600.0, 1.0], [300.0, 5.0], [5800.0, 1.0], [400.0, 17.0], [6700.0, 1.0], [500.0, 20.0]], "isOverall": false, "label": "/order-123", "isController": false}, {"data": [[0.0, 81.0], [100.0, 19.0]], "isOverall": false, "label": "/images/app-modal-tree.png-18", "isController": false}, {"data": [[0.0, 66.0], [100.0, 34.0]], "isOverall": false, "label": "/fonts/Graphik-Bold-Web.woff2-21", "isController": false}, {"data": [[0.0, 90.0], [100.0, 10.0]], "isOverall": false, "label": "/assets/b165c12b/yii.validation.js-139", "isController": false}, {"data": [[0.0, 93.0], [100.0, 7.0]], "isOverall": false, "label": "/js/yii.validation.min.js-135", "isController": false}, {"data": [[0.0, 97.0], [100.0, 3.0]], "isOverall": false, "label": "/js/jquery.pjax.min.js-134", "isController": false}, {"data": [[0.0, 93.0], [100.0, 7.0]], "isOverall": false, "label": "/css/catalog-page.css-160", "isController": false}, {"data": [[0.0, 92.0], [100.0, 8.0]], "isOverall": false, "label": "/css/basket-page.css-166", "isController": false}, {"data": [[0.0, 94.0], [100.0, 6.0]], "isOverall": false, "label": "/js/basket.min.js-176", "isController": false}, {"data": [[2000.0, 2.0], [2500.0, 2.0], [2600.0, 1.0], [2700.0, 5.0], [2800.0, 2.0], [2900.0, 4.0], [3000.0, 5.0], [3100.0, 4.0], [3200.0, 2.0], [3300.0, 2.0], [3400.0, 5.0], [3500.0, 4.0], [3600.0, 3.0], [3700.0, 7.0], [3800.0, 4.0], [3900.0, 4.0], [4000.0, 4.0], [4100.0, 4.0], [4200.0, 2.0], [4300.0, 3.0], [4400.0, 3.0], [4500.0, 3.0], [4600.0, 2.0], [4700.0, 1.0], [4800.0, 1.0], [4900.0, 4.0], [5100.0, 1.0], [5000.0, 1.0], [5300.0, 1.0], [5400.0, 3.0], [5700.0, 2.0], [5800.0, 2.0], [5900.0, 3.0], [6100.0, 1.0], [6200.0, 1.0], [6400.0, 1.0], [7500.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[0.0, 84.0], [100.0, 16.0]], "isOverall": false, "label": "/css/plugins/slick.css-71", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 653.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 16872.0, "series": [{"data": [[0.0, 16872.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 975.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 653.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 700.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 87.5165304839725, "minX": 1.70231298E12, "maxY": 100.0, "series": [{"data": [[1.70231298E12, 100.0], [1.70231304E12, 87.5165304839725]], "isOverall": false, "label": "Autotests100", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70231304E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 82.0, "minX": 1.0, "maxY": 4131.0, "series": [{"data": [[100.0, 90.97999999999999]], "isOverall": false, "label": "/js/basket.min.js-46", "isController": false}, {"data": [[100.0, 90.97999999999999]], "isOverall": false, "label": "/js/basket.min.js-46-Aggregated", "isController": false}, {"data": [[100.0, 90.51]], "isOverall": false, "label": "/js/search.min.js-98", "isController": false}, {"data": [[100.0, 90.51]], "isOverall": false, "label": "/js/search.min.js-98-Aggregated", "isController": false}, {"data": [[33.0, 85.33333333333333], [34.0, 90.0], [40.0, 84.0], [42.0, 94.0], [49.0, 85.0], [50.0, 93.33333333333333], [53.0, 88.0], [56.0, 86.33333333333333], [59.0, 86.0], [62.0, 85.0], [67.0, 84.33333333333333], [66.0, 89.0], [65.0, 87.0], [64.0, 98.5], [71.0, 86.0], [70.0, 85.5], [75.0, 88.83333333333334], [72.0, 92.0], [78.0, 87.0], [76.0, 91.0], [81.0, 97.0], [87.0, 84.0], [86.0, 83.33333333333333], [84.0, 83.5], [91.0, 87.0], [88.0, 86.25], [95.0, 92.0], [94.0, 87.33333333333333], [93.0, 89.42857142857143], [92.0, 88.0], [99.0, 87.0], [98.0, 103.0], [97.0, 207.5], [96.0, 91.33333333333333], [6.0, 87.0], [100.0, 88.0], [9.0, 85.0], [10.0, 86.0], [12.0, 85.0], [14.0, 101.0], [15.0, 101.0], [30.0, 100.0]], "isOverall": false, "label": "/js/orderModel.min.js-177", "isController": false}, {"data": [[70.30000000000001, 90.73]], "isOverall": false, "label": "/js/orderModel.min.js-177-Aggregated", "isController": false}, {"data": [[100.0, 90.92000000000002]], "isOverall": false, "label": "/css/loader.css-14", "isController": false}, {"data": [[100.0, 90.92000000000002]], "isOverall": false, "label": "/css/loader.css-14-Aggregated", "isController": false}, {"data": [[71.0, 84.0], [86.0, 84.0], [88.0, 100.0], [95.0, 83.33333333333333], [94.0, 90.0], [99.0, 86.33333333333333], [97.0, 99.5], [96.0, 88.33333333333333], [100.0, 88.42647058823528]], "isOverall": false, "label": "/css/checkout-modals.css-127", "isController": false}, {"data": [[98.73000000000002, 88.67999999999996]], "isOverall": false, "label": "/css/checkout-modals.css-127-Aggregated", "isController": false}, {"data": [[75.0, 92.0], [83.0, 84.0], [95.0, 91.5], [94.0, 84.75], [93.0, 87.33333333333333], [92.0, 86.5], [99.0, 86.75], [98.0, 89.2], [97.0, 96.25], [96.0, 86.0], [100.0, 88.29310344827586], [62.0, 83.0]], "isOverall": false, "label": "/images/btn-location.svg-138", "isController": false}, {"data": [[97.99000000000001, 88.13999999999996]], "isOverall": false, "label": "/images/btn-location.svg-138-Aggregated", "isController": false}, {"data": [[100.0, 91.39]], "isOverall": false, "label": "/css/filters.css-57", "isController": false}, {"data": [[100.0, 91.39]], "isOverall": false, "label": "/css/filters.css-57-Aggregated", "isController": false}, {"data": [[34.0, 87.0], [36.0, 87.66666666666667], [40.0, 85.0], [43.0, 93.0], [42.0, 84.0], [46.0, 92.0], [53.0, 87.0], [59.0, 84.0], [61.0, 82.0], [62.0, 93.0], [67.0, 84.0], [66.0, 85.0], [64.0, 101.0], [71.0, 83.8], [68.0, 92.0], [75.0, 91.0], [73.0, 84.0], [72.0, 85.0], [79.0, 94.5], [78.0, 85.0], [81.0, 87.5], [80.0, 89.0], [86.0, 84.0], [85.0, 94.0], [84.0, 91.0], [91.0, 86.0], [90.0, 85.0], [89.0, 85.5], [88.0, 83.66666666666667], [95.0, 84.5], [94.0, 90.66666666666667], [93.0, 88.25], [92.0, 90.00000000000001], [99.0, 86.0], [98.0, 99.5], [97.0, 91.0], [96.0, 90.75], [100.0, 87.33333333333333], [8.0, 83.0], [10.0, 86.5], [12.0, 85.5], [13.0, 86.0], [19.0, 88.0], [20.0, 94.0]], "isOverall": false, "label": "/js/search.min.js-175", "isController": false}, {"data": [[72.23, 87.92]], "isOverall": false, "label": "/js/search.min.js-175-Aggregated", "isController": false}, {"data": [[43.0, 88.0], [59.0, 87.0], [61.0, 85.0], [63.0, 91.0], [67.0, 85.0], [66.0, 84.0], [70.0, 85.0], [79.0, 87.0], [78.0, 92.0], [83.0, 90.0], [80.0, 95.0], [87.0, 85.0], [86.0, 85.0], [84.0, 86.0], [91.0, 85.5], [89.0, 84.0], [95.0, 88.33333333333333], [94.0, 87.44444444444444], [93.0, 87.0], [92.0, 84.16666666666667], [99.0, 87.4375], [98.0, 90.75], [97.0, 95.25000000000003], [96.0, 88.5], [100.0, 88.49999999999999], [29.0, 85.5]], "isOverall": false, "label": "/css/index-page.css-155", "isController": false}, {"data": [[91.43, 88.84]], "isOverall": false, "label": "/css/index-page.css-155-Aggregated", "isController": false}, {"data": [[100.0, 96.61000000000006]], "isOverall": false, "label": "/css/basket-page.css-83", "isController": false}, {"data": [[100.0, 96.61000000000006]], "isOverall": false, "label": "/css/basket-page.css-83-Aggregated", "isController": false}, {"data": [[100.0, 1998.12]], "isOverall": false, "label": "/-1", "isController": false}, {"data": [[100.0, 1998.12]], "isOverall": false, "label": "/-1-Aggregated", "isController": false}, {"data": [[100.0, 92.00000000000003]], "isOverall": false, "label": "/css/paging.css-58", "isController": false}, {"data": [[100.0, 92.00000000000003]], "isOverall": false, "label": "/css/paging.css-58-Aggregated", "isController": false}, {"data": [[100.0, 95.41999999999999]], "isOverall": false, "label": "/js/catalogItem.min.js-85", "isController": false}, {"data": [[100.0, 95.41999999999999]], "isOverall": false, "label": "/js/catalogItem.min.js-85-Aggregated", "isController": false}, {"data": [[100.0, 97.27999999999994]], "isOverall": false, "label": "/fonts/Graphik-Regular-Web.woff2-23", "isController": false}, {"data": [[100.0, 97.27999999999994]], "isOverall": false, "label": "/fonts/Graphik-Regular-Web.woff2-23-Aggregated", "isController": false}, {"data": [[87.0, 96.0], [95.0, 85.0], [93.0, 85.0], [99.0, 87.5], [98.0, 90.0], [100.0, 90.2317073170732]], "isOverall": false, "label": "/css/checkout-page.css-121", "isController": false}, {"data": [[99.58999999999999, 89.80000000000004]], "isOverall": false, "label": "/css/checkout-page.css-121-Aggregated", "isController": false}, {"data": [[100.0, 92.89999999999999]], "isOverall": false, "label": "/css/product-card.css-59", "isController": false}, {"data": [[100.0, 92.89999999999999]], "isOverall": false, "label": "/css/product-card.css-59-Aggregated", "isController": false}, {"data": [[71.0, 87.0], [87.0, 83.0], [90.0, 85.0], [95.0, 87.0], [94.0, 92.5], [99.0, 87.23076923076923], [98.0, 87.33333333333333], [97.0, 110.5], [96.0, 88.25], [100.0, 90.58571428571426]], "isOverall": false, "label": "/css/checkout-page.css-126", "isController": false}, {"data": [[98.84, 90.58999999999997]], "isOverall": false, "label": "/css/checkout-page.css-126-Aggregated", "isController": false}, {"data": [[100.0, 92.20000000000005]], "isOverall": false, "label": "/images/emo-chortle.svg-50", "isController": false}, {"data": [[100.0, 92.20000000000005]], "isOverall": false, "label": "/images/emo-chortle.svg-50-Aggregated", "isController": false}, {"data": [[88.0, 101.0], [95.0, 102.0], [93.0, 84.0], [99.0, 86.42857142857144], [98.0, 95.0], [100.0, 88.87804878048777]], "isOverall": false, "label": "/images/gen-warning.svg-118", "isController": false}, {"data": [[99.6, 88.79999999999997]], "isOverall": false, "label": "/images/gen-warning.svg-118-Aggregated", "isController": false}, {"data": [[86.0, 82.0], [94.0, 87.0], [92.0, 96.0], [99.0, 86.07692307692307], [98.0, 91.5], [97.0, 84.0], [100.0, 89.33333333333334]], "isOverall": false, "label": "/css/checkout-modals.css-120", "isController": false}, {"data": [[99.52000000000002, 88.87]], "isOverall": false, "label": "/css/checkout-modals.css-120-Aggregated", "isController": false}, {"data": [[100.0, 91.69]], "isOverall": false, "label": "/images/app-google-play-logo.png-11", "isController": false}, {"data": [[100.0, 91.69]], "isOverall": false, "label": "/images/app-google-play-logo.png-11-Aggregated", "isController": false}, {"data": [[100.0, 91.10000000000004]], "isOverall": false, "label": "/js/basket.min.js-34", "isController": false}, {"data": [[100.0, 91.10000000000004]], "isOverall": false, "label": "/js/basket.min.js-34-Aggregated", "isController": false}, {"data": [[94.0, 90.0], [99.0, 85.0], [97.0, 96.0], [100.0, 90.42268041237115]], "isOverall": false, "label": "/images/jcb-96.png-112", "isController": false}, {"data": [[99.9, 90.42000000000002]], "isOverall": false, "label": "/images/jcb-96.png-112-Aggregated", "isController": false}, {"data": [[100.0, 93.08999999999999]], "isOverall": false, "label": "/js/slick.1.8.0.min.js-32", "isController": false}, {"data": [[100.0, 93.08999999999999]], "isOverall": false, "label": "/js/slick.1.8.0.min.js-32-Aggregated", "isController": false}, {"data": [[100.0, 91.58]], "isOverall": false, "label": "/js/yii.activeForm.min.js-29", "isController": false}, {"data": [[100.0, 91.58]], "isOverall": false, "label": "/js/yii.activeForm.min.js-29-Aggregated", "isController": false}, {"data": [[94.0, 88.0], [99.0, 83.0], [97.0, 84.0], [100.0, 89.45360824742268]], "isOverall": false, "label": "/images/mir-96.png-110", "isController": false}, {"data": [[99.9, 89.32]], "isOverall": false, "label": "/images/mir-96.png-110-Aggregated", "isController": false}, {"data": [[100.0, 89.67999999999999]], "isOverall": false, "label": "/css/catalog-item.css-42", "isController": false}, {"data": [[100.0, 89.67999999999999]], "isOverall": false, "label": "/css/catalog-item.css-42-Aggregated", "isController": false}, {"data": [[100.0, 91.40000000000002]], "isOverall": false, "label": "/images/app-icon.png-52", "isController": false}, {"data": [[100.0, 91.40000000000002]], "isOverall": false, "label": "/images/app-icon.png-52-Aggregated", "isController": false}, {"data": [[100.0, 91.61999999999999]], "isOverall": false, "label": "/css/category.css-56", "isController": false}, {"data": [[100.0, 91.61999999999999]], "isOverall": false, "label": "/css/category.css-56-Aggregated", "isController": false}, {"data": [[100.0, 92.85000000000002]], "isOverall": false, "label": "/css/products-in-shops-modal.css-96", "isController": false}, {"data": [[100.0, 92.85000000000002]], "isOverall": false, "label": "/css/products-in-shops-modal.css-96-Aggregated", "isController": false}, {"data": [[36.0, 89.0], [39.0, 88.33333333333333], [40.0, 88.0], [43.0, 93.5], [49.0, 88.0], [48.0, 88.0], [53.0, 95.75], [59.0, 89.0], [63.0, 87.0], [62.0, 92.33333333333333], [67.0, 85.5], [66.0, 114.0], [65.0, 89.0], [71.0, 94.66666666666667], [70.0, 99.0], [69.0, 87.0], [68.0, 88.0], [75.0, 92.0], [74.0, 90.33333333333333], [73.0, 91.0], [79.0, 92.0], [78.0, 95.0], [83.0, 96.5], [81.0, 94.25], [80.0, 84.0], [86.0, 92.5], [84.0, 90.0], [91.0, 89.33333333333333], [90.0, 85.5], [88.0, 92.66666666666667], [94.0, 93.14285714285714], [93.0, 88.2], [92.0, 92.5], [99.0, 94.16666666666666], [98.0, 88.0], [97.0, 95.33333333333333], [96.0, 90.2], [100.0, 97.33333333333333], [10.0, 91.0], [12.0, 92.25], [14.0, 102.0], [20.0, 99.0]], "isOverall": false, "label": "/css/common.css-168", "isController": false}, {"data": [[72.96, 92.24000000000004]], "isOverall": false, "label": "/css/common.css-168-Aggregated", "isController": false}, {"data": [[100.0, 100.79999999999998]], "isOverall": false, "label": "/css/common.css-69", "isController": false}, {"data": [[100.0, 100.79999999999998]], "isOverall": false, "label": "/css/common.css-69-Aggregated", "isController": false}, {"data": [[99.0, 1570.0], [97.0, 2988.0], [100.0, 1591.762886597938]], "isOverall": false, "label": "/shop/map/product/9791-104", "isController": false}, {"data": [[99.95, 1605.2899999999997]], "isOverall": false, "label": "/shop/map/product/9791-104-Aggregated", "isController": false}, {"data": [[94.0, 90.0], [99.0, 86.5], [97.0, 91.0], [100.0, 89.6276595744681]], "isOverall": false, "label": "/js/forms.min.js-114", "isController": false}, {"data": [[99.87, 89.52000000000001]], "isOverall": false, "label": "/js/forms.min.js-114-Aggregated", "isController": false}, {"data": [[100.0, 94.46999999999998]], "isOverall": false, "label": "/css/common.css-2", "isController": false}, {"data": [[100.0, 94.46999999999998]], "isOverall": false, "label": "/css/common.css-2-Aggregated", "isController": false}, {"data": [[100.0, 1482.2299999999998]], "isOverall": false, "label": "/-68", "isController": false}, {"data": [[100.0, 1482.2299999999998]], "isOverall": false, "label": "/-68-Aggregated", "isController": false}, {"data": [[100.0, 92.52]], "isOverall": false, "label": "/css/plugins/slick.css-94", "isController": false}, {"data": [[100.0, 92.52]], "isOverall": false, "label": "/css/plugins/slick.css-94-Aggregated", "isController": false}, {"data": [[51.0, 90.0], [62.0, 85.0], [66.0, 84.0], [71.0, 85.0], [75.0, 91.0], [91.0, 84.5], [89.0, 82.5], [88.0, 84.5], [95.0, 87.0], [94.0, 86.28571428571428], [93.0, 84.0], [92.0, 85.5], [99.0, 86.21428571428572], [98.0, 123.0], [97.0, 101.0], [96.0, 92.5], [100.0, 88.13888888888889]], "isOverall": false, "label": "/css/order-complete.css-147", "isController": false}, {"data": [[96.04, 88.14]], "isOverall": false, "label": "/css/order-complete.css-147-Aggregated", "isController": false}, {"data": [[100.0, 90.32999999999998]], "isOverall": false, "label": "/css/catalog-page.css-55", "isController": false}, {"data": [[100.0, 90.32999999999998]], "isOverall": false, "label": "/css/catalog-page.css-55-Aggregated", "isController": false}, {"data": [[100.0, 90.82999999999998]], "isOverall": false, "label": "/images/loc-point-heart.svg-48", "isController": false}, {"data": [[100.0, 90.82999999999998]], "isOverall": false, "label": "/images/loc-point-heart.svg-48-Aggregated", "isController": false}, {"data": [[95.0, 560.0], [99.0, 431.0], [98.0, 814.0], [100.0, 1022.6494845360825]], "isOverall": false, "label": "/dostavka-107", "isController": false}, {"data": [[99.92, 1010.02]], "isOverall": false, "label": "/dostavka-107-Aggregated", "isController": false}, {"data": [[64.0, 100.0], [78.0, 90.0], [83.0, 88.0], [95.0, 95.0], [94.0, 90.4], [93.0, 87.0], [99.0, 85.85714285714285], [98.0, 94.2], [97.0, 92.66666666666667], [96.0, 89.33333333333333], [100.0, 89.2950819672131]], "isOverall": false, "label": "/images/arrow_menu.svg-137", "isController": false}, {"data": [[98.13999999999999, 89.41999999999999]], "isOverall": false, "label": "/images/arrow_menu.svg-137-Aggregated", "isController": false}, {"data": [[100.0, 91.35000000000002]], "isOverall": false, "label": "/css/catalog-item.css-5", "isController": false}, {"data": [[100.0, 91.35000000000002]], "isOverall": false, "label": "/css/catalog-item.css-5-Aggregated", "isController": false}, {"data": [[34.0, 1404.5], [51.0, 570.0], [66.0, 556.0], [64.0, 1682.5], [71.0, 1358.0], [68.0, 3106.0], [73.0, 2726.0], [83.0, 762.0], [86.0, 729.6666666666666], [85.0, 615.0], [84.0, 603.5], [88.0, 1744.5], [95.0, 1230.0], [94.0, 1655.8], [93.0, 817.0], [92.0, 1490.5], [99.0, 1172.5], [98.0, 1661.0], [97.0, 1454.222222222222], [96.0, 1691.2857142857144], [100.0, 970.4545454545456]], "isOverall": false, "label": "/-151", "isController": false}, {"data": [[92.54999999999998, 1254.34]], "isOverall": false, "label": "/-151-Aggregated", "isController": false}, {"data": [[42.0, 87.0], [59.0, 84.0], [62.0, 90.0], [67.0, 95.0], [64.0, 85.0], [68.0, 85.0], [75.0, 91.5], [79.0, 86.33333333333333], [83.0, 87.66666666666667], [86.0, 84.0], [85.0, 85.0], [84.0, 84.0], [91.0, 84.66666666666667], [90.0, 84.0], [88.0, 84.0], [95.0, 85.66666666666667], [94.0, 89.8], [93.0, 87.5], [92.0, 87.0], [99.0, 86.35714285714286], [98.0, 90.57142857142857], [97.0, 94.28571428571428], [96.0, 88.66666666666667], [100.0, 86.58823529411764], [24.0, 87.0], [27.0, 86.0]], "isOverall": false, "label": "/js/search.min.js-156", "isController": false}, {"data": [[91.02999999999999, 88.28999999999998]], "isOverall": false, "label": "/js/search.min.js-156-Aggregated", "isController": false}, {"data": [[100.0, 93.29000000000003]], "isOverall": false, "label": "/js/indexPage.min.js-74", "isController": false}, {"data": [[100.0, 93.29000000000003]], "isOverall": false, "label": "/js/indexPage.min.js-74-Aggregated", "isController": false}, {"data": [[43.0, 88.66666666666667], [42.0, 89.0], [46.0, 87.0], [53.0, 94.5], [55.0, 84.0], [59.0, 86.0], [61.0, 86.5], [62.0, 88.0], [66.0, 85.75], [65.0, 85.0], [71.0, 84.0], [68.0, 85.0], [75.0, 92.0], [74.0, 85.5], [72.0, 86.0], [79.0, 99.5], [78.0, 90.5], [83.0, 88.0], [80.0, 87.0], [85.0, 84.0], [84.0, 85.8], [91.0, 82.0], [89.0, 84.0], [88.0, 96.0], [95.0, 87.0], [94.0, 94.0], [93.0, 85.0], [92.0, 84.28571428571429], [99.0, 91.0], [98.0, 100.0], [97.0, 88.99999999999999], [96.0, 91.0], [100.0, 89.0], [10.0, 85.0], [12.0, 85.0], [17.0, 87.0], [18.0, 86.0], [20.0, 93.66666666666667], [23.0, 82.0], [24.0, 89.0]], "isOverall": false, "label": "/css/delivery-status.css-169", "isController": false}, {"data": [[76.14999999999999, 88.44999999999997]], "isOverall": false, "label": "/css/delivery-status.css-169-Aggregated", "isController": false}, {"data": [[40.0, 84.25], [42.0, 91.0], [47.0, 85.0], [50.0, 92.0], [52.0, 85.5], [56.0, 87.0], [59.0, 92.0], [58.0, 84.0], [62.0, 84.0], [66.0, 101.0], [64.0, 84.75], [71.0, 87.33333333333333], [70.0, 83.0], [68.0, 85.0], [75.0, 88.0], [74.0, 86.0], [79.0, 91.0], [83.0, 90.0], [81.0, 101.0], [80.0, 91.0], [87.0, 87.0], [86.0, 95.0], [84.0, 84.5], [91.0, 84.0], [90.0, 85.0], [89.0, 83.0], [88.0, 85.0], [95.0, 101.0], [94.0, 88.57142857142857], [93.0, 87.6], [92.0, 86.0], [99.0, 85.83333333333333], [98.0, 87.0], [97.0, 90.75], [96.0, 88.0], [100.0, 85.5], [10.0, 86.0], [12.0, 85.0], [14.0, 90.0], [15.0, 85.0], [17.0, 91.0], [20.0, 95.0], [21.0, 93.0]], "isOverall": false, "label": "/css/order-table.css-172", "isController": false}, {"data": [[74.42999999999999, 87.62999999999998]], "isOverall": false, "label": "/css/order-table.css-172-Aggregated", "isController": false}, {"data": [[100.0, 91.41]], "isOverall": false, "label": "/js/jquery.matchHeight.0.7.2.min.js-26", "isController": false}, {"data": [[100.0, 91.41]], "isOverall": false, "label": "/js/jquery.matchHeight.0.7.2.min.js-26-Aggregated", "isController": false}, {"data": [[100.0, 90.06000000000002]], "isOverall": false, "label": "/images/slider-arrow.svg-36", "isController": false}, {"data": [[100.0, 90.06000000000002]], "isOverall": false, "label": "/images/slider-arrow.svg-36-Aggregated", "isController": false}, {"data": [[99.0, 84.5], [97.0, 104.0], [100.0, 89.57731958762885]], "isOverall": false, "label": "/js/store.min.js-105", "isController": false}, {"data": [[99.95, 89.61999999999999]], "isOverall": false, "label": "/js/store.min.js-105-Aggregated", "isController": false}, {"data": [[100.0, 90.46999999999997]], "isOverall": false, "label": "/images/arrow.svg-54", "isController": false}, {"data": [[100.0, 90.46999999999997]], "isOverall": false, "label": "/images/arrow.svg-54-Aggregated", "isController": false}, {"data": [[94.0, 86.0], [99.0, 84.0], [97.0, 96.0], [100.0, 89.31958762886597]], "isOverall": false, "label": "/images/mastercard-96.png-111", "isController": false}, {"data": [[99.9, 89.3]], "isOverall": false, "label": "/images/mastercard-96.png-111-Aggregated", "isController": false}, {"data": [[100.0, 127.53000000000002]], "isOverall": false, "label": "/city/get-by-ip-35", "isController": false}, {"data": [[100.0, 127.53000000000002]], "isOverall": false, "label": "/city/get-by-ip-35-Aggregated", "isController": false}, {"data": [[43.0, 2905.25], [49.0, 702.0], [53.0, 1331.0], [54.0, 1144.0], [56.0, 1256.5], [62.0, 1457.75], [67.0, 1428.0], [66.0, 2835.25], [71.0, 1505.5], [70.0, 3476.0], [75.0, 2213.6666666666665], [74.0, 1018.0], [79.0, 1576.3333333333335], [83.0, 2045.0], [81.0, 2059.25], [80.0, 2983.0], [86.0, 1822.0], [85.0, 1812.5], [84.0, 1370.3333333333333], [90.0, 708.0], [89.0, 3764.0], [88.0, 762.0], [95.0, 2551.0], [94.0, 1733.0], [93.0, 1530.6], [92.0, 2010.4], [99.0, 966.75], [98.0, 1366.0], [97.0, 1636.7142857142858], [96.0, 1604.0], [100.0, 1098.0], [10.0, 887.5], [12.0, 2575.0], [17.0, 4131.0], [20.0, 2247.0], [24.0, 1492.5]], "isOverall": false, "label": "/customer-167", "isController": false}, {"data": [[76.67000000000002, 1781.4399999999996]], "isOverall": false, "label": "/customer-167-Aggregated", "isController": false}, {"data": [[43.0, 501.0], [49.0, 100.0], [53.0, 91.0], [54.0, 430.0], [56.0, 471.0], [62.0, 168.25], [67.0, 87.0], [66.0, 414.5], [71.0, 99.0], [70.0, 92.0], [75.0, 423.33333333333337], [74.0, 88.0], [79.0, 92.66666666666667], [83.0, 108.0], [81.0, 104.0], [80.0, 86.0], [86.0, 152.5], [85.0, 501.25000000000006], [84.0, 95.66666666666667], [90.0, 89.0], [89.0, 491.0], [88.0, 98.0], [95.0, 88.0], [94.0, 211.21428571428572], [93.0, 527.0], [92.0, 424.0], [99.0, 95.5], [98.0, 525.0], [97.0, 381.5714285714286], [96.0, 505.0], [100.0, 239.66666666666669], [10.0, 101.5], [12.0, 102.0], [17.0, 756.0], [20.0, 196.25], [24.0, 440.5]], "isOverall": false, "label": "/customer-167-0", "isController": false}, {"data": [[76.67000000000002, 278.43999999999977]], "isOverall": false, "label": "/customer-167-0-Aggregated", "isController": false}, {"data": [[43.0, 99.0], [49.0, 88.0], [53.0, 618.0], [54.0, 102.0], [56.0, 87.0], [62.0, 136.0], [67.0, 618.0], [66.0, 701.75], [71.0, 787.0], [70.0, 88.0], [75.0, 253.0], [74.0, 254.0], [79.0, 169.66666666666666], [83.0, 1197.0], [81.0, 670.75], [80.0, 671.0], [86.0, 84.5], [85.0, 143.0], [84.0, 133.66666666666666], [90.0, 89.0], [89.0, 101.0], [88.0, 119.0], [95.0, 1843.0], [94.0, 319.6428571428571], [93.0, 295.2], [92.0, 93.4], [99.0, 115.5], [98.0, 92.0], [97.0, 143.57142857142858], [96.0, 100.0], [100.0, 92.66666666666666], [10.0, 92.5], [12.0, 1485.0], [17.0, 104.0], [20.0, 247.0], [24.0, 101.5]], "isOverall": false, "label": "/customer-167-1", "isController": false}, {"data": [[76.67000000000002, 279.74]], "isOverall": false, "label": "/customer-167-1-Aggregated", "isController": false}, {"data": [[39.0, 86.0], [41.0, 96.0], [40.0, 84.33333333333333], [44.0, 89.0], [47.0, 88.0], [51.0, 84.0], [56.0, 88.75], [63.0, 87.0], [62.0, 84.0], [67.0, 88.0], [66.0, 84.0], [64.0, 84.0], [71.0, 88.0], [70.0, 86.0], [68.0, 85.0], [75.0, 85.83333333333333], [72.0, 94.5], [79.0, 98.0], [83.0, 85.83333333333333], [81.0, 85.0], [80.0, 86.0], [87.0, 83.0], [86.0, 89.0], [85.0, 98.0], [91.0, 86.33333333333333], [89.0, 85.0], [88.0, 85.0], [95.0, 101.0], [94.0, 90.14285714285715], [93.0, 84.87500000000001], [92.0, 85.25], [99.0, 87.0], [97.0, 89.5], [96.0, 91.0], [100.0, 85.75], [10.0, 86.66666666666667], [12.0, 85.0], [13.0, 88.0], [14.0, 102.0], [17.0, 89.0], [20.0, 92.5]], "isOverall": false, "label": "/css/cabinet.css-173", "isController": false}, {"data": [[73.82000000000001, 87.66999999999997]], "isOverall": false, "label": "/css/cabinet.css-173-Aggregated", "isController": false}, {"data": [[95.0, 83.0], [99.0, 89.0], [98.0, 84.0], [100.0, 89.9896907216495]], "isOverall": false, "label": "/css/static-page.css-108", "isController": false}, {"data": [[99.92, 89.85]], "isOverall": false, "label": "/css/static-page.css-108-Aggregated", "isController": false}, {"data": [[43.0, 2305.25], [49.0, 513.0], [53.0, 622.0], [54.0, 612.0], [56.0, 698.5], [62.0, 1153.25], [67.0, 723.0], [66.0, 1719.0], [71.0, 619.5], [70.0, 3296.0], [75.0, 1537.0], [74.0, 676.0], [79.0, 1314.0], [83.0, 740.0], [81.0, 1284.25], [80.0, 2226.0], [86.0, 1585.0], [85.0, 1168.25], [84.0, 1141.0], [90.0, 530.0], [89.0, 3172.0], [88.0, 545.0], [95.0, 620.0], [94.0, 1201.928571428571], [93.0, 708.0], [92.0, 1492.8], [99.0, 755.25], [98.0, 749.0], [97.0, 1111.5714285714284], [96.0, 999.0], [100.0, 765.5], [10.0, 693.5], [12.0, 988.0], [17.0, 3271.0], [20.0, 1803.75], [24.0, 950.5]], "isOverall": false, "label": "/customer-167-2", "isController": false}, {"data": [[76.67000000000002, 1223.13]], "isOverall": false, "label": "/customer-167-2-Aggregated", "isController": false}, {"data": [[100.0, 89.89]], "isOverall": false, "label": "/css/plugins/slick.css-41", "isController": false}, {"data": [[100.0, 89.89]], "isOverall": false, "label": "/css/plugins/slick.css-41-Aggregated", "isController": false}, {"data": [[99.0, 83.0], [100.0, 91.12121212121212]], "isOverall": false, "label": "/images/present-bg.svg-101", "isController": false}, {"data": [[99.99, 91.04]], "isOverall": false, "label": "/images/present-bg.svg-101-Aggregated", "isController": false}, {"data": [[99.0, 84.5], [97.0, 87.0], [100.0, 90.2061855670103]], "isOverall": false, "label": "/images/modal-close.svg-106", "isController": false}, {"data": [[99.95, 90.05999999999997]], "isOverall": false, "label": "/images/modal-close.svg-106-Aggregated", "isController": false}, {"data": [[34.0, 86.0], [53.0, 89.0], [52.0, 84.0], [59.0, 85.0], [62.0, 83.0], [64.0, 86.0], [71.0, 87.4], [75.0, 86.66666666666667], [78.0, 88.0], [83.0, 85.0], [80.0, 88.0], [87.0, 87.0], [86.0, 84.0], [85.0, 83.0], [90.0, 93.0], [89.0, 88.5], [88.0, 94.5], [95.0, 90.4], [94.0, 85.5], [93.0, 88.99999999999999], [92.0, 94.0], [99.0, 88.0625], [98.0, 92.75], [97.0, 93.1], [96.0, 91.625], [100.0, 87.27272727272727], [20.0, 96.5]], "isOverall": false, "label": "/css/filters.css-162", "isController": false}, {"data": [[88.94000000000001, 89.13999999999997]], "isOverall": false, "label": "/css/filters.css-162-Aggregated", "isController": false}, {"data": [[2.0, 87.0], [3.0, 87.0], [4.0, 85.0], [5.0, 87.0], [6.0, 87.0], [7.0, 85.0], [8.0, 83.0], [9.0, 85.0], [10.0, 94.0], [11.0, 85.0], [12.0, 86.0], [13.0, 87.0], [14.0, 85.0], [15.0, 87.0], [16.0, 90.0], [17.0, 87.0], [18.0, 89.0], [19.0, 88.0], [20.0, 87.0], [21.0, 87.0], [22.0, 85.0], [23.0, 86.0], [24.0, 87.0], [25.0, 86.0], [26.0, 85.0], [27.0, 85.0], [28.0, 86.0], [29.0, 84.0], [30.0, 84.0], [31.0, 85.0], [33.0, 86.0], [32.0, 85.0], [35.0, 82.0], [34.0, 84.0], [37.0, 94.0], [36.0, 86.0], [39.0, 84.0], [38.0, 85.0], [41.0, 99.0], [40.0, 84.0], [43.0, 92.0], [42.0, 83.0], [45.0, 88.0], [44.0, 86.0], [47.0, 86.0], [46.0, 85.0], [49.0, 86.0], [48.0, 91.0], [51.0, 86.0], [50.0, 95.0], [53.0, 88.0], [52.0, 85.0], [55.0, 88.0], [54.0, 86.0], [57.0, 86.0], [56.0, 84.0], [59.0, 86.0], [58.0, 85.0], [61.0, 91.0], [60.0, 92.0], [63.0, 85.0], [62.0, 83.0], [67.0, 83.0], [66.0, 94.0], [65.0, 86.0], [64.0, 112.0], [71.0, 86.0], [70.0, 85.0], [69.0, 85.0], [68.0, 122.0], [75.0, 86.0], [74.0, 86.0], [73.0, 85.0], [72.0, 90.0], [79.0, 97.0], [78.0, 90.0], [77.0, 87.0], [76.0, 85.0], [83.0, 86.0], [82.0, 86.0], [81.0, 93.0], [80.0, 109.0], [87.0, 91.0], [86.0, 83.0], [85.0, 84.0], [84.0, 94.0], [91.0, 92.0], [90.0, 86.0], [89.0, 85.0], [88.0, 83.0], [95.0, 89.0], [94.0, 92.0], [93.0, 89.0], [92.0, 85.0], [99.0, 86.0], [98.0, 84.0], [97.0, 117.0], [96.0, 83.0], [100.0, 85.0], [1.0, 87.0]], "isOverall": false, "label": "/js/orderModel.min.js-183", "isController": false}, {"data": [[50.5, 88.04999999999997]], "isOverall": false, "label": "/js/orderModel.min.js-183-Aggregated", "isController": false}, {"data": [[87.0, 84.0], [95.0, 87.0], [92.0, 84.0], [99.0, 87.64285714285715], [98.0, 100.0], [97.0, 101.0], [100.0, 87.76543209876546]], "isOverall": false, "label": "/images/close-modal.svg-119", "isController": false}, {"data": [[99.55000000000003, 87.92000000000004]], "isOverall": false, "label": "/images/close-modal.svg-119-Aggregated", "isController": false}, {"data": [[100.0, 90.19999999999999]], "isOverall": false, "label": "/images/basket-icon-green.svg-25", "isController": false}, {"data": [[100.0, 90.19999999999999]], "isOverall": false, "label": "/images/basket-icon-green.svg-25-Aggregated", "isController": false}, {"data": [[74.0, 86.0], [87.0, 84.0], [91.0, 86.0], [95.0, 90.0], [99.0, 86.25], [98.0, 104.33333333333333], [97.0, 99.2], [96.0, 90.5], [100.0, 88.11267605633802]], "isOverall": false, "label": "/css/products-in-shops-modal.css-125", "isController": false}, {"data": [[98.93000000000002, 88.98000000000002]], "isOverall": false, "label": "/css/products-in-shops-modal.css-125-Aggregated", "isController": false}, {"data": [[100.0, 90.30999999999999]], "isOverall": false, "label": "/images/app-apple-logo.png-10", "isController": false}, {"data": [[100.0, 90.30999999999999]], "isOverall": false, "label": "/images/app-apple-logo.png-10-Aggregated", "isController": false}, {"data": [[100.0, 95.25]], "isOverall": false, "label": "/js/jquery.nicescroll.3.7.6.min.js-8", "isController": false}, {"data": [[100.0, 95.25]], "isOverall": false, "label": "/js/jquery.nicescroll.3.7.6.min.js-8-Aggregated", "isController": false}, {"data": [[100.0, 90.04999999999998]], "isOverall": false, "label": "/images/close-modal-w.svg-65", "isController": false}, {"data": [[100.0, 90.04999999999998]], "isOverall": false, "label": "/images/close-modal-w.svg-65-Aggregated", "isController": false}, {"data": [[32.0, 84.0], [2.0, 89.0], [34.0, 84.6], [40.0, 85.33333333333333], [43.0, 85.5], [46.0, 87.0], [3.0, 85.0], [51.0, 86.66666666666667], [50.0, 84.0], [53.0, 86.25], [52.0, 88.5], [59.0, 86.6], [58.0, 83.0], [63.0, 112.0], [67.0, 93.0], [66.0, 85.0], [65.0, 86.0], [64.0, 95.66666666666667], [71.0, 86.0], [68.0, 86.0], [75.0, 88.0], [79.0, 111.0], [83.0, 84.5], [81.0, 104.0], [80.0, 87.5], [87.0, 86.0], [86.0, 84.0], [84.0, 91.0], [91.0, 89.33333333333333], [88.0, 87.0], [95.0, 87.0], [94.0, 90.0], [93.0, 85.0], [92.0, 83.0], [99.0, 90.0], [98.0, 85.0], [97.0, 91.0], [96.0, 90.0], [6.0, 87.0], [100.0, 88.0], [10.0, 87.0], [12.0, 85.0], [1.0, 87.0], [17.0, 87.0], [20.0, 94.33333333333333], [23.0, 85.0], [27.0, 85.0], [30.0, 88.75]], "isOverall": false, "label": "/css/cabinet.css-181", "isController": false}, {"data": [[52.22000000000001, 87.77000000000002]], "isOverall": false, "label": "/css/cabinet.css-181-Aggregated", "isController": false}, {"data": [[100.0, 90.11999999999996]], "isOverall": false, "label": "/images/sale_arrow_small.svg-37", "isController": false}, {"data": [[100.0, 90.11999999999996]], "isOverall": false, "label": "/images/sale_arrow_small.svg-37-Aggregated", "isController": false}, {"data": [[100.0, 91.39000000000001]], "isOverall": false, "label": "/images/app-huawei-logo.png-15", "isController": false}, {"data": [[100.0, 91.39000000000001]], "isOverall": false, "label": "/images/app-huawei-logo.png-15-Aggregated", "isController": false}, {"data": [[100.0, 1163.6900000000003]], "isOverall": false, "label": "/site/login-38", "isController": false}, {"data": [[100.0, 1163.6900000000003]], "isOverall": false, "label": "/site/login-38-Aggregated", "isController": false}, {"data": [[2.0, 746.0], [34.0, 1949.1666666666665], [36.0, 1414.0], [40.0, 3946.6666666666665], [42.0, 1655.75], [47.0, 3587.0], [46.0, 1016.0], [3.0, 739.5], [51.0, 682.0], [53.0, 1570.4285714285716], [54.0, 1225.0], [56.0, 2150.0], [59.0, 3251.0], [61.0, 863.0], [62.0, 1465.6666666666667], [67.0, 714.0], [66.0, 1314.5], [65.0, 2461.0], [71.0, 2153.0], [68.0, 890.0], [74.0, 678.0], [73.0, 1872.0], [72.0, 1638.0], [79.0, 1645.0], [78.0, 1862.3333333333333], [83.0, 1593.75], [87.0, 1143.0], [86.0, 2571.0], [84.0, 2186.5], [90.0, 1562.0], [88.0, 2949.5], [94.0, 3638.0], [93.0, 970.0], [92.0, 1811.25], [99.0, 1117.0], [98.0, 1072.0], [97.0, 1408.0], [96.0, 2428.0], [100.0, 1557.0], [9.0, 813.5], [10.0, 911.6], [12.0, 2304.5], [19.0, 909.0], [20.0, 1501.75], [21.0, 1456.0], [23.0, 1083.0], [24.0, 1111.6666666666667], [30.0, 2739.0]], "isOverall": false, "label": "/customer/order-179", "isController": false}, {"data": [[53.96999999999997, 1729.55]], "isOverall": false, "label": "/customer/order-179-Aggregated", "isController": false}, {"data": [[100.0, 93.05000000000001]], "isOverall": false, "label": "/css/common.css-40", "isController": false}, {"data": [[100.0, 93.05000000000001]], "isOverall": false, "label": "/css/common.css-40-Aggregated", "isController": false}, {"data": [[94.0, 89.0], [99.0, 84.0], [97.0, 97.0], [100.0, 89.10309278350513]], "isOverall": false, "label": "/images/visa-96.png-109", "isController": false}, {"data": [[99.9, 89.12999999999998]], "isOverall": false, "label": "/images/visa-96.png-109-Aggregated", "isController": false}, {"data": [[100.0, 91.83000000000003]], "isOverall": false, "label": "/css/plugins/slick.css-3", "isController": false}, {"data": [[100.0, 91.83000000000003]], "isOverall": false, "label": "/css/plugins/slick.css-3-Aggregated", "isController": false}, {"data": [[100.0, 94.28000000000003]], "isOverall": false, "label": "/css/category.css-78", "isController": false}, {"data": [[100.0, 94.28000000000003]], "isOverall": false, "label": "/css/category.css-78-Aggregated", "isController": false}, {"data": [[100.0, 90.42999999999999]], "isOverall": false, "label": "/images/basket-icon-gray.svg-24", "isController": false}, {"data": [[100.0, 90.42999999999999]], "isOverall": false, "label": "/images/basket-icon-gray.svg-24-Aggregated", "isController": false}, {"data": [[99.0, 256.0], [100.0, 274.1515151515152]], "isOverall": false, "label": "/js/forms.min.js-100", "isController": false}, {"data": [[99.99, 273.97]], "isOverall": false, "label": "/js/forms.min.js-100-Aggregated", "isController": false}, {"data": [[49.0, 95.0], [61.0, 86.0], [66.0, 90.0], [71.0, 87.0], [74.0, 93.0], [87.0, 87.0], [91.0, 95.0], [90.0, 93.0], [89.0, 87.0], [88.0, 94.33333333333333], [95.0, 88.6], [94.0, 88.71428571428572], [92.0, 87.5], [99.0, 89.13793103448276], [98.0, 93.5], [97.0, 105.75], [96.0, 97.66666666666667], [100.0, 92.38235294117649]], "isOverall": false, "label": "/css/common.css-146", "isController": false}, {"data": [[95.85999999999997, 91.39000000000001]], "isOverall": false, "label": "/css/common.css-146-Aggregated", "isController": false}, {"data": [[34.0, 85.0], [41.0, 85.0], [40.0, 84.33333333333333], [47.0, 88.0], [3.0, 85.0], [53.0, 99.0], [55.0, 84.0], [56.0, 85.66666666666667], [59.0, 85.0], [62.0, 83.0], [67.0, 93.0], [66.0, 85.0], [65.0, 88.0], [64.0, 89.66666666666667], [71.0, 89.5], [70.0, 88.0], [69.0, 85.5], [68.0, 99.5], [75.0, 87.33333333333334], [74.0, 85.5], [83.0, 84.0], [80.0, 94.0], [87.0, 84.0], [86.0, 84.5], [85.0, 83.0], [84.0, 83.0], [91.0, 89.2], [90.0, 85.0], [88.0, 86.0], [95.0, 92.66666666666667], [94.0, 94.5], [93.0, 88.5], [92.0, 85.8], [99.0, 86.71428571428571], [97.0, 92.33333333333333], [96.0, 107.0], [6.0, 85.0], [100.0, 86.0], [10.0, 84.66666666666667], [11.0, 84.0], [12.0, 85.0], [13.0, 93.5], [29.0, 84.0], [30.0, 92.66666666666667]], "isOverall": false, "label": "/js/forms.min.js-178", "isController": false}, {"data": [[69.50999999999999, 88.21000000000005]], "isOverall": false, "label": "/js/forms.min.js-178-Aggregated", "isController": false}, {"data": [[100.0, 94.76000000000002]], "isOverall": false, "label": "/fonts/Graphik-Medium-Web.woff2-22", "isController": false}, {"data": [[100.0, 94.76000000000002]], "isOverall": false, "label": "/fonts/Graphik-Medium-Web.woff2-22-Aggregated", "isController": false}, {"data": [[40.0, 88.0], [59.0, 93.5], [58.0, 88.0], [67.0, 86.0], [66.0, 105.0], [64.0, 99.0], [75.0, 90.75], [79.0, 93.0], [83.0, 92.66666666666667], [81.0, 91.0], [86.0, 90.0], [84.0, 94.0], [91.0, 91.75], [90.0, 86.0], [89.0, 88.0], [88.0, 97.0], [95.0, 93.0], [94.0, 94.69999999999999], [93.0, 90.0], [92.0, 88.66666666666667], [99.0, 89.80000000000003], [98.0, 96.8], [97.0, 93.07692307692308], [96.0, 92.16666666666667], [100.0, 92.8125], [24.0, 89.5]], "isOverall": false, "label": "/css/common.css-153", "isController": false}, {"data": [[90.68000000000002, 92.27]], "isOverall": false, "label": "/css/common.css-153-Aggregated", "isController": false}, {"data": [[100.0, 92.11000000000003]], "isOverall": false, "label": "/js/catalogItem.min.js-97", "isController": false}, {"data": [[100.0, 92.11000000000003]], "isOverall": false, "label": "/js/catalogItem.min.js-97-Aggregated", "isController": false}, {"data": [[53.0, 110.0], [64.0, 1101.0], [68.0, 114.0], [74.0, 1120.0], [78.0, 129.0], [91.0, 637.3333333333333], [90.0, 96.0], [89.0, 122.0], [95.0, 1752.0], [94.0, 376.83333333333337], [93.0, 104.0], [92.0, 370.0], [99.0, 166.6521739130435], [98.0, 154.25], [97.0, 321.5], [96.0, 580.2], [100.0, 503.00000000000006]], "isOverall": false, "label": "/order/index-144", "isController": false}, {"data": [[96.38, 399.31]], "isOverall": false, "label": "/order/index-144-Aggregated", "isController": false}, {"data": [[100.0, 90.01000000000002]], "isOverall": false, "label": "/css/index-page.css-43", "isController": false}, {"data": [[100.0, 90.01000000000002]], "isOverall": false, "label": "/css/index-page.css-43-Aggregated", "isController": false}, {"data": [[100.0, 196.27]], "isOverall": false, "label": "/images/app-modal-phone.png-16", "isController": false}, {"data": [[100.0, 196.27]], "isOverall": false, "label": "/images/app-modal-phone.png-16-Aggregated", "isController": false}, {"data": [[100.0, 92.57000000000005]], "isOverall": false, "label": "/css/catalog-page.css-77", "isController": false}, {"data": [[100.0, 92.57000000000005]], "isOverall": false, "label": "/css/catalog-page.css-77-Aggregated", "isController": false}, {"data": [[34.0, 87.0], [51.0, 91.0], [50.0, 83.0], [52.0, 93.0], [58.0, 86.0], [62.0, 83.0], [64.0, 110.0], [71.0, 84.66666666666667], [69.0, 85.0], [75.0, 86.33333333333333], [74.0, 85.0], [79.0, 89.0], [83.0, 85.0], [87.0, 84.0], [86.0, 91.5], [85.0, 85.0], [91.0, 89.0], [89.0, 83.0], [88.0, 85.0], [95.0, 84.6], [94.0, 87.83333333333333], [93.0, 88.85714285714286], [92.0, 87.75], [99.0, 86.75000000000001], [98.0, 98.0], [97.0, 93.30000000000001], [96.0, 88.5], [100.0, 91.18181818181817], [20.0, 97.5]], "isOverall": false, "label": "/css/paging.css-163", "isController": false}, {"data": [[88.61000000000001, 88.67999999999999]], "isOverall": false, "label": "/css/paging.css-163-Aggregated", "isController": false}, {"data": [[100.0, 94.04000000000002]], "isOverall": false, "label": "/css/product-card.css-95", "isController": false}, {"data": [[100.0, 94.04000000000002]], "isOverall": false, "label": "/css/product-card.css-95-Aggregated", "isController": false}, {"data": [[100.0, 92.48999999999998]], "isOverall": false, "label": "/css/jquery.fancybox.min.css-13", "isController": false}, {"data": [[100.0, 92.48999999999998]], "isOverall": false, "label": "/css/jquery.fancybox.min.css-13-Aggregated", "isController": false}, {"data": [[100.0, 90.97999999999999]], "isOverall": false, "label": "/js/js.cookie.3.0.1.min.js-27", "isController": false}, {"data": [[100.0, 90.97999999999999]], "isOverall": false, "label": "/js/js.cookie.3.0.1.min.js-27-Aggregated", "isController": false}, {"data": [[100.0, 91.27000000000001]], "isOverall": false, "label": "/images/veh-lorry-2.svg-49", "isController": false}, {"data": [[100.0, 91.27000000000001]], "isOverall": false, "label": "/images/veh-lorry-2.svg-49-Aggregated", "isController": false}, {"data": [[66.0, 84.0], [83.0, 89.0], [86.0, 83.0], [95.0, 100.0], [94.0, 90.0], [99.0, 87.21428571428572], [98.0, 85.25], [97.0, 90.25], [96.0, 91.33333333333333], [100.0, 89.99999999999997]], "isOverall": false, "label": "/js/search.min.js-131", "isController": false}, {"data": [[98.48, 89.42999999999999]], "isOverall": false, "label": "/js/search.min.js-131-Aggregated", "isController": false}, {"data": [[100.0, 91.75999999999996]], "isOverall": false, "label": "/css/products-in-shops-modal.css-60", "isController": false}, {"data": [[100.0, 91.75999999999996]], "isOverall": false, "label": "/css/products-in-shops-modal.css-60-Aggregated", "isController": false}, {"data": [[56.0, 104.0], [71.0, 107.0], [75.0, 92.0], [81.0, 1395.0], [86.0, 1130.0], [91.0, 681.0], [95.0, 1267.0], [94.0, 208.0], [93.0, 268.5], [92.0, 84.0], [99.0, 217.15], [98.0, 388.2], [97.0, 332.375], [100.0, 334.9166666666667]], "isOverall": false, "label": "/order/update-delivery-type-dependent-info-142", "isController": false}, {"data": [[97.2, 328.82]], "isOverall": false, "label": "/order/update-delivery-type-dependent-info-142-Aggregated", "isController": false}, {"data": [[100.0, 89.89000000000001]], "isOverall": false, "label": "/js/forms.min.js-51", "isController": false}, {"data": [[100.0, 89.89000000000001]], "isOverall": false, "label": "/js/forms.min.js-51-Aggregated", "isController": false}, {"data": [[100.0, 91.60000000000001]], "isOverall": false, "label": "/css/catalog-item.css-70", "isController": false}, {"data": [[100.0, 91.60000000000001]], "isOverall": false, "label": "/css/catalog-item.css-70-Aggregated", "isController": false}, {"data": [[100.0, 95.66999999999999]], "isOverall": false, "label": "/images/delivery-icon.svg-90", "isController": false}, {"data": [[100.0, 95.66999999999999]], "isOverall": false, "label": "/images/delivery-icon.svg-90-Aggregated", "isController": false}, {"data": [[43.0, 94.0], [61.0, 84.0], [62.0, 84.0], [66.0, 84.0], [64.0, 95.0], [71.0, 84.0], [68.0, 86.0], [79.0, 86.5], [83.0, 85.0], [81.0, 87.0], [80.0, 88.0], [86.0, 84.0], [84.0, 83.75], [91.0, 84.0], [88.0, 84.0], [95.0, 91.6], [94.0, 88.14285714285714], [93.0, 84.5], [92.0, 90.4], [99.0, 88.125], [98.0, 91.8], [97.0, 93.99999999999999], [96.0, 85.0], [100.0, 86.52631578947368], [29.0, 84.0], [30.0, 96.0]], "isOverall": false, "label": "/js/indexPage.min.js-157", "isController": false}, {"data": [[91.74, 88.53]], "isOverall": false, "label": "/js/indexPage.min.js-157-Aggregated", "isController": false}, {"data": [[40.0, 87.25], [43.0, 91.0], [51.0, 91.0], [50.0, 84.0], [53.0, 87.0], [59.0, 86.25], [67.0, 83.0], [65.0, 84.0], [64.0, 89.5], [71.0, 84.66666666666667], [70.0, 83.0], [69.0, 84.0], [75.0, 89.6], [72.0, 90.0], [79.0, 95.0], [78.0, 89.33333333333333], [83.0, 84.0], [81.0, 92.0], [86.0, 93.0], [84.0, 86.0], [91.0, 86.5], [90.0, 87.0], [88.0, 91.0], [94.0, 87.71428571428571], [93.0, 85.2], [92.0, 86.2], [99.0, 87.0], [98.0, 85.0], [97.0, 91.4], [96.0, 94.33333333333333], [100.0, 87.75], [10.0, 84.0], [13.0, 86.0], [17.0, 90.0], [19.0, 90.0], [23.0, 88.0]], "isOverall": false, "label": "/css/paging.css-170", "isController": false}, {"data": [[75.02999999999996, 87.60999999999999]], "isOverall": false, "label": "/css/paging.css-170-Aggregated", "isController": false}, {"data": [[100.0, 92.81]], "isOverall": false, "label": "/css/index-page.css-4", "isController": false}, {"data": [[100.0, 92.81]], "isOverall": false, "label": "/css/index-page.css-4-Aggregated", "isController": false}, {"data": [[75.0, 99.0], [91.0, 109.0], [88.0, 98.0], [95.0, 840.0], [99.0, 274.4166666666667], [98.0, 165.0], [97.0, 410.0], [96.0, 326.5], [100.0, 586.87323943662]], "isOverall": false, "label": "/order-123-0", "isController": false}, {"data": [[98.96000000000004, 505.53000000000026]], "isOverall": false, "label": "/order-123-0-Aggregated", "isController": false}, {"data": [[100.0, 90.00999999999998]], "isOverall": false, "label": "/js/search.min.js-44", "isController": false}, {"data": [[100.0, 90.00999999999998]], "isOverall": false, "label": "/js/search.min.js-44-Aggregated", "isController": false}, {"data": [[100.0, 109.10999999999999]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-64", "isController": false}, {"data": [[100.0, 109.10999999999999]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-64-Aggregated", "isController": false}, {"data": [[99.0, 84.0], [100.0, 91.20202020202021]], "isOverall": false, "label": "/images/counter-minus.svg-103", "isController": false}, {"data": [[99.99, 91.13000000000001]], "isOverall": false, "label": "/images/counter-minus.svg-103-Aggregated", "isController": false}, {"data": [[52.0, 86.0], [67.0, 85.0], [64.0, 101.0], [75.0, 94.0], [72.0, 84.0], [91.0, 84.5], [90.0, 84.0], [89.0, 83.0], [88.0, 102.0], [95.0, 93.66666666666667], [94.0, 86.16666666666666], [93.0, 84.0], [92.0, 85.0], [99.0, 86.91999999999999], [98.0, 87.5], [97.0, 96.4], [96.0, 90.25], [100.0, 89.43589743589742]], "isOverall": false, "label": "/js/search.min.js-148", "isController": false}, {"data": [[96.19, 88.72999999999999]], "isOverall": false, "label": "/js/search.min.js-148-Aggregated", "isController": false}, {"data": [[100.0, 95.58]], "isOverall": false, "label": "/js/jquery.fancybox.3.5.6.min.js-53", "isController": false}, {"data": [[100.0, 95.58]], "isOverall": false, "label": "/js/jquery.fancybox.3.5.6.min.js-53-Aggregated", "isController": false}, {"data": [[2.0, 87.0], [3.0, 87.0], [8.0, 85.33333333333333], [10.0, 86.25], [12.0, 94.5], [17.0, 89.0], [20.0, 88.25], [21.0, 89.0], [23.0, 85.0], [24.0, 86.0], [29.0, 83.0], [33.0, 84.0], [34.0, 86.0], [37.0, 84.0], [41.0, 84.0], [40.0, 85.8], [43.0, 86.0], [47.0, 84.0], [51.0, 85.0], [53.0, 88.6], [52.0, 85.0], [56.0, 85.0], [59.0, 91.33333333333333], [61.0, 91.5], [62.0, 84.0], [67.0, 87.0], [66.0, 85.0], [64.0, 102.25], [71.0, 94.66666666666667], [70.0, 86.0], [75.0, 89.0], [72.0, 83.0], [78.0, 90.0], [83.0, 88.0], [81.0, 85.0], [87.0, 84.0], [86.0, 86.0], [85.0, 89.0], [84.0, 85.66666666666667], [91.0, 83.0], [88.0, 90.0], [94.0, 93.0], [93.0, 83.0], [92.0, 86.66666666666667], [99.0, 85.0], [98.0, 85.0], [97.0, 92.0], [96.0, 83.5], [100.0, 84.0], [1.0, 86.0]], "isOverall": false, "label": "/css/order-information.css-182", "isController": false}, {"data": [[52.959999999999994, 87.61999999999998]], "isOverall": false, "label": "/css/order-information.css-182-Aggregated", "isController": false}, {"data": [[33.0, 86.0], [34.0, 84.0], [49.0, 91.0], [67.0, 84.0], [65.0, 92.0], [64.0, 89.0], [71.0, 84.0], [83.0, 85.0], [81.0, 84.0], [87.0, 84.0], [86.0, 84.0], [85.0, 83.5], [91.0, 86.0], [88.0, 84.0], [95.0, 87.25], [94.0, 91.8], [93.0, 87.5], [92.0, 85.2], [99.0, 87.375], [98.0, 91.6], [97.0, 93.55555555555554], [96.0, 91.66666666666667], [100.0, 88.14999999999999]], "isOverall": false, "label": "/css/plugins/slick.css-152", "isController": false}, {"data": [[92.32, 88.47999999999999]], "isOverall": false, "label": "/css/plugins/slick.css-152-Aggregated", "isController": false}, {"data": [[71.0, 85.0], [86.0, 85.0], [89.0, 92.0], [95.0, 91.0], [94.0, 93.0], [99.0, 86.21428571428571], [98.0, 88.0], [97.0, 99.83333333333333], [96.0, 84.66666666666667], [100.0, 89.10144927536231]], "isOverall": false, "label": "/js/orderModel.min.js-128", "isController": false}, {"data": [[98.78, 89.25999999999998]], "isOverall": false, "label": "/js/orderModel.min.js-128-Aggregated", "isController": false}, {"data": [[100.0, 94.27999999999999]], "isOverall": false, "label": "/js/basket.min.js-75", "isController": false}, {"data": [[100.0, 94.27999999999999]], "isOverall": false, "label": "/js/basket.min.js-75-Aggregated", "isController": false}, {"data": [[36.0, 86.0], [53.0, 92.0], [59.0, 83.0], [64.0, 93.0], [71.0, 84.75], [75.0, 97.0], [74.0, 83.0], [79.0, 86.0], [78.0, 89.0], [81.0, 86.0], [87.0, 84.0], [86.0, 83.0], [84.0, 85.0], [91.0, 90.0], [90.0, 85.0], [88.0, 85.4], [95.0, 94.0], [94.0, 89.57142857142857], [93.0, 86.33333333333333], [92.0, 94.0], [99.0, 88.0], [98.0, 89.5], [97.0, 92.78571428571429], [96.0, 88.16666666666667], [100.0, 88.28571428571428], [20.0, 90.0], [21.0, 89.0]], "isOverall": false, "label": "/css/category.css-161", "isController": false}, {"data": [[89.33000000000004, 88.93000000000002]], "isOverall": false, "label": "/css/category.css-161-Aggregated", "isController": false}, {"data": [[100.0, 94.18]], "isOverall": false, "label": "/css/paging.css-80", "isController": false}, {"data": [[100.0, 94.18]], "isOverall": false, "label": "/css/paging.css-80-Aggregated", "isController": false}, {"data": [[75.0, 887.0], [91.0, 319.0], [88.0, 616.0], [95.0, 428.0], [99.0, 752.9166666666666], [98.0, 1072.75], [97.0, 845.0], [96.0, 798.25], [100.0, 903.4507042253522]], "isOverall": false, "label": "/order-123-1", "isController": false}, {"data": [[98.96000000000004, 867.2200000000001]], "isOverall": false, "label": "/order-123-1-Aggregated", "isController": false}, {"data": [[68.0, 88.0], [87.0, 87.0], [84.0, 92.0], [95.0, 86.5], [94.0, 93.25], [99.0, 88.64285714285714], [98.0, 90.66666666666667], [97.0, 96.5], [96.0, 88.0], [100.0, 95.40909090909092]], "isOverall": false, "label": "/css/common.css-124", "isController": false}, {"data": [[98.59, 93.78000000000002]], "isOverall": false, "label": "/css/common.css-124-Aggregated", "isController": false}, {"data": [[100.0, 93.14999999999993]], "isOverall": false, "label": "/images/search-icon.svg-19", "isController": false}, {"data": [[100.0, 93.14999999999993]], "isOverall": false, "label": "/images/search-icon.svg-19-Aggregated", "isController": false}, {"data": [[85.0, 154.0], [92.0, 558.0], [99.0, 160.46153846153845], [98.0, 373.3333333333333], [97.0, 93.0], [96.0, 1576.0], [100.0, 413.2025316455696]], "isOverall": false, "label": "/basket/recalculate-basket-122", "isController": false}, {"data": [[99.42999999999998, 387.8799999999999]], "isOverall": false, "label": "/basket/recalculate-basket-122-Aggregated", "isController": false}, {"data": [[100.0, 285.0400000000001]], "isOverall": false, "label": "/site/login-62", "isController": false}, {"data": [[100.0, 285.0400000000001]], "isOverall": false, "label": "/site/login-62-Aggregated", "isController": false}, {"data": [[40.0, 85.0], [54.0, 85.0], [56.0, 99.0], [59.0, 99.0], [62.0, 100.0], [66.0, 84.0], [64.0, 84.0], [75.0, 89.33333333333333], [72.0, 97.0], [79.0, 88.0], [83.0, 84.0], [81.0, 84.0], [80.0, 83.0], [87.0, 84.0], [84.0, 84.0], [91.0, 85.5], [90.0, 85.0], [89.0, 85.0], [88.0, 91.75], [94.0, 92.89999999999999], [93.0, 88.25], [92.0, 83.5], [99.0, 87.38461538461539], [98.0, 97.14285714285715], [97.0, 91.16666666666667], [96.0, 87.75], [100.0, 86.86666666666667], [23.0, 86.0]], "isOverall": false, "label": "/js/forms.min.js-159", "isController": false}, {"data": [[90.03999999999994, 89.32000000000004]], "isOverall": false, "label": "/js/forms.min.js-159-Aggregated", "isController": false}, {"data": [[70.0, 86.0], [85.0, 84.0], [88.0, 83.0], [95.0, 88.66666666666667], [94.0, 94.33333333333333], [99.0, 88.4375], [97.0, 94.83333333333333], [96.0, 89.5], [100.0, 89.0149253731343]], "isOverall": false, "label": "/css/jquery.fias.min.css-129", "isController": false}, {"data": [[98.68, 89.28999999999998]], "isOverall": false, "label": "/css/jquery.fias.min.css-129-Aggregated", "isController": false}, {"data": [[100.0, 90.08999999999999]], "isOverall": false, "label": "/fonts/graphik.css-12", "isController": false}, {"data": [[100.0, 90.08999999999999]], "isOverall": false, "label": "/fonts/graphik.css-12-Aggregated", "isController": false}, {"data": [[100.0, 268.81]], "isOverall": false, "label": "/site/login-67", "isController": false}, {"data": [[100.0, 268.81]], "isOverall": false, "label": "/site/login-67-Aggregated", "isController": false}, {"data": [[2.0, 85.0], [3.0, 85.0], [6.0, 85.0], [9.0, 87.0], [10.0, 94.0], [12.0, 85.5], [14.0, 100.0], [16.0, 86.0], [17.0, 86.66666666666667], [20.0, 93.66666666666667], [23.0, 86.0], [24.0, 86.0], [29.0, 85.6], [33.0, 84.75], [34.0, 89.0], [39.0, 84.0], [38.0, 87.0], [40.0, 87.0], [43.0, 91.0], [42.0, 87.5], [47.0, 88.66666666666667], [49.0, 87.0], [51.0, 88.0], [53.0, 84.5], [52.0, 85.0], [56.0, 86.33333333333333], [59.0, 87.33333333333333], [62.0, 97.0], [67.0, 84.0], [66.0, 91.5], [64.0, 100.5], [71.0, 85.0], [70.0, 89.5], [75.0, 86.0], [74.0, 88.5], [79.0, 94.0], [83.0, 85.66666666666667], [81.0, 93.0], [87.0, 90.0], [86.0, 86.0], [85.0, 84.0], [84.0, 95.0], [91.0, 88.5], [90.0, 84.0], [88.0, 88.0], [95.0, 86.0], [94.0, 97.0], [93.0, 83.0], [92.0, 83.0], [99.0, 84.0], [98.0, 95.0], [97.0, 94.0], [96.0, 92.0], [100.0, 84.0], [1.0, 88.0]], "isOverall": false, "label": "/css/basket-table.css-180", "isController": false}, {"data": [[51.45999999999999, 88.34999999999997]], "isOverall": false, "label": "/css/basket-table.css-180-Aggregated", "isController": false}, {"data": [[100.0, 96.34000000000002]], "isOverall": false, "label": "/images/counter-minus-dis.svg-86", "isController": false}, {"data": [[100.0, 96.34000000000002]], "isOverall": false, "label": "/images/counter-minus-dis.svg-86-Aggregated", "isController": false}, {"data": [[40.0, 84.0], [56.0, 85.0], [59.0, 90.0], [58.0, 86.0], [66.0, 85.5], [64.0, 100.0], [75.0, 88.0], [74.0, 87.0], [83.0, 85.0], [81.0, 86.5], [80.0, 85.0], [85.0, 96.0], [84.0, 90.0], [91.0, 85.0], [90.0, 85.0], [89.0, 84.5], [88.0, 102.5], [94.0, 89.0], [93.0, 87.6], [92.0, 87.66666666666667], [99.0, 86.07142857142857], [98.0, 99.14285714285714], [97.0, 92.23076923076923], [96.0, 92.5], [100.0, 88.66666666666667], [23.0, 85.0]], "isOverall": false, "label": "/js/basket.min.js-158", "isController": false}, {"data": [[90.37999999999998, 89.56]], "isOverall": false, "label": "/js/basket.min.js-158-Aggregated", "isController": false}, {"data": [[100.0, 90.42999999999999]], "isOverall": false, "label": "/images/basket-icon.svg-20", "isController": false}, {"data": [[100.0, 90.42999999999999]], "isOverall": false, "label": "/images/basket-icon.svg-20-Aggregated", "isController": false}, {"data": [[100.0, 98.65]], "isOverall": false, "label": "/images/favicon.ico-66", "isController": false}, {"data": [[100.0, 98.65]], "isOverall": false, "label": "/images/favicon.ico-66-Aggregated", "isController": false}, {"data": [[71.0, 87.0], [78.0, 88.0], [91.0, 88.0], [95.0, 84.0], [94.0, 85.5], [93.0, 86.75], [92.0, 84.0], [99.0, 85.05263157894737], [98.0, 91.0], [97.0, 90.5], [100.0, 87.53846153846152], [59.0, 85.0]], "isOverall": false, "label": "/css/images/fias-spinner.png-141", "isController": false}, {"data": [[97.61999999999998, 87.2]], "isOverall": false, "label": "/css/images/fias-spinner.png-141-Aggregated", "isController": false}, {"data": [[99.0, 86.0], [100.0, 90.98989898989898]], "isOverall": false, "label": "/css/basket-page.css-102", "isController": false}, {"data": [[99.99, 90.93999999999998]], "isOverall": false, "label": "/css/basket-page.css-102-Aggregated", "isController": false}, {"data": [[75.0, 84.0], [81.0, 88.0], [95.0, 87.33333333333333], [94.0, 86.25], [93.0, 89.25], [92.0, 94.0], [99.0, 88.81249999999999], [98.0, 97.4], [97.0, 96.2], [96.0, 87.0], [100.0, 95.6842105263158], [61.0, 85.0]], "isOverall": false, "label": "/assets/b165c12b/yii.js-136", "isController": false}, {"data": [[97.88999999999999, 93.39000000000001]], "isOverall": false, "label": "/assets/b165c12b/yii.js-136-Aggregated", "isController": false}, {"data": [[100.0, 90.27000000000008]], "isOverall": false, "label": "/images/sho-basket-love.svg-47", "isController": false}, {"data": [[100.0, 90.27000000000008]], "isOverall": false, "label": "/images/sho-basket-love.svg-47-Aggregated", "isController": false}, {"data": [[100.0, 93.76]], "isOverall": false, "label": "/images/in-shop-icon.svg-89", "isController": false}, {"data": [[100.0, 93.76]], "isOverall": false, "label": "/images/in-shop-icon.svg-89-Aggregated", "isController": false}, {"data": [[67.0, 85.0], [87.0, 85.0], [84.0, 88.0], [95.0, 88.0], [94.0, 93.8], [99.0, 86.21428571428572], [98.0, 87.33333333333333], [97.0, 94.0], [96.0, 83.0], [100.0, 88.34848484848489]], "isOverall": false, "label": "/js/order.min.js-130", "isController": false}, {"data": [[98.56, 88.50000000000001]], "isOverall": false, "label": "/js/order.min.js-130-Aggregated", "isController": false}, {"data": [[89.0, 1190.0], [93.0, 1554.0], [99.0, 1004.6666666666667], [98.0, 1792.0], [96.0, 415.0], [100.0, 1145.9880952380959]], "isOverall": false, "label": "/basket-116", "isController": false}, {"data": [[99.63999999999999, 1132.7000000000005]], "isOverall": false, "label": "/basket-116-Aggregated", "isController": false}, {"data": [[66.0, 85.0], [83.0, 84.0], [86.0, 94.0], [95.0, 83.0], [94.0, 87.0], [93.0, 90.5], [99.0, 86.84615384615384], [98.0, 87.2], [97.0, 86.0], [96.0, 89.33333333333333], [100.0, 89.09230769230771]], "isOverall": false, "label": "/js/jquery.fias.min.js-133", "isController": false}, {"data": [[98.42000000000002, 88.44000000000001]], "isOverall": false, "label": "/js/jquery.fias.min.js-133-Aggregated", "isController": false}, {"data": [[66.0, 87.0], [81.0, 91.0], [85.0, 91.0], [95.0, 86.0], [94.0, 96.0], [93.0, 91.5], [99.0, 89.28571428571429], [98.0, 95.8], [97.0, 94.0], [96.0, 92.66666666666667], [100.0, 95.640625]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-132", "isController": false}, {"data": [[98.38000000000001, 94.28000000000002]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-132-Aggregated", "isController": false}, {"data": [[34.0, 91.5], [39.0, 85.0], [43.0, 89.0], [42.0, 86.5], [53.0, 84.33333333333333], [52.0, 83.0], [59.0, 87.0], [61.0, 87.0], [67.0, 91.33333333333333], [66.0, 84.5], [65.0, 83.0], [64.0, 99.0], [71.0, 85.5], [70.0, 85.5], [75.0, 91.0], [74.0, 89.0], [79.0, 93.25], [77.0, 87.0], [83.0, 90.0], [80.0, 85.5], [87.0, 83.5], [85.0, 89.0], [84.0, 85.0], [90.0, 83.0], [89.0, 84.5], [88.0, 99.33333333333333], [95.0, 84.0], [94.0, 89.0], [93.0, 88.33333333333333], [92.0, 87.1], [99.0, 87.6], [98.0, 102.5], [97.0, 84.0], [96.0, 88.8], [6.0, 87.0], [100.0, 86.0], [10.0, 85.5], [12.0, 87.4], [17.0, 92.0]], "isOverall": false, "label": "/css/order-again.css-174", "isController": false}, {"data": [[71.60000000000001, 88.20000000000003]], "isOverall": false, "label": "/css/order-again.css-174-Aggregated", "isController": false}, {"data": [[100.0, 93.66000000000001]], "isOverall": false, "label": "/js/twitter.typeahead.0.11.1.min.js-6", "isController": false}, {"data": [[100.0, 93.66000000000001]], "isOverall": false, "label": "/js/twitter.typeahead.0.11.1.min.js-6-Aggregated", "isController": false}, {"data": [[88.0, 83.0], [93.0, 82.0], [99.0, 85.0], [98.0, 83.0], [96.0, 84.0], [100.0, 89.55952380952384]], "isOverall": false, "label": "/images/lorry.svg-117", "isController": false}, {"data": [[99.63, 88.75000000000001]], "isOverall": false, "label": "/images/lorry.svg-117-Aggregated", "isController": false}, {"data": [[100.0, 91.34]], "isOverall": false, "label": "/js/common.min.js-31", "isController": false}, {"data": [[100.0, 91.34]], "isOverall": false, "label": "/js/common.min.js-31-Aggregated", "isController": false}, {"data": [[100.0, 94.52000000000002]], "isOverall": false, "label": "/css/index-page.css-72", "isController": false}, {"data": [[100.0, 94.52000000000002]], "isOverall": false, "label": "/css/index-page.css-72-Aggregated", "isController": false}, {"data": [[100.0, 99.83]], "isOverall": false, "label": "/css/common.css-93", "isController": false}, {"data": [[100.0, 99.83]], "isOverall": false, "label": "/css/common.css-93-Aggregated", "isController": false}, {"data": [[100.0, 93.09000000000002]], "isOverall": false, "label": "/css/filters.css-79", "isController": false}, {"data": [[100.0, 93.09000000000002]], "isOverall": false, "label": "/css/filters.css-79-Aggregated", "isController": false}, {"data": [[100.0, 92.47999999999999]], "isOverall": false, "label": "/js/forms.min.js-76", "isController": false}, {"data": [[100.0, 92.47999999999999]], "isOverall": false, "label": "/js/forms.min.js-76-Aggregated", "isController": false}, {"data": [[53.0, 89.0], [70.0, 115.0], [75.0, 87.0], [79.0, 122.0], [86.0, 99.0], [91.0, 88.0], [90.0, 88.0], [95.0, 1265.0], [94.0, 106.83333333333333], [93.0, 178.0], [92.0, 163.66666666666669], [99.0, 176.42857142857142], [98.0, 342.7142857142857], [97.0, 166.25], [96.0, 222.25], [100.0, 267.6136363636364]], "isOverall": false, "label": "/order/render-delivery-time-dropdown-143", "isController": false}, {"data": [[96.95000000000005, 230.52]], "isOverall": false, "label": "/order/render-delivery-time-dropdown-143-Aggregated", "isController": false}, {"data": [[2.0, 94.0], [34.0, 396.5], [36.0, 96.66666666666667], [40.0, 549.0], [42.0, 110.25], [47.0, 88.0], [46.0, 89.0], [3.0, 98.0], [51.0, 92.0], [53.0, 450.57142857142856], [54.0, 255.0], [56.0, 91.5], [59.0, 1236.5], [61.0, 88.0], [62.0, 677.0], [67.0, 87.0], [66.0, 594.0], [65.0, 420.0], [71.0, 1535.0], [68.0, 104.0], [74.0, 92.0], [73.0, 187.0], [72.0, 93.5], [79.0, 334.0], [78.0, 702.0], [83.0, 90.5], [87.0, 89.0], [86.0, 111.0], [84.0, 450.75], [90.0, 91.0], [88.0, 135.5], [94.0, 1047.0], [93.0, 87.0], [92.0, 255.5], [99.0, 201.0], [98.0, 86.0], [97.0, 573.0], [96.0, 570.0], [100.0, 104.0], [9.0, 94.5], [10.0, 94.8], [12.0, 760.5], [19.0, 98.0], [20.0, 95.5], [21.0, 758.0], [23.0, 107.0], [24.0, 317.66666666666663], [30.0, 579.0]], "isOverall": false, "label": "/customer/order-179-0", "isController": false}, {"data": [[53.96999999999997, 333.86]], "isOverall": false, "label": "/customer/order-179-0-Aggregated", "isController": false}, {"data": [[100.0, 89.74999999999999]], "isOverall": false, "label": "/js/indexPage.min.js-33", "isController": false}, {"data": [[100.0, 89.74999999999999]], "isOverall": false, "label": "/js/indexPage.min.js-33-Aggregated", "isController": false}, {"data": [[100.0, 92.34]], "isOverall": false, "label": "/js/search.min.js-73", "isController": false}, {"data": [[100.0, 92.34]], "isOverall": false, "label": "/js/search.min.js-73-Aggregated", "isController": false}, {"data": [[33.0, 84.0], [47.0, 86.0], [49.0, 100.0], [51.0, 94.0], [56.0, 86.0], [59.0, 88.0], [62.0, 102.0], [71.0, 85.0], [70.0, 87.0], [68.0, 85.5], [75.0, 86.66666666666667], [72.0, 91.0], [78.0, 90.0], [80.0, 88.0], [87.0, 84.0], [86.0, 85.75], [85.0, 85.0], [84.0, 83.0], [91.0, 89.0], [88.0, 91.0], [95.0, 90.6], [94.0, 87.28571428571429], [93.0, 88.0], [92.0, 85.0], [99.0, 87.8125], [98.0, 92.5], [97.0, 97.80000000000001], [96.0, 90.25], [100.0, 90.8], [18.0, 95.0], [19.0, 93.0]], "isOverall": false, "label": "/css/product-card.css-164", "isController": false}, {"data": [[88.19999999999997, 89.65999999999997]], "isOverall": false, "label": "/css/product-card.css-164-Aggregated", "isController": false}, {"data": [[2.0, 566.0], [34.0, 1009.0000000000001], [36.0, 1215.3333333333335], [40.0, 2290.3333333333335], [42.0, 1448.5], [47.0, 2070.0], [46.0, 819.0], [3.0, 551.5], [51.0, 502.0], [53.0, 930.2857142857143], [54.0, 882.0], [56.0, 1867.5], [59.0, 1476.5], [61.0, 671.0], [62.0, 695.3333333333334], [67.0, 540.0], [66.0, 622.5], [65.0, 1477.3333333333333], [71.0, 527.0], [68.0, 559.0], [74.0, 499.0], [73.0, 1581.0], [72.0, 1453.0], [79.0, 653.0], [78.0, 1029.0], [83.0, 1132.5], [87.0, 968.0], [86.0, 2365.0], [84.0, 1638.75], [90.0, 519.0], [88.0, 2716.0], [94.0, 2495.0], [93.0, 763.0], [92.0, 1288.25], [99.0, 821.0], [98.0, 886.0], [97.0, 721.0], [96.0, 1240.0], [100.0, 586.0], [9.0, 625.0], [10.0, 722.0], [12.0, 1443.5], [19.0, 712.0], [20.0, 1311.5], [21.0, 606.5], [23.0, 731.0], [24.0, 683.6666666666666], [30.0, 2072.0]], "isOverall": false, "label": "/customer/order-179-2", "isController": false}, {"data": [[53.96999999999997, 1143.3900000000003]], "isOverall": false, "label": "/customer/order-179-2-Aggregated", "isController": false}, {"data": [[2.0, 86.0], [34.0, 543.3333333333333], [36.0, 101.66666666666667], [40.0, 1107.3333333333333], [42.0, 97.0], [47.0, 1429.0], [46.0, 107.0], [3.0, 90.0], [51.0, 88.0], [53.0, 189.57142857142858], [54.0, 88.0], [56.0, 191.0], [59.0, 538.0], [61.0, 103.0], [62.0, 93.33333333333333], [67.0, 87.0], [66.0, 98.0], [65.0, 563.6666666666667], [71.0, 91.0], [68.0, 227.0], [74.0, 87.0], [73.0, 104.0], [72.0, 91.0], [79.0, 658.0], [78.0, 131.33333333333334], [83.0, 370.75], [87.0, 86.0], [86.0, 95.0], [84.0, 96.75], [90.0, 952.0], [88.0, 97.5], [94.0, 96.0], [93.0, 120.0], [92.0, 267.5], [99.0, 95.0], [98.0, 100.0], [97.0, 114.0], [96.0, 618.0], [100.0, 866.0], [9.0, 94.0], [10.0, 94.8], [12.0, 100.0], [19.0, 99.0], [20.0, 94.75], [21.0, 91.5], [23.0, 244.0], [24.0, 109.66666666666667], [30.0, 88.0]], "isOverall": false, "label": "/customer/order-179-1", "isController": false}, {"data": [[53.96999999999997, 252.17000000000002]], "isOverall": false, "label": "/customer/order-179-1-Aggregated", "isController": false}, {"data": [[100.0, 92.62999999999998]], "isOverall": false, "label": "/css/basket-page.css-61", "isController": false}, {"data": [[100.0, 92.62999999999998]], "isOverall": false, "label": "/css/basket-page.css-61-Aggregated", "isController": false}, {"data": [[100.0, 93.19000000000004]], "isOverall": false, "label": "/css/products-in-shops-modal.css-82", "isController": false}, {"data": [[100.0, 93.19000000000004]], "isOverall": false, "label": "/css/products-in-shops-modal.css-82-Aggregated", "isController": false}, {"data": [[100.0, 2571.9599999999996]], "isOverall": false, "label": "/catalog/ptitsy/korma/popugai_srednie/rio_korm_dlya_srednikh_popugaev-92", "isController": false}, {"data": [[100.0, 2571.9599999999996]], "isOverall": false, "label": "/catalog/ptitsy/korma/popugai_srednie/rio_korm_dlya_srednikh_popugaev-92-Aggregated", "isController": false}, {"data": [[100.0, 94.56999999999996]], "isOverall": false, "label": "/images/status-available.svg-87", "isController": false}, {"data": [[100.0, 94.56999999999996]], "isOverall": false, "label": "/images/status-available.svg-87-Aggregated", "isController": false}, {"data": [[100.0, 2050.3899999999994]], "isOverall": false, "label": "/catalog/sobaki/korma_sukhie/wonderfur/wonderfur_adult_all_breeds_yagnenok_ris_dlya_sobak-84", "isController": false}, {"data": [[100.0, 2050.3899999999994]], "isOverall": false, "label": "/catalog/sobaki/korma_sukhie/wonderfur/wonderfur_adult_all_breeds_yagnenok_ris_dlya_sobak-84-Aggregated", "isController": false}, {"data": [[100.0, 93.36999999999999]], "isOverall": false, "label": "/js/ua-parser.2.0.0-alpha.2.min.js-30", "isController": false}, {"data": [[100.0, 93.36999999999999]], "isOverall": false, "label": "/js/ua-parser.2.0.0-alpha.2.min.js-30-Aggregated", "isController": false}, {"data": [[46.0, 85.0], [59.0, 85.0], [65.0, 85.0], [71.0, 87.0], [72.0, 90.0], [87.0, 83.0], [91.0, 87.66666666666667], [88.0, 88.0], [95.0, 89.66666666666667], [94.0, 86.74999999999999], [93.0, 85.0], [92.0, 83.5], [99.0, 86.53333333333333], [98.0, 85.0], [97.0, 93.6], [96.0, 89.0], [100.0, 88.30303030303033]], "isOverall": false, "label": "/js/forms.min.js-149", "isController": false}, {"data": [[95.68000000000002, 87.63]], "isOverall": false, "label": "/js/forms.min.js-149-Aggregated", "isController": false}, {"data": [[41.0, 95.0], [43.0, 87.0], [42.0, 86.66666666666667], [51.0, 86.0], [53.0, 85.66666666666667], [59.0, 84.25], [67.0, 84.0], [66.0, 87.0], [65.0, 84.66666666666667], [64.0, 117.0], [71.0, 84.75], [75.0, 86.66666666666667], [74.0, 91.0], [72.0, 103.0], [79.0, 87.25], [78.0, 100.0], [83.0, 87.0], [81.0, 84.0], [87.0, 91.0], [84.0, 84.85714285714285], [91.0, 83.66666666666667], [88.0, 86.0], [94.0, 89.3], [93.0, 86.71428571428572], [92.0, 86.6], [99.0, 87.2], [98.0, 91.0], [97.0, 93.8], [96.0, 93.66666666666667], [100.0, 86.4], [10.0, 86.0], [14.0, 86.0], [17.0, 87.0], [19.0, 91.0], [20.0, 88.0], [23.0, 88.5]], "isOverall": false, "label": "/css/pay-status.css-171", "isController": false}, {"data": [[75.48000000000002, 87.87999999999997]], "isOverall": false, "label": "/css/pay-status.css-171-Aggregated", "isController": false}, {"data": [[100.0, 90.71999999999996]], "isOverall": false, "label": "/js/yii.min.js-28", "isController": false}, {"data": [[100.0, 90.71999999999996]], "isOverall": false, "label": "/js/yii.min.js-28-Aggregated", "isController": false}, {"data": [[100.0, 97.28999999999999]], "isOverall": false, "label": "/js/jquery.min.js-7", "isController": false}, {"data": [[100.0, 97.28999999999999]], "isOverall": false, "label": "/js/jquery.min.js-7-Aggregated", "isController": false}, {"data": [[100.0, 172.54999999999995]], "isOverall": false, "label": "/site/login-38-0", "isController": false}, {"data": [[100.0, 172.54999999999995]], "isOverall": false, "label": "/site/login-38-0-Aggregated", "isController": false}, {"data": [[100.0, 991.0399999999997]], "isOverall": false, "label": "/site/login-38-1", "isController": false}, {"data": [[100.0, 991.0399999999997]], "isOverall": false, "label": "/site/login-38-1-Aggregated", "isController": false}, {"data": [[94.0, 140.0], [99.0, 472.4], [97.0, 801.5], [100.0, 779.5326086956519]], "isOverall": false, "label": "/basket/add-to-basket-115", "isController": false}, {"data": [[99.83000000000001, 758.2199999999997]], "isOverall": false, "label": "/basket/add-to-basket-115-Aggregated", "isController": false}, {"data": [[100.0, 91.71999999999996]], "isOverall": false, "label": "/js/jquery.pjax.min.js-63", "isController": false}, {"data": [[100.0, 91.71999999999996]], "isOverall": false, "label": "/js/jquery.pjax.min.js-63-Aggregated", "isController": false}, {"data": [[100.0, 96.18000000000004]], "isOverall": false, "label": "/css/product-card.css-81", "isController": false}, {"data": [[100.0, 96.18000000000004]], "isOverall": false, "label": "/css/product-card.css-81-Aggregated", "isController": false}, {"data": [[100.0, 92.90999999999998]], "isOverall": false, "label": "/images/counter-plus.svg-88", "isController": false}, {"data": [[100.0, 92.90999999999998]], "isOverall": false, "label": "/images/counter-plus.svg-88-Aggregated", "isController": false}, {"data": [[45.0, 88.0], [47.0, 87.0], [49.0, 100.0], [53.0, 85.0], [59.0, 85.0], [61.0, 87.0], [67.0, 101.5], [71.0, 89.0], [70.0, 87.0], [68.0, 88.0], [75.0, 91.0], [74.0, 85.33333333333333], [80.0, 87.0], [87.0, 95.0], [86.0, 87.0], [85.0, 89.0], [84.0, 84.5], [91.0, 91.0], [90.0, 84.0], [88.0, 89.5], [95.0, 90.5], [94.0, 88.25], [93.0, 89.0], [92.0, 91.66666666666667], [99.0, 89.05882352941175], [98.0, 90.0], [97.0, 95.55555555555556], [96.0, 86.37499999999999], [100.0, 87.55555555555556], [17.0, 91.5], [30.0, 101.0]], "isOverall": false, "label": "/css/products-in-shops-modal.css-165", "isController": false}, {"data": [[87.79, 89.48]], "isOverall": false, "label": "/css/products-in-shops-modal.css-165-Aggregated", "isController": false}, {"data": [[100.0, 90.68]], "isOverall": false, "label": "/js/search.min.js-9", "isController": false}, {"data": [[100.0, 90.68]], "isOverall": false, "label": "/js/search.min.js-9-Aggregated", "isController": false}, {"data": [[100.0, 91.75000000000001]], "isOverall": false, "label": "/images/logo.svg-17", "isController": false}, {"data": [[100.0, 91.75000000000001]], "isOverall": false, "label": "/images/logo.svg-17-Aggregated", "isController": false}, {"data": [[72.0, 97.0], [79.0, 85.0], [95.0, 85.66666666666667], [94.0, 86.0], [93.0, 89.0], [92.0, 93.0], [99.0, 85.44444444444446], [98.0, 86.75], [97.0, 92.28571428571428], [100.0, 88.57407407407408], [59.0, 85.0]], "isOverall": false, "label": "/js/forms.min.js-140", "isController": false}, {"data": [[97.72999999999996, 88.12999999999998]], "isOverall": false, "label": "/js/forms.min.js-140-Aggregated", "isController": false}, {"data": [[43.0, 93.0], [59.0, 87.0], [64.0, 85.0], [71.0, 103.0], [69.0, 86.0], [87.0, 86.0], [86.0, 84.0], [91.0, 84.33333333333333], [89.0, 85.0], [88.0, 89.0], [95.0, 85.5], [94.0, 88.85714285714285], [93.0, 85.33333333333333], [92.0, 85.0], [99.0, 86.64516129032259], [98.0, 90.0], [97.0, 97.2], [96.0, 87.66666666666667], [100.0, 88.34375000000001]], "isOverall": false, "label": "/images/deco01.png-150", "isController": false}, {"data": [[95.51999999999998, 88.04000000000005]], "isOverall": false, "label": "/images/deco01.png-150-Aggregated", "isController": false}, {"data": [[100.0, 90.49000000000001]], "isOverall": false, "label": "/js/indexPage.min.js-45", "isController": false}, {"data": [[100.0, 90.49000000000001]], "isOverall": false, "label": "/js/indexPage.min.js-45-Aggregated", "isController": false}, {"data": [[33.0, 84.5], [46.0, 102.0], [62.0, 86.0], [66.0, 84.0], [64.0, 96.5], [71.0, 87.0], [70.0, 88.0], [83.0, 87.0], [82.0, 86.0], [80.0, 86.0], [87.0, 85.0], [85.0, 84.33333333333333], [84.0, 85.0], [91.0, 83.0], [88.0, 85.0], [95.0, 89.2], [94.0, 88.0], [93.0, 85.0], [92.0, 87.0], [99.0, 87.29411764705883], [98.0, 87.0], [97.0, 91.3], [96.0, 89.0], [100.0, 88.21052631578948]], "isOverall": false, "label": "/css/catalog-item.css-154", "isController": false}, {"data": [[92.10999999999997, 87.95000000000003]], "isOverall": false, "label": "/css/catalog-item.css-154-Aggregated", "isController": false}, {"data": [[100.0, 90.94999999999999]], "isOverall": false, "label": "/js/basket.min.js-99", "isController": false}, {"data": [[100.0, 90.94999999999999]], "isOverall": false, "label": "/js/basket.min.js-99-Aggregated", "isController": false}, {"data": [[94.0, 88.0], [99.0, 87.33333333333333], [97.0, 88.0], [100.0, 89.64210526315794]], "isOverall": false, "label": "/images/delivery-home.png-113", "isController": false}, {"data": [[99.88, 89.54000000000006]], "isOverall": false, "label": "/images/delivery-home.png-113-Aggregated", "isController": false}, {"data": [[100.0, 856.38]], "isOverall": false, "label": "/catalog/autocomplete-91", "isController": false}, {"data": [[100.0, 856.38]], "isOverall": false, "label": "/catalog/autocomplete-91-Aggregated", "isController": false}, {"data": [[75.0, 986.0], [91.0, 428.0], [88.0, 714.0], [95.0, 1268.0], [99.0, 1027.4166666666665], [98.0, 1237.75], [97.0, 1255.0], [96.0, 1124.75], [100.0, 1490.2394366197182]], "isOverall": false, "label": "/order-123", "isController": false}, {"data": [[98.96000000000004, 1372.7]], "isOverall": false, "label": "/order-123-Aggregated", "isController": false}, {"data": [[100.0, 93.33]], "isOverall": false, "label": "/images/app-modal-tree.png-18", "isController": false}, {"data": [[100.0, 93.33]], "isOverall": false, "label": "/images/app-modal-tree.png-18-Aggregated", "isController": false}, {"data": [[100.0, 97.67000000000003]], "isOverall": false, "label": "/fonts/Graphik-Bold-Web.woff2-21", "isController": false}, {"data": [[100.0, 97.67000000000003]], "isOverall": false, "label": "/fonts/Graphik-Bold-Web.woff2-21-Aggregated", "isController": false}, {"data": [[74.0, 94.0], [80.0, 87.0], [95.0, 98.5], [94.0, 88.8], [93.0, 86.25], [92.0, 89.5], [99.0, 87.73333333333332], [98.0, 96.8], [97.0, 97.33333333333333], [96.0, 85.0], [100.0, 89.89473684210523], [59.0, 86.0]], "isOverall": false, "label": "/assets/b165c12b/yii.validation.js-139", "isController": false}, {"data": [[97.82000000000002, 90.24999999999997]], "isOverall": false, "label": "/assets/b165c12b/yii.validation.js-139-Aggregated", "isController": false}, {"data": [[64.0, 87.0], [80.0, 85.0], [84.0, 83.0], [95.0, 84.0], [94.0, 92.6], [93.0, 99.0], [99.0, 85.50000000000001], [98.0, 87.83333333333333], [97.0, 86.0], [96.0, 96.8], [100.0, 88.00000000000001]], "isOverall": false, "label": "/js/yii.validation.min.js-135", "isController": false}, {"data": [[98.3, 88.38000000000001]], "isOverall": false, "label": "/js/yii.validation.min.js-135-Aggregated", "isController": false}, {"data": [[64.0, 91.0], [79.0, 92.0], [84.0, 97.0], [95.0, 93.5], [94.0, 86.33333333333334], [93.0, 93.0], [99.0, 85.71428571428572], [98.0, 96.0], [97.0, 90.66666666666667], [96.0, 91.25], [100.0, 88.0483870967742]], "isOverall": false, "label": "/js/jquery.pjax.min.js-134", "isController": false}, {"data": [[98.19999999999996, 88.51000000000002]], "isOverall": false, "label": "/js/jquery.pjax.min.js-134-Aggregated", "isController": false}, {"data": [[39.0, 85.0], [53.0, 87.5], [56.0, 115.0], [61.0, 84.0], [65.0, 84.0], [64.0, 99.0], [71.0, 86.0], [75.0, 87.0], [74.0, 85.0], [79.0, 88.5], [78.0, 88.0], [83.0, 86.0], [80.0, 86.0], [87.0, 84.0], [86.0, 85.0], [84.0, 84.0], [91.0, 83.66666666666667], [89.0, 95.0], [88.0, 91.75], [95.0, 84.5], [94.0, 88.19999999999999], [93.0, 84.33333333333333], [92.0, 92.0], [99.0, 87.46153846153847], [98.0, 91.14285714285714], [97.0, 93.75], [96.0, 87.28571428571428], [100.0, 87.92857142857144], [21.0, 87.0], [23.0, 85.0]], "isOverall": false, "label": "/css/catalog-page.css-160", "isController": false}, {"data": [[89.71999999999997, 88.75999999999996]], "isOverall": false, "label": "/css/catalog-page.css-160-Aggregated", "isController": false}, {"data": [[43.0, 90.5], [46.0, 102.0], [53.0, 94.0], [59.0, 95.0], [67.0, 84.5], [66.0, 86.5], [71.0, 85.33333333333333], [68.0, 88.0], [75.0, 84.0], [72.0, 86.0], [79.0, 90.0], [83.0, 85.0], [87.0, 84.5], [86.0, 85.0], [85.0, 84.66666666666667], [84.0, 84.0], [91.0, 93.0], [90.0, 92.0], [89.0, 98.0], [88.0, 84.0], [95.0, 87.0], [94.0, 88.625], [93.0, 88.85714285714286], [92.0, 87.2], [99.0, 89.18749999999999], [98.0, 92.0], [97.0, 97.44444444444444], [96.0, 88.14285714285714], [100.0, 89.8888888888889], [17.0, 86.0], [29.0, 87.0]], "isOverall": false, "label": "/css/basket-page.css-166", "isController": false}, {"data": [[87.31000000000002, 89.29000000000002]], "isOverall": false, "label": "/css/basket-page.css-166-Aggregated", "isController": false}, {"data": [[33.0, 86.0], [34.0, 87.0], [36.0, 85.0], [41.0, 85.0], [40.0, 85.0], [43.0, 88.0], [51.0, 86.0], [56.0, 107.0], [59.0, 92.75], [62.0, 84.0], [66.0, 91.0], [64.0, 94.5], [71.0, 84.66666666666666], [68.0, 86.33333333333333], [75.0, 89.66666666666667], [74.0, 92.0], [79.0, 90.5], [78.0, 92.5], [77.0, 85.0], [83.0, 91.0], [87.0, 84.0], [86.0, 85.0], [84.0, 87.0], [91.0, 85.0], [89.0, 86.0], [88.0, 89.0], [95.0, 85.33333333333333], [94.0, 100.0], [93.0, 88.66666666666667], [92.0, 86.44444444444444], [99.0, 86.57142857142857], [98.0, 98.5], [97.0, 85.0], [96.0, 92.0], [6.0, 86.0], [100.0, 88.0], [10.0, 87.0], [12.0, 87.0], [17.0, 90.0]], "isOverall": false, "label": "/js/basket.min.js-176", "isController": false}, {"data": [[70.98, 88.46]], "isOverall": false, "label": "/js/basket.min.js-176-Aggregated", "isController": false}, {"data": [[100.0, 4036.2]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[100.0, 4036.2]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}, {"data": [[100.0, 92.35999999999997]], "isOverall": false, "label": "/css/plugins/slick.css-71", "isController": false}, {"data": [[100.0, 92.35999999999997]], "isOverall": false, "label": "/css/plugins/slick.css-71-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 98303.11666666667, "minX": 1.70231298E12, "maxY": 2508513.8666666667, "series": [{"data": [[1.70231298E12, 2508513.8666666667], [1.70231304E12, 1013335.1166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.70231298E12, 119355.45], [1.70231304E12, 98303.11666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70231304E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 84.0, "minX": 1.70231298E12, "maxY": 4036.2, "series": [{"data": [[1.70231298E12, 90.97999999999999]], "isOverall": false, "label": "/js/basket.min.js-46", "isController": false}, {"data": [[1.70231298E12, 91.10975609756096], [1.70231304E12, 87.77777777777777]], "isOverall": false, "label": "/js/search.min.js-98", "isController": false}, {"data": [[1.70231304E12, 90.73]], "isOverall": false, "label": "/js/orderModel.min.js-177", "isController": false}, {"data": [[1.70231298E12, 90.92000000000002]], "isOverall": false, "label": "/css/loader.css-14", "isController": false}, {"data": [[1.70231298E12, 89.125], [1.70231304E12, 88.64130434782612]], "isOverall": false, "label": "/css/checkout-modals.css-127", "isController": false}, {"data": [[1.70231298E12, 93.5], [1.70231304E12, 87.91666666666667]], "isOverall": false, "label": "/images/btn-location.svg-138", "isController": false}, {"data": [[1.70231298E12, 91.39]], "isOverall": false, "label": "/css/filters.css-57", "isController": false}, {"data": [[1.70231304E12, 87.92]], "isOverall": false, "label": "/js/search.min.js-175", "isController": false}, {"data": [[1.70231304E12, 88.84]], "isOverall": false, "label": "/css/index-page.css-155", "isController": false}, {"data": [[1.70231298E12, 96.61000000000006]], "isOverall": false, "label": "/css/basket-page.css-83", "isController": false}, {"data": [[1.70231298E12, 1998.12]], "isOverall": false, "label": "/-1", "isController": false}, {"data": [[1.70231298E12, 92.00000000000003]], "isOverall": false, "label": "/css/paging.css-58", "isController": false}, {"data": [[1.70231298E12, 95.5151515151515], [1.70231304E12, 86.0]], "isOverall": false, "label": "/js/catalogItem.min.js-85", "isController": false}, {"data": [[1.70231298E12, 97.27999999999994]], "isOverall": false, "label": "/fonts/Graphik-Regular-Web.woff2-23", "isController": false}, {"data": [[1.70231298E12, 92.46153846153847], [1.70231304E12, 88.86486486486488]], "isOverall": false, "label": "/css/checkout-page.css-121", "isController": false}, {"data": [[1.70231298E12, 92.89999999999999]], "isOverall": false, "label": "/css/product-card.css-59", "isController": false}, {"data": [[1.70231298E12, 92.66666666666667], [1.70231304E12, 90.38461538461537]], "isOverall": false, "label": "/css/checkout-page.css-126", "isController": false}, {"data": [[1.70231298E12, 92.20000000000005]], "isOverall": false, "label": "/images/emo-chortle.svg-50", "isController": false}, {"data": [[1.70231298E12, 91.18518518518518], [1.70231304E12, 87.91780821917808]], "isOverall": false, "label": "/images/gen-warning.svg-118", "isController": false}, {"data": [[1.70231298E12, 91.2916666666667], [1.70231304E12, 88.10526315789473]], "isOverall": false, "label": "/css/checkout-modals.css-120", "isController": false}, {"data": [[1.70231298E12, 91.69]], "isOverall": false, "label": "/images/app-google-play-logo.png-11", "isController": false}, {"data": [[1.70231298E12, 91.10000000000004]], "isOverall": false, "label": "/js/basket.min.js-34", "isController": false}, {"data": [[1.70231298E12, 90.76470588235296], [1.70231304E12, 90.06122448979596]], "isOverall": false, "label": "/images/jcb-96.png-112", "isController": false}, {"data": [[1.70231298E12, 93.08999999999999]], "isOverall": false, "label": "/js/slick.1.8.0.min.js-32", "isController": false}, {"data": [[1.70231298E12, 91.58]], "isOverall": false, "label": "/js/yii.activeForm.min.js-29", "isController": false}, {"data": [[1.70231298E12, 90.32075471698114], [1.70231304E12, 88.19148936170214]], "isOverall": false, "label": "/images/mir-96.png-110", "isController": false}, {"data": [[1.70231298E12, 89.67999999999999]], "isOverall": false, "label": "/css/catalog-item.css-42", "isController": false}, {"data": [[1.70231298E12, 91.40000000000002]], "isOverall": false, "label": "/images/app-icon.png-52", "isController": false}, {"data": [[1.70231298E12, 91.61999999999999]], "isOverall": false, "label": "/css/category.css-56", "isController": false}, {"data": [[1.70231298E12, 93.65853658536587], [1.70231304E12, 89.16666666666667]], "isOverall": false, "label": "/css/products-in-shops-modal.css-96", "isController": false}, {"data": [[1.70231304E12, 92.24000000000004]], "isOverall": false, "label": "/css/common.css-168", "isController": false}, {"data": [[1.70231298E12, 100.79999999999998]], "isOverall": false, "label": "/css/common.css-69", "isController": false}, {"data": [[1.70231298E12, 1321.7424242424245], [1.70231304E12, 2155.705882352941]], "isOverall": false, "label": "/shop/map/product/9791-104", "isController": false}, {"data": [[1.70231298E12, 91.45098039215686], [1.70231304E12, 87.5102040816327]], "isOverall": false, "label": "/js/forms.min.js-114", "isController": false}, {"data": [[1.70231298E12, 94.46999999999998]], "isOverall": false, "label": "/css/common.css-2", "isController": false}, {"data": [[1.70231298E12, 1482.2299999999998]], "isOverall": false, "label": "/-68", "isController": false}, {"data": [[1.70231298E12, 92.73493975903612], [1.70231304E12, 91.47058823529412]], "isOverall": false, "label": "/css/plugins/slick.css-94", "isController": false}, {"data": [[1.70231298E12, 102.0], [1.70231304E12, 87.85714285714283]], "isOverall": false, "label": "/css/order-complete.css-147", "isController": false}, {"data": [[1.70231298E12, 90.32999999999998]], "isOverall": false, "label": "/css/catalog-page.css-55", "isController": false}, {"data": [[1.70231298E12, 90.82999999999998]], "isOverall": false, "label": "/images/loc-point-heart.svg-48", "isController": false}, {"data": [[1.70231298E12, 889.4905660377358], [1.70231304E12, 1145.9361702127658]], "isOverall": false, "label": "/dostavka-107", "isController": false}, {"data": [[1.70231298E12, 94.75], [1.70231304E12, 89.19791666666664]], "isOverall": false, "label": "/images/arrow_menu.svg-137", "isController": false}, {"data": [[1.70231298E12, 91.35000000000002]], "isOverall": false, "label": "/css/catalog-item.css-5", "isController": false}, {"data": [[1.70231304E12, 1254.34]], "isOverall": false, "label": "/-151", "isController": false}, {"data": [[1.70231304E12, 88.28999999999998]], "isOverall": false, "label": "/js/search.min.js-156", "isController": false}, {"data": [[1.70231298E12, 93.29000000000003]], "isOverall": false, "label": "/js/indexPage.min.js-74", "isController": false}, {"data": [[1.70231304E12, 88.44999999999997]], "isOverall": false, "label": "/css/delivery-status.css-169", "isController": false}, {"data": [[1.70231304E12, 87.62999999999998]], "isOverall": false, "label": "/css/order-table.css-172", "isController": false}, {"data": [[1.70231298E12, 91.41]], "isOverall": false, "label": "/js/jquery.matchHeight.0.7.2.min.js-26", "isController": false}, {"data": [[1.70231298E12, 90.06000000000002]], "isOverall": false, "label": "/images/slider-arrow.svg-36", "isController": false}, {"data": [[1.70231298E12, 90.63076923076922], [1.70231304E12, 87.74285714285713]], "isOverall": false, "label": "/js/store.min.js-105", "isController": false}, {"data": [[1.70231298E12, 90.46999999999997]], "isOverall": false, "label": "/images/arrow.svg-54", "isController": false}, {"data": [[1.70231298E12, 90.41176470588236], [1.70231304E12, 88.14285714285715]], "isOverall": false, "label": "/images/mastercard-96.png-111", "isController": false}, {"data": [[1.70231298E12, 127.53000000000002]], "isOverall": false, "label": "/city/get-by-ip-35", "isController": false}, {"data": [[1.70231304E12, 1781.4399999999996]], "isOverall": false, "label": "/customer-167", "isController": false}, {"data": [[1.70231304E12, 278.43999999999977]], "isOverall": false, "label": "/customer-167-0", "isController": false}, {"data": [[1.70231304E12, 279.74]], "isOverall": false, "label": "/customer-167-1", "isController": false}, {"data": [[1.70231304E12, 87.66999999999997]], "isOverall": false, "label": "/css/cabinet.css-173", "isController": false}, {"data": [[1.70231298E12, 91.1132075471698], [1.70231304E12, 88.42553191489363]], "isOverall": false, "label": "/css/static-page.css-108", "isController": false}, {"data": [[1.70231304E12, 1223.13]], "isOverall": false, "label": "/customer-167-2", "isController": false}, {"data": [[1.70231298E12, 89.89]], "isOverall": false, "label": "/css/plugins/slick.css-41", "isController": false}, {"data": [[1.70231298E12, 91.56962025316456], [1.70231304E12, 89.04761904761907]], "isOverall": false, "label": "/images/present-bg.svg-101", "isController": false}, {"data": [[1.70231298E12, 91.29230769230769], [1.70231304E12, 87.77142857142857]], "isOverall": false, "label": "/images/modal-close.svg-106", "isController": false}, {"data": [[1.70231304E12, 89.13999999999997]], "isOverall": false, "label": "/css/filters.css-162", "isController": false}, {"data": [[1.70231304E12, 88.04999999999997]], "isOverall": false, "label": "/js/orderModel.min.js-183", "isController": false}, {"data": [[1.70231298E12, 89.03846153846156], [1.70231304E12, 87.52702702702705]], "isOverall": false, "label": "/images/close-modal.svg-119", "isController": false}, {"data": [[1.70231298E12, 90.19999999999999]], "isOverall": false, "label": "/images/basket-icon-green.svg-25", "isController": false}, {"data": [[1.70231298E12, 90.22222222222223], [1.70231304E12, 88.85714285714289]], "isOverall": false, "label": "/css/products-in-shops-modal.css-125", "isController": false}, {"data": [[1.70231298E12, 90.30999999999999]], "isOverall": false, "label": "/images/app-apple-logo.png-10", "isController": false}, {"data": [[1.70231298E12, 95.25]], "isOverall": false, "label": "/js/jquery.nicescroll.3.7.6.min.js-8", "isController": false}, {"data": [[1.70231298E12, 90.04999999999998]], "isOverall": false, "label": "/images/close-modal-w.svg-65", "isController": false}, {"data": [[1.70231304E12, 87.77000000000002]], "isOverall": false, "label": "/css/cabinet.css-181", "isController": false}, {"data": [[1.70231298E12, 90.11999999999996]], "isOverall": false, "label": "/images/sale_arrow_small.svg-37", "isController": false}, {"data": [[1.70231298E12, 91.39000000000001]], "isOverall": false, "label": "/images/app-huawei-logo.png-15", "isController": false}, {"data": [[1.70231298E12, 1163.6900000000003]], "isOverall": false, "label": "/site/login-38", "isController": false}, {"data": [[1.70231304E12, 1729.55]], "isOverall": false, "label": "/customer/order-179", "isController": false}, {"data": [[1.70231298E12, 93.05000000000001]], "isOverall": false, "label": "/css/common.css-40", "isController": false}, {"data": [[1.70231298E12, 91.19230769230771], [1.70231304E12, 86.89583333333333]], "isOverall": false, "label": "/images/visa-96.png-109", "isController": false}, {"data": [[1.70231298E12, 91.83000000000003]], "isOverall": false, "label": "/css/plugins/slick.css-3", "isController": false}, {"data": [[1.70231298E12, 94.28000000000003]], "isOverall": false, "label": "/css/category.css-78", "isController": false}, {"data": [[1.70231298E12, 90.42999999999999]], "isOverall": false, "label": "/images/basket-icon-gray.svg-24", "isController": false}, {"data": [[1.70231298E12, 275.85185185185196], [1.70231304E12, 265.94736842105266]], "isOverall": false, "label": "/js/forms.min.js-100", "isController": false}, {"data": [[1.70231298E12, 86.0], [1.70231304E12, 91.44444444444449]], "isOverall": false, "label": "/css/common.css-146", "isController": false}, {"data": [[1.70231304E12, 88.21000000000005]], "isOverall": false, "label": "/js/forms.min.js-178", "isController": false}, {"data": [[1.70231298E12, 94.76000000000002]], "isOverall": false, "label": "/fonts/Graphik-Medium-Web.woff2-22", "isController": false}, {"data": [[1.70231304E12, 92.27]], "isOverall": false, "label": "/css/common.css-153", "isController": false}, {"data": [[1.70231298E12, 92.67073170731709], [1.70231304E12, 89.55555555555556]], "isOverall": false, "label": "/js/catalogItem.min.js-97", "isController": false}, {"data": [[1.70231298E12, 102.0], [1.70231304E12, 405.3775510204082]], "isOverall": false, "label": "/order/index-144", "isController": false}, {"data": [[1.70231298E12, 90.01000000000002]], "isOverall": false, "label": "/css/index-page.css-43", "isController": false}, {"data": [[1.70231298E12, 196.27]], "isOverall": false, "label": "/images/app-modal-phone.png-16", "isController": false}, {"data": [[1.70231298E12, 92.57000000000005]], "isOverall": false, "label": "/css/catalog-page.css-77", "isController": false}, {"data": [[1.70231304E12, 88.67999999999999]], "isOverall": false, "label": "/css/paging.css-163", "isController": false}, {"data": [[1.70231298E12, 94.78048780487806], [1.70231304E12, 90.66666666666666]], "isOverall": false, "label": "/css/product-card.css-95", "isController": false}, {"data": [[1.70231298E12, 92.48999999999998]], "isOverall": false, "label": "/css/jquery.fancybox.min.css-13", "isController": false}, {"data": [[1.70231298E12, 90.97999999999999]], "isOverall": false, "label": "/js/js.cookie.3.0.1.min.js-27", "isController": false}, {"data": [[1.70231298E12, 91.27000000000001]], "isOverall": false, "label": "/images/veh-lorry-2.svg-49", "isController": false}, {"data": [[1.70231298E12, 90.33333333333333], [1.70231304E12, 89.37234042553192]], "isOverall": false, "label": "/js/search.min.js-131", "isController": false}, {"data": [[1.70231298E12, 91.75999999999996]], "isOverall": false, "label": "/css/products-in-shops-modal.css-60", "isController": false}, {"data": [[1.70231298E12, 639.5], [1.70231304E12, 315.8749999999997]], "isOverall": false, "label": "/order/update-delivery-type-dependent-info-142", "isController": false}, {"data": [[1.70231298E12, 89.89000000000001]], "isOverall": false, "label": "/js/forms.min.js-51", "isController": false}, {"data": [[1.70231298E12, 91.60000000000001]], "isOverall": false, "label": "/css/catalog-item.css-70", "isController": false}, {"data": [[1.70231298E12, 95.74489795918366], [1.70231304E12, 92.0]], "isOverall": false, "label": "/images/delivery-icon.svg-90", "isController": false}, {"data": [[1.70231304E12, 88.53]], "isOverall": false, "label": "/js/indexPage.min.js-157", "isController": false}, {"data": [[1.70231304E12, 87.60999999999999]], "isOverall": false, "label": "/css/paging.css-170", "isController": false}, {"data": [[1.70231298E12, 92.81]], "isOverall": false, "label": "/css/index-page.css-4", "isController": false}, {"data": [[1.70231298E12, 608.2142857142857], [1.70231304E12, 488.8139534883719]], "isOverall": false, "label": "/order-123-0", "isController": false}, {"data": [[1.70231298E12, 90.00999999999998]], "isOverall": false, "label": "/js/search.min.js-44", "isController": false}, {"data": [[1.70231298E12, 109.10999999999999]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-64", "isController": false}, {"data": [[1.70231298E12, 91.44871794871798], [1.70231304E12, 90.0]], "isOverall": false, "label": "/images/counter-minus.svg-103", "isController": false}, {"data": [[1.70231298E12, 97.0], [1.70231304E12, 88.5612244897959]], "isOverall": false, "label": "/js/search.min.js-148", "isController": false}, {"data": [[1.70231298E12, 95.58]], "isOverall": false, "label": "/js/jquery.fancybox.3.5.6.min.js-53", "isController": false}, {"data": [[1.70231304E12, 87.61999999999998]], "isOverall": false, "label": "/css/order-information.css-182", "isController": false}, {"data": [[1.70231304E12, 88.47999999999999]], "isOverall": false, "label": "/css/plugins/slick.css-152", "isController": false}, {"data": [[1.70231298E12, 92.44444444444444], [1.70231304E12, 88.94505494505493]], "isOverall": false, "label": "/js/orderModel.min.js-128", "isController": false}, {"data": [[1.70231298E12, 94.27999999999999]], "isOverall": false, "label": "/js/basket.min.js-75", "isController": false}, {"data": [[1.70231304E12, 88.93000000000002]], "isOverall": false, "label": "/css/category.css-161", "isController": false}, {"data": [[1.70231298E12, 94.18]], "isOverall": false, "label": "/css/paging.css-80", "isController": false}, {"data": [[1.70231298E12, 674.7777777777778], [1.70231304E12, 886.2527472527471]], "isOverall": false, "label": "/order-123-1", "isController": false}, {"data": [[1.70231298E12, 99.28571428571429], [1.70231304E12, 93.36559139784947]], "isOverall": false, "label": "/css/common.css-124", "isController": false}, {"data": [[1.70231298E12, 93.14999999999993]], "isOverall": false, "label": "/images/search-icon.svg-19", "isController": false}, {"data": [[1.70231298E12, 496.3888888888889], [1.70231304E12, 364.0609756097561]], "isOverall": false, "label": "/basket/recalculate-basket-122", "isController": false}, {"data": [[1.70231298E12, 285.0400000000001]], "isOverall": false, "label": "/site/login-62", "isController": false}, {"data": [[1.70231304E12, 89.32000000000004]], "isOverall": false, "label": "/js/forms.min.js-159", "isController": false}, {"data": [[1.70231298E12, 89.625], [1.70231304E12, 89.2608695652174]], "isOverall": false, "label": "/css/jquery.fias.min.css-129", "isController": false}, {"data": [[1.70231298E12, 90.08999999999999]], "isOverall": false, "label": "/fonts/graphik.css-12", "isController": false}, {"data": [[1.70231298E12, 268.81]], "isOverall": false, "label": "/site/login-67", "isController": false}, {"data": [[1.70231304E12, 88.34999999999997]], "isOverall": false, "label": "/css/basket-table.css-180", "isController": false}, {"data": [[1.70231298E12, 96.46464646464648], [1.70231304E12, 84.0]], "isOverall": false, "label": "/images/counter-minus-dis.svg-86", "isController": false}, {"data": [[1.70231304E12, 89.56]], "isOverall": false, "label": "/js/basket.min.js-158", "isController": false}, {"data": [[1.70231298E12, 90.42999999999999]], "isOverall": false, "label": "/images/basket-icon.svg-20", "isController": false}, {"data": [[1.70231298E12, 98.65]], "isOverall": false, "label": "/images/favicon.ico-66", "isController": false}, {"data": [[1.70231298E12, 88.75], [1.70231304E12, 87.13541666666664]], "isOverall": false, "label": "/css/images/fias-spinner.png-141", "isController": false}, {"data": [[1.70231298E12, 91.60256410256409], [1.70231304E12, 88.59090909090908]], "isOverall": false, "label": "/css/basket-page.css-102", "isController": false}, {"data": [[1.70231298E12, 108.0], [1.70231304E12, 92.78125000000001]], "isOverall": false, "label": "/assets/b165c12b/yii.js-136", "isController": false}, {"data": [[1.70231298E12, 90.27000000000008]], "isOverall": false, "label": "/images/sho-basket-love.svg-47", "isController": false}, {"data": [[1.70231298E12, 93.88775510204083], [1.70231304E12, 87.5]], "isOverall": false, "label": "/images/in-shop-icon.svg-89", "isController": false}, {"data": [[1.70231298E12, 92.14285714285714], [1.70231304E12, 88.22580645161288]], "isOverall": false, "label": "/js/order.min.js-130", "isController": false}, {"data": [[1.70231298E12, 853.7857142857142], [1.70231304E12, 1241.166666666666]], "isOverall": false, "label": "/basket-116", "isController": false}, {"data": [[1.70231298E12, 91.4], [1.70231304E12, 88.28421052631577]], "isOverall": false, "label": "/js/jquery.fias.min.js-133", "isController": false}, {"data": [[1.70231298E12, 94.2], [1.70231304E12, 94.28421052631577]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-132", "isController": false}, {"data": [[1.70231304E12, 88.20000000000003]], "isOverall": false, "label": "/css/order-again.css-174", "isController": false}, {"data": [[1.70231298E12, 93.66000000000001]], "isOverall": false, "label": "/js/twitter.typeahead.0.11.1.min.js-6", "isController": false}, {"data": [[1.70231298E12, 90.40740740740743], [1.70231304E12, 88.13698630136984]], "isOverall": false, "label": "/images/lorry.svg-117", "isController": false}, {"data": [[1.70231298E12, 91.34]], "isOverall": false, "label": "/js/common.min.js-31", "isController": false}, {"data": [[1.70231298E12, 94.52000000000002]], "isOverall": false, "label": "/css/index-page.css-72", "isController": false}, {"data": [[1.70231298E12, 100.01219512195124], [1.70231304E12, 98.99999999999999]], "isOverall": false, "label": "/css/common.css-93", "isController": false}, {"data": [[1.70231298E12, 93.09000000000002]], "isOverall": false, "label": "/css/filters.css-79", "isController": false}, {"data": [[1.70231298E12, 92.47999999999999]], "isOverall": false, "label": "/js/forms.min.js-76", "isController": false}, {"data": [[1.70231298E12, 97.0], [1.70231304E12, 234.6494845360824]], "isOverall": false, "label": "/order/render-delivery-time-dropdown-143", "isController": false}, {"data": [[1.70231304E12, 333.86]], "isOverall": false, "label": "/customer/order-179-0", "isController": false}, {"data": [[1.70231298E12, 89.74999999999999]], "isOverall": false, "label": "/js/indexPage.min.js-33", "isController": false}, {"data": [[1.70231298E12, 92.34]], "isOverall": false, "label": "/js/search.min.js-73", "isController": false}, {"data": [[1.70231304E12, 89.65999999999997]], "isOverall": false, "label": "/css/product-card.css-164", "isController": false}, {"data": [[1.70231304E12, 1143.3900000000003]], "isOverall": false, "label": "/customer/order-179-2", "isController": false}, {"data": [[1.70231304E12, 252.17000000000002]], "isOverall": false, "label": "/customer/order-179-1", "isController": false}, {"data": [[1.70231298E12, 92.62999999999998]], "isOverall": false, "label": "/css/basket-page.css-61", "isController": false}, {"data": [[1.70231298E12, 93.19000000000004]], "isOverall": false, "label": "/css/products-in-shops-modal.css-82", "isController": false}, {"data": [[1.70231298E12, 2404.9880952380954], [1.70231304E12, 3448.5625000000005]], "isOverall": false, "label": "/catalog/ptitsy/korma/popugai_srednie/rio_korm_dlya_srednikh_popugaev-92", "isController": false}, {"data": [[1.70231298E12, 94.74489795918363], [1.70231304E12, 86.0]], "isOverall": false, "label": "/images/status-available.svg-87", "isController": false}, {"data": [[1.70231298E12, 2060.7777777777774], [1.70231304E12, 1022.0]], "isOverall": false, "label": "/catalog/sobaki/korma_sukhie/wonderfur/wonderfur_adult_all_breeds_yagnenok_ris_dlya_sobak-84", "isController": false}, {"data": [[1.70231298E12, 93.36999999999999]], "isOverall": false, "label": "/js/ua-parser.2.0.0-alpha.2.min.js-30", "isController": false}, {"data": [[1.70231298E12, 87.0], [1.70231304E12, 87.63636363636367]], "isOverall": false, "label": "/js/forms.min.js-149", "isController": false}, {"data": [[1.70231304E12, 87.87999999999997]], "isOverall": false, "label": "/css/pay-status.css-171", "isController": false}, {"data": [[1.70231298E12, 90.71999999999996]], "isOverall": false, "label": "/js/yii.min.js-28", "isController": false}, {"data": [[1.70231298E12, 97.28999999999999]], "isOverall": false, "label": "/js/jquery.min.js-7", "isController": false}, {"data": [[1.70231298E12, 172.54999999999995]], "isOverall": false, "label": "/site/login-38-0", "isController": false}, {"data": [[1.70231298E12, 991.0399999999997]], "isOverall": false, "label": "/site/login-38-1", "isController": false}, {"data": [[1.70231298E12, 772.6590909090911], [1.70231304E12, 746.875]], "isOverall": false, "label": "/basket/add-to-basket-115", "isController": false}, {"data": [[1.70231298E12, 91.71999999999996]], "isOverall": false, "label": "/js/jquery.pjax.min.js-63", "isController": false}, {"data": [[1.70231298E12, 95.91919191919196], [1.70231304E12, 122.0]], "isOverall": false, "label": "/css/product-card.css-81", "isController": false}, {"data": [[1.70231298E12, 92.80808080808079], [1.70231304E12, 103.0]], "isOverall": false, "label": "/images/counter-plus.svg-88", "isController": false}, {"data": [[1.70231304E12, 89.48]], "isOverall": false, "label": "/css/products-in-shops-modal.css-165", "isController": false}, {"data": [[1.70231298E12, 90.68]], "isOverall": false, "label": "/js/search.min.js-9", "isController": false}, {"data": [[1.70231298E12, 91.75000000000001]], "isOverall": false, "label": "/images/logo.svg-17", "isController": false}, {"data": [[1.70231298E12, 92.75], [1.70231304E12, 87.9375]], "isOverall": false, "label": "/js/forms.min.js-140", "isController": false}, {"data": [[1.70231298E12, 90.0], [1.70231304E12, 88.020202020202]], "isOverall": false, "label": "/images/deco01.png-150", "isController": false}, {"data": [[1.70231298E12, 90.49000000000001]], "isOverall": false, "label": "/js/indexPage.min.js-45", "isController": false}, {"data": [[1.70231304E12, 87.95000000000003]], "isOverall": false, "label": "/css/catalog-item.css-154", "isController": false}, {"data": [[1.70231298E12, 91.01219512195122], [1.70231304E12, 90.66666666666666]], "isOverall": false, "label": "/js/basket.min.js-99", "isController": false}, {"data": [[1.70231298E12, 91.80392156862746], [1.70231304E12, 87.18367346938774]], "isOverall": false, "label": "/images/delivery-home.png-113", "isController": false}, {"data": [[1.70231298E12, 795.1052631578948], [1.70231304E12, 2020.6]], "isOverall": false, "label": "/catalog/autocomplete-91", "isController": false}, {"data": [[1.70231298E12, 1248.0], [1.70231304E12, 1385.032967032967]], "isOverall": false, "label": "/order-123", "isController": false}, {"data": [[1.70231298E12, 93.33]], "isOverall": false, "label": "/images/app-modal-tree.png-18", "isController": false}, {"data": [[1.70231298E12, 97.67000000000003]], "isOverall": false, "label": "/fonts/Graphik-Bold-Web.woff2-21", "isController": false}, {"data": [[1.70231298E12, 93.25], [1.70231304E12, 90.125]], "isOverall": false, "label": "/assets/b165c12b/yii.validation.js-139", "isController": false}, {"data": [[1.70231298E12, 95.6], [1.70231304E12, 87.99999999999999]], "isOverall": false, "label": "/js/yii.validation.min.js-135", "isController": false}, {"data": [[1.70231298E12, 90.2], [1.70231304E12, 88.42105263157895]], "isOverall": false, "label": "/js/jquery.pjax.min.js-134", "isController": false}, {"data": [[1.70231304E12, 88.75999999999996]], "isOverall": false, "label": "/css/catalog-page.css-160", "isController": false}, {"data": [[1.70231304E12, 89.29000000000002]], "isOverall": false, "label": "/css/basket-page.css-166", "isController": false}, {"data": [[1.70231304E12, 88.46]], "isOverall": false, "label": "/js/basket.min.js-176", "isController": false}, {"data": [[1.70231298E12, 4036.2]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.70231298E12, 92.35999999999997]], "isOverall": false, "label": "/css/plugins/slick.css-71", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70231304E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 84.0, "minX": 1.70231298E12, "maxY": 3538.3700000000003, "series": [{"data": [[1.70231298E12, 90.97]], "isOverall": false, "label": "/js/basket.min.js-46", "isController": false}, {"data": [[1.70231298E12, 91.10975609756096], [1.70231304E12, 87.77777777777777]], "isOverall": false, "label": "/js/search.min.js-98", "isController": false}, {"data": [[1.70231304E12, 90.72]], "isOverall": false, "label": "/js/orderModel.min.js-177", "isController": false}, {"data": [[1.70231298E12, 90.91000000000003]], "isOverall": false, "label": "/css/loader.css-14", "isController": false}, {"data": [[1.70231298E12, 89.125], [1.70231304E12, 88.64130434782612]], "isOverall": false, "label": "/css/checkout-modals.css-127", "isController": false}, {"data": [[1.70231298E12, 93.5], [1.70231304E12, 87.91666666666667]], "isOverall": false, "label": "/images/btn-location.svg-138", "isController": false}, {"data": [[1.70231298E12, 91.33]], "isOverall": false, "label": "/css/filters.css-57", "isController": false}, {"data": [[1.70231304E12, 87.92]], "isOverall": false, "label": "/js/search.min.js-175", "isController": false}, {"data": [[1.70231304E12, 88.74000000000001]], "isOverall": false, "label": "/css/index-page.css-155", "isController": false}, {"data": [[1.70231298E12, 96.52999999999999]], "isOverall": false, "label": "/css/basket-page.css-83", "isController": false}, {"data": [[1.70231298E12, 1971.6000000000001]], "isOverall": false, "label": "/-1", "isController": false}, {"data": [[1.70231298E12, 91.99000000000002]], "isOverall": false, "label": "/css/paging.css-58", "isController": false}, {"data": [[1.70231298E12, 95.5151515151515], [1.70231304E12, 86.0]], "isOverall": false, "label": "/js/catalogItem.min.js-85", "isController": false}, {"data": [[1.70231298E12, 92.26]], "isOverall": false, "label": "/fonts/Graphik-Regular-Web.woff2-23", "isController": false}, {"data": [[1.70231298E12, 92.34615384615384], [1.70231304E12, 88.59459459459454]], "isOverall": false, "label": "/css/checkout-page.css-121", "isController": false}, {"data": [[1.70231298E12, 92.82000000000004]], "isOverall": false, "label": "/css/product-card.css-59", "isController": false}, {"data": [[1.70231298E12, 92.44444444444444], [1.70231304E12, 90.31868131868134]], "isOverall": false, "label": "/css/checkout-page.css-126", "isController": false}, {"data": [[1.70231298E12, 92.19000000000001]], "isOverall": false, "label": "/images/emo-chortle.svg-50", "isController": false}, {"data": [[1.70231298E12, 91.18518518518518], [1.70231304E12, 87.90410958904108]], "isOverall": false, "label": "/images/gen-warning.svg-118", "isController": false}, {"data": [[1.70231298E12, 91.20833333333331], [1.70231304E12, 88.09210526315793]], "isOverall": false, "label": "/css/checkout-modals.css-120", "isController": false}, {"data": [[1.70231298E12, 91.67999999999998]], "isOverall": false, "label": "/images/app-google-play-logo.png-11", "isController": false}, {"data": [[1.70231298E12, 91.08999999999999]], "isOverall": false, "label": "/js/basket.min.js-34", "isController": false}, {"data": [[1.70231298E12, 90.76470588235296], [1.70231304E12, 90.06122448979596]], "isOverall": false, "label": "/images/jcb-96.png-112", "isController": false}, {"data": [[1.70231298E12, 92.75000000000001]], "isOverall": false, "label": "/js/slick.1.8.0.min.js-32", "isController": false}, {"data": [[1.70231298E12, 91.57000000000001]], "isOverall": false, "label": "/js/yii.activeForm.min.js-29", "isController": false}, {"data": [[1.70231298E12, 90.30188679245285], [1.70231304E12, 88.19148936170214]], "isOverall": false, "label": "/images/mir-96.png-110", "isController": false}, {"data": [[1.70231298E12, 89.67999999999999]], "isOverall": false, "label": "/css/catalog-item.css-42", "isController": false}, {"data": [[1.70231298E12, 91.40000000000002]], "isOverall": false, "label": "/images/app-icon.png-52", "isController": false}, {"data": [[1.70231298E12, 91.61000000000001]], "isOverall": false, "label": "/css/category.css-56", "isController": false}, {"data": [[1.70231298E12, 93.63414634146343], [1.70231304E12, 89.16666666666667]], "isOverall": false, "label": "/css/products-in-shops-modal.css-96", "isController": false}, {"data": [[1.70231304E12, 91.69999999999999]], "isOverall": false, "label": "/css/common.css-168", "isController": false}, {"data": [[1.70231298E12, 100.51999999999998]], "isOverall": false, "label": "/css/common.css-69", "isController": false}, {"data": [[1.70231298E12, 1321.424242424242], [1.70231304E12, 2154.999999999999]], "isOverall": false, "label": "/shop/map/product/9791-104", "isController": false}, {"data": [[1.70231298E12, 91.41176470588235], [1.70231304E12, 87.5102040816327]], "isOverall": false, "label": "/js/forms.min.js-114", "isController": false}, {"data": [[1.70231298E12, 94.06000000000002]], "isOverall": false, "label": "/css/common.css-2", "isController": false}, {"data": [[1.70231298E12, 1449.0399999999997]], "isOverall": false, "label": "/-68", "isController": false}, {"data": [[1.70231298E12, 92.73493975903612], [1.70231304E12, 91.47058823529412]], "isOverall": false, "label": "/css/plugins/slick.css-94", "isController": false}, {"data": [[1.70231298E12, 102.0], [1.70231304E12, 87.84693877551018]], "isOverall": false, "label": "/css/order-complete.css-147", "isController": false}, {"data": [[1.70231298E12, 90.32999999999998]], "isOverall": false, "label": "/css/catalog-page.css-55", "isController": false}, {"data": [[1.70231298E12, 90.81]], "isOverall": false, "label": "/images/loc-point-heart.svg-48", "isController": false}, {"data": [[1.70231298E12, 867.5094339622641], [1.70231304E12, 1134.1276595744687]], "isOverall": false, "label": "/dostavka-107", "isController": false}, {"data": [[1.70231298E12, 94.75], [1.70231304E12, 89.18750000000001]], "isOverall": false, "label": "/images/arrow_menu.svg-137", "isController": false}, {"data": [[1.70231298E12, 91.34000000000005]], "isOverall": false, "label": "/css/catalog-item.css-5", "isController": false}, {"data": [[1.70231304E12, 1237.66]], "isOverall": false, "label": "/-151", "isController": false}, {"data": [[1.70231304E12, 88.28]], "isOverall": false, "label": "/js/search.min.js-156", "isController": false}, {"data": [[1.70231298E12, 93.29000000000003]], "isOverall": false, "label": "/js/indexPage.min.js-74", "isController": false}, {"data": [[1.70231304E12, 88.44]], "isOverall": false, "label": "/css/delivery-status.css-169", "isController": false}, {"data": [[1.70231304E12, 87.61999999999998]], "isOverall": false, "label": "/css/order-table.css-172", "isController": false}, {"data": [[1.70231298E12, 91.41]], "isOverall": false, "label": "/js/jquery.matchHeight.0.7.2.min.js-26", "isController": false}, {"data": [[1.70231298E12, 90.06000000000002]], "isOverall": false, "label": "/images/slider-arrow.svg-36", "isController": false}, {"data": [[1.70231298E12, 90.63076923076922], [1.70231304E12, 87.7142857142857]], "isOverall": false, "label": "/js/store.min.js-105", "isController": false}, {"data": [[1.70231298E12, 90.46000000000002]], "isOverall": false, "label": "/images/arrow.svg-54", "isController": false}, {"data": [[1.70231298E12, 90.41176470588236], [1.70231304E12, 88.14285714285715]], "isOverall": false, "label": "/images/mastercard-96.png-111", "isController": false}, {"data": [[1.70231298E12, 127.48000000000005]], "isOverall": false, "label": "/city/get-by-ip-35", "isController": false}, {"data": [[1.70231304E12, 278.43999999999977]], "isOverall": false, "label": "/customer-167", "isController": false}, {"data": [[1.70231304E12, 278.43999999999977]], "isOverall": false, "label": "/customer-167-0", "isController": false}, {"data": [[1.70231304E12, 279.74]], "isOverall": false, "label": "/customer-167-1", "isController": false}, {"data": [[1.70231304E12, 87.66999999999997]], "isOverall": false, "label": "/css/cabinet.css-173", "isController": false}, {"data": [[1.70231298E12, 90.99999999999999], [1.70231304E12, 88.36170212765958]], "isOverall": false, "label": "/css/static-page.css-108", "isController": false}, {"data": [[1.70231304E12, 1198.3399999999997]], "isOverall": false, "label": "/customer-167-2", "isController": false}, {"data": [[1.70231298E12, 89.89]], "isOverall": false, "label": "/css/plugins/slick.css-41", "isController": false}, {"data": [[1.70231298E12, 91.55696202531647], [1.70231304E12, 89.04761904761907]], "isOverall": false, "label": "/images/present-bg.svg-101", "isController": false}, {"data": [[1.70231298E12, 91.29230769230769], [1.70231304E12, 87.71428571428572]], "isOverall": false, "label": "/images/modal-close.svg-106", "isController": false}, {"data": [[1.70231304E12, 89.05999999999996]], "isOverall": false, "label": "/css/filters.css-162", "isController": false}, {"data": [[1.70231304E12, 88.04000000000002]], "isOverall": false, "label": "/js/orderModel.min.js-183", "isController": false}, {"data": [[1.70231298E12, 89.0], [1.70231304E12, 87.52702702702705]], "isOverall": false, "label": "/images/close-modal.svg-119", "isController": false}, {"data": [[1.70231298E12, 90.18999999999997]], "isOverall": false, "label": "/images/basket-icon-green.svg-25", "isController": false}, {"data": [[1.70231298E12, 90.11111111111111], [1.70231304E12, 88.75824175824177]], "isOverall": false, "label": "/css/products-in-shops-modal.css-125", "isController": false}, {"data": [[1.70231298E12, 90.27000000000002]], "isOverall": false, "label": "/images/app-apple-logo.png-10", "isController": false}, {"data": [[1.70231298E12, 94.90000000000003]], "isOverall": false, "label": "/js/jquery.nicescroll.3.7.6.min.js-8", "isController": false}, {"data": [[1.70231298E12, 90.03000000000004]], "isOverall": false, "label": "/images/close-modal-w.svg-65", "isController": false}, {"data": [[1.70231304E12, 87.77000000000002]], "isOverall": false, "label": "/css/cabinet.css-181", "isController": false}, {"data": [[1.70231298E12, 90.08999999999999]], "isOverall": false, "label": "/images/sale_arrow_small.svg-37", "isController": false}, {"data": [[1.70231298E12, 91.37999999999998]], "isOverall": false, "label": "/images/app-huawei-logo.png-15", "isController": false}, {"data": [[1.70231298E12, 172.54999999999995]], "isOverall": false, "label": "/site/login-38", "isController": false}, {"data": [[1.70231304E12, 333.86]], "isOverall": false, "label": "/customer/order-179", "isController": false}, {"data": [[1.70231298E12, 92.74]], "isOverall": false, "label": "/css/common.css-40", "isController": false}, {"data": [[1.70231298E12, 91.17307692307695], [1.70231304E12, 86.89583333333333]], "isOverall": false, "label": "/images/visa-96.png-109", "isController": false}, {"data": [[1.70231298E12, 91.81]], "isOverall": false, "label": "/css/plugins/slick.css-3", "isController": false}, {"data": [[1.70231298E12, 94.28000000000003]], "isOverall": false, "label": "/css/category.css-78", "isController": false}, {"data": [[1.70231298E12, 90.42000000000002]], "isOverall": false, "label": "/images/basket-icon-gray.svg-24", "isController": false}, {"data": [[1.70231298E12, 275.8271604938273], [1.70231304E12, 265.94736842105266]], "isOverall": false, "label": "/js/forms.min.js-100", "isController": false}, {"data": [[1.70231298E12, 86.0], [1.70231304E12, 91.05050505050507]], "isOverall": false, "label": "/css/common.css-146", "isController": false}, {"data": [[1.70231304E12, 88.20000000000003]], "isOverall": false, "label": "/js/forms.min.js-178", "isController": false}, {"data": [[1.70231298E12, 91.83000000000001]], "isOverall": false, "label": "/fonts/Graphik-Medium-Web.woff2-22", "isController": false}, {"data": [[1.70231304E12, 92.03]], "isOverall": false, "label": "/css/common.css-153", "isController": false}, {"data": [[1.70231298E12, 92.67073170731709], [1.70231304E12, 89.55555555555556]], "isOverall": false, "label": "/js/catalogItem.min.js-97", "isController": false}, {"data": [[1.70231298E12, 102.0], [1.70231304E12, 405.35714285714306]], "isOverall": false, "label": "/order/index-144", "isController": false}, {"data": [[1.70231298E12, 89.91000000000001]], "isOverall": false, "label": "/css/index-page.css-43", "isController": false}, {"data": [[1.70231298E12, 93.12000000000002]], "isOverall": false, "label": "/images/app-modal-phone.png-16", "isController": false}, {"data": [[1.70231298E12, 92.56000000000002]], "isOverall": false, "label": "/css/catalog-page.css-77", "isController": false}, {"data": [[1.70231304E12, 88.67999999999999]], "isOverall": false, "label": "/css/paging.css-163", "isController": false}, {"data": [[1.70231298E12, 94.6341463414634], [1.70231304E12, 90.55555555555557]], "isOverall": false, "label": "/css/product-card.css-95", "isController": false}, {"data": [[1.70231298E12, 92.36999999999999]], "isOverall": false, "label": "/css/jquery.fancybox.min.css-13", "isController": false}, {"data": [[1.70231298E12, 90.96]], "isOverall": false, "label": "/js/js.cookie.3.0.1.min.js-27", "isController": false}, {"data": [[1.70231298E12, 91.27000000000001]], "isOverall": false, "label": "/images/veh-lorry-2.svg-49", "isController": false}, {"data": [[1.70231298E12, 90.33333333333333], [1.70231304E12, 89.36170212765957]], "isOverall": false, "label": "/js/search.min.js-131", "isController": false}, {"data": [[1.70231298E12, 91.63]], "isOverall": false, "label": "/css/products-in-shops-modal.css-60", "isController": false}, {"data": [[1.70231298E12, 639.25], [1.70231304E12, 315.8541666666665]], "isOverall": false, "label": "/order/update-delivery-type-dependent-info-142", "isController": false}, {"data": [[1.70231298E12, 89.89000000000001]], "isOverall": false, "label": "/js/forms.min.js-51", "isController": false}, {"data": [[1.70231298E12, 91.60000000000001]], "isOverall": false, "label": "/css/catalog-item.css-70", "isController": false}, {"data": [[1.70231298E12, 95.74489795918366], [1.70231304E12, 92.0]], "isOverall": false, "label": "/images/delivery-icon.svg-90", "isController": false}, {"data": [[1.70231304E12, 88.53]], "isOverall": false, "label": "/js/indexPage.min.js-157", "isController": false}, {"data": [[1.70231304E12, 87.60999999999999]], "isOverall": false, "label": "/css/paging.css-170", "isController": false}, {"data": [[1.70231298E12, 92.73999999999997]], "isOverall": false, "label": "/css/index-page.css-4", "isController": false}, {"data": [[1.70231298E12, 608.2142857142857], [1.70231304E12, 488.8139534883719]], "isOverall": false, "label": "/order-123-0", "isController": false}, {"data": [[1.70231298E12, 90.00999999999998]], "isOverall": false, "label": "/js/search.min.js-44", "isController": false}, {"data": [[1.70231298E12, 97.44000000000001]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-64", "isController": false}, {"data": [[1.70231298E12, 91.41025641025642], [1.70231304E12, 90.0]], "isOverall": false, "label": "/images/counter-minus.svg-103", "isController": false}, {"data": [[1.70231298E12, 97.0], [1.70231304E12, 88.54081632653057]], "isOverall": false, "label": "/js/search.min.js-148", "isController": false}, {"data": [[1.70231298E12, 94.79000000000002]], "isOverall": false, "label": "/js/jquery.fancybox.3.5.6.min.js-53", "isController": false}, {"data": [[1.70231304E12, 87.61999999999998]], "isOverall": false, "label": "/css/order-information.css-182", "isController": false}, {"data": [[1.70231304E12, 88.46999999999993]], "isOverall": false, "label": "/css/plugins/slick.css-152", "isController": false}, {"data": [[1.70231298E12, 92.44444444444444], [1.70231304E12, 88.94505494505493]], "isOverall": false, "label": "/js/orderModel.min.js-128", "isController": false}, {"data": [[1.70231298E12, 94.27]], "isOverall": false, "label": "/js/basket.min.js-75", "isController": false}, {"data": [[1.70231304E12, 88.93000000000002]], "isOverall": false, "label": "/css/category.css-161", "isController": false}, {"data": [[1.70231298E12, 94.17000000000004]], "isOverall": false, "label": "/css/paging.css-80", "isController": false}, {"data": [[1.70231298E12, 646.1111111111111], [1.70231304E12, 866.9780219780222]], "isOverall": false, "label": "/order-123-1", "isController": false}, {"data": [[1.70231298E12, 98.85714285714286], [1.70231304E12, 93.0322580645161]], "isOverall": false, "label": "/css/common.css-124", "isController": false}, {"data": [[1.70231298E12, 93.14999999999993]], "isOverall": false, "label": "/images/search-icon.svg-19", "isController": false}, {"data": [[1.70231298E12, 496.3333333333333], [1.70231304E12, 364.0609756097561]], "isOverall": false, "label": "/basket/recalculate-basket-122", "isController": false}, {"data": [[1.70231298E12, 284.98]], "isOverall": false, "label": "/site/login-62", "isController": false}, {"data": [[1.70231304E12, 89.30000000000001]], "isOverall": false, "label": "/js/forms.min.js-159", "isController": false}, {"data": [[1.70231298E12, 89.625], [1.70231304E12, 89.2608695652174]], "isOverall": false, "label": "/css/jquery.fias.min.css-129", "isController": false}, {"data": [[1.70231298E12, 90.08999999999999]], "isOverall": false, "label": "/fonts/graphik.css-12", "isController": false}, {"data": [[1.70231298E12, 268.81]], "isOverall": false, "label": "/site/login-67", "isController": false}, {"data": [[1.70231304E12, 88.27999999999999]], "isOverall": false, "label": "/css/basket-table.css-180", "isController": false}, {"data": [[1.70231298E12, 96.45454545454545], [1.70231304E12, 84.0]], "isOverall": false, "label": "/images/counter-minus-dis.svg-86", "isController": false}, {"data": [[1.70231304E12, 89.56]], "isOverall": false, "label": "/js/basket.min.js-158", "isController": false}, {"data": [[1.70231298E12, 90.40999999999997]], "isOverall": false, "label": "/images/basket-icon.svg-20", "isController": false}, {"data": [[1.70231298E12, 98.61999999999999]], "isOverall": false, "label": "/images/favicon.ico-66", "isController": false}, {"data": [[1.70231298E12, 88.75], [1.70231304E12, 87.13541666666664]], "isOverall": false, "label": "/css/images/fias-spinner.png-141", "isController": false}, {"data": [[1.70231298E12, 91.48717948717955], [1.70231304E12, 88.5]], "isOverall": false, "label": "/css/basket-page.css-102", "isController": false}, {"data": [[1.70231298E12, 108.0], [1.70231304E12, 92.65624999999997]], "isOverall": false, "label": "/assets/b165c12b/yii.js-136", "isController": false}, {"data": [[1.70231298E12, 90.27000000000008]], "isOverall": false, "label": "/images/sho-basket-love.svg-47", "isController": false}, {"data": [[1.70231298E12, 93.86734693877554], [1.70231304E12, 87.5]], "isOverall": false, "label": "/images/in-shop-icon.svg-89", "isController": false}, {"data": [[1.70231298E12, 92.14285714285714], [1.70231304E12, 88.22580645161288]], "isOverall": false, "label": "/js/order.min.js-130", "isController": false}, {"data": [[1.70231298E12, 819.8928571428571], [1.70231304E12, 1228.6805555555559]], "isOverall": false, "label": "/basket-116", "isController": false}, {"data": [[1.70231298E12, 91.4], [1.70231304E12, 88.15789473684208]], "isOverall": false, "label": "/js/jquery.fias.min.js-133", "isController": false}, {"data": [[1.70231298E12, 93.6], [1.70231304E12, 92.62105263157895]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-132", "isController": false}, {"data": [[1.70231304E12, 88.19000000000001]], "isOverall": false, "label": "/css/order-again.css-174", "isController": false}, {"data": [[1.70231298E12, 93.43000000000004]], "isOverall": false, "label": "/js/twitter.typeahead.0.11.1.min.js-6", "isController": false}, {"data": [[1.70231298E12, 90.40740740740743], [1.70231304E12, 88.13698630136984]], "isOverall": false, "label": "/images/lorry.svg-117", "isController": false}, {"data": [[1.70231298E12, 91.34]], "isOverall": false, "label": "/js/common.min.js-31", "isController": false}, {"data": [[1.70231298E12, 94.4]], "isOverall": false, "label": "/css/index-page.css-72", "isController": false}, {"data": [[1.70231298E12, 99.20731707317074], [1.70231304E12, 98.2777777777778]], "isOverall": false, "label": "/css/common.css-93", "isController": false}, {"data": [[1.70231298E12, 93.03]], "isOverall": false, "label": "/css/filters.css-79", "isController": false}, {"data": [[1.70231298E12, 92.47000000000003]], "isOverall": false, "label": "/js/forms.min.js-76", "isController": false}, {"data": [[1.70231298E12, 97.0], [1.70231304E12, 234.6494845360824]], "isOverall": false, "label": "/order/render-delivery-time-dropdown-143", "isController": false}, {"data": [[1.70231304E12, 333.86]], "isOverall": false, "label": "/customer/order-179-0", "isController": false}, {"data": [[1.70231298E12, 89.74999999999999]], "isOverall": false, "label": "/js/indexPage.min.js-33", "isController": false}, {"data": [[1.70231298E12, 92.32000000000001]], "isOverall": false, "label": "/js/search.min.js-73", "isController": false}, {"data": [[1.70231304E12, 89.54]], "isOverall": false, "label": "/css/product-card.css-164", "isController": false}, {"data": [[1.70231304E12, 1111.4000000000003]], "isOverall": false, "label": "/customer/order-179-2", "isController": false}, {"data": [[1.70231304E12, 252.17000000000002]], "isOverall": false, "label": "/customer/order-179-1", "isController": false}, {"data": [[1.70231298E12, 92.53999999999995]], "isOverall": false, "label": "/css/basket-page.css-61", "isController": false}, {"data": [[1.70231298E12, 93.14000000000006]], "isOverall": false, "label": "/css/products-in-shops-modal.css-82", "isController": false}, {"data": [[1.70231298E12, 2402.4761904761904], [1.70231304E12, 3447.1875]], "isOverall": false, "label": "/catalog/ptitsy/korma/popugai_srednie/rio_korm_dlya_srednikh_popugaev-92", "isController": false}, {"data": [[1.70231298E12, 94.73469387755102], [1.70231304E12, 86.0]], "isOverall": false, "label": "/images/status-available.svg-87", "isController": false}, {"data": [[1.70231298E12, 2055.818181818182], [1.70231304E12, 1018.0]], "isOverall": false, "label": "/catalog/sobaki/korma_sukhie/wonderfur/wonderfur_adult_all_breeds_yagnenok_ris_dlya_sobak-84", "isController": false}, {"data": [[1.70231298E12, 93.27999999999999]], "isOverall": false, "label": "/js/ua-parser.2.0.0-alpha.2.min.js-30", "isController": false}, {"data": [[1.70231298E12, 87.0], [1.70231304E12, 87.63636363636367]], "isOverall": false, "label": "/js/forms.min.js-149", "isController": false}, {"data": [[1.70231304E12, 87.87999999999997]], "isOverall": false, "label": "/css/pay-status.css-171", "isController": false}, {"data": [[1.70231298E12, 90.69000000000001]], "isOverall": false, "label": "/js/yii.min.js-28", "isController": false}, {"data": [[1.70231298E12, 95.54999999999997]], "isOverall": false, "label": "/js/jquery.min.js-7", "isController": false}, {"data": [[1.70231298E12, 172.54999999999995]], "isOverall": false, "label": "/site/login-38-0", "isController": false}, {"data": [[1.70231298E12, 952.6699999999998]], "isOverall": false, "label": "/site/login-38-1", "isController": false}, {"data": [[1.70231298E12, 772.6590909090911], [1.70231304E12, 746.875]], "isOverall": false, "label": "/basket/add-to-basket-115", "isController": false}, {"data": [[1.70231298E12, 91.71999999999996]], "isOverall": false, "label": "/js/jquery.pjax.min.js-63", "isController": false}, {"data": [[1.70231298E12, 95.7878787878788], [1.70231304E12, 121.0]], "isOverall": false, "label": "/css/product-card.css-81", "isController": false}, {"data": [[1.70231298E12, 92.80808080808079], [1.70231304E12, 103.0]], "isOverall": false, "label": "/images/counter-plus.svg-88", "isController": false}, {"data": [[1.70231304E12, 89.40999999999998]], "isOverall": false, "label": "/css/products-in-shops-modal.css-165", "isController": false}, {"data": [[1.70231298E12, 90.65999999999998]], "isOverall": false, "label": "/js/search.min.js-9", "isController": false}, {"data": [[1.70231298E12, 91.71999999999996]], "isOverall": false, "label": "/images/logo.svg-17", "isController": false}, {"data": [[1.70231298E12, 92.75], [1.70231304E12, 87.9375]], "isOverall": false, "label": "/js/forms.min.js-140", "isController": false}, {"data": [[1.70231298E12, 90.0], [1.70231304E12, 88.01010101010101]], "isOverall": false, "label": "/images/deco01.png-150", "isController": false}, {"data": [[1.70231298E12, 90.48000000000003]], "isOverall": false, "label": "/js/indexPage.min.js-45", "isController": false}, {"data": [[1.70231304E12, 87.95000000000003]], "isOverall": false, "label": "/css/catalog-item.css-154", "isController": false}, {"data": [[1.70231298E12, 91.01219512195122], [1.70231304E12, 90.66666666666666]], "isOverall": false, "label": "/js/basket.min.js-99", "isController": false}, {"data": [[1.70231298E12, 91.80392156862746], [1.70231304E12, 87.18367346938774]], "isOverall": false, "label": "/images/delivery-home.png-113", "isController": false}, {"data": [[1.70231298E12, 795.0526315789474], [1.70231304E12, 2020.0]], "isOverall": false, "label": "/catalog/autocomplete-91", "isController": false}, {"data": [[1.70231298E12, 573.1111111111111], [1.70231304E12, 498.84615384615375]], "isOverall": false, "label": "/order-123", "isController": false}, {"data": [[1.70231298E12, 92.77]], "isOverall": false, "label": "/images/app-modal-tree.png-18", "isController": false}, {"data": [[1.70231298E12, 93.23]], "isOverall": false, "label": "/fonts/Graphik-Bold-Web.woff2-21", "isController": false}, {"data": [[1.70231298E12, 93.0], [1.70231304E12, 90.06249999999999]], "isOverall": false, "label": "/assets/b165c12b/yii.validation.js-139", "isController": false}, {"data": [[1.70231298E12, 95.6], [1.70231304E12, 87.99999999999999]], "isOverall": false, "label": "/js/yii.validation.min.js-135", "isController": false}, {"data": [[1.70231298E12, 90.2], [1.70231304E12, 88.41052631578945]], "isOverall": false, "label": "/js/jquery.pjax.min.js-134", "isController": false}, {"data": [[1.70231304E12, 88.75999999999996]], "isOverall": false, "label": "/css/catalog-page.css-160", "isController": false}, {"data": [[1.70231304E12, 89.19999999999999]], "isOverall": false, "label": "/css/basket-page.css-166", "isController": false}, {"data": [[1.70231304E12, 88.46]], "isOverall": false, "label": "/js/basket.min.js-176", "isController": false}, {"data": [[1.70231298E12, 3538.3700000000003]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.70231298E12, 92.35999999999997]], "isOverall": false, "label": "/css/plugins/slick.css-71", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70231304E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.70231298E12, "maxY": 1210.0099999999998, "series": [{"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/js/basket.min.js-46", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/js/search.min.js-98", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/js/orderModel.min.js-177", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/css/loader.css-14", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/css/checkout-modals.css-127", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/images/btn-location.svg-138", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/css/filters.css-57", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/js/search.min.js-175", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/css/index-page.css-155", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/css/basket-page.css-83", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/-1", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/css/paging.css-58", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/js/catalogItem.min.js-85", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/fonts/Graphik-Regular-Web.woff2-23", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/css/checkout-page.css-121", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/css/product-card.css-59", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/css/checkout-page.css-126", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/images/emo-chortle.svg-50", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/images/gen-warning.svg-118", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/css/checkout-modals.css-120", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/images/app-google-play-logo.png-11", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/js/basket.min.js-34", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/images/jcb-96.png-112", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/js/slick.1.8.0.min.js-32", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/js/yii.activeForm.min.js-29", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/images/mir-96.png-110", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/css/catalog-item.css-42", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/images/app-icon.png-52", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/css/category.css-56", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/css/products-in-shops-modal.css-96", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/css/common.css-168", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/css/common.css-69", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/shop/map/product/9791-104", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/js/forms.min.js-114", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/css/common.css-2", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/-68", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/css/plugins/slick.css-94", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/css/order-complete.css-147", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/css/catalog-page.css-55", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/images/loc-point-heart.svg-48", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/dostavka-107", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/images/arrow_menu.svg-137", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/css/catalog-item.css-5", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/-151", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/js/search.min.js-156", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/js/indexPage.min.js-74", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/css/delivery-status.css-169", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/css/order-table.css-172", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/js/jquery.matchHeight.0.7.2.min.js-26", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/images/slider-arrow.svg-36", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/js/store.min.js-105", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/images/arrow.svg-54", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/images/mastercard-96.png-111", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/city/get-by-ip-35", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/customer-167", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/customer-167-0", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/customer-167-1", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/css/cabinet.css-173", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/css/static-page.css-108", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/customer-167-2", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/css/plugins/slick.css-41", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/images/present-bg.svg-101", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/images/modal-close.svg-106", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/css/filters.css-162", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/js/orderModel.min.js-183", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/images/close-modal.svg-119", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/images/basket-icon-green.svg-25", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/css/products-in-shops-modal.css-125", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/images/app-apple-logo.png-10", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/js/jquery.nicescroll.3.7.6.min.js-8", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/images/close-modal-w.svg-65", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/css/cabinet.css-181", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/images/sale_arrow_small.svg-37", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/images/app-huawei-logo.png-15", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/site/login-38", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/customer/order-179", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/css/common.css-40", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/images/visa-96.png-109", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/css/plugins/slick.css-3", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/css/category.css-78", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/images/basket-icon-gray.svg-24", "isController": false}, {"data": [[1.70231298E12, 181.71604938271602], [1.70231304E12, 177.4736842105263]], "isOverall": false, "label": "/js/forms.min.js-100", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/css/common.css-146", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/js/forms.min.js-178", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/fonts/Graphik-Medium-Web.woff2-22", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/css/common.css-153", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/js/catalogItem.min.js-97", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/order/index-144", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/css/index-page.css-43", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/images/app-modal-phone.png-16", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/css/catalog-page.css-77", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/css/paging.css-163", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/css/product-card.css-95", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/css/jquery.fancybox.min.css-13", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/js/js.cookie.3.0.1.min.js-27", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/images/veh-lorry-2.svg-49", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/js/search.min.js-131", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/css/products-in-shops-modal.css-60", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/order/update-delivery-type-dependent-info-142", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/js/forms.min.js-51", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/css/catalog-item.css-70", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/images/delivery-icon.svg-90", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/js/indexPage.min.js-157", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/css/paging.css-170", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/css/index-page.css-4", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/order-123-0", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/js/search.min.js-44", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-64", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/images/counter-minus.svg-103", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/js/search.min.js-148", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/js/jquery.fancybox.3.5.6.min.js-53", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/css/order-information.css-182", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/css/plugins/slick.css-152", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/js/orderModel.min.js-128", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/js/basket.min.js-75", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/css/category.css-161", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/css/paging.css-80", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/order-123-1", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/css/common.css-124", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/images/search-icon.svg-19", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/basket/recalculate-basket-122", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/site/login-62", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/js/forms.min.js-159", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/css/jquery.fias.min.css-129", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/fonts/graphik.css-12", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/site/login-67", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/css/basket-table.css-180", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/images/counter-minus-dis.svg-86", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/js/basket.min.js-158", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/images/basket-icon.svg-20", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/images/favicon.ico-66", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/css/images/fias-spinner.png-141", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/css/basket-page.css-102", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/assets/b165c12b/yii.js-136", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/images/sho-basket-love.svg-47", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/images/in-shop-icon.svg-89", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/js/order.min.js-130", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/basket-116", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/js/jquery.fias.min.js-133", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-132", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/css/order-again.css-174", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/js/twitter.typeahead.0.11.1.min.js-6", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/images/lorry.svg-117", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/js/common.min.js-31", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/css/index-page.css-72", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/css/common.css-93", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/css/filters.css-79", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/js/forms.min.js-76", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/order/render-delivery-time-dropdown-143", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/customer/order-179-0", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/js/indexPage.min.js-33", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/js/search.min.js-73", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/css/product-card.css-164", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/customer/order-179-2", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/customer/order-179-1", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/css/basket-page.css-61", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/css/products-in-shops-modal.css-82", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/catalog/ptitsy/korma/popugai_srednie/rio_korm_dlya_srednikh_popugaev-92", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/images/status-available.svg-87", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/catalog/sobaki/korma_sukhie/wonderfur/wonderfur_adult_all_breeds_yagnenok_ris_dlya_sobak-84", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/js/ua-parser.2.0.0-alpha.2.min.js-30", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/js/forms.min.js-149", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/css/pay-status.css-171", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/js/yii.min.js-28", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/js/jquery.min.js-7", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/site/login-38-0", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/site/login-38-1", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/basket/add-to-basket-115", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/js/jquery.pjax.min.js-63", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/css/product-card.css-81", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/images/counter-plus.svg-88", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/css/products-in-shops-modal.css-165", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/js/search.min.js-9", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/images/logo.svg-17", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/js/forms.min.js-140", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/images/deco01.png-150", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/js/indexPage.min.js-45", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/css/catalog-item.css-154", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/js/basket.min.js-99", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/images/delivery-home.png-113", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/catalog/autocomplete-91", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/order-123", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/images/app-modal-tree.png-18", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/fonts/Graphik-Bold-Web.woff2-21", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/assets/b165c12b/yii.validation.js-139", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/js/yii.validation.min.js-135", "isController": false}, {"data": [[1.70231298E12, 0.0], [1.70231304E12, 0.0]], "isOverall": false, "label": "/js/jquery.pjax.min.js-134", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/css/catalog-page.css-160", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/css/basket-page.css-166", "isController": false}, {"data": [[1.70231304E12, 0.0]], "isOverall": false, "label": "/js/basket.min.js-176", "isController": false}, {"data": [[1.70231298E12, 1210.0099999999998]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.70231298E12, 0.0]], "isOverall": false, "label": "/css/plugins/slick.css-71", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70231304E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 81.0, "minX": 1.70231298E12, "maxY": 7545.0, "series": [{"data": [[1.70231298E12, 7545.0], [1.70231304E12, 6775.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.70231298E12, 175.0], [1.70231304E12, 560.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.70231298E12, 4005.0299999999934], [1.70231304E12, 3340.2099999999964]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.70231298E12, 945.8999999999978], [1.70231304E12, 1185.3499999999995]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.70231298E12, 82.0], [1.70231304E12, 81.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.70231298E12, 91.0], [1.70231304E12, 88.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70231304E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 86.0, "minX": 4.0, "maxY": 2377.5, "series": [{"data": [[524.0, 93.0], [566.0, 91.0], [548.0, 88.0], [591.0, 89.0], [615.0, 87.0], [655.0, 93.0], [669.0, 86.0], [666.0, 86.0], [721.0, 90.0], [737.0, 89.0], [49.0, 810.0], [799.0, 92.0], [772.0, 89.0], [869.0, 90.0], [920.0, 91.0], [4.0, 2377.5], [74.0, 86.0], [139.0, 90.0], [146.0, 102.0], [167.0, 87.0], [11.0, 87.0], [243.0, 88.0], [271.0, 96.0], [279.0, 97.0], [276.0, 95.5], [285.0, 89.0], [297.0, 90.0], [298.0, 93.0], [302.0, 90.0], [305.0, 90.0], [316.0, 90.0], [329.0, 91.0], [328.0, 90.0], [350.0, 94.0], [362.0, 90.0], [413.0, 97.0], [404.0, 87.0], [417.0, 89.0], [431.0, 89.0], [463.0, 87.0], [452.0, 86.0], [475.0, 94.0], [498.0, 88.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[524.0, 101.0], [566.0, 104.0], [548.0, 90.0], [591.0, 125.0], [615.0, 130.5], [669.0, 93.0], [666.0, 93.0], [721.0, 96.5], [799.0, 97.0], [869.0, 94.0], [920.0, 93.0], [271.0, 108.0], [279.0, 1485.5], [276.0, 96.5], [285.0, 93.5], [297.0, 432.0], [298.0, 95.0], [302.0, 89.5], [305.0, 94.0], [316.0, 94.0], [329.0, 94.5], [328.0, 95.0], [350.0, 299.0], [362.0, 98.0], [413.0, 213.0], [404.0, 110.5], [417.0, 90.0], [431.0, 122.0], [463.0, 91.0], [452.0, 98.0], [498.0, 93.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 920.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 86.0, "minX": 4.0, "maxY": 2015.5, "series": [{"data": [[524.0, 93.0], [566.0, 91.0], [548.0, 88.0], [591.0, 89.0], [615.0, 87.0], [655.0, 92.0], [669.0, 86.0], [666.0, 86.0], [721.0, 90.0], [737.0, 89.0], [49.0, 583.5], [799.0, 91.0], [772.0, 89.0], [869.0, 90.0], [920.0, 91.0], [4.0, 2015.5], [74.0, 86.0], [139.0, 90.0], [146.0, 101.5], [167.0, 87.0], [11.0, 87.0], [243.0, 88.0], [271.0, 96.0], [279.0, 97.0], [276.0, 95.5], [285.0, 89.0], [297.0, 90.0], [298.0, 93.0], [302.0, 89.5], [305.0, 90.0], [316.0, 90.0], [329.0, 91.0], [328.0, 90.0], [350.0, 94.0], [362.0, 90.0], [413.0, 97.0], [404.0, 86.5], [417.0, 89.0], [431.0, 89.0], [463.0, 87.0], [452.0, 86.0], [475.0, 93.0], [498.0, 87.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[524.0, 101.0], [566.0, 104.0], [548.0, 90.0], [591.0, 125.0], [615.0, 130.5], [669.0, 93.0], [666.0, 93.0], [721.0, 96.5], [799.0, 97.0], [869.0, 94.0], [920.0, 93.0], [271.0, 108.0], [279.0, 1485.5], [276.0, 96.5], [285.0, 93.5], [297.0, 432.0], [298.0, 95.0], [302.0, 89.5], [305.0, 94.0], [316.0, 94.0], [329.0, 94.5], [328.0, 95.0], [350.0, 299.0], [362.0, 98.0], [413.0, 213.0], [404.0, 110.0], [417.0, 90.0], [431.0, 122.0], [463.0, 91.0], [452.0, 98.0], [498.0, 93.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 920.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 130.76666666666668, "minX": 1.70231298E12, "maxY": 189.23333333333332, "series": [{"data": [[1.70231298E12, 189.23333333333332], [1.70231304E12, 130.76666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70231304E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.70231298E12, "maxY": 182.6, "series": [{"data": [[1.70231298E12, 182.6], [1.70231304E12, 115.73333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.70231298E12, 2.85], [1.70231304E12, 7.15]], "isOverall": false, "label": "400", "isController": false}, {"data": [[1.70231298E12, 1.9], [1.70231304E12, 8.1]], "isOverall": false, "label": "302", "isController": false}, {"data": [[1.70231298E12, 0.06666666666666667], [1.70231304E12, 1.6]], "isOverall": false, "label": "404", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70231304E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.70231298E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/-1-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/images/app-huawei-logo.png-15-success", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/js/basket.min.js-176-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/js/jquery.matchHeight.0.7.2.min.js-26-success", "isController": false}, {"data": [[1.70231298E12, 1.3], [1.70231304E12, 0.36666666666666664]], "isOverall": false, "label": "/css/basket-page.css-102-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/js/indexPage.min.js-45-success", "isController": false}, {"data": [[1.70231298E12, 0.03333333333333333], [1.70231304E12, 1.6333333333333333]], "isOverall": false, "label": "/css/order-complete.css-147-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/css/basket-page.css-83-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/images/app-icon.png-52-success", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/css/category.css-161-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/js/ua-parser.2.0.0-alpha.2.min.js-30-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/images/app-modal-tree.png-18-success", "isController": false}, {"data": [[1.70231298E12, 0.85], [1.70231304E12, 0.8166666666666667]], "isOverall": false, "label": "/images/delivery-home.png-113-success", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/css/cabinet.css-173-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/js/jquery.fancybox.3.5.6.min.js-53-success", "isController": false}, {"data": [[1.70231298E12, 0.03333333333333333], [1.70231304E12, 1.6333333333333333]], "isOverall": false, "label": "/order/index-144-failure", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/css/plugins/slick.css-71-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/fonts/Graphik-Medium-Web.woff2-22-success", "isController": false}, {"data": [[1.70231298E12, 1.65], [1.70231304E12, 0.016666666666666666]], "isOverall": false, "label": "/images/counter-minus-dis.svg-86-success", "isController": false}, {"data": [[1.70231298E12, 0.45], [1.70231304E12, 1.2166666666666666]], "isOverall": false, "label": "/images/lorry.svg-117-success", "isController": false}, {"data": [[1.70231298E12, 0.85], [1.70231304E12, 0.8166666666666667]], "isOverall": false, "label": "/js/forms.min.js-114-success", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/js/forms.min.js-178-success", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/css/basket-page.css-166-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/images/app-apple-logo.png-10-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/site/login-38-0-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/js/slick.1.8.0.min.js-32-success", "isController": false}, {"data": [[1.70231298E12, 0.15], [1.70231304E12, 1.5166666666666666]], "isOverall": false, "label": "/order-123-success", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/customer-167-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/site/login-62-success", "isController": false}, {"data": [[1.70231298E12, 1.4], [1.70231304E12, 0.26666666666666666]], "isOverall": false, "label": "/catalog/ptitsy/korma/popugai_srednie/rio_korm_dlya_srednikh_popugaev-92-success", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/js/forms.min.js-159-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/js/basket.min.js-46-success", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/css/index-page.css-155-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/js/basket.min.js-75-success", "isController": false}, {"data": [[1.70231298E12, 0.3], [1.70231304E12, 1.3666666666666667]], "isOverall": false, "label": "/basket/recalculate-basket-122-failure", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/css/common.css-153-success", "isController": false}, {"data": [[1.70231298E12, 1.65], [1.70231304E12, 0.016666666666666666]], "isOverall": false, "label": "/css/product-card.css-81-success", "isController": false}, {"data": [[1.70231298E12, 1.65], [1.70231304E12, 0.016666666666666666]], "isOverall": false, "label": "/catalog/sobaki/korma_sukhie/wonderfur/wonderfur_adult_all_breeds_yagnenok_ris_dlya_sobak-84-success", "isController": false}, {"data": [[1.70231298E12, 0.15], [1.70231304E12, 1.5166666666666666]], "isOverall": false, "label": "/css/products-in-shops-modal.css-125-success", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/customer/order-179-2-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/images/basket-icon.svg-20-success", "isController": false}, {"data": [[1.70231298E12, 0.06666666666666667], [1.70231304E12, 1.6]], "isOverall": false, "label": "/css/images/fias-spinner.png-141-failure", "isController": false}, {"data": [[1.70231298E12, 1.6333333333333333], [1.70231304E12, 0.03333333333333333]], "isOverall": false, "label": "/images/status-available.svg-87-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/js/basket.min.js-34-success", "isController": false}, {"data": [[1.70231298E12, 0.23333333333333334], [1.70231304E12, 1.4333333333333333]], "isOverall": false, "label": "/order-123-0-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/js/yii.min.js-28-success", "isController": false}, {"data": [[1.70231298E12, 0.7333333333333333], [1.70231304E12, 0.9333333333333333]], "isOverall": false, "label": "/basket/add-to-basket-115-failure", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/css/catalog-item.css-5-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/js/yii.activeForm.min.js-29-success", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/customer-167-1-success", "isController": false}, {"data": [[1.70231298E12, 1.0833333333333333], [1.70231304E12, 0.5833333333333334]], "isOverall": false, "label": "/images/modal-close.svg-106-success", "isController": false}, {"data": [[1.70231298E12, 0.85], [1.70231304E12, 0.8166666666666667]], "isOverall": false, "label": "/images/mastercard-96.png-111-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/css/common.css-40-success", "isController": false}, {"data": [[1.70231298E12, 0.13333333333333333], [1.70231304E12, 1.5333333333333334]], "isOverall": false, "label": "/css/jquery.fias.min.css-129-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/images/emo-chortle.svg-50-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/images/slider-arrow.svg-36-success", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/js/indexPage.min.js-157-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/css/index-page.css-4-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/js/forms.min.js-76-success", "isController": false}, {"data": [[1.70231298E12, 1.3666666666666667], [1.70231304E12, 0.3]], "isOverall": false, "label": "/css/product-card.css-95-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/fonts/Graphik-Regular-Web.woff2-23-success", "isController": false}, {"data": [[1.70231298E12, 1.5833333333333333], [1.70231304E12, 0.08333333333333333]], "isOverall": false, "label": "/catalog/autocomplete-91-success", "isController": false}, {"data": [[1.70231298E12, 0.016666666666666666], [1.70231304E12, 1.65]], "isOverall": false, "label": "/js/forms.min.js-149-success", "isController": false}, {"data": [[1.70231298E12, 1.6333333333333333], [1.70231304E12, 0.03333333333333333]], "isOverall": false, "label": "/images/in-shop-icon.svg-89-success", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/css/paging.css-163-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/site/login-38-1-success", "isController": false}, {"data": [[1.70231298E12, 0.45], [1.70231304E12, 1.2166666666666666]], "isOverall": false, "label": "/images/gen-warning.svg-118-success", "isController": false}, {"data": [[1.70231298E12, 0.4666666666666667], [1.70231304E12, 1.2]], "isOverall": false, "label": "/basket-116-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/images/app-modal-phone.png-16-success", "isController": false}, {"data": [[1.70231298E12, 0.85], [1.70231304E12, 0.8166666666666667]], "isOverall": false, "label": "/images/jcb-96.png-112-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/js/jquery.min.js-7-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/js/twitter.typeahead.0.11.1.min.js-6-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/images/logo.svg-17-success", "isController": false}, {"data": [[1.70231298E12, 0.06666666666666667], [1.70231304E12, 1.6]], "isOverall": false, "label": "/assets/b165c12b/yii.js-136-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/css/catalog-item.css-70-success", "isController": false}, {"data": [[1.70231298E12, 0.4], [1.70231304E12, 1.2666666666666666]], "isOverall": false, "label": "/css/checkout-modals.css-120-success", "isController": false}, {"data": [[1.70231298E12, 1.35], [1.70231304E12, 0.31666666666666665]], "isOverall": false, "label": "/js/forms.min.js-100-success", "isController": false}, {"data": [[1.70231298E12, 1.3], [1.70231304E12, 0.36666666666666664]], "isOverall": false, "label": "/images/counter-minus.svg-103-success", "isController": false}, {"data": [[1.70231298E12, 0.15], [1.70231304E12, 1.5166666666666666]], "isOverall": false, "label": "/js/orderModel.min.js-128-success", "isController": false}, {"data": [[1.70231298E12, 0.43333333333333335], [1.70231304E12, 1.2333333333333334]], "isOverall": false, "label": "/css/checkout-page.css-121-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/js/forms.min.js-51-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/css/catalog-page.css-55-success", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/customer-167-0-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/css/basket-page.css-61-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/images/sho-basket-love.svg-47-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/css/products-in-shops-modal.css-82-success", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/css/common.css-168-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/images/close-modal-w.svg-65-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/js/search.min.js-9-success", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/js/orderModel.min.js-183-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/css/filters.css-79-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/images/loc-point-heart.svg-48-success", "isController": false}, {"data": [[1.70231298E12, 0.15], [1.70231304E12, 1.5166666666666666]], "isOverall": false, "label": "/order-123-1-success", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/css/basket-table.css-180-success", "isController": false}, {"data": [[1.70231298E12, 1.3833333333333333], [1.70231304E12, 0.2833333333333333]], "isOverall": false, "label": "/css/plugins/slick.css-94-success", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/-151-success", "isController": false}, {"data": [[1.70231298E12, 0.13333333333333333], [1.70231304E12, 1.5333333333333334]], "isOverall": false, "label": "/css/checkout-modals.css-127-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/images/favicon.ico-66-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/images/app-google-play-logo.png-11-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/css/index-page.css-43-success", "isController": false}, {"data": [[1.70231298E12, 1.3666666666666667], [1.70231304E12, 0.3]], "isOverall": false, "label": "/js/basket.min.js-99-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/images/veh-lorry-2.svg-49-success", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/js/search.min.js-175-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/js/jquery.nicescroll.3.7.6.min.js-8-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/css/common.css-69-success", "isController": false}, {"data": [[1.70231298E12, 0.016666666666666666], [1.70231304E12, 1.65]], "isOverall": false, "label": "/css/common.css-146-success", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/css/filters.css-162-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/css/category.css-56-success", "isController": false}, {"data": [[1.70231298E12, 1.6333333333333333], [1.70231304E12, 0.03333333333333333]], "isOverall": false, "label": "/images/delivery-icon.svg-90-success", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/css/paging.css-170-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/site/login-67-failure", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/css/jquery.fancybox.min.css-13-success", "isController": false}, {"data": [[1.70231298E12, 1.0833333333333333], [1.70231304E12, 0.5833333333333334]], "isOverall": false, "label": "/js/store.min.js-105-success", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/js/orderModel.min.js-177-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/css/plugins/slick.css-41-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/fonts/graphik.css-12-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/js/js.cookie.3.0.1.min.js-27-success", "isController": false}, {"data": [[1.70231298E12, 0.08333333333333333], [1.70231304E12, 1.5833333333333333]], "isOverall": false, "label": "/js/jquery.fias.min.js-133-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/images/sale_arrow_small.svg-37-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/css/category.css-78-success", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/css/order-table.css-172-success", "isController": false}, {"data": [[1.70231298E12, 0.06666666666666667], [1.70231304E12, 1.6]], "isOverall": false, "label": "/order/update-delivery-type-dependent-info-142-failure", "isController": false}, {"data": [[1.70231298E12, 1.3666666666666667], [1.70231304E12, 0.3]], "isOverall": false, "label": "/css/common.css-93-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/images/basket-icon-gray.svg-24-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/images/search-icon.svg-19-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/css/catalog-item.css-42-success", "isController": false}, {"data": [[1.70231298E12, 0.06666666666666667], [1.70231304E12, 1.6]], "isOverall": false, "label": "/images/arrow_menu.svg-137-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-64-success", "isController": false}, {"data": [[1.70231298E12, 0.06666666666666667], [1.70231304E12, 1.6]], "isOverall": false, "label": "/images/btn-location.svg-138-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/css/plugins/slick.css-3-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/css/product-card.css-59-success", "isController": false}, {"data": [[1.70231298E12, 0.43333333333333335], [1.70231304E12, 1.2333333333333334]], "isOverall": false, "label": "/images/close-modal.svg-119-success", "isController": false}, {"data": [[1.70231298E12, 0.8833333333333333], [1.70231304E12, 0.7833333333333333]], "isOverall": false, "label": "/dostavka-107-success", "isController": false}, {"data": [[1.70231298E12, 0.8833333333333333], [1.70231304E12, 0.7833333333333333]], "isOverall": false, "label": "/images/mir-96.png-110-success", "isController": false}, {"data": [[1.70231298E12, 0.016666666666666666], [1.70231304E12, 1.65]], "isOverall": false, "label": "/images/deco01.png-150-success", "isController": false}, {"data": [[1.70231298E12, 1.3166666666666667], [1.70231304E12, 0.35]], "isOverall": false, "label": "/images/present-bg.svg-101-success", "isController": false}, {"data": [[1.70231298E12, 0.8666666666666667], [1.70231304E12, 0.8]], "isOverall": false, "label": "/images/visa-96.png-109-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/js/indexPage.min.js-33-success", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/css/catalog-item.css-154-success", "isController": false}, {"data": [[1.70231298E12, 0.08333333333333333], [1.70231304E12, 1.5833333333333333]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-132-success", "isController": false}, {"data": [[1.70231298E12, 0.05], [1.70231304E12, 1.6166666666666667]], "isOverall": false, "label": "/order/render-delivery-time-dropdown-143-failure", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/customer/order-179-0-success", "isController": false}, {"data": [[1.70231298E12, 0.08333333333333333], [1.70231304E12, 1.5833333333333333]], "isOverall": false, "label": "/js/jquery.pjax.min.js-134-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/css/catalog-page.css-77-success", "isController": false}, {"data": [[1.70231298E12, 0.1], [1.70231304E12, 1.5666666666666667]], "isOverall": false, "label": "/js/search.min.js-131-success", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/css/plugins/slick.css-152-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/css/index-page.css-72-success", "isController": false}, {"data": [[1.70231298E12, 0.03333333333333333], [1.70231304E12, 1.6333333333333333]], "isOverall": false, "label": "/js/search.min.js-148-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/-68-success", "isController": false}, {"data": [[1.70231298E12, 1.3666666666666667], [1.70231304E12, 0.3]], "isOverall": false, "label": "/js/search.min.js-98-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/css/products-in-shops-modal.css-60-success", "isController": false}, {"data": [[1.70231298E12, 1.65], [1.70231304E12, 0.016666666666666666]], "isOverall": false, "label": "/js/catalogItem.min.js-85-success", "isController": false}, {"data": [[1.70231298E12, 0.15], [1.70231304E12, 1.5166666666666666]], "isOverall": false, "label": "/css/checkout-page.css-126-success", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/customer/order-179-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/js/jquery.pjax.min.js-63-success", "isController": false}, {"data": [[1.70231298E12, 1.65], [1.70231304E12, 0.016666666666666666]], "isOverall": false, "label": "/images/counter-plus.svg-88-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/site/login-38-success", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/js/basket.min.js-158-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/css/paging.css-80-success", "isController": false}, {"data": [[1.70231298E12, 0.11666666666666667], [1.70231304E12, 1.55]], "isOverall": false, "label": "/css/common.css-124-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/css/filters.css-57-success", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/css/catalog-page.css-160-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/css/paging.css-58-success", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/css/products-in-shops-modal.css-165-success", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/css/pay-status.css-171-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/js/indexPage.min.js-74-success", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/css/product-card.css-164-success", "isController": false}, {"data": [[1.70231298E12, 0.8833333333333333], [1.70231304E12, 0.7833333333333333]], "isOverall": false, "label": "/css/static-page.css-108-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/css/common.css-2-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/css/loader.css-14-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.70231298E12, 0.06666666666666667], [1.70231304E12, 1.6]], "isOverall": false, "label": "/assets/b165c12b/yii.validation.js-139-success", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/css/order-again.css-174-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/city/get-by-ip-35-success", "isController": false}, {"data": [[1.70231298E12, 1.1], [1.70231304E12, 0.5666666666666667]], "isOverall": false, "label": "/shop/map/product/9791-104-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/js/search.min.js-44-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/js/search.min.js-73-success", "isController": false}, {"data": [[1.70231298E12, 1.3666666666666667], [1.70231304E12, 0.3]], "isOverall": false, "label": "/css/products-in-shops-modal.css-96-success", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/css/order-information.css-182-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/js/common.min.js-31-success", "isController": false}, {"data": [[1.70231298E12, 0.08333333333333333], [1.70231304E12, 1.5833333333333333]], "isOverall": false, "label": "/js/yii.validation.min.js-135-success", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/customer/order-179-1-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/images/basket-icon-green.svg-25-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/images/arrow.svg-54-success", "isController": false}, {"data": [[1.70231298E12, 1.3666666666666667], [1.70231304E12, 0.3]], "isOverall": false, "label": "/js/catalogItem.min.js-97-success", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/js/search.min.js-156-success", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/customer-167-2-success", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/css/cabinet.css-181-success", "isController": false}, {"data": [[1.70231298E12, 1.6666666666666667]], "isOverall": false, "label": "/fonts/Graphik-Bold-Web.woff2-21-success", "isController": false}, {"data": [[1.70231304E12, 1.6666666666666667]], "isOverall": false, "label": "/css/delivery-status.css-169-success", "isController": false}, {"data": [[1.70231298E12, 0.11666666666666667], [1.70231304E12, 1.55]], "isOverall": false, "label": "/js/order.min.js-130-success", "isController": false}, {"data": [[1.70231298E12, 0.06666666666666667], [1.70231304E12, 1.6]], "isOverall": false, "label": "/js/forms.min.js-140-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70231304E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 2.9166666666666665, "minX": 1.70231298E12, "maxY": 184.5, "series": [{"data": [[1.70231298E12, 184.5], [1.70231304E12, 123.83333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.70231298E12, 2.9166666666666665], [1.70231304E12, 8.75]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70231304E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}
