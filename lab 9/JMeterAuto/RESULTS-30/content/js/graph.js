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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 30.0, "series": [{"data": [[0.0, 28.0], [100.0, 2.0]], "isOverall": false, "label": "/js/basket.min.js-46", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/js/search.min.js-98", "isController": false}, {"data": [[0.0, 27.0], [100.0, 3.0]], "isOverall": false, "label": "/js/orderModel.min.js-177", "isController": false}, {"data": [[0.0, 28.0], [100.0, 2.0]], "isOverall": false, "label": "/css/loader.css-14", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/css/checkout-modals.css-127", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/images/btn-location.svg-138", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/css/filters.css-57", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/js/search.min.js-175", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/css/index-page.css-155", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/css/basket-page.css-83", "isController": false}, {"data": [[1100.0, 3.0], [600.0, 2.0], [400.0, 8.0], [800.0, 2.0], [900.0, 1.0], [500.0, 13.0], [1000.0, 1.0]], "isOverall": false, "label": "/-1", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/css/paging.css-58", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/js/catalogItem.min.js-85", "isController": false}, {"data": [[0.0, 24.0], [100.0, 4.0], [200.0, 2.0]], "isOverall": false, "label": "/fonts/Graphik-Regular-Web.woff2-23", "isController": false}, {"data": [[0.0, 27.0], [100.0, 3.0]], "isOverall": false, "label": "/css/checkout-page.css-121", "isController": false}, {"data": [[0.0, 28.0], [100.0, 1.0], [200.0, 1.0]], "isOverall": false, "label": "/css/product-card.css-59", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/css/checkout-page.css-126", "isController": false}, {"data": [[0.0, 28.0], [100.0, 2.0]], "isOverall": false, "label": "/images/emo-chortle.svg-50", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/images/gen-warning.svg-118", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/css/checkout-modals.css-120", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/images/app-google-play-logo.png-11", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/js/basket.min.js-34", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/images/jcb-96.png-112", "isController": false}, {"data": [[0.0, 27.0], [100.0, 3.0]], "isOverall": false, "label": "/js/slick.1.8.0.min.js-32", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/js/yii.activeForm.min.js-29", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/images/mir-96.png-110", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/css/catalog-item.css-42", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/images/app-icon.png-52", "isController": false}, {"data": [[0.0, 26.0], [100.0, 4.0]], "isOverall": false, "label": "/css/category.css-56", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/css/products-in-shops-modal.css-96", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/css/common.css-168", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/css/common.css-69", "isController": false}, {"data": [[300.0, 7.0], [400.0, 17.0], [500.0, 6.0]], "isOverall": false, "label": "/shop/map/product/9791-104", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/js/forms.min.js-114", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/css/common.css-2", "isController": false}, {"data": [[300.0, 1.0], [600.0, 2.0], [700.0, 5.0], [400.0, 10.0], [800.0, 2.0], [900.0, 1.0], [500.0, 9.0]], "isOverall": false, "label": "/-68", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/css/plugins/slick.css-94", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/css/order-complete.css-147", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/css/catalog-page.css-55", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/images/loc-point-heart.svg-48", "isController": false}, {"data": [[300.0, 18.0], [200.0, 7.0], [400.0, 5.0]], "isOverall": false, "label": "/dostavka-107", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/images/arrow_menu.svg-137", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/css/catalog-item.css-5", "isController": false}, {"data": [[600.0, 6.0], [700.0, 4.0], [500.0, 20.0]], "isOverall": false, "label": "/-151", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/js/search.min.js-156", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/js/indexPage.min.js-74", "isController": false}, {"data": [[0.0, 27.0], [100.0, 3.0]], "isOverall": false, "label": "/css/delivery-status.css-169", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/css/order-table.css-172", "isController": false}, {"data": [[0.0, 28.0], [100.0, 1.0], [400.0, 1.0]], "isOverall": false, "label": "/js/jquery.matchHeight.0.7.2.min.js-26", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/images/slider-arrow.svg-36", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/js/store.min.js-105", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/images/arrow.svg-54", "isController": false}, {"data": [[0.0, 28.0], [100.0, 2.0]], "isOverall": false, "label": "/images/mastercard-96.png-111", "isController": false}, {"data": [[0.0, 26.0], [100.0, 4.0]], "isOverall": false, "label": "/city/get-by-ip-35", "isController": false}, {"data": [[1100.0, 3.0], [1200.0, 2.0], [700.0, 10.0], [800.0, 5.0], [900.0, 9.0], [1000.0, 1.0]], "isOverall": false, "label": "/customer-167", "isController": false}, {"data": [[0.0, 22.0], [100.0, 8.0]], "isOverall": false, "label": "/customer-167-0", "isController": false}, {"data": [[0.0, 23.0], [100.0, 7.0]], "isOverall": false, "label": "/customer-167-1", "isController": false}, {"data": [[0.0, 28.0], [100.0, 2.0]], "isOverall": false, "label": "/css/cabinet.css-173", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/css/static-page.css-108", "isController": false}, {"data": [[600.0, 6.0], [700.0, 8.0], [800.0, 2.0], [900.0, 2.0], [500.0, 9.0], [1000.0, 3.0]], "isOverall": false, "label": "/customer-167-2", "isController": false}, {"data": [[0.0, 28.0], [100.0, 2.0]], "isOverall": false, "label": "/css/plugins/slick.css-41", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/images/present-bg.svg-101", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/images/modal-close.svg-106", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/css/filters.css-162", "isController": false}, {"data": [[0.0, 28.0], [100.0, 2.0]], "isOverall": false, "label": "/js/orderModel.min.js-183", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/images/close-modal.svg-119", "isController": false}, {"data": [[0.0, 28.0], [100.0, 2.0]], "isOverall": false, "label": "/images/basket-icon-green.svg-25", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/css/products-in-shops-modal.css-125", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/images/app-apple-logo.png-10", "isController": false}, {"data": [[0.0, 25.0], [100.0, 5.0]], "isOverall": false, "label": "/js/jquery.nicescroll.3.7.6.min.js-8", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/images/close-modal-w.svg-65", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/css/cabinet.css-181", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/images/sale_arrow_small.svg-37", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/images/app-huawei-logo.png-15", "isController": false}, {"data": [[600.0, 10.0], [700.0, 1.0], [400.0, 4.0], [800.0, 1.0], [500.0, 14.0]], "isOverall": false, "label": "/site/login-38", "isController": false}, {"data": [[1100.0, 1.0], [1200.0, 1.0], [600.0, 3.0], [1300.0, 1.0], [700.0, 12.0], [1400.0, 1.0], [1500.0, 1.0], [800.0, 6.0], [1600.0, 1.0], [900.0, 2.0], [1000.0, 1.0]], "isOverall": false, "label": "/customer/order-179", "isController": false}, {"data": [[0.0, 24.0], [100.0, 6.0]], "isOverall": false, "label": "/css/common.css-40", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/images/visa-96.png-109", "isController": false}, {"data": [[0.0, 28.0], [100.0, 2.0]], "isOverall": false, "label": "/css/plugins/slick.css-3", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/css/category.css-78", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/images/basket-icon-gray.svg-24", "isController": false}, {"data": [[200.0, 30.0]], "isOverall": false, "label": "/js/forms.min.js-100", "isController": false}, {"data": [[0.0, 28.0], [100.0, 2.0]], "isOverall": false, "label": "/css/common.css-146", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/js/forms.min.js-178", "isController": false}, {"data": [[0.0, 26.0], [100.0, 4.0]], "isOverall": false, "label": "/fonts/Graphik-Medium-Web.woff2-22", "isController": false}, {"data": [[0.0, 28.0], [100.0, 2.0]], "isOverall": false, "label": "/css/common.css-153", "isController": false}, {"data": [[0.0, 28.0], [100.0, 2.0]], "isOverall": false, "label": "/js/catalogItem.min.js-97", "isController": false}, {"data": [[0.0, 2.0], [100.0, 28.0]], "isOverall": false, "label": "/order/index-144", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/css/index-page.css-43", "isController": false}, {"data": [[0.0, 6.0], [300.0, 1.0], [100.0, 16.0], [200.0, 7.0]], "isOverall": false, "label": "/images/app-modal-phone.png-16", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/css/catalog-page.css-77", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/css/paging.css-163", "isController": false}, {"data": [[0.0, 25.0], [100.0, 5.0]], "isOverall": false, "label": "/css/product-card.css-95", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/css/jquery.fancybox.min.css-13", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/js/js.cookie.3.0.1.min.js-27", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/images/veh-lorry-2.svg-49", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/js/search.min.js-131", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/css/products-in-shops-modal.css-60", "isController": false}, {"data": [[0.0, 25.0], [100.0, 5.0]], "isOverall": false, "label": "/order/update-delivery-type-dependent-info-142", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/js/forms.min.js-51", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/css/catalog-item.css-70", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/images/delivery-icon.svg-90", "isController": false}, {"data": [[0.0, 27.0], [100.0, 3.0]], "isOverall": false, "label": "/js/indexPage.min.js-157", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/css/paging.css-170", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/css/index-page.css-4", "isController": false}, {"data": [[0.0, 12.0], [100.0, 18.0]], "isOverall": false, "label": "/order-123-0", "isController": false}, {"data": [[0.0, 28.0], [100.0, 2.0]], "isOverall": false, "label": "/js/search.min.js-44", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-64", "isController": false}, {"data": [[0.0, 28.0], [100.0, 2.0]], "isOverall": false, "label": "/images/counter-minus.svg-103", "isController": false}, {"data": [[0.0, 28.0], [100.0, 2.0]], "isOverall": false, "label": "/js/search.min.js-148", "isController": false}, {"data": [[0.0, 26.0], [100.0, 4.0]], "isOverall": false, "label": "/js/jquery.fancybox.3.5.6.min.js-53", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/css/order-information.css-182", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/css/plugins/slick.css-152", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/js/orderModel.min.js-128", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/js/basket.min.js-75", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/css/category.css-161", "isController": false}, {"data": [[0.0, 28.0], [400.0, 1.0], [100.0, 1.0]], "isOverall": false, "label": "/css/paging.css-80", "isController": false}, {"data": [[300.0, 7.0], [200.0, 19.0], [400.0, 3.0], [500.0, 1.0]], "isOverall": false, "label": "/order-123-1", "isController": false}, {"data": [[0.0, 28.0], [100.0, 2.0]], "isOverall": false, "label": "/css/common.css-124", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/images/search-icon.svg-19", "isController": false}, {"data": [[0.0, 27.0], [100.0, 3.0]], "isOverall": false, "label": "/basket/recalculate-basket-122", "isController": false}, {"data": [[0.0, 19.0], [100.0, 11.0]], "isOverall": false, "label": "/site/login-62", "isController": false}, {"data": [[0.0, 26.0], [100.0, 4.0]], "isOverall": false, "label": "/js/forms.min.js-159", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/css/jquery.fias.min.css-129", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/fonts/graphik.css-12", "isController": false}, {"data": [[0.0, 24.0], [100.0, 6.0]], "isOverall": false, "label": "/site/login-67", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/css/basket-table.css-180", "isController": false}, {"data": [[0.0, 27.0], [100.0, 3.0]], "isOverall": false, "label": "/images/counter-minus-dis.svg-86", "isController": false}, {"data": [[0.0, 28.0], [100.0, 2.0]], "isOverall": false, "label": "/js/basket.min.js-158", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/images/basket-icon.svg-20", "isController": false}, {"data": [[0.0, 28.0], [100.0, 2.0]], "isOverall": false, "label": "/images/favicon.ico-66", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/css/images/fias-spinner.png-141", "isController": false}, {"data": [[0.0, 27.0], [100.0, 3.0]], "isOverall": false, "label": "/css/basket-page.css-102", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/assets/b165c12b/yii.js-136", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/images/sho-basket-love.svg-47", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/images/in-shop-icon.svg-89", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/js/order.min.js-130", "isController": false}, {"data": [[300.0, 5.0], [200.0, 20.0], [400.0, 4.0], [500.0, 1.0]], "isOverall": false, "label": "/basket-116", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/js/jquery.fias.min.js-133", "isController": false}, {"data": [[0.0, 26.0], [100.0, 4.0]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-132", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/css/order-again.css-174", "isController": false}, {"data": [[0.0, 27.0], [100.0, 3.0]], "isOverall": false, "label": "/js/twitter.typeahead.0.11.1.min.js-6", "isController": false}, {"data": [[0.0, 28.0], [100.0, 2.0]], "isOverall": false, "label": "/images/lorry.svg-117", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/js/common.min.js-31", "isController": false}, {"data": [[0.0, 28.0], [100.0, 2.0]], "isOverall": false, "label": "/css/index-page.css-72", "isController": false}, {"data": [[0.0, 28.0], [100.0, 2.0]], "isOverall": false, "label": "/css/common.css-93", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/css/filters.css-79", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/js/forms.min.js-76", "isController": false}, {"data": [[0.0, 25.0], [100.0, 5.0]], "isOverall": false, "label": "/order/render-delivery-time-dropdown-143", "isController": false}, {"data": [[0.0, 20.0], [100.0, 10.0]], "isOverall": false, "label": "/customer/order-179-0", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/js/indexPage.min.js-33", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/js/search.min.js-73", "isController": false}, {"data": [[0.0, 28.0], [100.0, 2.0]], "isOverall": false, "label": "/css/product-card.css-164", "isController": false}, {"data": [[1100.0, 1.0], [600.0, 5.0], [1200.0, 1.0], [1300.0, 1.0], [700.0, 3.0], [1400.0, 1.0], [800.0, 1.0], [400.0, 3.0], [1000.0, 2.0], [500.0, 12.0]], "isOverall": false, "label": "/customer/order-179-2", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/customer/order-179-1", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/css/basket-page.css-61", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/css/products-in-shops-modal.css-82", "isController": false}, {"data": [[1100.0, 2.0], [1200.0, 4.0], [1300.0, 1.0], [700.0, 6.0], [800.0, 8.0], [900.0, 4.0], [1000.0, 5.0]], "isOverall": false, "label": "/catalog/ptitsy/korma/popugai_srednie/rio_korm_dlya_srednikh_popugaev-92", "isController": false}, {"data": [[0.0, 27.0], [100.0, 3.0]], "isOverall": false, "label": "/images/status-available.svg-87", "isController": false}, {"data": [[1100.0, 4.0], [1200.0, 2.0], [1300.0, 3.0], [700.0, 1.0], [1400.0, 2.0], [1500.0, 1.0], [800.0, 10.0], [900.0, 4.0], [1800.0, 1.0], [1000.0, 2.0]], "isOverall": false, "label": "/catalog/sobaki/korma_sukhie/wonderfur/wonderfur_adult_all_breeds_yagnenok_ris_dlya_sobak-84", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/js/ua-parser.2.0.0-alpha.2.min.js-30", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/js/forms.min.js-149", "isController": false}, {"data": [[0.0, 28.0], [100.0, 2.0]], "isOverall": false, "label": "/css/pay-status.css-171", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/js/yii.min.js-28", "isController": false}, {"data": [[0.0, 28.0], [100.0, 2.0]], "isOverall": false, "label": "/js/jquery.min.js-7", "isController": false}, {"data": [[0.0, 24.0], [100.0, 6.0]], "isOverall": false, "label": "/site/login-38-0", "isController": false}, {"data": [[300.0, 4.0], [600.0, 1.0], [700.0, 1.0], [400.0, 14.0], [500.0, 10.0]], "isOverall": false, "label": "/site/login-38-1", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/basket/add-to-basket-115", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/js/jquery.pjax.min.js-63", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/css/product-card.css-81", "isController": false}, {"data": [[0.0, 28.0], [100.0, 2.0]], "isOverall": false, "label": "/images/counter-plus.svg-88", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/css/products-in-shops-modal.css-165", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/js/search.min.js-9", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/images/logo.svg-17", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/js/forms.min.js-140", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/images/deco01.png-150", "isController": false}, {"data": [[0.0, 27.0], [100.0, 3.0]], "isOverall": false, "label": "/js/indexPage.min.js-45", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/css/catalog-item.css-154", "isController": false}, {"data": [[0.0, 27.0], [100.0, 3.0]], "isOverall": false, "label": "/js/basket.min.js-99", "isController": false}, {"data": [[0.0, 30.0]], "isOverall": false, "label": "/images/delivery-home.png-113", "isController": false}, {"data": [[0.0, 12.0], [300.0, 1.0], [100.0, 17.0]], "isOverall": false, "label": "/catalog/autocomplete-91", "isController": false}, {"data": [[300.0, 19.0], [600.0, 1.0], [400.0, 6.0], [500.0, 4.0]], "isOverall": false, "label": "/order-123", "isController": false}, {"data": [[0.0, 26.0], [100.0, 4.0]], "isOverall": false, "label": "/images/app-modal-tree.png-18", "isController": false}, {"data": [[0.0, 25.0], [100.0, 5.0]], "isOverall": false, "label": "/fonts/Graphik-Bold-Web.woff2-21", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/assets/b165c12b/yii.validation.js-139", "isController": false}, {"data": [[0.0, 27.0], [100.0, 3.0]], "isOverall": false, "label": "/js/yii.validation.min.js-135", "isController": false}, {"data": [[0.0, 26.0], [100.0, 4.0]], "isOverall": false, "label": "/js/jquery.pjax.min.js-134", "isController": false}, {"data": [[0.0, 28.0], [100.0, 2.0]], "isOverall": false, "label": "/css/catalog-page.css-160", "isController": false}, {"data": [[0.0, 28.0], [100.0, 2.0]], "isOverall": false, "label": "/css/basket-page.css-166", "isController": false}, {"data": [[0.0, 28.0], [100.0, 2.0]], "isOverall": false, "label": "/js/basket.min.js-176", "isController": false}, {"data": [[2100.0, 4.0], [1100.0, 1.0], [2200.0, 3.0], [2300.0, 1.0], [2400.0, 1.0], [1300.0, 1.0], [1500.0, 2.0], [1600.0, 2.0], [1700.0, 2.0], [1800.0, 3.0], [1900.0, 3.0], [2000.0, 7.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[0.0, 29.0], [100.0, 1.0]], "isOverall": false, "label": "/css/plugins/slick.css-71", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 32.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 5222.0, "series": [{"data": [[0.0, 5222.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 296.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 32.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 210.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 29.346180555555573, "minX": 1.7023128E12, "maxY": 29.346180555555573, "series": [{"data": [[1.7023128E12, 29.346180555555573]], "isOverall": false, "label": "Autotests30", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7023128E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 83.0, "minX": 1.0, "maxY": 1941.4666666666667, "series": [{"data": [[30.0, 89.83333333333331]], "isOverall": false, "label": "/js/basket.min.js-46", "isController": false}, {"data": [[30.0, 89.83333333333331]], "isOverall": false, "label": "/js/basket.min.js-46-Aggregated", "isController": false}, {"data": [[30.0, 87.53333333333333]], "isOverall": false, "label": "/js/search.min.js-98", "isController": false}, {"data": [[30.0, 87.53333333333333]], "isOverall": false, "label": "/js/search.min.js-98-Aggregated", "isController": false}, {"data": [[16.0, 88.0], [17.0, 91.0], [20.0, 88.5], [21.0, 86.0], [23.0, 86.33333333333333], [13.0, 91.0], [29.0, 87.8], [30.0, 91.57142857142857], [15.0, 93.0]], "isOverall": false, "label": "/js/orderModel.min.js-177", "isController": false}, {"data": [[25.766666666666666, 89.9]], "isOverall": false, "label": "/js/orderModel.min.js-177-Aggregated", "isController": false}, {"data": [[30.0, 88.83333333333334]], "isOverall": false, "label": "/css/loader.css-14", "isController": false}, {"data": [[30.0, 88.83333333333334]], "isOverall": false, "label": "/css/loader.css-14-Aggregated", "isController": false}, {"data": [[30.0, 88.89999999999999]], "isOverall": false, "label": "/css/checkout-modals.css-127", "isController": false}, {"data": [[30.0, 88.89999999999999]], "isOverall": false, "label": "/css/checkout-modals.css-127-Aggregated", "isController": false}, {"data": [[30.0, 86.93333333333332]], "isOverall": false, "label": "/images/btn-location.svg-138", "isController": false}, {"data": [[30.0, 86.93333333333332]], "isOverall": false, "label": "/images/btn-location.svg-138-Aggregated", "isController": false}, {"data": [[30.0, 87.56666666666665]], "isOverall": false, "label": "/css/filters.css-57", "isController": false}, {"data": [[30.0, 87.56666666666665]], "isOverall": false, "label": "/css/filters.css-57-Aggregated", "isController": false}, {"data": [[20.0, 96.0], [21.0, 85.0], [22.0, 85.5], [23.0, 85.0], [25.0, 85.8], [29.0, 89.0], [30.0, 86.99999999999999], [15.0, 94.0]], "isOverall": false, "label": "/js/search.min.js-175", "isController": false}, {"data": [[27.233333333333334, 87.16666666666666]], "isOverall": false, "label": "/js/search.min.js-175-Aggregated", "isController": false}, {"data": [[30.0, 87.10000000000001]], "isOverall": false, "label": "/css/index-page.css-155", "isController": false}, {"data": [[30.0, 87.10000000000001]], "isOverall": false, "label": "/css/index-page.css-155-Aggregated", "isController": false}, {"data": [[30.0, 88.76666666666667]], "isOverall": false, "label": "/css/basket-page.css-83", "isController": false}, {"data": [[30.0, 88.76666666666667]], "isOverall": false, "label": "/css/basket-page.css-83-Aggregated", "isController": false}, {"data": [[30.0, 640.5333333333333]], "isOverall": false, "label": "/-1", "isController": false}, {"data": [[30.0, 640.5333333333333]], "isOverall": false, "label": "/-1-Aggregated", "isController": false}, {"data": [[30.0, 87.03333333333333]], "isOverall": false, "label": "/css/paging.css-58", "isController": false}, {"data": [[30.0, 87.03333333333333]], "isOverall": false, "label": "/css/paging.css-58-Aggregated", "isController": false}, {"data": [[30.0, 88.13333333333333]], "isOverall": false, "label": "/js/catalogItem.min.js-85", "isController": false}, {"data": [[30.0, 88.13333333333333]], "isOverall": false, "label": "/js/catalogItem.min.js-85-Aggregated", "isController": false}, {"data": [[30.0, 103.53333333333332]], "isOverall": false, "label": "/fonts/Graphik-Regular-Web.woff2-23", "isController": false}, {"data": [[30.0, 103.53333333333332]], "isOverall": false, "label": "/fonts/Graphik-Regular-Web.woff2-23-Aggregated", "isController": false}, {"data": [[30.0, 89.43333333333334]], "isOverall": false, "label": "/css/checkout-page.css-121", "isController": false}, {"data": [[30.0, 89.43333333333334]], "isOverall": false, "label": "/css/checkout-page.css-121-Aggregated", "isController": false}, {"data": [[30.0, 92.63333333333335]], "isOverall": false, "label": "/css/product-card.css-59", "isController": false}, {"data": [[30.0, 92.63333333333335]], "isOverall": false, "label": "/css/product-card.css-59-Aggregated", "isController": false}, {"data": [[30.0, 89.1]], "isOverall": false, "label": "/css/checkout-page.css-126", "isController": false}, {"data": [[30.0, 89.1]], "isOverall": false, "label": "/css/checkout-page.css-126-Aggregated", "isController": false}, {"data": [[30.0, 87.63333333333331]], "isOverall": false, "label": "/images/emo-chortle.svg-50", "isController": false}, {"data": [[30.0, 87.63333333333331]], "isOverall": false, "label": "/images/emo-chortle.svg-50-Aggregated", "isController": false}, {"data": [[30.0, 88.43333333333335]], "isOverall": false, "label": "/images/gen-warning.svg-118", "isController": false}, {"data": [[30.0, 88.43333333333335]], "isOverall": false, "label": "/images/gen-warning.svg-118-Aggregated", "isController": false}, {"data": [[30.0, 87.73333333333332]], "isOverall": false, "label": "/css/checkout-modals.css-120", "isController": false}, {"data": [[30.0, 87.73333333333332]], "isOverall": false, "label": "/css/checkout-modals.css-120-Aggregated", "isController": false}, {"data": [[30.0, 88.53333333333333]], "isOverall": false, "label": "/images/app-google-play-logo.png-11", "isController": false}, {"data": [[30.0, 88.53333333333333]], "isOverall": false, "label": "/images/app-google-play-logo.png-11-Aggregated", "isController": false}, {"data": [[30.0, 88.63333333333333]], "isOverall": false, "label": "/js/basket.min.js-34", "isController": false}, {"data": [[30.0, 88.63333333333333]], "isOverall": false, "label": "/js/basket.min.js-34-Aggregated", "isController": false}, {"data": [[30.0, 87.96666666666668]], "isOverall": false, "label": "/images/jcb-96.png-112", "isController": false}, {"data": [[30.0, 87.96666666666668]], "isOverall": false, "label": "/images/jcb-96.png-112-Aggregated", "isController": false}, {"data": [[30.0, 92.76666666666667]], "isOverall": false, "label": "/js/slick.1.8.0.min.js-32", "isController": false}, {"data": [[30.0, 92.76666666666667]], "isOverall": false, "label": "/js/slick.1.8.0.min.js-32-Aggregated", "isController": false}, {"data": [[30.0, 88.96666666666667]], "isOverall": false, "label": "/js/yii.activeForm.min.js-29", "isController": false}, {"data": [[30.0, 88.96666666666667]], "isOverall": false, "label": "/js/yii.activeForm.min.js-29-Aggregated", "isController": false}, {"data": [[30.0, 88.13333333333333]], "isOverall": false, "label": "/images/mir-96.png-110", "isController": false}, {"data": [[30.0, 88.13333333333333]], "isOverall": false, "label": "/images/mir-96.png-110-Aggregated", "isController": false}, {"data": [[30.0, 87.63333333333331]], "isOverall": false, "label": "/css/catalog-item.css-42", "isController": false}, {"data": [[30.0, 87.63333333333331]], "isOverall": false, "label": "/css/catalog-item.css-42-Aggregated", "isController": false}, {"data": [[30.0, 88.46666666666667]], "isOverall": false, "label": "/images/app-icon.png-52", "isController": false}, {"data": [[30.0, 88.46666666666667]], "isOverall": false, "label": "/images/app-icon.png-52-Aggregated", "isController": false}, {"data": [[30.0, 90.19999999999999]], "isOverall": false, "label": "/css/category.css-56", "isController": false}, {"data": [[30.0, 90.19999999999999]], "isOverall": false, "label": "/css/category.css-56-Aggregated", "isController": false}, {"data": [[30.0, 87.50000000000001]], "isOverall": false, "label": "/css/products-in-shops-modal.css-96", "isController": false}, {"data": [[30.0, 87.50000000000001]], "isOverall": false, "label": "/css/products-in-shops-modal.css-96-Aggregated", "isController": false}, {"data": [[17.0, 96.0], [20.0, 96.0], [23.0, 90.0], [24.0, 86.5], [25.0, 93.33333333333333], [27.0, 91.0], [29.0, 99.0], [30.0, 94.38888888888889]], "isOverall": false, "label": "/css/common.css-168", "isController": false}, {"data": [[27.766666666666662, 93.53333333333335]], "isOverall": false, "label": "/css/common.css-168-Aggregated", "isController": false}, {"data": [[30.0, 89.26666666666668]], "isOverall": false, "label": "/css/common.css-69", "isController": false}, {"data": [[30.0, 89.26666666666668]], "isOverall": false, "label": "/css/common.css-69-Aggregated", "isController": false}, {"data": [[30.0, 454.1333333333334]], "isOverall": false, "label": "/shop/map/product/9791-104", "isController": false}, {"data": [[30.0, 454.1333333333334]], "isOverall": false, "label": "/shop/map/product/9791-104-Aggregated", "isController": false}, {"data": [[30.0, 87.26666666666667]], "isOverall": false, "label": "/js/forms.min.js-114", "isController": false}, {"data": [[30.0, 87.26666666666667]], "isOverall": false, "label": "/js/forms.min.js-114-Aggregated", "isController": false}, {"data": [[30.0, 91.76666666666668]], "isOverall": false, "label": "/css/common.css-2", "isController": false}, {"data": [[30.0, 91.76666666666668]], "isOverall": false, "label": "/css/common.css-2-Aggregated", "isController": false}, {"data": [[30.0, 578.5333333333332]], "isOverall": false, "label": "/-68", "isController": false}, {"data": [[30.0, 578.5333333333332]], "isOverall": false, "label": "/-68-Aggregated", "isController": false}, {"data": [[30.0, 88.03333333333335]], "isOverall": false, "label": "/css/plugins/slick.css-94", "isController": false}, {"data": [[30.0, 88.03333333333335]], "isOverall": false, "label": "/css/plugins/slick.css-94-Aggregated", "isController": false}, {"data": [[30.0, 88.63333333333334]], "isOverall": false, "label": "/css/order-complete.css-147", "isController": false}, {"data": [[30.0, 88.63333333333334]], "isOverall": false, "label": "/css/order-complete.css-147-Aggregated", "isController": false}, {"data": [[30.0, 88.5]], "isOverall": false, "label": "/css/catalog-page.css-55", "isController": false}, {"data": [[30.0, 88.5]], "isOverall": false, "label": "/css/catalog-page.css-55-Aggregated", "isController": false}, {"data": [[30.0, 87.73333333333333]], "isOverall": false, "label": "/images/loc-point-heart.svg-48", "isController": false}, {"data": [[30.0, 87.73333333333333]], "isOverall": false, "label": "/images/loc-point-heart.svg-48-Aggregated", "isController": false}, {"data": [[30.0, 342.8333333333333]], "isOverall": false, "label": "/dostavka-107", "isController": false}, {"data": [[30.0, 342.8333333333333]], "isOverall": false, "label": "/dostavka-107-Aggregated", "isController": false}, {"data": [[30.0, 87.66666666666666]], "isOverall": false, "label": "/images/arrow_menu.svg-137", "isController": false}, {"data": [[30.0, 87.66666666666666]], "isOverall": false, "label": "/images/arrow_menu.svg-137-Aggregated", "isController": false}, {"data": [[30.0, 88.5]], "isOverall": false, "label": "/css/catalog-item.css-5", "isController": false}, {"data": [[30.0, 88.5]], "isOverall": false, "label": "/css/catalog-item.css-5-Aggregated", "isController": false}, {"data": [[30.0, 598.8333333333333]], "isOverall": false, "label": "/-151", "isController": false}, {"data": [[30.0, 598.8333333333333]], "isOverall": false, "label": "/-151-Aggregated", "isController": false}, {"data": [[30.0, 87.46666666666665]], "isOverall": false, "label": "/js/search.min.js-156", "isController": false}, {"data": [[30.0, 87.46666666666665]], "isOverall": false, "label": "/js/search.min.js-156-Aggregated", "isController": false}, {"data": [[30.0, 87.33333333333334]], "isOverall": false, "label": "/js/indexPage.min.js-74", "isController": false}, {"data": [[30.0, 87.33333333333334]], "isOverall": false, "label": "/js/indexPage.min.js-74-Aggregated", "isController": false}, {"data": [[25.0, 94.0], [28.0, 87.5], [29.0, 86.4], [30.0, 89.5263157894737]], "isOverall": false, "label": "/css/delivery-status.css-169", "isController": false}, {"data": [[29.23333333333333, 89.03333333333333]], "isOverall": false, "label": "/css/delivery-status.css-169-Aggregated", "isController": false}, {"data": [[20.0, 92.0], [23.0, 91.0], [25.0, 85.5], [28.0, 84.2], [30.0, 87.31578947368422]], "isOverall": false, "label": "/css/order-table.css-172", "isController": false}, {"data": [[28.433333333333326, 86.83333333333334]], "isOverall": false, "label": "/css/order-table.css-172-Aggregated", "isController": false}, {"data": [[30.0, 100.16666666666664]], "isOverall": false, "label": "/js/jquery.matchHeight.0.7.2.min.js-26", "isController": false}, {"data": [[30.0, 100.16666666666664]], "isOverall": false, "label": "/js/jquery.matchHeight.0.7.2.min.js-26-Aggregated", "isController": false}, {"data": [[30.0, 87.4666666666667]], "isOverall": false, "label": "/images/slider-arrow.svg-36", "isController": false}, {"data": [[30.0, 87.4666666666667]], "isOverall": false, "label": "/images/slider-arrow.svg-36-Aggregated", "isController": false}, {"data": [[30.0, 87.00000000000001]], "isOverall": false, "label": "/js/store.min.js-105", "isController": false}, {"data": [[30.0, 87.00000000000001]], "isOverall": false, "label": "/js/store.min.js-105-Aggregated", "isController": false}, {"data": [[30.0, 87.83333333333333]], "isOverall": false, "label": "/images/arrow.svg-54", "isController": false}, {"data": [[30.0, 87.83333333333333]], "isOverall": false, "label": "/images/arrow.svg-54-Aggregated", "isController": false}, {"data": [[30.0, 87.33333333333334]], "isOverall": false, "label": "/images/mastercard-96.png-111", "isController": false}, {"data": [[30.0, 87.33333333333334]], "isOverall": false, "label": "/images/mastercard-96.png-111-Aggregated", "isController": false}, {"data": [[30.0, 93.33333333333331]], "isOverall": false, "label": "/city/get-by-ip-35", "isController": false}, {"data": [[30.0, 93.33333333333331]], "isOverall": false, "label": "/city/get-by-ip-35-Aggregated", "isController": false}, {"data": [[25.0, 1116.0], [28.0, 1139.0], [29.0, 1014.0], [30.0, 826.2631578947369]], "isOverall": false, "label": "/customer-167", "isController": false}, {"data": [[29.4, 911.0000000000001]], "isOverall": false, "label": "/customer-167-Aggregated", "isController": false}, {"data": [[25.0, 122.0], [28.0, 103.33333333333333], [29.0, 94.14285714285714], [30.0, 97.05263157894737]], "isOverall": false, "label": "/customer-167-0", "isController": false}, {"data": [[29.4, 97.83333333333333]], "isOverall": false, "label": "/customer-167-0-Aggregated", "isController": false}, {"data": [[25.0, 94.0], [28.0, 95.66666666666667], [29.0, 89.71428571428572], [30.0, 94.36842105263158]], "isOverall": false, "label": "/customer-167-1", "isController": false}, {"data": [[29.4, 93.4]], "isOverall": false, "label": "/customer-167-1-Aggregated", "isController": false}, {"data": [[20.0, 95.0], [22.0, 91.0], [25.0, 85.4], [27.0, 86.0], [28.0, 84.66666666666667], [30.0, 89.42105263157895]], "isOverall": false, "label": "/css/cabinet.css-173", "isController": false}, {"data": [[28.26666666666667, 88.39999999999998]], "isOverall": false, "label": "/css/cabinet.css-173-Aggregated", "isController": false}, {"data": [[30.0, 87.03333333333332]], "isOverall": false, "label": "/css/static-page.css-108", "isController": false}, {"data": [[30.0, 87.03333333333332]], "isOverall": false, "label": "/css/static-page.css-108-Aggregated", "isController": false}, {"data": [[25.0, 900.0], [28.0, 940.0], [29.0, 830.0], [30.0, 634.4736842105264]], "isOverall": false, "label": "/customer-167-2", "isController": false}, {"data": [[29.4, 719.5000000000001]], "isOverall": false, "label": "/customer-167-2-Aggregated", "isController": false}, {"data": [[30.0, 88.86666666666666]], "isOverall": false, "label": "/css/plugins/slick.css-41", "isController": false}, {"data": [[30.0, 88.86666666666666]], "isOverall": false, "label": "/css/plugins/slick.css-41-Aggregated", "isController": false}, {"data": [[30.0, 87.7]], "isOverall": false, "label": "/images/present-bg.svg-101", "isController": false}, {"data": [[30.0, 87.7]], "isOverall": false, "label": "/images/present-bg.svg-101-Aggregated", "isController": false}, {"data": [[30.0, 86.76666666666665]], "isOverall": false, "label": "/images/modal-close.svg-106", "isController": false}, {"data": [[30.0, 86.76666666666665]], "isOverall": false, "label": "/images/modal-close.svg-106-Aggregated", "isController": false}, {"data": [[30.0, 88.56666666666665]], "isOverall": false, "label": "/css/filters.css-162", "isController": false}, {"data": [[30.0, 88.56666666666665]], "isOverall": false, "label": "/css/filters.css-162-Aggregated", "isController": false}, {"data": [[2.0, 95.0], [3.0, 84.0], [4.0, 86.0], [5.0, 86.0], [6.0, 87.0], [7.0, 85.0], [8.0, 86.0], [9.0, 87.0], [10.0, 85.0], [11.0, 87.0], [12.0, 84.0], [13.0, 86.0], [14.0, 85.0], [15.0, 86.0], [16.0, 94.0], [1.0, 93.0], [17.0, 89.0], [18.0, 93.0], [19.0, 84.0], [20.0, 88.0], [21.0, 86.0], [22.0, 85.0], [23.0, 87.0], [24.0, 86.0], [25.0, 90.0], [26.0, 86.0], [27.0, 83.0], [28.0, 103.0], [29.0, 100.0], [30.0, 88.0]], "isOverall": false, "label": "/js/orderModel.min.js-183", "isController": false}, {"data": [[15.5, 88.13333333333331]], "isOverall": false, "label": "/js/orderModel.min.js-183-Aggregated", "isController": false}, {"data": [[30.0, 88.00000000000001]], "isOverall": false, "label": "/images/close-modal.svg-119", "isController": false}, {"data": [[30.0, 88.00000000000001]], "isOverall": false, "label": "/images/close-modal.svg-119-Aggregated", "isController": false}, {"data": [[30.0, 89.13333333333334]], "isOverall": false, "label": "/images/basket-icon-green.svg-25", "isController": false}, {"data": [[30.0, 89.13333333333334]], "isOverall": false, "label": "/images/basket-icon-green.svg-25-Aggregated", "isController": false}, {"data": [[30.0, 86.96666666666667]], "isOverall": false, "label": "/css/products-in-shops-modal.css-125", "isController": false}, {"data": [[30.0, 86.96666666666667]], "isOverall": false, "label": "/css/products-in-shops-modal.css-125-Aggregated", "isController": false}, {"data": [[30.0, 88.7]], "isOverall": false, "label": "/images/app-apple-logo.png-10", "isController": false}, {"data": [[30.0, 88.7]], "isOverall": false, "label": "/images/app-apple-logo.png-10-Aggregated", "isController": false}, {"data": [[30.0, 93.76666666666671]], "isOverall": false, "label": "/js/jquery.nicescroll.3.7.6.min.js-8", "isController": false}, {"data": [[30.0, 93.76666666666671]], "isOverall": false, "label": "/js/jquery.nicescroll.3.7.6.min.js-8-Aggregated", "isController": false}, {"data": [[30.0, 86.8]], "isOverall": false, "label": "/images/close-modal-w.svg-65", "isController": false}, {"data": [[30.0, 86.8]], "isOverall": false, "label": "/images/close-modal-w.svg-65-Aggregated", "isController": false}, {"data": [[2.0, 92.0], [9.0, 85.5], [10.0, 84.0], [11.0, 85.6], [3.0, 91.0], [13.0, 85.0], [15.0, 90.0], [16.0, 89.0], [4.0, 85.0], [20.0, 88.5], [21.0, 86.66666666666667], [24.0, 84.0], [25.0, 87.75], [28.0, 85.66666666666667], [29.0, 84.0], [30.0, 86.0]], "isOverall": false, "label": "/css/cabinet.css-181", "isController": false}, {"data": [[17.3, 86.63333333333333]], "isOverall": false, "label": "/css/cabinet.css-181-Aggregated", "isController": false}, {"data": [[30.0, 88.73333333333332]], "isOverall": false, "label": "/images/sale_arrow_small.svg-37", "isController": false}, {"data": [[30.0, 88.73333333333332]], "isOverall": false, "label": "/images/sale_arrow_small.svg-37-Aggregated", "isController": false}, {"data": [[30.0, 88.8333333333333]], "isOverall": false, "label": "/images/app-huawei-logo.png-15", "isController": false}, {"data": [[30.0, 88.8333333333333]], "isOverall": false, "label": "/images/app-huawei-logo.png-15-Aggregated", "isController": false}, {"data": [[30.0, 588.5666666666667]], "isOverall": false, "label": "/site/login-38", "isController": false}, {"data": [[30.0, 588.5666666666667]], "isOverall": false, "label": "/site/login-38-Aggregated", "isController": false}, {"data": [[9.0, 818.0], [11.0, 682.5], [12.0, 800.5], [3.0, 763.0], [13.0, 1004.6666666666666], [15.0, 1638.0], [4.0, 759.0], [20.0, 1067.5], [23.0, 691.5], [24.0, 1136.5], [25.0, 769.0], [28.0, 1054.5], [29.0, 1020.75], [30.0, 883.0]], "isOverall": false, "label": "/customer/order-179", "isController": false}, {"data": [[19.13333333333333, 908.8333333333333]], "isOverall": false, "label": "/customer/order-179-Aggregated", "isController": false}, {"data": [[30.0, 93.36666666666667]], "isOverall": false, "label": "/css/common.css-40", "isController": false}, {"data": [[30.0, 93.36666666666667]], "isOverall": false, "label": "/css/common.css-40-Aggregated", "isController": false}, {"data": [[30.0, 87.20000000000002]], "isOverall": false, "label": "/images/visa-96.png-109", "isController": false}, {"data": [[30.0, 87.20000000000002]], "isOverall": false, "label": "/images/visa-96.png-109-Aggregated", "isController": false}, {"data": [[30.0, 89.43333333333334]], "isOverall": false, "label": "/css/plugins/slick.css-3", "isController": false}, {"data": [[30.0, 89.43333333333334]], "isOverall": false, "label": "/css/plugins/slick.css-3-Aggregated", "isController": false}, {"data": [[30.0, 88.03333333333335]], "isOverall": false, "label": "/css/category.css-78", "isController": false}, {"data": [[30.0, 88.03333333333335]], "isOverall": false, "label": "/css/category.css-78-Aggregated", "isController": false}, {"data": [[30.0, 89.2]], "isOverall": false, "label": "/images/basket-icon-gray.svg-24", "isController": false}, {"data": [[30.0, 89.2]], "isOverall": false, "label": "/images/basket-icon-gray.svg-24-Aggregated", "isController": false}, {"data": [[30.0, 267.70000000000005]], "isOverall": false, "label": "/js/forms.min.js-100", "isController": false}, {"data": [[30.0, 267.70000000000005]], "isOverall": false, "label": "/js/forms.min.js-100-Aggregated", "isController": false}, {"data": [[30.0, 92.79999999999998]], "isOverall": false, "label": "/css/common.css-146", "isController": false}, {"data": [[30.0, 92.79999999999998]], "isOverall": false, "label": "/css/common.css-146-Aggregated", "isController": false}, {"data": [[17.0, 87.0], [20.0, 94.0], [21.0, 84.0], [13.0, 92.0], [28.0, 86.0], [29.0, 89.83333333333333], [30.0, 87.83333333333334], [15.0, 87.66666666666667]], "isOverall": false, "label": "/js/forms.min.js-178", "isController": false}, {"data": [[25.100000000000005, 88.43333333333335]], "isOverall": false, "label": "/js/forms.min.js-178-Aggregated", "isController": false}, {"data": [[30.0, 95.1]], "isOverall": false, "label": "/fonts/Graphik-Medium-Web.woff2-22", "isController": false}, {"data": [[30.0, 95.1]], "isOverall": false, "label": "/fonts/Graphik-Medium-Web.woff2-22-Aggregated", "isController": false}, {"data": [[30.0, 92.89999999999998]], "isOverall": false, "label": "/css/common.css-153", "isController": false}, {"data": [[30.0, 92.89999999999998]], "isOverall": false, "label": "/css/common.css-153-Aggregated", "isController": false}, {"data": [[30.0, 88.93333333333332]], "isOverall": false, "label": "/js/catalogItem.min.js-97", "isController": false}, {"data": [[30.0, 88.93333333333332]], "isOverall": false, "label": "/js/catalogItem.min.js-97-Aggregated", "isController": false}, {"data": [[30.0, 114.1]], "isOverall": false, "label": "/order/index-144", "isController": false}, {"data": [[30.0, 114.1]], "isOverall": false, "label": "/order/index-144-Aggregated", "isController": false}, {"data": [[30.0, 88.50000000000001]], "isOverall": false, "label": "/css/index-page.css-43", "isController": false}, {"data": [[30.0, 88.50000000000001]], "isOverall": false, "label": "/css/index-page.css-43-Aggregated", "isController": false}, {"data": [[30.0, 185.66666666666666]], "isOverall": false, "label": "/images/app-modal-phone.png-16", "isController": false}, {"data": [[30.0, 185.66666666666666]], "isOverall": false, "label": "/images/app-modal-phone.png-16-Aggregated", "isController": false}, {"data": [[30.0, 86.63333333333335]], "isOverall": false, "label": "/css/catalog-page.css-77", "isController": false}, {"data": [[30.0, 86.63333333333335]], "isOverall": false, "label": "/css/catalog-page.css-77-Aggregated", "isController": false}, {"data": [[30.0, 89.60000000000001]], "isOverall": false, "label": "/css/paging.css-163", "isController": false}, {"data": [[30.0, 89.60000000000001]], "isOverall": false, "label": "/css/paging.css-163-Aggregated", "isController": false}, {"data": [[30.0, 91.66666666666669]], "isOverall": false, "label": "/css/product-card.css-95", "isController": false}, {"data": [[30.0, 91.66666666666669]], "isOverall": false, "label": "/css/product-card.css-95-Aggregated", "isController": false}, {"data": [[30.0, 89.83333333333333]], "isOverall": false, "label": "/css/jquery.fancybox.min.css-13", "isController": false}, {"data": [[30.0, 89.83333333333333]], "isOverall": false, "label": "/css/jquery.fancybox.min.css-13-Aggregated", "isController": false}, {"data": [[30.0, 88.53333333333333]], "isOverall": false, "label": "/js/js.cookie.3.0.1.min.js-27", "isController": false}, {"data": [[30.0, 88.53333333333333]], "isOverall": false, "label": "/js/js.cookie.3.0.1.min.js-27-Aggregated", "isController": false}, {"data": [[30.0, 87.36666666666666]], "isOverall": false, "label": "/images/veh-lorry-2.svg-49", "isController": false}, {"data": [[30.0, 87.36666666666666]], "isOverall": false, "label": "/images/veh-lorry-2.svg-49-Aggregated", "isController": false}, {"data": [[30.0, 87.83333333333336]], "isOverall": false, "label": "/js/search.min.js-131", "isController": false}, {"data": [[30.0, 87.83333333333336]], "isOverall": false, "label": "/js/search.min.js-131-Aggregated", "isController": false}, {"data": [[30.0, 88.1]], "isOverall": false, "label": "/css/products-in-shops-modal.css-60", "isController": false}, {"data": [[30.0, 88.1]], "isOverall": false, "label": "/css/products-in-shops-modal.css-60-Aggregated", "isController": false}, {"data": [[30.0, 94.03333333333333]], "isOverall": false, "label": "/order/update-delivery-type-dependent-info-142", "isController": false}, {"data": [[30.0, 94.03333333333333]], "isOverall": false, "label": "/order/update-delivery-type-dependent-info-142-Aggregated", "isController": false}, {"data": [[30.0, 88.06666666666668]], "isOverall": false, "label": "/js/forms.min.js-51", "isController": false}, {"data": [[30.0, 88.06666666666668]], "isOverall": false, "label": "/js/forms.min.js-51-Aggregated", "isController": false}, {"data": [[30.0, 87.86666666666667]], "isOverall": false, "label": "/css/catalog-item.css-70", "isController": false}, {"data": [[30.0, 87.86666666666667]], "isOverall": false, "label": "/css/catalog-item.css-70-Aggregated", "isController": false}, {"data": [[30.0, 87.03333333333333]], "isOverall": false, "label": "/images/delivery-icon.svg-90", "isController": false}, {"data": [[30.0, 87.03333333333333]], "isOverall": false, "label": "/images/delivery-icon.svg-90-Aggregated", "isController": false}, {"data": [[30.0, 89.16666666666666]], "isOverall": false, "label": "/js/indexPage.min.js-157", "isController": false}, {"data": [[30.0, 89.16666666666666]], "isOverall": false, "label": "/js/indexPage.min.js-157-Aggregated", "isController": false}, {"data": [[22.0, 92.0], [25.0, 91.5], [28.0, 88.66666666666667], [29.0, 84.66666666666667], [30.0, 88.89473684210527]], "isOverall": false, "label": "/css/paging.css-170", "isController": false}, {"data": [[28.76666666666667, 88.89999999999999]], "isOverall": false, "label": "/css/paging.css-170-Aggregated", "isController": false}, {"data": [[30.0, 88.86666666666667]], "isOverall": false, "label": "/css/index-page.css-4", "isController": false}, {"data": [[30.0, 88.86666666666667]], "isOverall": false, "label": "/css/index-page.css-4-Aggregated", "isController": false}, {"data": [[30.0, 102.36666666666666]], "isOverall": false, "label": "/order-123-0", "isController": false}, {"data": [[30.0, 102.36666666666666]], "isOverall": false, "label": "/order-123-0-Aggregated", "isController": false}, {"data": [[30.0, 90.13333333333333]], "isOverall": false, "label": "/js/search.min.js-44", "isController": false}, {"data": [[30.0, 90.13333333333333]], "isOverall": false, "label": "/js/search.min.js-44-Aggregated", "isController": false}, {"data": [[30.0, 90.03333333333333]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-64", "isController": false}, {"data": [[30.0, 90.03333333333333]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-64-Aggregated", "isController": false}, {"data": [[30.0, 87.6]], "isOverall": false, "label": "/images/counter-minus.svg-103", "isController": false}, {"data": [[30.0, 87.6]], "isOverall": false, "label": "/images/counter-minus.svg-103-Aggregated", "isController": false}, {"data": [[30.0, 89.73333333333333]], "isOverall": false, "label": "/js/search.min.js-148", "isController": false}, {"data": [[30.0, 89.73333333333333]], "isOverall": false, "label": "/js/search.min.js-148-Aggregated", "isController": false}, {"data": [[30.0, 92.53333333333333]], "isOverall": false, "label": "/js/jquery.fancybox.3.5.6.min.js-53", "isController": false}, {"data": [[30.0, 92.53333333333333]], "isOverall": false, "label": "/js/jquery.fancybox.3.5.6.min.js-53-Aggregated", "isController": false}, {"data": [[2.0, 93.0], [10.0, 84.0], [11.0, 87.0], [12.0, 85.0], [3.0, 93.0], [13.0, 84.5], [17.0, 90.0], [18.0, 85.0], [21.0, 87.5], [23.0, 87.66666666666667], [6.0, 83.0], [25.0, 85.0], [27.0, 83.0], [29.0, 89.5], [30.0, 89.0]], "isOverall": false, "label": "/css/order-information.css-182", "isController": false}, {"data": [[18.166666666666664, 87.0]], "isOverall": false, "label": "/css/order-information.css-182-Aggregated", "isController": false}, {"data": [[30.0, 89.0]], "isOverall": false, "label": "/css/plugins/slick.css-152", "isController": false}, {"data": [[30.0, 89.0]], "isOverall": false, "label": "/css/plugins/slick.css-152-Aggregated", "isController": false}, {"data": [[30.0, 88.86666666666666]], "isOverall": false, "label": "/js/orderModel.min.js-128", "isController": false}, {"data": [[30.0, 88.86666666666666]], "isOverall": false, "label": "/js/orderModel.min.js-128-Aggregated", "isController": false}, {"data": [[30.0, 86.89999999999998]], "isOverall": false, "label": "/js/basket.min.js-75", "isController": false}, {"data": [[30.0, 86.89999999999998]], "isOverall": false, "label": "/js/basket.min.js-75-Aggregated", "isController": false}, {"data": [[30.0, 88.56666666666665]], "isOverall": false, "label": "/css/category.css-161", "isController": false}, {"data": [[30.0, 88.56666666666665]], "isOverall": false, "label": "/css/category.css-161-Aggregated", "isController": false}, {"data": [[30.0, 99.03333333333333]], "isOverall": false, "label": "/css/paging.css-80", "isController": false}, {"data": [[30.0, 99.03333333333333]], "isOverall": false, "label": "/css/paging.css-80-Aggregated", "isController": false}, {"data": [[30.0, 310.96666666666664]], "isOverall": false, "label": "/order-123-1", "isController": false}, {"data": [[30.0, 310.96666666666664]], "isOverall": false, "label": "/order-123-1-Aggregated", "isController": false}, {"data": [[30.0, 91.80000000000001]], "isOverall": false, "label": "/css/common.css-124", "isController": false}, {"data": [[30.0, 91.80000000000001]], "isOverall": false, "label": "/css/common.css-124-Aggregated", "isController": false}, {"data": [[30.0, 89.46666666666667]], "isOverall": false, "label": "/images/search-icon.svg-19", "isController": false}, {"data": [[30.0, 89.46666666666667]], "isOverall": false, "label": "/images/search-icon.svg-19-Aggregated", "isController": false}, {"data": [[30.0, 93.20000000000002]], "isOverall": false, "label": "/basket/recalculate-basket-122", "isController": false}, {"data": [[30.0, 93.20000000000002]], "isOverall": false, "label": "/basket/recalculate-basket-122-Aggregated", "isController": false}, {"data": [[30.0, 98.66666666666669]], "isOverall": false, "label": "/site/login-62", "isController": false}, {"data": [[30.0, 98.66666666666669]], "isOverall": false, "label": "/site/login-62-Aggregated", "isController": false}, {"data": [[30.0, 91.36666666666665]], "isOverall": false, "label": "/js/forms.min.js-159", "isController": false}, {"data": [[30.0, 91.36666666666665]], "isOverall": false, "label": "/js/forms.min.js-159-Aggregated", "isController": false}, {"data": [[30.0, 88.26666666666667]], "isOverall": false, "label": "/css/jquery.fias.min.css-129", "isController": false}, {"data": [[30.0, 88.26666666666667]], "isOverall": false, "label": "/css/jquery.fias.min.css-129-Aggregated", "isController": false}, {"data": [[30.0, 89.36666666666667]], "isOverall": false, "label": "/fonts/graphik.css-12", "isController": false}, {"data": [[30.0, 89.36666666666667]], "isOverall": false, "label": "/fonts/graphik.css-12-Aggregated", "isController": false}, {"data": [[30.0, 94.70000000000002]], "isOverall": false, "label": "/site/login-67", "isController": false}, {"data": [[30.0, 94.70000000000002]], "isOverall": false, "label": "/site/login-67-Aggregated", "isController": false}, {"data": [[2.0, 94.0], [9.0, 87.6], [11.0, 89.0], [12.0, 84.0], [3.0, 85.0], [13.0, 85.0], [15.0, 85.5], [1.0, 95.0], [18.0, 94.0], [20.0, 87.75], [5.0, 85.0], [22.0, 86.0], [23.0, 88.0], [24.0, 86.0], [25.0, 85.5], [28.0, 84.33333333333333], [29.0, 89.0], [30.0, 88.0]], "isOverall": false, "label": "/css/basket-table.css-180", "isController": false}, {"data": [[16.433333333333337, 87.36666666666666]], "isOverall": false, "label": "/css/basket-table.css-180-Aggregated", "isController": false}, {"data": [[30.0, 89.06666666666666]], "isOverall": false, "label": "/images/counter-minus-dis.svg-86", "isController": false}, {"data": [[30.0, 89.06666666666666]], "isOverall": false, "label": "/images/counter-minus-dis.svg-86-Aggregated", "isController": false}, {"data": [[30.0, 89.0]], "isOverall": false, "label": "/js/basket.min.js-158", "isController": false}, {"data": [[30.0, 89.0]], "isOverall": false, "label": "/js/basket.min.js-158-Aggregated", "isController": false}, {"data": [[30.0, 88.63333333333334]], "isOverall": false, "label": "/images/basket-icon.svg-20", "isController": false}, {"data": [[30.0, 88.63333333333334]], "isOverall": false, "label": "/images/basket-icon.svg-20-Aggregated", "isController": false}, {"data": [[30.0, 88.76666666666667]], "isOverall": false, "label": "/images/favicon.ico-66", "isController": false}, {"data": [[30.0, 88.76666666666667]], "isOverall": false, "label": "/images/favicon.ico-66-Aggregated", "isController": false}, {"data": [[30.0, 86.96666666666668]], "isOverall": false, "label": "/css/images/fias-spinner.png-141", "isController": false}, {"data": [[30.0, 86.96666666666668]], "isOverall": false, "label": "/css/images/fias-spinner.png-141-Aggregated", "isController": false}, {"data": [[30.0, 89.93333333333334]], "isOverall": false, "label": "/css/basket-page.css-102", "isController": false}, {"data": [[30.0, 89.93333333333334]], "isOverall": false, "label": "/css/basket-page.css-102-Aggregated", "isController": false}, {"data": [[30.0, 88.86666666666666]], "isOverall": false, "label": "/assets/b165c12b/yii.js-136", "isController": false}, {"data": [[30.0, 88.86666666666666]], "isOverall": false, "label": "/assets/b165c12b/yii.js-136-Aggregated", "isController": false}, {"data": [[30.0, 88.80000000000001]], "isOverall": false, "label": "/images/sho-basket-love.svg-47", "isController": false}, {"data": [[30.0, 88.80000000000001]], "isOverall": false, "label": "/images/sho-basket-love.svg-47-Aggregated", "isController": false}, {"data": [[30.0, 87.43333333333334]], "isOverall": false, "label": "/images/in-shop-icon.svg-89", "isController": false}, {"data": [[30.0, 87.43333333333334]], "isOverall": false, "label": "/images/in-shop-icon.svg-89-Aggregated", "isController": false}, {"data": [[30.0, 87.30000000000001]], "isOverall": false, "label": "/js/order.min.js-130", "isController": false}, {"data": [[30.0, 87.30000000000001]], "isOverall": false, "label": "/js/order.min.js-130-Aggregated", "isController": false}, {"data": [[30.0, 304.8]], "isOverall": false, "label": "/basket-116", "isController": false}, {"data": [[30.0, 304.8]], "isOverall": false, "label": "/basket-116-Aggregated", "isController": false}, {"data": [[30.0, 87.83333333333334]], "isOverall": false, "label": "/js/jquery.fias.min.js-133", "isController": false}, {"data": [[30.0, 87.83333333333334]], "isOverall": false, "label": "/js/jquery.fias.min.js-133-Aggregated", "isController": false}, {"data": [[30.0, 92.96666666666667]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-132", "isController": false}, {"data": [[30.0, 92.96666666666667]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-132-Aggregated", "isController": false}, {"data": [[16.0, 95.0], [20.0, 86.0], [21.0, 86.0], [22.0, 86.0], [23.0, 84.0], [24.0, 84.0], [25.0, 84.33333333333333], [29.0, 88.66666666666667], [30.0, 88.5625], [15.0, 92.0]], "isOverall": false, "label": "/css/order-again.css-174", "isController": false}, {"data": [[26.8, 87.83333333333334]], "isOverall": false, "label": "/css/order-again.css-174-Aggregated", "isController": false}, {"data": [[30.0, 91.33333333333333]], "isOverall": false, "label": "/js/twitter.typeahead.0.11.1.min.js-6", "isController": false}, {"data": [[30.0, 91.33333333333333]], "isOverall": false, "label": "/js/twitter.typeahead.0.11.1.min.js-6-Aggregated", "isController": false}, {"data": [[30.0, 86.83333333333336]], "isOverall": false, "label": "/images/lorry.svg-117", "isController": false}, {"data": [[30.0, 86.83333333333336]], "isOverall": false, "label": "/images/lorry.svg-117-Aggregated", "isController": false}, {"data": [[30.0, 88.83333333333331]], "isOverall": false, "label": "/js/common.min.js-31", "isController": false}, {"data": [[30.0, 88.83333333333331]], "isOverall": false, "label": "/js/common.min.js-31-Aggregated", "isController": false}, {"data": [[30.0, 88.33333333333331]], "isOverall": false, "label": "/css/index-page.css-72", "isController": false}, {"data": [[30.0, 88.33333333333331]], "isOverall": false, "label": "/css/index-page.css-72-Aggregated", "isController": false}, {"data": [[30.0, 92.03333333333336]], "isOverall": false, "label": "/css/common.css-93", "isController": false}, {"data": [[30.0, 92.03333333333336]], "isOverall": false, "label": "/css/common.css-93-Aggregated", "isController": false}, {"data": [[30.0, 87.79999999999997]], "isOverall": false, "label": "/css/filters.css-79", "isController": false}, {"data": [[30.0, 87.79999999999997]], "isOverall": false, "label": "/css/filters.css-79-Aggregated", "isController": false}, {"data": [[30.0, 86.76666666666664]], "isOverall": false, "label": "/js/forms.min.js-76", "isController": false}, {"data": [[30.0, 86.76666666666664]], "isOverall": false, "label": "/js/forms.min.js-76-Aggregated", "isController": false}, {"data": [[30.0, 93.1]], "isOverall": false, "label": "/order/render-delivery-time-dropdown-143", "isController": false}, {"data": [[30.0, 93.1]], "isOverall": false, "label": "/order/render-delivery-time-dropdown-143-Aggregated", "isController": false}, {"data": [[9.0, 99.0], [11.0, 96.25], [12.0, 125.0], [3.0, 103.0], [13.0, 100.0], [15.0, 94.0], [4.0, 97.0], [20.0, 98.5], [23.0, 101.5], [24.0, 101.5], [25.0, 94.0], [28.0, 96.5], [29.0, 93.75], [30.0, 100.0]], "isOverall": false, "label": "/customer/order-179-0", "isController": false}, {"data": [[19.13333333333333, 99.16666666666666]], "isOverall": false, "label": "/customer/order-179-0-Aggregated", "isController": false}, {"data": [[30.0, 88.03333333333335]], "isOverall": false, "label": "/js/indexPage.min.js-33", "isController": false}, {"data": [[30.0, 88.03333333333335]], "isOverall": false, "label": "/js/indexPage.min.js-33-Aggregated", "isController": false}, {"data": [[30.0, 87.96666666666667]], "isOverall": false, "label": "/js/search.min.js-73", "isController": false}, {"data": [[30.0, 87.96666666666667]], "isOverall": false, "label": "/js/search.min.js-73-Aggregated", "isController": false}, {"data": [[30.0, 89.93333333333335]], "isOverall": false, "label": "/css/product-card.css-164", "isController": false}, {"data": [[30.0, 89.93333333333335]], "isOverall": false, "label": "/css/product-card.css-164-Aggregated", "isController": false}, {"data": [[9.0, 625.0], [11.0, 495.75], [12.0, 586.5], [3.0, 566.0], [13.0, 814.0], [15.0, 1451.0], [4.0, 568.0], [20.0, 880.0], [23.0, 495.0], [24.0, 944.0], [25.0, 587.5], [28.0, 869.5], [29.0, 834.5], [30.0, 684.0]], "isOverall": false, "label": "/customer/order-179-2", "isController": false}, {"data": [[19.13333333333333, 718.5666666666666]], "isOverall": false, "label": "/customer/order-179-2-Aggregated", "isController": false}, {"data": [[9.0, 94.0], [11.0, 90.25], [12.0, 89.0], [3.0, 94.0], [13.0, 90.66666666666667], [15.0, 93.0], [4.0, 94.0], [20.0, 88.5], [23.0, 95.0], [24.0, 91.0], [25.0, 87.5], [28.0, 88.5], [29.0, 92.5], [30.0, 98.0]], "isOverall": false, "label": "/customer/order-179-1", "isController": false}, {"data": [[19.13333333333333, 91.0]], "isOverall": false, "label": "/customer/order-179-1-Aggregated", "isController": false}, {"data": [[30.0, 89.46666666666667]], "isOverall": false, "label": "/css/basket-page.css-61", "isController": false}, {"data": [[30.0, 89.46666666666667]], "isOverall": false, "label": "/css/basket-page.css-61-Aggregated", "isController": false}, {"data": [[30.0, 87.86666666666667]], "isOverall": false, "label": "/css/products-in-shops-modal.css-82", "isController": false}, {"data": [[30.0, 87.86666666666667]], "isOverall": false, "label": "/css/products-in-shops-modal.css-82-Aggregated", "isController": false}, {"data": [[30.0, 976.1999999999998]], "isOverall": false, "label": "/catalog/ptitsy/korma/popugai_srednie/rio_korm_dlya_srednikh_popugaev-92", "isController": false}, {"data": [[30.0, 976.1999999999998]], "isOverall": false, "label": "/catalog/ptitsy/korma/popugai_srednie/rio_korm_dlya_srednikh_popugaev-92-Aggregated", "isController": false}, {"data": [[30.0, 88.13333333333334]], "isOverall": false, "label": "/images/status-available.svg-87", "isController": false}, {"data": [[30.0, 88.13333333333334]], "isOverall": false, "label": "/images/status-available.svg-87-Aggregated", "isController": false}, {"data": [[30.0, 1088.8666666666666]], "isOverall": false, "label": "/catalog/sobaki/korma_sukhie/wonderfur/wonderfur_adult_all_breeds_yagnenok_ris_dlya_sobak-84", "isController": false}, {"data": [[30.0, 1088.8666666666666]], "isOverall": false, "label": "/catalog/sobaki/korma_sukhie/wonderfur/wonderfur_adult_all_breeds_yagnenok_ris_dlya_sobak-84-Aggregated", "isController": false}, {"data": [[30.0, 90.73333333333332]], "isOverall": false, "label": "/js/ua-parser.2.0.0-alpha.2.min.js-30", "isController": false}, {"data": [[30.0, 90.73333333333332]], "isOverall": false, "label": "/js/ua-parser.2.0.0-alpha.2.min.js-30-Aggregated", "isController": false}, {"data": [[30.0, 87.00000000000001]], "isOverall": false, "label": "/js/forms.min.js-149", "isController": false}, {"data": [[30.0, 87.00000000000001]], "isOverall": false, "label": "/js/forms.min.js-149-Aggregated", "isController": false}, {"data": [[23.0, 91.0], [25.0, 93.0], [28.0, 89.0], [29.0, 85.75], [30.0, 86.94736842105263]], "isOverall": false, "label": "/css/pay-status.css-171", "isController": false}, {"data": [[29.133333333333333, 87.46666666666665]], "isOverall": false, "label": "/css/pay-status.css-171-Aggregated", "isController": false}, {"data": [[30.0, 89.13333333333334]], "isOverall": false, "label": "/js/yii.min.js-28", "isController": false}, {"data": [[30.0, 89.13333333333334]], "isOverall": false, "label": "/js/yii.min.js-28-Aggregated", "isController": false}, {"data": [[30.0, 93.89999999999999]], "isOverall": false, "label": "/js/jquery.min.js-7", "isController": false}, {"data": [[30.0, 93.89999999999999]], "isOverall": false, "label": "/js/jquery.min.js-7-Aggregated", "isController": false}, {"data": [[30.0, 93.0]], "isOverall": false, "label": "/site/login-38-0", "isController": false}, {"data": [[30.0, 93.0]], "isOverall": false, "label": "/site/login-38-0-Aggregated", "isController": false}, {"data": [[30.0, 495.33333333333326]], "isOverall": false, "label": "/site/login-38-1", "isController": false}, {"data": [[30.0, 495.33333333333326]], "isOverall": false, "label": "/site/login-38-1-Aggregated", "isController": false}, {"data": [[30.0, 90.23333333333335]], "isOverall": false, "label": "/basket/add-to-basket-115", "isController": false}, {"data": [[30.0, 90.23333333333335]], "isOverall": false, "label": "/basket/add-to-basket-115-Aggregated", "isController": false}, {"data": [[30.0, 87.5]], "isOverall": false, "label": "/js/jquery.pjax.min.js-63", "isController": false}, {"data": [[30.0, 87.5]], "isOverall": false, "label": "/js/jquery.pjax.min.js-63-Aggregated", "isController": false}, {"data": [[30.0, 89.40000000000002]], "isOverall": false, "label": "/css/product-card.css-81", "isController": false}, {"data": [[30.0, 89.40000000000002]], "isOverall": false, "label": "/css/product-card.css-81-Aggregated", "isController": false}, {"data": [[30.0, 88.79999999999998]], "isOverall": false, "label": "/images/counter-plus.svg-88", "isController": false}, {"data": [[30.0, 88.79999999999998]], "isOverall": false, "label": "/images/counter-plus.svg-88-Aggregated", "isController": false}, {"data": [[30.0, 87.63333333333333]], "isOverall": false, "label": "/css/products-in-shops-modal.css-165", "isController": false}, {"data": [[30.0, 87.63333333333333]], "isOverall": false, "label": "/css/products-in-shops-modal.css-165-Aggregated", "isController": false}, {"data": [[30.0, 87.5]], "isOverall": false, "label": "/js/search.min.js-9", "isController": false}, {"data": [[30.0, 87.5]], "isOverall": false, "label": "/js/search.min.js-9-Aggregated", "isController": false}, {"data": [[30.0, 90.33333333333334]], "isOverall": false, "label": "/images/logo.svg-17", "isController": false}, {"data": [[30.0, 90.33333333333334]], "isOverall": false, "label": "/images/logo.svg-17-Aggregated", "isController": false}, {"data": [[30.0, 86.96666666666667]], "isOverall": false, "label": "/js/forms.min.js-140", "isController": false}, {"data": [[30.0, 86.96666666666667]], "isOverall": false, "label": "/js/forms.min.js-140-Aggregated", "isController": false}, {"data": [[30.0, 88.3]], "isOverall": false, "label": "/images/deco01.png-150", "isController": false}, {"data": [[30.0, 88.3]], "isOverall": false, "label": "/images/deco01.png-150-Aggregated", "isController": false}, {"data": [[30.0, 88.60000000000001]], "isOverall": false, "label": "/js/indexPage.min.js-45", "isController": false}, {"data": [[30.0, 88.60000000000001]], "isOverall": false, "label": "/js/indexPage.min.js-45-Aggregated", "isController": false}, {"data": [[30.0, 88.30000000000003]], "isOverall": false, "label": "/css/catalog-item.css-154", "isController": false}, {"data": [[30.0, 88.30000000000003]], "isOverall": false, "label": "/css/catalog-item.css-154-Aggregated", "isController": false}, {"data": [[30.0, 89.56666666666668]], "isOverall": false, "label": "/js/basket.min.js-99", "isController": false}, {"data": [[30.0, 89.56666666666668]], "isOverall": false, "label": "/js/basket.min.js-99-Aggregated", "isController": false}, {"data": [[30.0, 86.56666666666666]], "isOverall": false, "label": "/images/delivery-home.png-113", "isController": false}, {"data": [[30.0, 86.56666666666666]], "isOverall": false, "label": "/images/delivery-home.png-113-Aggregated", "isController": false}, {"data": [[30.0, 110.26666666666668]], "isOverall": false, "label": "/catalog/autocomplete-91", "isController": false}, {"data": [[30.0, 110.26666666666668]], "isOverall": false, "label": "/catalog/autocomplete-91-Aggregated", "isController": false}, {"data": [[30.0, 413.3666666666667]], "isOverall": false, "label": "/order-123", "isController": false}, {"data": [[30.0, 413.3666666666667]], "isOverall": false, "label": "/order-123-Aggregated", "isController": false}, {"data": [[30.0, 91.5]], "isOverall": false, "label": "/images/app-modal-tree.png-18", "isController": false}, {"data": [[30.0, 91.5]], "isOverall": false, "label": "/images/app-modal-tree.png-18-Aggregated", "isController": false}, {"data": [[30.0, 96.56666666666666]], "isOverall": false, "label": "/fonts/Graphik-Bold-Web.woff2-21", "isController": false}, {"data": [[30.0, 96.56666666666666]], "isOverall": false, "label": "/fonts/Graphik-Bold-Web.woff2-21-Aggregated", "isController": false}, {"data": [[30.0, 88.06666666666665]], "isOverall": false, "label": "/assets/b165c12b/yii.validation.js-139", "isController": false}, {"data": [[30.0, 88.06666666666665]], "isOverall": false, "label": "/assets/b165c12b/yii.validation.js-139-Aggregated", "isController": false}, {"data": [[30.0, 90.06666666666668]], "isOverall": false, "label": "/js/yii.validation.min.js-135", "isController": false}, {"data": [[30.0, 90.06666666666668]], "isOverall": false, "label": "/js/yii.validation.min.js-135-Aggregated", "isController": false}, {"data": [[30.0, 90.73333333333333]], "isOverall": false, "label": "/js/jquery.pjax.min.js-134", "isController": false}, {"data": [[30.0, 90.73333333333333]], "isOverall": false, "label": "/js/jquery.pjax.min.js-134-Aggregated", "isController": false}, {"data": [[30.0, 89.06666666666668]], "isOverall": false, "label": "/css/catalog-page.css-160", "isController": false}, {"data": [[30.0, 89.06666666666668]], "isOverall": false, "label": "/css/catalog-page.css-160-Aggregated", "isController": false}, {"data": [[30.0, 89.79999999999998]], "isOverall": false, "label": "/css/basket-page.css-166", "isController": false}, {"data": [[30.0, 89.79999999999998]], "isOverall": false, "label": "/css/basket-page.css-166-Aggregated", "isController": false}, {"data": [[19.0, 87.0], [20.0, 87.33333333333333], [22.0, 86.0], [23.0, 87.0], [25.0, 90.33333333333333], [13.0, 93.0], [29.0, 88.75], [30.0, 90.39999999999999], [15.0, 96.0]], "isOverall": false, "label": "/js/basket.min.js-176", "isController": false}, {"data": [[26.43333333333333, 89.76666666666668]], "isOverall": false, "label": "/js/basket.min.js-176-Aggregated", "isController": false}, {"data": [[30.0, 1941.4666666666667]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[30.0, 1941.4666666666667]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}, {"data": [[30.0, 87.56666666666665]], "isOverall": false, "label": "/css/plugins/slick.css-71", "isController": false}, {"data": [[30.0, 87.56666666666665]], "isOverall": false, "label": "/css/plugins/slick.css-71-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 30.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 65295.6, "minX": 1.7023128E12, "maxY": 1056550.8, "series": [{"data": [[1.7023128E12, 1056550.8]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7023128E12, 65295.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7023128E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 86.56666666666666, "minX": 1.7023128E12, "maxY": 1941.4666666666667, "series": [{"data": [[1.7023128E12, 89.83333333333331]], "isOverall": false, "label": "/js/basket.min.js-46", "isController": false}, {"data": [[1.7023128E12, 87.53333333333333]], "isOverall": false, "label": "/js/search.min.js-98", "isController": false}, {"data": [[1.7023128E12, 89.9]], "isOverall": false, "label": "/js/orderModel.min.js-177", "isController": false}, {"data": [[1.7023128E12, 88.83333333333334]], "isOverall": false, "label": "/css/loader.css-14", "isController": false}, {"data": [[1.7023128E12, 88.89999999999999]], "isOverall": false, "label": "/css/checkout-modals.css-127", "isController": false}, {"data": [[1.7023128E12, 86.93333333333332]], "isOverall": false, "label": "/images/btn-location.svg-138", "isController": false}, {"data": [[1.7023128E12, 87.56666666666665]], "isOverall": false, "label": "/css/filters.css-57", "isController": false}, {"data": [[1.7023128E12, 87.16666666666666]], "isOverall": false, "label": "/js/search.min.js-175", "isController": false}, {"data": [[1.7023128E12, 87.10000000000001]], "isOverall": false, "label": "/css/index-page.css-155", "isController": false}, {"data": [[1.7023128E12, 88.76666666666667]], "isOverall": false, "label": "/css/basket-page.css-83", "isController": false}, {"data": [[1.7023128E12, 640.5333333333333]], "isOverall": false, "label": "/-1", "isController": false}, {"data": [[1.7023128E12, 87.03333333333333]], "isOverall": false, "label": "/css/paging.css-58", "isController": false}, {"data": [[1.7023128E12, 88.13333333333333]], "isOverall": false, "label": "/js/catalogItem.min.js-85", "isController": false}, {"data": [[1.7023128E12, 103.53333333333332]], "isOverall": false, "label": "/fonts/Graphik-Regular-Web.woff2-23", "isController": false}, {"data": [[1.7023128E12, 89.43333333333334]], "isOverall": false, "label": "/css/checkout-page.css-121", "isController": false}, {"data": [[1.7023128E12, 92.63333333333335]], "isOverall": false, "label": "/css/product-card.css-59", "isController": false}, {"data": [[1.7023128E12, 89.1]], "isOverall": false, "label": "/css/checkout-page.css-126", "isController": false}, {"data": [[1.7023128E12, 87.63333333333331]], "isOverall": false, "label": "/images/emo-chortle.svg-50", "isController": false}, {"data": [[1.7023128E12, 88.43333333333335]], "isOverall": false, "label": "/images/gen-warning.svg-118", "isController": false}, {"data": [[1.7023128E12, 87.73333333333332]], "isOverall": false, "label": "/css/checkout-modals.css-120", "isController": false}, {"data": [[1.7023128E12, 88.53333333333333]], "isOverall": false, "label": "/images/app-google-play-logo.png-11", "isController": false}, {"data": [[1.7023128E12, 88.63333333333333]], "isOverall": false, "label": "/js/basket.min.js-34", "isController": false}, {"data": [[1.7023128E12, 87.96666666666668]], "isOverall": false, "label": "/images/jcb-96.png-112", "isController": false}, {"data": [[1.7023128E12, 92.76666666666667]], "isOverall": false, "label": "/js/slick.1.8.0.min.js-32", "isController": false}, {"data": [[1.7023128E12, 88.96666666666667]], "isOverall": false, "label": "/js/yii.activeForm.min.js-29", "isController": false}, {"data": [[1.7023128E12, 88.13333333333333]], "isOverall": false, "label": "/images/mir-96.png-110", "isController": false}, {"data": [[1.7023128E12, 87.63333333333331]], "isOverall": false, "label": "/css/catalog-item.css-42", "isController": false}, {"data": [[1.7023128E12, 88.46666666666667]], "isOverall": false, "label": "/images/app-icon.png-52", "isController": false}, {"data": [[1.7023128E12, 90.19999999999999]], "isOverall": false, "label": "/css/category.css-56", "isController": false}, {"data": [[1.7023128E12, 87.50000000000001]], "isOverall": false, "label": "/css/products-in-shops-modal.css-96", "isController": false}, {"data": [[1.7023128E12, 93.53333333333335]], "isOverall": false, "label": "/css/common.css-168", "isController": false}, {"data": [[1.7023128E12, 89.26666666666668]], "isOverall": false, "label": "/css/common.css-69", "isController": false}, {"data": [[1.7023128E12, 454.1333333333334]], "isOverall": false, "label": "/shop/map/product/9791-104", "isController": false}, {"data": [[1.7023128E12, 87.26666666666667]], "isOverall": false, "label": "/js/forms.min.js-114", "isController": false}, {"data": [[1.7023128E12, 91.76666666666668]], "isOverall": false, "label": "/css/common.css-2", "isController": false}, {"data": [[1.7023128E12, 578.5333333333332]], "isOverall": false, "label": "/-68", "isController": false}, {"data": [[1.7023128E12, 88.03333333333335]], "isOverall": false, "label": "/css/plugins/slick.css-94", "isController": false}, {"data": [[1.7023128E12, 88.63333333333334]], "isOverall": false, "label": "/css/order-complete.css-147", "isController": false}, {"data": [[1.7023128E12, 88.5]], "isOverall": false, "label": "/css/catalog-page.css-55", "isController": false}, {"data": [[1.7023128E12, 87.73333333333333]], "isOverall": false, "label": "/images/loc-point-heart.svg-48", "isController": false}, {"data": [[1.7023128E12, 342.8333333333333]], "isOverall": false, "label": "/dostavka-107", "isController": false}, {"data": [[1.7023128E12, 87.66666666666666]], "isOverall": false, "label": "/images/arrow_menu.svg-137", "isController": false}, {"data": [[1.7023128E12, 88.5]], "isOverall": false, "label": "/css/catalog-item.css-5", "isController": false}, {"data": [[1.7023128E12, 598.8333333333333]], "isOverall": false, "label": "/-151", "isController": false}, {"data": [[1.7023128E12, 87.46666666666665]], "isOverall": false, "label": "/js/search.min.js-156", "isController": false}, {"data": [[1.7023128E12, 87.33333333333334]], "isOverall": false, "label": "/js/indexPage.min.js-74", "isController": false}, {"data": [[1.7023128E12, 89.03333333333333]], "isOverall": false, "label": "/css/delivery-status.css-169", "isController": false}, {"data": [[1.7023128E12, 86.83333333333334]], "isOverall": false, "label": "/css/order-table.css-172", "isController": false}, {"data": [[1.7023128E12, 100.16666666666664]], "isOverall": false, "label": "/js/jquery.matchHeight.0.7.2.min.js-26", "isController": false}, {"data": [[1.7023128E12, 87.4666666666667]], "isOverall": false, "label": "/images/slider-arrow.svg-36", "isController": false}, {"data": [[1.7023128E12, 87.00000000000001]], "isOverall": false, "label": "/js/store.min.js-105", "isController": false}, {"data": [[1.7023128E12, 87.83333333333333]], "isOverall": false, "label": "/images/arrow.svg-54", "isController": false}, {"data": [[1.7023128E12, 87.33333333333334]], "isOverall": false, "label": "/images/mastercard-96.png-111", "isController": false}, {"data": [[1.7023128E12, 93.33333333333331]], "isOverall": false, "label": "/city/get-by-ip-35", "isController": false}, {"data": [[1.7023128E12, 911.0000000000001]], "isOverall": false, "label": "/customer-167", "isController": false}, {"data": [[1.7023128E12, 97.83333333333333]], "isOverall": false, "label": "/customer-167-0", "isController": false}, {"data": [[1.7023128E12, 93.4]], "isOverall": false, "label": "/customer-167-1", "isController": false}, {"data": [[1.7023128E12, 88.39999999999998]], "isOverall": false, "label": "/css/cabinet.css-173", "isController": false}, {"data": [[1.7023128E12, 87.03333333333332]], "isOverall": false, "label": "/css/static-page.css-108", "isController": false}, {"data": [[1.7023128E12, 719.5000000000001]], "isOverall": false, "label": "/customer-167-2", "isController": false}, {"data": [[1.7023128E12, 88.86666666666666]], "isOverall": false, "label": "/css/plugins/slick.css-41", "isController": false}, {"data": [[1.7023128E12, 87.7]], "isOverall": false, "label": "/images/present-bg.svg-101", "isController": false}, {"data": [[1.7023128E12, 86.76666666666665]], "isOverall": false, "label": "/images/modal-close.svg-106", "isController": false}, {"data": [[1.7023128E12, 88.56666666666665]], "isOverall": false, "label": "/css/filters.css-162", "isController": false}, {"data": [[1.7023128E12, 88.13333333333331]], "isOverall": false, "label": "/js/orderModel.min.js-183", "isController": false}, {"data": [[1.7023128E12, 88.00000000000001]], "isOverall": false, "label": "/images/close-modal.svg-119", "isController": false}, {"data": [[1.7023128E12, 89.13333333333334]], "isOverall": false, "label": "/images/basket-icon-green.svg-25", "isController": false}, {"data": [[1.7023128E12, 86.96666666666667]], "isOverall": false, "label": "/css/products-in-shops-modal.css-125", "isController": false}, {"data": [[1.7023128E12, 88.7]], "isOverall": false, "label": "/images/app-apple-logo.png-10", "isController": false}, {"data": [[1.7023128E12, 93.76666666666671]], "isOverall": false, "label": "/js/jquery.nicescroll.3.7.6.min.js-8", "isController": false}, {"data": [[1.7023128E12, 86.8]], "isOverall": false, "label": "/images/close-modal-w.svg-65", "isController": false}, {"data": [[1.7023128E12, 86.63333333333333]], "isOverall": false, "label": "/css/cabinet.css-181", "isController": false}, {"data": [[1.7023128E12, 88.73333333333332]], "isOverall": false, "label": "/images/sale_arrow_small.svg-37", "isController": false}, {"data": [[1.7023128E12, 88.8333333333333]], "isOverall": false, "label": "/images/app-huawei-logo.png-15", "isController": false}, {"data": [[1.7023128E12, 588.5666666666667]], "isOverall": false, "label": "/site/login-38", "isController": false}, {"data": [[1.7023128E12, 908.8333333333333]], "isOverall": false, "label": "/customer/order-179", "isController": false}, {"data": [[1.7023128E12, 93.36666666666667]], "isOverall": false, "label": "/css/common.css-40", "isController": false}, {"data": [[1.7023128E12, 87.20000000000002]], "isOverall": false, "label": "/images/visa-96.png-109", "isController": false}, {"data": [[1.7023128E12, 89.43333333333334]], "isOverall": false, "label": "/css/plugins/slick.css-3", "isController": false}, {"data": [[1.7023128E12, 88.03333333333335]], "isOverall": false, "label": "/css/category.css-78", "isController": false}, {"data": [[1.7023128E12, 89.2]], "isOverall": false, "label": "/images/basket-icon-gray.svg-24", "isController": false}, {"data": [[1.7023128E12, 267.70000000000005]], "isOverall": false, "label": "/js/forms.min.js-100", "isController": false}, {"data": [[1.7023128E12, 92.79999999999998]], "isOverall": false, "label": "/css/common.css-146", "isController": false}, {"data": [[1.7023128E12, 88.43333333333335]], "isOverall": false, "label": "/js/forms.min.js-178", "isController": false}, {"data": [[1.7023128E12, 95.1]], "isOverall": false, "label": "/fonts/Graphik-Medium-Web.woff2-22", "isController": false}, {"data": [[1.7023128E12, 92.89999999999998]], "isOverall": false, "label": "/css/common.css-153", "isController": false}, {"data": [[1.7023128E12, 88.93333333333332]], "isOverall": false, "label": "/js/catalogItem.min.js-97", "isController": false}, {"data": [[1.7023128E12, 114.1]], "isOverall": false, "label": "/order/index-144", "isController": false}, {"data": [[1.7023128E12, 88.50000000000001]], "isOverall": false, "label": "/css/index-page.css-43", "isController": false}, {"data": [[1.7023128E12, 185.66666666666666]], "isOverall": false, "label": "/images/app-modal-phone.png-16", "isController": false}, {"data": [[1.7023128E12, 86.63333333333335]], "isOverall": false, "label": "/css/catalog-page.css-77", "isController": false}, {"data": [[1.7023128E12, 89.60000000000001]], "isOverall": false, "label": "/css/paging.css-163", "isController": false}, {"data": [[1.7023128E12, 91.66666666666669]], "isOverall": false, "label": "/css/product-card.css-95", "isController": false}, {"data": [[1.7023128E12, 89.83333333333333]], "isOverall": false, "label": "/css/jquery.fancybox.min.css-13", "isController": false}, {"data": [[1.7023128E12, 88.53333333333333]], "isOverall": false, "label": "/js/js.cookie.3.0.1.min.js-27", "isController": false}, {"data": [[1.7023128E12, 87.36666666666666]], "isOverall": false, "label": "/images/veh-lorry-2.svg-49", "isController": false}, {"data": [[1.7023128E12, 87.83333333333336]], "isOverall": false, "label": "/js/search.min.js-131", "isController": false}, {"data": [[1.7023128E12, 88.1]], "isOverall": false, "label": "/css/products-in-shops-modal.css-60", "isController": false}, {"data": [[1.7023128E12, 94.03333333333333]], "isOverall": false, "label": "/order/update-delivery-type-dependent-info-142", "isController": false}, {"data": [[1.7023128E12, 88.06666666666668]], "isOverall": false, "label": "/js/forms.min.js-51", "isController": false}, {"data": [[1.7023128E12, 87.86666666666667]], "isOverall": false, "label": "/css/catalog-item.css-70", "isController": false}, {"data": [[1.7023128E12, 87.03333333333333]], "isOverall": false, "label": "/images/delivery-icon.svg-90", "isController": false}, {"data": [[1.7023128E12, 89.16666666666666]], "isOverall": false, "label": "/js/indexPage.min.js-157", "isController": false}, {"data": [[1.7023128E12, 88.89999999999999]], "isOverall": false, "label": "/css/paging.css-170", "isController": false}, {"data": [[1.7023128E12, 88.86666666666667]], "isOverall": false, "label": "/css/index-page.css-4", "isController": false}, {"data": [[1.7023128E12, 102.36666666666666]], "isOverall": false, "label": "/order-123-0", "isController": false}, {"data": [[1.7023128E12, 90.13333333333333]], "isOverall": false, "label": "/js/search.min.js-44", "isController": false}, {"data": [[1.7023128E12, 90.03333333333333]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-64", "isController": false}, {"data": [[1.7023128E12, 87.6]], "isOverall": false, "label": "/images/counter-minus.svg-103", "isController": false}, {"data": [[1.7023128E12, 89.73333333333333]], "isOverall": false, "label": "/js/search.min.js-148", "isController": false}, {"data": [[1.7023128E12, 92.53333333333333]], "isOverall": false, "label": "/js/jquery.fancybox.3.5.6.min.js-53", "isController": false}, {"data": [[1.7023128E12, 87.0]], "isOverall": false, "label": "/css/order-information.css-182", "isController": false}, {"data": [[1.7023128E12, 89.0]], "isOverall": false, "label": "/css/plugins/slick.css-152", "isController": false}, {"data": [[1.7023128E12, 88.86666666666666]], "isOverall": false, "label": "/js/orderModel.min.js-128", "isController": false}, {"data": [[1.7023128E12, 86.89999999999998]], "isOverall": false, "label": "/js/basket.min.js-75", "isController": false}, {"data": [[1.7023128E12, 88.56666666666665]], "isOverall": false, "label": "/css/category.css-161", "isController": false}, {"data": [[1.7023128E12, 99.03333333333333]], "isOverall": false, "label": "/css/paging.css-80", "isController": false}, {"data": [[1.7023128E12, 310.96666666666664]], "isOverall": false, "label": "/order-123-1", "isController": false}, {"data": [[1.7023128E12, 91.80000000000001]], "isOverall": false, "label": "/css/common.css-124", "isController": false}, {"data": [[1.7023128E12, 89.46666666666667]], "isOverall": false, "label": "/images/search-icon.svg-19", "isController": false}, {"data": [[1.7023128E12, 93.20000000000002]], "isOverall": false, "label": "/basket/recalculate-basket-122", "isController": false}, {"data": [[1.7023128E12, 98.66666666666669]], "isOverall": false, "label": "/site/login-62", "isController": false}, {"data": [[1.7023128E12, 91.36666666666665]], "isOverall": false, "label": "/js/forms.min.js-159", "isController": false}, {"data": [[1.7023128E12, 88.26666666666667]], "isOverall": false, "label": "/css/jquery.fias.min.css-129", "isController": false}, {"data": [[1.7023128E12, 89.36666666666667]], "isOverall": false, "label": "/fonts/graphik.css-12", "isController": false}, {"data": [[1.7023128E12, 94.70000000000002]], "isOverall": false, "label": "/site/login-67", "isController": false}, {"data": [[1.7023128E12, 87.36666666666666]], "isOverall": false, "label": "/css/basket-table.css-180", "isController": false}, {"data": [[1.7023128E12, 89.06666666666666]], "isOverall": false, "label": "/images/counter-minus-dis.svg-86", "isController": false}, {"data": [[1.7023128E12, 89.0]], "isOverall": false, "label": "/js/basket.min.js-158", "isController": false}, {"data": [[1.7023128E12, 88.63333333333334]], "isOverall": false, "label": "/images/basket-icon.svg-20", "isController": false}, {"data": [[1.7023128E12, 88.76666666666667]], "isOverall": false, "label": "/images/favicon.ico-66", "isController": false}, {"data": [[1.7023128E12, 86.96666666666668]], "isOverall": false, "label": "/css/images/fias-spinner.png-141", "isController": false}, {"data": [[1.7023128E12, 89.93333333333334]], "isOverall": false, "label": "/css/basket-page.css-102", "isController": false}, {"data": [[1.7023128E12, 88.86666666666666]], "isOverall": false, "label": "/assets/b165c12b/yii.js-136", "isController": false}, {"data": [[1.7023128E12, 88.80000000000001]], "isOverall": false, "label": "/images/sho-basket-love.svg-47", "isController": false}, {"data": [[1.7023128E12, 87.43333333333334]], "isOverall": false, "label": "/images/in-shop-icon.svg-89", "isController": false}, {"data": [[1.7023128E12, 87.30000000000001]], "isOverall": false, "label": "/js/order.min.js-130", "isController": false}, {"data": [[1.7023128E12, 304.8]], "isOverall": false, "label": "/basket-116", "isController": false}, {"data": [[1.7023128E12, 87.83333333333334]], "isOverall": false, "label": "/js/jquery.fias.min.js-133", "isController": false}, {"data": [[1.7023128E12, 92.96666666666667]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-132", "isController": false}, {"data": [[1.7023128E12, 87.83333333333334]], "isOverall": false, "label": "/css/order-again.css-174", "isController": false}, {"data": [[1.7023128E12, 91.33333333333333]], "isOverall": false, "label": "/js/twitter.typeahead.0.11.1.min.js-6", "isController": false}, {"data": [[1.7023128E12, 86.83333333333336]], "isOverall": false, "label": "/images/lorry.svg-117", "isController": false}, {"data": [[1.7023128E12, 88.83333333333331]], "isOverall": false, "label": "/js/common.min.js-31", "isController": false}, {"data": [[1.7023128E12, 88.33333333333331]], "isOverall": false, "label": "/css/index-page.css-72", "isController": false}, {"data": [[1.7023128E12, 92.03333333333336]], "isOverall": false, "label": "/css/common.css-93", "isController": false}, {"data": [[1.7023128E12, 87.79999999999997]], "isOverall": false, "label": "/css/filters.css-79", "isController": false}, {"data": [[1.7023128E12, 86.76666666666664]], "isOverall": false, "label": "/js/forms.min.js-76", "isController": false}, {"data": [[1.7023128E12, 93.1]], "isOverall": false, "label": "/order/render-delivery-time-dropdown-143", "isController": false}, {"data": [[1.7023128E12, 99.16666666666666]], "isOverall": false, "label": "/customer/order-179-0", "isController": false}, {"data": [[1.7023128E12, 88.03333333333335]], "isOverall": false, "label": "/js/indexPage.min.js-33", "isController": false}, {"data": [[1.7023128E12, 87.96666666666667]], "isOverall": false, "label": "/js/search.min.js-73", "isController": false}, {"data": [[1.7023128E12, 89.93333333333335]], "isOverall": false, "label": "/css/product-card.css-164", "isController": false}, {"data": [[1.7023128E12, 718.5666666666666]], "isOverall": false, "label": "/customer/order-179-2", "isController": false}, {"data": [[1.7023128E12, 91.0]], "isOverall": false, "label": "/customer/order-179-1", "isController": false}, {"data": [[1.7023128E12, 89.46666666666667]], "isOverall": false, "label": "/css/basket-page.css-61", "isController": false}, {"data": [[1.7023128E12, 87.86666666666667]], "isOverall": false, "label": "/css/products-in-shops-modal.css-82", "isController": false}, {"data": [[1.7023128E12, 976.1999999999998]], "isOverall": false, "label": "/catalog/ptitsy/korma/popugai_srednie/rio_korm_dlya_srednikh_popugaev-92", "isController": false}, {"data": [[1.7023128E12, 88.13333333333334]], "isOverall": false, "label": "/images/status-available.svg-87", "isController": false}, {"data": [[1.7023128E12, 1088.8666666666666]], "isOverall": false, "label": "/catalog/sobaki/korma_sukhie/wonderfur/wonderfur_adult_all_breeds_yagnenok_ris_dlya_sobak-84", "isController": false}, {"data": [[1.7023128E12, 90.73333333333332]], "isOverall": false, "label": "/js/ua-parser.2.0.0-alpha.2.min.js-30", "isController": false}, {"data": [[1.7023128E12, 87.00000000000001]], "isOverall": false, "label": "/js/forms.min.js-149", "isController": false}, {"data": [[1.7023128E12, 87.46666666666665]], "isOverall": false, "label": "/css/pay-status.css-171", "isController": false}, {"data": [[1.7023128E12, 89.13333333333334]], "isOverall": false, "label": "/js/yii.min.js-28", "isController": false}, {"data": [[1.7023128E12, 93.89999999999999]], "isOverall": false, "label": "/js/jquery.min.js-7", "isController": false}, {"data": [[1.7023128E12, 93.0]], "isOverall": false, "label": "/site/login-38-0", "isController": false}, {"data": [[1.7023128E12, 495.33333333333326]], "isOverall": false, "label": "/site/login-38-1", "isController": false}, {"data": [[1.7023128E12, 90.23333333333335]], "isOverall": false, "label": "/basket/add-to-basket-115", "isController": false}, {"data": [[1.7023128E12, 87.5]], "isOverall": false, "label": "/js/jquery.pjax.min.js-63", "isController": false}, {"data": [[1.7023128E12, 89.40000000000002]], "isOverall": false, "label": "/css/product-card.css-81", "isController": false}, {"data": [[1.7023128E12, 88.79999999999998]], "isOverall": false, "label": "/images/counter-plus.svg-88", "isController": false}, {"data": [[1.7023128E12, 87.63333333333333]], "isOverall": false, "label": "/css/products-in-shops-modal.css-165", "isController": false}, {"data": [[1.7023128E12, 87.5]], "isOverall": false, "label": "/js/search.min.js-9", "isController": false}, {"data": [[1.7023128E12, 90.33333333333334]], "isOverall": false, "label": "/images/logo.svg-17", "isController": false}, {"data": [[1.7023128E12, 86.96666666666667]], "isOverall": false, "label": "/js/forms.min.js-140", "isController": false}, {"data": [[1.7023128E12, 88.3]], "isOverall": false, "label": "/images/deco01.png-150", "isController": false}, {"data": [[1.7023128E12, 88.60000000000001]], "isOverall": false, "label": "/js/indexPage.min.js-45", "isController": false}, {"data": [[1.7023128E12, 88.30000000000003]], "isOverall": false, "label": "/css/catalog-item.css-154", "isController": false}, {"data": [[1.7023128E12, 89.56666666666668]], "isOverall": false, "label": "/js/basket.min.js-99", "isController": false}, {"data": [[1.7023128E12, 86.56666666666666]], "isOverall": false, "label": "/images/delivery-home.png-113", "isController": false}, {"data": [[1.7023128E12, 110.26666666666668]], "isOverall": false, "label": "/catalog/autocomplete-91", "isController": false}, {"data": [[1.7023128E12, 413.3666666666667]], "isOverall": false, "label": "/order-123", "isController": false}, {"data": [[1.7023128E12, 91.5]], "isOverall": false, "label": "/images/app-modal-tree.png-18", "isController": false}, {"data": [[1.7023128E12, 96.56666666666666]], "isOverall": false, "label": "/fonts/Graphik-Bold-Web.woff2-21", "isController": false}, {"data": [[1.7023128E12, 88.06666666666665]], "isOverall": false, "label": "/assets/b165c12b/yii.validation.js-139", "isController": false}, {"data": [[1.7023128E12, 90.06666666666668]], "isOverall": false, "label": "/js/yii.validation.min.js-135", "isController": false}, {"data": [[1.7023128E12, 90.73333333333333]], "isOverall": false, "label": "/js/jquery.pjax.min.js-134", "isController": false}, {"data": [[1.7023128E12, 89.06666666666668]], "isOverall": false, "label": "/css/catalog-page.css-160", "isController": false}, {"data": [[1.7023128E12, 89.79999999999998]], "isOverall": false, "label": "/css/basket-page.css-166", "isController": false}, {"data": [[1.7023128E12, 89.76666666666668]], "isOverall": false, "label": "/js/basket.min.js-176", "isController": false}, {"data": [[1.7023128E12, 1941.4666666666667]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.7023128E12, 87.56666666666665]], "isOverall": false, "label": "/css/plugins/slick.css-71", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7023128E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 86.53333333333332, "minX": 1.7023128E12, "maxY": 1384.4333333333332, "series": [{"data": [[1.7023128E12, 89.83333333333331]], "isOverall": false, "label": "/js/basket.min.js-46", "isController": false}, {"data": [[1.7023128E12, 87.46666666666667]], "isOverall": false, "label": "/js/search.min.js-98", "isController": false}, {"data": [[1.7023128E12, 89.9]], "isOverall": false, "label": "/js/orderModel.min.js-177", "isController": false}, {"data": [[1.7023128E12, 88.79999999999998]], "isOverall": false, "label": "/css/loader.css-14", "isController": false}, {"data": [[1.7023128E12, 88.89999999999999]], "isOverall": false, "label": "/css/checkout-modals.css-127", "isController": false}, {"data": [[1.7023128E12, 86.86666666666667]], "isOverall": false, "label": "/images/btn-location.svg-138", "isController": false}, {"data": [[1.7023128E12, 87.46666666666668]], "isOverall": false, "label": "/css/filters.css-57", "isController": false}, {"data": [[1.7023128E12, 87.16666666666666]], "isOverall": false, "label": "/js/search.min.js-175", "isController": false}, {"data": [[1.7023128E12, 86.96666666666665]], "isOverall": false, "label": "/css/index-page.css-155", "isController": false}, {"data": [[1.7023128E12, 88.6333333333333]], "isOverall": false, "label": "/css/basket-page.css-83", "isController": false}, {"data": [[1.7023128E12, 609.8666666666668]], "isOverall": false, "label": "/-1", "isController": false}, {"data": [[1.7023128E12, 87.0]], "isOverall": false, "label": "/css/paging.css-58", "isController": false}, {"data": [[1.7023128E12, 88.06666666666669]], "isOverall": false, "label": "/js/catalogItem.min.js-85", "isController": false}, {"data": [[1.7023128E12, 94.43333333333332]], "isOverall": false, "label": "/fonts/Graphik-Regular-Web.woff2-23", "isController": false}, {"data": [[1.7023128E12, 89.39999999999998]], "isOverall": false, "label": "/css/checkout-page.css-121", "isController": false}, {"data": [[1.7023128E12, 92.43333333333334]], "isOverall": false, "label": "/css/product-card.css-59", "isController": false}, {"data": [[1.7023128E12, 88.99999999999999]], "isOverall": false, "label": "/css/checkout-page.css-126", "isController": false}, {"data": [[1.7023128E12, 87.56666666666666]], "isOverall": false, "label": "/images/emo-chortle.svg-50", "isController": false}, {"data": [[1.7023128E12, 88.43333333333335]], "isOverall": false, "label": "/images/gen-warning.svg-118", "isController": false}, {"data": [[1.7023128E12, 87.73333333333332]], "isOverall": false, "label": "/css/checkout-modals.css-120", "isController": false}, {"data": [[1.7023128E12, 88.53333333333333]], "isOverall": false, "label": "/images/app-google-play-logo.png-11", "isController": false}, {"data": [[1.7023128E12, 88.59999999999998]], "isOverall": false, "label": "/js/basket.min.js-34", "isController": false}, {"data": [[1.7023128E12, 87.96666666666668]], "isOverall": false, "label": "/images/jcb-96.png-112", "isController": false}, {"data": [[1.7023128E12, 92.46666666666667]], "isOverall": false, "label": "/js/slick.1.8.0.min.js-32", "isController": false}, {"data": [[1.7023128E12, 88.93333333333334]], "isOverall": false, "label": "/js/yii.activeForm.min.js-29", "isController": false}, {"data": [[1.7023128E12, 88.13333333333333]], "isOverall": false, "label": "/images/mir-96.png-110", "isController": false}, {"data": [[1.7023128E12, 87.63333333333331]], "isOverall": false, "label": "/css/catalog-item.css-42", "isController": false}, {"data": [[1.7023128E12, 88.43333333333332]], "isOverall": false, "label": "/images/app-icon.png-52", "isController": false}, {"data": [[1.7023128E12, 90.19999999999999]], "isOverall": false, "label": "/css/category.css-56", "isController": false}, {"data": [[1.7023128E12, 87.40000000000002]], "isOverall": false, "label": "/css/products-in-shops-modal.css-96", "isController": false}, {"data": [[1.7023128E12, 93.33333333333334]], "isOverall": false, "label": "/css/common.css-168", "isController": false}, {"data": [[1.7023128E12, 88.96666666666667]], "isOverall": false, "label": "/css/common.css-69", "isController": false}, {"data": [[1.7023128E12, 453.80000000000007]], "isOverall": false, "label": "/shop/map/product/9791-104", "isController": false}, {"data": [[1.7023128E12, 87.26666666666667]], "isOverall": false, "label": "/js/forms.min.js-114", "isController": false}, {"data": [[1.7023128E12, 91.43333333333334]], "isOverall": false, "label": "/css/common.css-2", "isController": false}, {"data": [[1.7023128E12, 534.5666666666667]], "isOverall": false, "label": "/-68", "isController": false}, {"data": [[1.7023128E12, 88.0]], "isOverall": false, "label": "/css/plugins/slick.css-94", "isController": false}, {"data": [[1.7023128E12, 88.63333333333334]], "isOverall": false, "label": "/css/order-complete.css-147", "isController": false}, {"data": [[1.7023128E12, 88.5]], "isOverall": false, "label": "/css/catalog-page.css-55", "isController": false}, {"data": [[1.7023128E12, 87.70000000000002]], "isOverall": false, "label": "/images/loc-point-heart.svg-48", "isController": false}, {"data": [[1.7023128E12, 278.2666666666667]], "isOverall": false, "label": "/dostavka-107", "isController": false}, {"data": [[1.7023128E12, 87.63333333333334]], "isOverall": false, "label": "/images/arrow_menu.svg-137", "isController": false}, {"data": [[1.7023128E12, 88.5]], "isOverall": false, "label": "/css/catalog-item.css-5", "isController": false}, {"data": [[1.7023128E12, 526.8]], "isOverall": false, "label": "/-151", "isController": false}, {"data": [[1.7023128E12, 87.46666666666665]], "isOverall": false, "label": "/js/search.min.js-156", "isController": false}, {"data": [[1.7023128E12, 87.26666666666665]], "isOverall": false, "label": "/js/indexPage.min.js-74", "isController": false}, {"data": [[1.7023128E12, 89.03333333333333]], "isOverall": false, "label": "/css/delivery-status.css-169", "isController": false}, {"data": [[1.7023128E12, 86.83333333333334]], "isOverall": false, "label": "/css/order-table.css-172", "isController": false}, {"data": [[1.7023128E12, 100.1333333333333]], "isOverall": false, "label": "/js/jquery.matchHeight.0.7.2.min.js-26", "isController": false}, {"data": [[1.7023128E12, 87.39999999999999]], "isOverall": false, "label": "/images/slider-arrow.svg-36", "isController": false}, {"data": [[1.7023128E12, 87.00000000000001]], "isOverall": false, "label": "/js/store.min.js-105", "isController": false}, {"data": [[1.7023128E12, 87.80000000000003]], "isOverall": false, "label": "/images/arrow.svg-54", "isController": false}, {"data": [[1.7023128E12, 87.33333333333334]], "isOverall": false, "label": "/images/mastercard-96.png-111", "isController": false}, {"data": [[1.7023128E12, 93.33333333333331]], "isOverall": false, "label": "/city/get-by-ip-35", "isController": false}, {"data": [[1.7023128E12, 97.80000000000001]], "isOverall": false, "label": "/customer-167", "isController": false}, {"data": [[1.7023128E12, 97.80000000000001]], "isOverall": false, "label": "/customer-167-0", "isController": false}, {"data": [[1.7023128E12, 93.4]], "isOverall": false, "label": "/customer-167-1", "isController": false}, {"data": [[1.7023128E12, 88.39999999999998]], "isOverall": false, "label": "/css/cabinet.css-173", "isController": false}, {"data": [[1.7023128E12, 87.03333333333332]], "isOverall": false, "label": "/css/static-page.css-108", "isController": false}, {"data": [[1.7023128E12, 666.5333333333333]], "isOverall": false, "label": "/customer-167-2", "isController": false}, {"data": [[1.7023128E12, 88.86666666666666]], "isOverall": false, "label": "/css/plugins/slick.css-41", "isController": false}, {"data": [[1.7023128E12, 87.7]], "isOverall": false, "label": "/images/present-bg.svg-101", "isController": false}, {"data": [[1.7023128E12, 86.73333333333332]], "isOverall": false, "label": "/images/modal-close.svg-106", "isController": false}, {"data": [[1.7023128E12, 88.56666666666665]], "isOverall": false, "label": "/css/filters.css-162", "isController": false}, {"data": [[1.7023128E12, 88.09999999999998]], "isOverall": false, "label": "/js/orderModel.min.js-183", "isController": false}, {"data": [[1.7023128E12, 88.00000000000001]], "isOverall": false, "label": "/images/close-modal.svg-119", "isController": false}, {"data": [[1.7023128E12, 89.13333333333334]], "isOverall": false, "label": "/images/basket-icon-green.svg-25", "isController": false}, {"data": [[1.7023128E12, 86.93333333333334]], "isOverall": false, "label": "/css/products-in-shops-modal.css-125", "isController": false}, {"data": [[1.7023128E12, 88.66666666666667]], "isOverall": false, "label": "/images/app-apple-logo.png-10", "isController": false}, {"data": [[1.7023128E12, 93.16666666666669]], "isOverall": false, "label": "/js/jquery.nicescroll.3.7.6.min.js-8", "isController": false}, {"data": [[1.7023128E12, 86.8]], "isOverall": false, "label": "/images/close-modal-w.svg-65", "isController": false}, {"data": [[1.7023128E12, 86.63333333333333]], "isOverall": false, "label": "/css/cabinet.css-181", "isController": false}, {"data": [[1.7023128E12, 88.73333333333332]], "isOverall": false, "label": "/images/sale_arrow_small.svg-37", "isController": false}, {"data": [[1.7023128E12, 88.8333333333333]], "isOverall": false, "label": "/images/app-huawei-logo.png-15", "isController": false}, {"data": [[1.7023128E12, 93.0]], "isOverall": false, "label": "/site/login-38", "isController": false}, {"data": [[1.7023128E12, 99.16666666666666]], "isOverall": false, "label": "/customer/order-179", "isController": false}, {"data": [[1.7023128E12, 92.96666666666667]], "isOverall": false, "label": "/css/common.css-40", "isController": false}, {"data": [[1.7023128E12, 87.13333333333333]], "isOverall": false, "label": "/images/visa-96.png-109", "isController": false}, {"data": [[1.7023128E12, 89.36666666666667]], "isOverall": false, "label": "/css/plugins/slick.css-3", "isController": false}, {"data": [[1.7023128E12, 87.99999999999997]], "isOverall": false, "label": "/css/category.css-78", "isController": false}, {"data": [[1.7023128E12, 89.2]], "isOverall": false, "label": "/images/basket-icon-gray.svg-24", "isController": false}, {"data": [[1.7023128E12, 267.70000000000005]], "isOverall": false, "label": "/js/forms.min.js-100", "isController": false}, {"data": [[1.7023128E12, 92.56666666666666]], "isOverall": false, "label": "/css/common.css-146", "isController": false}, {"data": [[1.7023128E12, 88.43333333333335]], "isOverall": false, "label": "/js/forms.min.js-178", "isController": false}, {"data": [[1.7023128E12, 90.8]], "isOverall": false, "label": "/fonts/Graphik-Medium-Web.woff2-22", "isController": false}, {"data": [[1.7023128E12, 92.53333333333333]], "isOverall": false, "label": "/css/common.css-153", "isController": false}, {"data": [[1.7023128E12, 88.90000000000002]], "isOverall": false, "label": "/js/catalogItem.min.js-97", "isController": false}, {"data": [[1.7023128E12, 114.1]], "isOverall": false, "label": "/order/index-144", "isController": false}, {"data": [[1.7023128E12, 88.39999999999998]], "isOverall": false, "label": "/css/index-page.css-43", "isController": false}, {"data": [[1.7023128E12, 91.6]], "isOverall": false, "label": "/images/app-modal-phone.png-16", "isController": false}, {"data": [[1.7023128E12, 86.63333333333335]], "isOverall": false, "label": "/css/catalog-page.css-77", "isController": false}, {"data": [[1.7023128E12, 89.60000000000001]], "isOverall": false, "label": "/css/paging.css-163", "isController": false}, {"data": [[1.7023128E12, 91.56666666666669]], "isOverall": false, "label": "/css/product-card.css-95", "isController": false}, {"data": [[1.7023128E12, 89.53333333333335]], "isOverall": false, "label": "/css/jquery.fancybox.min.css-13", "isController": false}, {"data": [[1.7023128E12, 88.53333333333333]], "isOverall": false, "label": "/js/js.cookie.3.0.1.min.js-27", "isController": false}, {"data": [[1.7023128E12, 87.33333333333333]], "isOverall": false, "label": "/images/veh-lorry-2.svg-49", "isController": false}, {"data": [[1.7023128E12, 87.8]], "isOverall": false, "label": "/js/search.min.js-131", "isController": false}, {"data": [[1.7023128E12, 88.06666666666669]], "isOverall": false, "label": "/css/products-in-shops-modal.css-60", "isController": false}, {"data": [[1.7023128E12, 94.03333333333333]], "isOverall": false, "label": "/order/update-delivery-type-dependent-info-142", "isController": false}, {"data": [[1.7023128E12, 88.06666666666668]], "isOverall": false, "label": "/js/forms.min.js-51", "isController": false}, {"data": [[1.7023128E12, 87.83333333333333]], "isOverall": false, "label": "/css/catalog-item.css-70", "isController": false}, {"data": [[1.7023128E12, 87.03333333333333]], "isOverall": false, "label": "/images/delivery-icon.svg-90", "isController": false}, {"data": [[1.7023128E12, 89.09999999999998]], "isOverall": false, "label": "/js/indexPage.min.js-157", "isController": false}, {"data": [[1.7023128E12, 88.83333333333334]], "isOverall": false, "label": "/css/paging.css-170", "isController": false}, {"data": [[1.7023128E12, 88.79999999999997]], "isOverall": false, "label": "/css/index-page.css-4", "isController": false}, {"data": [[1.7023128E12, 102.36666666666666]], "isOverall": false, "label": "/order-123-0", "isController": false}, {"data": [[1.7023128E12, 90.13333333333333]], "isOverall": false, "label": "/js/search.min.js-44", "isController": false}, {"data": [[1.7023128E12, 89.26666666666665]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-64", "isController": false}, {"data": [[1.7023128E12, 87.6]], "isOverall": false, "label": "/images/counter-minus.svg-103", "isController": false}, {"data": [[1.7023128E12, 89.73333333333333]], "isOverall": false, "label": "/js/search.min.js-148", "isController": false}, {"data": [[1.7023128E12, 91.6]], "isOverall": false, "label": "/js/jquery.fancybox.3.5.6.min.js-53", "isController": false}, {"data": [[1.7023128E12, 87.0]], "isOverall": false, "label": "/css/order-information.css-182", "isController": false}, {"data": [[1.7023128E12, 89.0]], "isOverall": false, "label": "/css/plugins/slick.css-152", "isController": false}, {"data": [[1.7023128E12, 88.86666666666666]], "isOverall": false, "label": "/js/orderModel.min.js-128", "isController": false}, {"data": [[1.7023128E12, 86.86666666666663]], "isOverall": false, "label": "/js/basket.min.js-75", "isController": false}, {"data": [[1.7023128E12, 88.53333333333333]], "isOverall": false, "label": "/css/category.css-161", "isController": false}, {"data": [[1.7023128E12, 99.0]], "isOverall": false, "label": "/css/paging.css-80", "isController": false}, {"data": [[1.7023128E12, 299.23333333333335]], "isOverall": false, "label": "/order-123-1", "isController": false}, {"data": [[1.7023128E12, 91.39999999999999]], "isOverall": false, "label": "/css/common.css-124", "isController": false}, {"data": [[1.7023128E12, 89.43333333333334]], "isOverall": false, "label": "/images/search-icon.svg-19", "isController": false}, {"data": [[1.7023128E12, 93.13333333333337]], "isOverall": false, "label": "/basket/recalculate-basket-122", "isController": false}, {"data": [[1.7023128E12, 98.6]], "isOverall": false, "label": "/site/login-62", "isController": false}, {"data": [[1.7023128E12, 91.36666666666665]], "isOverall": false, "label": "/js/forms.min.js-159", "isController": false}, {"data": [[1.7023128E12, 88.26666666666667]], "isOverall": false, "label": "/css/jquery.fias.min.css-129", "isController": false}, {"data": [[1.7023128E12, 89.33333333333334]], "isOverall": false, "label": "/fonts/graphik.css-12", "isController": false}, {"data": [[1.7023128E12, 94.66666666666669]], "isOverall": false, "label": "/site/login-67", "isController": false}, {"data": [[1.7023128E12, 87.26666666666667]], "isOverall": false, "label": "/css/basket-table.css-180", "isController": false}, {"data": [[1.7023128E12, 89.03333333333333]], "isOverall": false, "label": "/images/counter-minus-dis.svg-86", "isController": false}, {"data": [[1.7023128E12, 89.0]], "isOverall": false, "label": "/js/basket.min.js-158", "isController": false}, {"data": [[1.7023128E12, 88.60000000000001]], "isOverall": false, "label": "/images/basket-icon.svg-20", "isController": false}, {"data": [[1.7023128E12, 88.76666666666667]], "isOverall": false, "label": "/images/favicon.ico-66", "isController": false}, {"data": [[1.7023128E12, 86.96666666666668]], "isOverall": false, "label": "/css/images/fias-spinner.png-141", "isController": false}, {"data": [[1.7023128E12, 89.86666666666665]], "isOverall": false, "label": "/css/basket-page.css-102", "isController": false}, {"data": [[1.7023128E12, 88.60000000000001]], "isOverall": false, "label": "/assets/b165c12b/yii.js-136", "isController": false}, {"data": [[1.7023128E12, 88.80000000000001]], "isOverall": false, "label": "/images/sho-basket-love.svg-47", "isController": false}, {"data": [[1.7023128E12, 87.4]], "isOverall": false, "label": "/images/in-shop-icon.svg-89", "isController": false}, {"data": [[1.7023128E12, 87.26666666666668]], "isOverall": false, "label": "/js/order.min.js-130", "isController": false}, {"data": [[1.7023128E12, 284.6]], "isOverall": false, "label": "/basket-116", "isController": false}, {"data": [[1.7023128E12, 87.43333333333332]], "isOverall": false, "label": "/js/jquery.fias.min.js-133", "isController": false}, {"data": [[1.7023128E12, 92.19999999999999]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-132", "isController": false}, {"data": [[1.7023128E12, 87.83333333333334]], "isOverall": false, "label": "/css/order-again.css-174", "isController": false}, {"data": [[1.7023128E12, 90.93333333333331]], "isOverall": false, "label": "/js/twitter.typeahead.0.11.1.min.js-6", "isController": false}, {"data": [[1.7023128E12, 86.83333333333336]], "isOverall": false, "label": "/images/lorry.svg-117", "isController": false}, {"data": [[1.7023128E12, 88.83333333333331]], "isOverall": false, "label": "/js/common.min.js-31", "isController": false}, {"data": [[1.7023128E12, 88.19999999999999]], "isOverall": false, "label": "/css/index-page.css-72", "isController": false}, {"data": [[1.7023128E12, 91.33333333333336]], "isOverall": false, "label": "/css/common.css-93", "isController": false}, {"data": [[1.7023128E12, 87.66666666666666]], "isOverall": false, "label": "/css/filters.css-79", "isController": false}, {"data": [[1.7023128E12, 86.76666666666664]], "isOverall": false, "label": "/js/forms.min.js-76", "isController": false}, {"data": [[1.7023128E12, 93.1]], "isOverall": false, "label": "/order/render-delivery-time-dropdown-143", "isController": false}, {"data": [[1.7023128E12, 99.16666666666666]], "isOverall": false, "label": "/customer/order-179-0", "isController": false}, {"data": [[1.7023128E12, 88.0]], "isOverall": false, "label": "/js/indexPage.min.js-33", "isController": false}, {"data": [[1.7023128E12, 87.93333333333334]], "isOverall": false, "label": "/js/search.min.js-73", "isController": false}, {"data": [[1.7023128E12, 89.79999999999998]], "isOverall": false, "label": "/css/product-card.css-164", "isController": false}, {"data": [[1.7023128E12, 651.7333333333333]], "isOverall": false, "label": "/customer/order-179-2", "isController": false}, {"data": [[1.7023128E12, 91.0]], "isOverall": false, "label": "/customer/order-179-1", "isController": false}, {"data": [[1.7023128E12, 89.36666666666667]], "isOverall": false, "label": "/css/basket-page.css-61", "isController": false}, {"data": [[1.7023128E12, 87.8]], "isOverall": false, "label": "/css/products-in-shops-modal.css-82", "isController": false}, {"data": [[1.7023128E12, 974.9666666666665]], "isOverall": false, "label": "/catalog/ptitsy/korma/popugai_srednie/rio_korm_dlya_srednikh_popugaev-92", "isController": false}, {"data": [[1.7023128E12, 88.1]], "isOverall": false, "label": "/images/status-available.svg-87", "isController": false}, {"data": [[1.7023128E12, 1055.0]], "isOverall": false, "label": "/catalog/sobaki/korma_sukhie/wonderfur/wonderfur_adult_all_breeds_yagnenok_ris_dlya_sobak-84", "isController": false}, {"data": [[1.7023128E12, 90.6]], "isOverall": false, "label": "/js/ua-parser.2.0.0-alpha.2.min.js-30", "isController": false}, {"data": [[1.7023128E12, 86.96666666666667]], "isOverall": false, "label": "/js/forms.min.js-149", "isController": false}, {"data": [[1.7023128E12, 87.46666666666665]], "isOverall": false, "label": "/css/pay-status.css-171", "isController": false}, {"data": [[1.7023128E12, 89.13333333333334]], "isOverall": false, "label": "/js/yii.min.js-28", "isController": false}, {"data": [[1.7023128E12, 92.93333333333332]], "isOverall": false, "label": "/js/jquery.min.js-7", "isController": false}, {"data": [[1.7023128E12, 93.0]], "isOverall": false, "label": "/site/login-38-0", "isController": false}, {"data": [[1.7023128E12, 462.4333333333333]], "isOverall": false, "label": "/site/login-38-1", "isController": false}, {"data": [[1.7023128E12, 90.2]], "isOverall": false, "label": "/basket/add-to-basket-115", "isController": false}, {"data": [[1.7023128E12, 87.46666666666667]], "isOverall": false, "label": "/js/jquery.pjax.min.js-63", "isController": false}, {"data": [[1.7023128E12, 89.23333333333332]], "isOverall": false, "label": "/css/product-card.css-81", "isController": false}, {"data": [[1.7023128E12, 88.79999999999998]], "isOverall": false, "label": "/images/counter-plus.svg-88", "isController": false}, {"data": [[1.7023128E12, 87.60000000000001]], "isOverall": false, "label": "/css/products-in-shops-modal.css-165", "isController": false}, {"data": [[1.7023128E12, 87.43333333333334]], "isOverall": false, "label": "/js/search.min.js-9", "isController": false}, {"data": [[1.7023128E12, 90.3]], "isOverall": false, "label": "/images/logo.svg-17", "isController": false}, {"data": [[1.7023128E12, 86.96666666666667]], "isOverall": false, "label": "/js/forms.min.js-140", "isController": false}, {"data": [[1.7023128E12, 88.3]], "isOverall": false, "label": "/images/deco01.png-150", "isController": false}, {"data": [[1.7023128E12, 88.60000000000001]], "isOverall": false, "label": "/js/indexPage.min.js-45", "isController": false}, {"data": [[1.7023128E12, 88.30000000000003]], "isOverall": false, "label": "/css/catalog-item.css-154", "isController": false}, {"data": [[1.7023128E12, 89.53333333333335]], "isOverall": false, "label": "/js/basket.min.js-99", "isController": false}, {"data": [[1.7023128E12, 86.53333333333332]], "isOverall": false, "label": "/images/delivery-home.png-113", "isController": false}, {"data": [[1.7023128E12, 110.26666666666668]], "isOverall": false, "label": "/catalog/autocomplete-91", "isController": false}, {"data": [[1.7023128E12, 102.36666666666666]], "isOverall": false, "label": "/order-123", "isController": false}, {"data": [[1.7023128E12, 90.66666666666666]], "isOverall": false, "label": "/images/app-modal-tree.png-18", "isController": false}, {"data": [[1.7023128E12, 91.46666666666668]], "isOverall": false, "label": "/fonts/Graphik-Bold-Web.woff2-21", "isController": false}, {"data": [[1.7023128E12, 88.03333333333332]], "isOverall": false, "label": "/assets/b165c12b/yii.validation.js-139", "isController": false}, {"data": [[1.7023128E12, 90.03333333333335]], "isOverall": false, "label": "/js/yii.validation.min.js-135", "isController": false}, {"data": [[1.7023128E12, 90.66666666666669]], "isOverall": false, "label": "/js/jquery.pjax.min.js-134", "isController": false}, {"data": [[1.7023128E12, 89.03333333333333]], "isOverall": false, "label": "/css/catalog-page.css-160", "isController": false}, {"data": [[1.7023128E12, 89.73333333333333]], "isOverall": false, "label": "/css/basket-page.css-166", "isController": false}, {"data": [[1.7023128E12, 89.69999999999999]], "isOverall": false, "label": "/js/basket.min.js-176", "isController": false}, {"data": [[1.7023128E12, 1384.4333333333332]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.7023128E12, 87.5]], "isOverall": false, "label": "/css/plugins/slick.css-71", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7023128E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.7023128E12, "maxY": 480.9, "series": [{"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/basket.min.js-46", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/search.min.js-98", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/orderModel.min.js-177", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/loader.css-14", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/checkout-modals.css-127", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/btn-location.svg-138", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/filters.css-57", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/search.min.js-175", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/index-page.css-155", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/basket-page.css-83", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/-1", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/paging.css-58", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/catalogItem.min.js-85", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/fonts/Graphik-Regular-Web.woff2-23", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/checkout-page.css-121", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/product-card.css-59", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/checkout-page.css-126", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/emo-chortle.svg-50", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/gen-warning.svg-118", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/checkout-modals.css-120", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/app-google-play-logo.png-11", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/basket.min.js-34", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/jcb-96.png-112", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/slick.1.8.0.min.js-32", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/yii.activeForm.min.js-29", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/mir-96.png-110", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/catalog-item.css-42", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/app-icon.png-52", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/category.css-56", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/products-in-shops-modal.css-96", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/common.css-168", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/common.css-69", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/shop/map/product/9791-104", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/forms.min.js-114", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/common.css-2", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/-68", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/plugins/slick.css-94", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/order-complete.css-147", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/catalog-page.css-55", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/loc-point-heart.svg-48", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/dostavka-107", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/arrow_menu.svg-137", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/catalog-item.css-5", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/-151", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/search.min.js-156", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/indexPage.min.js-74", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/delivery-status.css-169", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/order-table.css-172", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/jquery.matchHeight.0.7.2.min.js-26", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/slider-arrow.svg-36", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/store.min.js-105", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/arrow.svg-54", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/mastercard-96.png-111", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/city/get-by-ip-35", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/customer-167", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/customer-167-0", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/customer-167-1", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/cabinet.css-173", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/static-page.css-108", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/customer-167-2", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/plugins/slick.css-41", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/present-bg.svg-101", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/modal-close.svg-106", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/filters.css-162", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/orderModel.min.js-183", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/close-modal.svg-119", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/basket-icon-green.svg-25", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/products-in-shops-modal.css-125", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/app-apple-logo.png-10", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/jquery.nicescroll.3.7.6.min.js-8", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/close-modal-w.svg-65", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/cabinet.css-181", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/sale_arrow_small.svg-37", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/app-huawei-logo.png-15", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/site/login-38", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/customer/order-179", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/common.css-40", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/visa-96.png-109", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/plugins/slick.css-3", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/category.css-78", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/basket-icon-gray.svg-24", "isController": false}, {"data": [[1.7023128E12, 178.56666666666666]], "isOverall": false, "label": "/js/forms.min.js-100", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/common.css-146", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/forms.min.js-178", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/fonts/Graphik-Medium-Web.woff2-22", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/common.css-153", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/catalogItem.min.js-97", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/order/index-144", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/index-page.css-43", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/app-modal-phone.png-16", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/catalog-page.css-77", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/paging.css-163", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/product-card.css-95", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/jquery.fancybox.min.css-13", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/js.cookie.3.0.1.min.js-27", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/veh-lorry-2.svg-49", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/search.min.js-131", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/products-in-shops-modal.css-60", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/order/update-delivery-type-dependent-info-142", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/forms.min.js-51", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/catalog-item.css-70", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/delivery-icon.svg-90", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/indexPage.min.js-157", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/paging.css-170", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/index-page.css-4", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/order-123-0", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/search.min.js-44", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-64", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/counter-minus.svg-103", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/search.min.js-148", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/jquery.fancybox.3.5.6.min.js-53", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/order-information.css-182", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/plugins/slick.css-152", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/orderModel.min.js-128", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/basket.min.js-75", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/category.css-161", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/paging.css-80", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/order-123-1", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/common.css-124", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/search-icon.svg-19", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/basket/recalculate-basket-122", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/site/login-62", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/forms.min.js-159", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/jquery.fias.min.css-129", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/fonts/graphik.css-12", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/site/login-67", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/basket-table.css-180", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/counter-minus-dis.svg-86", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/basket.min.js-158", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/basket-icon.svg-20", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/favicon.ico-66", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/images/fias-spinner.png-141", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/basket-page.css-102", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/assets/b165c12b/yii.js-136", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/sho-basket-love.svg-47", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/in-shop-icon.svg-89", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/order.min.js-130", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/basket-116", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/jquery.fias.min.js-133", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-132", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/order-again.css-174", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/twitter.typeahead.0.11.1.min.js-6", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/lorry.svg-117", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/common.min.js-31", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/index-page.css-72", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/common.css-93", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/filters.css-79", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/forms.min.js-76", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/order/render-delivery-time-dropdown-143", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/customer/order-179-0", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/indexPage.min.js-33", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/search.min.js-73", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/product-card.css-164", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/customer/order-179-2", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/customer/order-179-1", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/basket-page.css-61", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/products-in-shops-modal.css-82", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/catalog/ptitsy/korma/popugai_srednie/rio_korm_dlya_srednikh_popugaev-92", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/status-available.svg-87", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/catalog/sobaki/korma_sukhie/wonderfur/wonderfur_adult_all_breeds_yagnenok_ris_dlya_sobak-84", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/ua-parser.2.0.0-alpha.2.min.js-30", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/forms.min.js-149", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/pay-status.css-171", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/yii.min.js-28", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/jquery.min.js-7", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/site/login-38-0", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/site/login-38-1", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/basket/add-to-basket-115", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/jquery.pjax.min.js-63", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/product-card.css-81", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/counter-plus.svg-88", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/products-in-shops-modal.css-165", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/search.min.js-9", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/logo.svg-17", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/forms.min.js-140", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/deco01.png-150", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/indexPage.min.js-45", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/catalog-item.css-154", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/basket.min.js-99", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/delivery-home.png-113", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/catalog/autocomplete-91", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/order-123", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/images/app-modal-tree.png-18", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/fonts/Graphik-Bold-Web.woff2-21", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/assets/b165c12b/yii.validation.js-139", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/yii.validation.min.js-135", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/jquery.pjax.min.js-134", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/catalog-page.css-160", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/basket-page.css-166", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/js/basket.min.js-176", "isController": false}, {"data": [[1.7023128E12, 480.9]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.7023128E12, 0.0]], "isOverall": false, "label": "/css/plugins/slick.css-71", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7023128E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 82.0, "minX": 1.7023128E12, "maxY": 2483.0, "series": [{"data": [[1.7023128E12, 2483.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7023128E12, 195.50000000000273]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7023128E12, 1193.9799999999996]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7023128E12, 555.4499999999998]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7023128E12, 82.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7023128E12, 88.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7023128E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 86.0, "minX": 5.0, "maxY": 1521.0, "series": [{"data": [[43.0, 87.0], [5.0, 1521.0], [86.0, 89.0], [111.0, 93.0], [119.0, 91.0], [172.0, 90.5], [193.0, 87.0], [206.0, 88.0], [204.0, 88.5], [218.0, 90.0], [225.0, 87.0], [229.0, 86.0], [239.0, 86.0], [238.0, 90.0], [243.0, 87.0], [257.0, 89.0], [263.0, 88.0], [279.0, 87.0], [291.0, 89.0], [299.0, 88.0], [305.0, 90.0], [315.0, 88.0], [314.0, 89.0], [319.0, 89.0], [324.0, 86.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[263.0, 92.5], [279.0, 92.0], [299.0, 92.0], [319.0, 92.0], [324.0, 94.0], [225.0, 86.0], [229.0, 88.0], [239.0, 95.5], [238.0, 121.0], [243.0, 94.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 324.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 86.0, "minX": 5.0, "maxY": 1185.0, "series": [{"data": [[43.0, 87.0], [5.0, 1185.0], [86.0, 89.0], [111.0, 93.0], [119.0, 91.0], [172.0, 90.5], [193.0, 87.0], [206.0, 88.0], [204.0, 88.0], [218.0, 90.0], [225.0, 87.0], [229.0, 86.0], [239.0, 86.0], [238.0, 89.0], [243.0, 87.0], [257.0, 89.0], [263.0, 88.0], [279.0, 87.0], [291.0, 88.0], [299.0, 88.0], [305.0, 90.0], [315.0, 88.0], [314.0, 89.0], [319.0, 88.0], [324.0, 86.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[263.0, 92.5], [279.0, 92.0], [299.0, 92.0], [319.0, 92.0], [324.0, 94.0], [225.0, 86.0], [229.0, 88.0], [239.0, 95.5], [238.0, 121.0], [243.0, 94.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 324.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 96.0, "minX": 1.7023128E12, "maxY": 96.0, "series": [{"data": [[1.7023128E12, 96.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7023128E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.7023128E12, "maxY": 89.5, "series": [{"data": [[1.7023128E12, 89.5]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.7023128E12, 3.0]], "isOverall": false, "label": "400", "isController": false}, {"data": [[1.7023128E12, 3.0]], "isOverall": false, "label": "302", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "404", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7023128E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.7023128E12, "maxY": 0.5, "series": [{"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/-1-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/app-huawei-logo.png-15-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/basket.min.js-176-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/jquery.matchHeight.0.7.2.min.js-26-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/basket-page.css-102-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/indexPage.min.js-45-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/order-complete.css-147-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/basket-page.css-83-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/app-icon.png-52-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/category.css-161-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/ua-parser.2.0.0-alpha.2.min.js-30-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/app-modal-tree.png-18-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/delivery-home.png-113-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/cabinet.css-173-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/jquery.fancybox.3.5.6.min.js-53-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/order/index-144-failure", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/plugins/slick.css-71-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/fonts/Graphik-Medium-Web.woff2-22-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/counter-minus-dis.svg-86-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/lorry.svg-117-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/forms.min.js-114-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/forms.min.js-178-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/basket-page.css-166-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/app-apple-logo.png-10-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/site/login-38-0-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/slick.1.8.0.min.js-32-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/order-123-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/customer-167-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/site/login-62-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/catalog/ptitsy/korma/popugai_srednie/rio_korm_dlya_srednikh_popugaev-92-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/forms.min.js-159-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/basket.min.js-46-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/index-page.css-155-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/basket.min.js-75-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/basket/recalculate-basket-122-failure", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/common.css-153-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/product-card.css-81-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/catalog/sobaki/korma_sukhie/wonderfur/wonderfur_adult_all_breeds_yagnenok_ris_dlya_sobak-84-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/products-in-shops-modal.css-125-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/customer/order-179-2-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/basket-icon.svg-20-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/images/fias-spinner.png-141-failure", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/status-available.svg-87-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/basket.min.js-34-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/order-123-0-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/yii.min.js-28-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/basket/add-to-basket-115-failure", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/catalog-item.css-5-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/yii.activeForm.min.js-29-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/customer-167-1-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/modal-close.svg-106-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/mastercard-96.png-111-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/common.css-40-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/jquery.fias.min.css-129-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/emo-chortle.svg-50-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/slider-arrow.svg-36-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/indexPage.min.js-157-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/index-page.css-4-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/forms.min.js-76-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/product-card.css-95-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/fonts/Graphik-Regular-Web.woff2-23-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/catalog/autocomplete-91-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/forms.min.js-149-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/in-shop-icon.svg-89-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/paging.css-163-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/site/login-38-1-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/gen-warning.svg-118-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/basket-116-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/app-modal-phone.png-16-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/jcb-96.png-112-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/jquery.min.js-7-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/twitter.typeahead.0.11.1.min.js-6-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/logo.svg-17-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/assets/b165c12b/yii.js-136-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/catalog-item.css-70-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/checkout-modals.css-120-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/forms.min.js-100-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/counter-minus.svg-103-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/orderModel.min.js-128-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/checkout-page.css-121-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/forms.min.js-51-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/catalog-page.css-55-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/customer-167-0-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/basket-page.css-61-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/sho-basket-love.svg-47-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/products-in-shops-modal.css-82-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/common.css-168-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/close-modal-w.svg-65-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/search.min.js-9-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/orderModel.min.js-183-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/filters.css-79-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/loc-point-heart.svg-48-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/order-123-1-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/basket-table.css-180-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/plugins/slick.css-94-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/-151-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/checkout-modals.css-127-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/favicon.ico-66-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/app-google-play-logo.png-11-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/index-page.css-43-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/basket.min.js-99-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/veh-lorry-2.svg-49-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/search.min.js-175-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/jquery.nicescroll.3.7.6.min.js-8-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/common.css-69-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/common.css-146-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/filters.css-162-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/category.css-56-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/delivery-icon.svg-90-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/paging.css-170-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/site/login-67-failure", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/jquery.fancybox.min.css-13-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/store.min.js-105-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/orderModel.min.js-177-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/plugins/slick.css-41-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/fonts/graphik.css-12-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/js.cookie.3.0.1.min.js-27-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/jquery.fias.min.js-133-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/sale_arrow_small.svg-37-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/category.css-78-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/order-table.css-172-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/order/update-delivery-type-dependent-info-142-failure", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/common.css-93-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/basket-icon-gray.svg-24-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/search-icon.svg-19-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/catalog-item.css-42-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/arrow_menu.svg-137-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-64-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/btn-location.svg-138-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/plugins/slick.css-3-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/product-card.css-59-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/close-modal.svg-119-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/dostavka-107-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/mir-96.png-110-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/deco01.png-150-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/present-bg.svg-101-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/visa-96.png-109-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/indexPage.min.js-33-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/catalog-item.css-154-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-132-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/order/render-delivery-time-dropdown-143-failure", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/customer/order-179-0-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/jquery.pjax.min.js-134-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/catalog-page.css-77-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/search.min.js-131-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/plugins/slick.css-152-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/index-page.css-72-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/search.min.js-148-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/-68-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/search.min.js-98-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/products-in-shops-modal.css-60-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/catalogItem.min.js-85-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/checkout-page.css-126-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/customer/order-179-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/jquery.pjax.min.js-63-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/counter-plus.svg-88-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/site/login-38-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/basket.min.js-158-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/paging.css-80-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/common.css-124-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/filters.css-57-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/catalog-page.css-160-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/paging.css-58-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/products-in-shops-modal.css-165-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/pay-status.css-171-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/indexPage.min.js-74-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/product-card.css-164-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/static-page.css-108-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/common.css-2-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/loader.css-14-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/assets/b165c12b/yii.validation.js-139-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/order-again.css-174-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/city/get-by-ip-35-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/shop/map/product/9791-104-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/search.min.js-44-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/search.min.js-73-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/products-in-shops-modal.css-96-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/order-information.css-182-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/common.min.js-31-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/yii.validation.min.js-135-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/customer/order-179-1-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/basket-icon-green.svg-25-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/images/arrow.svg-54-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/catalogItem.min.js-97-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/search.min.js-156-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/customer-167-2-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/cabinet.css-181-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/fonts/Graphik-Bold-Web.woff2-21-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/css/delivery-status.css-169-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/order.min.js-130-success", "isController": false}, {"data": [[1.7023128E12, 0.5]], "isOverall": false, "label": "/js/forms.min.js-140-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7023128E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.5, "minX": 1.7023128E12, "maxY": 92.5, "series": [{"data": [[1.7023128E12, 92.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7023128E12, 3.5]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7023128E12, "title": "Total Transactions Per Second"}},
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
