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
        data: {"result": {"minY": 1528.0, "minX": 0.0, "maxY": 5400.0, "series": [{"data": [[0.0, 1528.0], [0.1, 1528.0], [0.2, 1528.0], [0.3, 1528.0], [0.4, 1528.0], [0.5, 1528.0], [0.6, 1528.0], [0.7, 1528.0], [0.8, 1528.0], [0.9, 1528.0], [1.0, 1761.0], [1.1, 1761.0], [1.2, 1761.0], [1.3, 1761.0], [1.4, 1761.0], [1.5, 1761.0], [1.6, 1761.0], [1.7, 1761.0], [1.8, 1761.0], [1.9, 1761.0], [2.0, 1833.0], [2.1, 1833.0], [2.2, 1833.0], [2.3, 1833.0], [2.4, 1833.0], [2.5, 1833.0], [2.6, 1833.0], [2.7, 1833.0], [2.8, 1833.0], [2.9, 1833.0], [3.0, 1852.0], [3.1, 1852.0], [3.2, 1852.0], [3.3, 1852.0], [3.4, 1852.0], [3.5, 1852.0], [3.6, 1852.0], [3.7, 1852.0], [3.8, 1852.0], [3.9, 1852.0], [4.0, 1897.0], [4.1, 1897.0], [4.2, 1897.0], [4.3, 1897.0], [4.4, 1897.0], [4.5, 1897.0], [4.6, 1897.0], [4.7, 1897.0], [4.8, 1897.0], [4.9, 1897.0], [5.0, 1918.0], [5.1, 1918.0], [5.2, 1918.0], [5.3, 1918.0], [5.4, 1918.0], [5.5, 1918.0], [5.6, 1918.0], [5.7, 1918.0], [5.8, 1918.0], [5.9, 1918.0], [6.0, 1922.0], [6.1, 1922.0], [6.2, 1922.0], [6.3, 1922.0], [6.4, 1922.0], [6.5, 1922.0], [6.6, 1922.0], [6.7, 1922.0], [6.8, 1922.0], [6.9, 1922.0], [7.0, 1934.0], [7.1, 1934.0], [7.2, 1934.0], [7.3, 1934.0], [7.4, 1934.0], [7.5, 1934.0], [7.6, 1934.0], [7.7, 1934.0], [7.8, 1934.0], [7.9, 1934.0], [8.0, 1948.0], [8.1, 1948.0], [8.2, 1948.0], [8.3, 1948.0], [8.4, 1948.0], [8.5, 1948.0], [8.6, 1948.0], [8.7, 1948.0], [8.8, 1948.0], [8.9, 1948.0], [9.0, 1955.0], [9.1, 1955.0], [9.2, 1955.0], [9.3, 1955.0], [9.4, 1955.0], [9.5, 1955.0], [9.6, 1955.0], [9.7, 1955.0], [9.8, 1955.0], [9.9, 1955.0], [10.0, 1958.0], [10.1, 1958.0], [10.2, 1958.0], [10.3, 1958.0], [10.4, 1958.0], [10.5, 1958.0], [10.6, 1958.0], [10.7, 1958.0], [10.8, 1958.0], [10.9, 1958.0], [11.0, 1982.0], [11.1, 1982.0], [11.2, 1982.0], [11.3, 1982.0], [11.4, 1982.0], [11.5, 1982.0], [11.6, 1982.0], [11.7, 1982.0], [11.8, 1982.0], [11.9, 1982.0], [12.0, 2003.0], [12.1, 2003.0], [12.2, 2003.0], [12.3, 2003.0], [12.4, 2003.0], [12.5, 2003.0], [12.6, 2003.0], [12.7, 2003.0], [12.8, 2003.0], [12.9, 2003.0], [13.0, 2075.0], [13.1, 2075.0], [13.2, 2075.0], [13.3, 2075.0], [13.4, 2075.0], [13.5, 2075.0], [13.6, 2075.0], [13.7, 2075.0], [13.8, 2075.0], [13.9, 2075.0], [14.0, 2127.0], [14.1, 2127.0], [14.2, 2127.0], [14.3, 2127.0], [14.4, 2127.0], [14.5, 2127.0], [14.6, 2127.0], [14.7, 2127.0], [14.8, 2127.0], [14.9, 2127.0], [15.0, 2131.0], [15.1, 2131.0], [15.2, 2131.0], [15.3, 2131.0], [15.4, 2131.0], [15.5, 2131.0], [15.6, 2131.0], [15.7, 2131.0], [15.8, 2131.0], [15.9, 2131.0], [16.0, 2136.0], [16.1, 2136.0], [16.2, 2136.0], [16.3, 2136.0], [16.4, 2136.0], [16.5, 2136.0], [16.6, 2136.0], [16.7, 2136.0], [16.8, 2136.0], [16.9, 2136.0], [17.0, 2159.0], [17.1, 2159.0], [17.2, 2159.0], [17.3, 2159.0], [17.4, 2159.0], [17.5, 2159.0], [17.6, 2159.0], [17.7, 2159.0], [17.8, 2159.0], [17.9, 2159.0], [18.0, 2225.0], [18.1, 2225.0], [18.2, 2225.0], [18.3, 2225.0], [18.4, 2225.0], [18.5, 2225.0], [18.6, 2225.0], [18.7, 2225.0], [18.8, 2225.0], [18.9, 2225.0], [19.0, 2231.0], [19.1, 2231.0], [19.2, 2231.0], [19.3, 2231.0], [19.4, 2231.0], [19.5, 2231.0], [19.6, 2231.0], [19.7, 2231.0], [19.8, 2231.0], [19.9, 2231.0], [20.0, 2238.0], [20.1, 2238.0], [20.2, 2238.0], [20.3, 2238.0], [20.4, 2238.0], [20.5, 2238.0], [20.6, 2238.0], [20.7, 2238.0], [20.8, 2238.0], [20.9, 2238.0], [21.0, 2269.0], [21.1, 2269.0], [21.2, 2269.0], [21.3, 2269.0], [21.4, 2269.0], [21.5, 2269.0], [21.6, 2269.0], [21.7, 2269.0], [21.8, 2269.0], [21.9, 2269.0], [22.0, 2294.0], [22.1, 2294.0], [22.2, 2294.0], [22.3, 2294.0], [22.4, 2294.0], [22.5, 2294.0], [22.6, 2294.0], [22.7, 2294.0], [22.8, 2294.0], [22.9, 2294.0], [23.0, 2295.0], [23.1, 2295.0], [23.2, 2295.0], [23.3, 2295.0], [23.4, 2295.0], [23.5, 2295.0], [23.6, 2295.0], [23.7, 2295.0], [23.8, 2295.0], [23.9, 2295.0], [24.0, 2353.0], [24.1, 2353.0], [24.2, 2353.0], [24.3, 2353.0], [24.4, 2353.0], [24.5, 2353.0], [24.6, 2353.0], [24.7, 2353.0], [24.8, 2353.0], [24.9, 2353.0], [25.0, 2435.0], [25.1, 2435.0], [25.2, 2435.0], [25.3, 2435.0], [25.4, 2435.0], [25.5, 2435.0], [25.6, 2435.0], [25.7, 2435.0], [25.8, 2435.0], [25.9, 2435.0], [26.0, 2470.0], [26.1, 2470.0], [26.2, 2470.0], [26.3, 2470.0], [26.4, 2470.0], [26.5, 2470.0], [26.6, 2470.0], [26.7, 2470.0], [26.8, 2470.0], [26.9, 2470.0], [27.0, 2481.0], [27.1, 2481.0], [27.2, 2481.0], [27.3, 2481.0], [27.4, 2481.0], [27.5, 2481.0], [27.6, 2481.0], [27.7, 2481.0], [27.8, 2481.0], [27.9, 2481.0], [28.0, 2535.0], [28.1, 2535.0], [28.2, 2535.0], [28.3, 2535.0], [28.4, 2535.0], [28.5, 2535.0], [28.6, 2535.0], [28.7, 2535.0], [28.8, 2535.0], [28.9, 2535.0], [29.0, 2538.0], [29.1, 2538.0], [29.2, 2538.0], [29.3, 2538.0], [29.4, 2538.0], [29.5, 2538.0], [29.6, 2538.0], [29.7, 2538.0], [29.8, 2538.0], [29.9, 2538.0], [30.0, 2558.0], [30.1, 2558.0], [30.2, 2558.0], [30.3, 2558.0], [30.4, 2558.0], [30.5, 2558.0], [30.6, 2558.0], [30.7, 2558.0], [30.8, 2558.0], [30.9, 2558.0], [31.0, 2619.0], [31.1, 2619.0], [31.2, 2619.0], [31.3, 2619.0], [31.4, 2619.0], [31.5, 2619.0], [31.6, 2619.0], [31.7, 2619.0], [31.8, 2619.0], [31.9, 2619.0], [32.0, 2630.0], [32.1, 2630.0], [32.2, 2630.0], [32.3, 2630.0], [32.4, 2630.0], [32.5, 2630.0], [32.6, 2630.0], [32.7, 2630.0], [32.8, 2630.0], [32.9, 2630.0], [33.0, 2642.0], [33.1, 2642.0], [33.2, 2642.0], [33.3, 2642.0], [33.4, 2642.0], [33.5, 2642.0], [33.6, 2642.0], [33.7, 2642.0], [33.8, 2642.0], [33.9, 2642.0], [34.0, 2653.0], [34.1, 2653.0], [34.2, 2653.0], [34.3, 2653.0], [34.4, 2653.0], [34.5, 2653.0], [34.6, 2653.0], [34.7, 2653.0], [34.8, 2653.0], [34.9, 2653.0], [35.0, 2681.0], [35.1, 2681.0], [35.2, 2681.0], [35.3, 2681.0], [35.4, 2681.0], [35.5, 2681.0], [35.6, 2681.0], [35.7, 2681.0], [35.8, 2681.0], [35.9, 2681.0], [36.0, 2703.0], [36.1, 2703.0], [36.2, 2703.0], [36.3, 2703.0], [36.4, 2703.0], [36.5, 2703.0], [36.6, 2703.0], [36.7, 2703.0], [36.8, 2703.0], [36.9, 2703.0], [37.0, 2733.0], [37.1, 2733.0], [37.2, 2733.0], [37.3, 2733.0], [37.4, 2733.0], [37.5, 2733.0], [37.6, 2733.0], [37.7, 2733.0], [37.8, 2733.0], [37.9, 2733.0], [38.0, 2757.0], [38.1, 2757.0], [38.2, 2757.0], [38.3, 2757.0], [38.4, 2757.0], [38.5, 2757.0], [38.6, 2757.0], [38.7, 2757.0], [38.8, 2757.0], [38.9, 2757.0], [39.0, 2774.0], [39.1, 2774.0], [39.2, 2774.0], [39.3, 2774.0], [39.4, 2774.0], [39.5, 2774.0], [39.6, 2774.0], [39.7, 2774.0], [39.8, 2774.0], [39.9, 2774.0], [40.0, 2774.0], [40.1, 2774.0], [40.2, 2774.0], [40.3, 2774.0], [40.4, 2774.0], [40.5, 2774.0], [40.6, 2774.0], [40.7, 2774.0], [40.8, 2774.0], [40.9, 2774.0], [41.0, 2779.0], [41.1, 2779.0], [41.2, 2779.0], [41.3, 2779.0], [41.4, 2779.0], [41.5, 2779.0], [41.6, 2779.0], [41.7, 2779.0], [41.8, 2779.0], [41.9, 2779.0], [42.0, 2810.0], [42.1, 2810.0], [42.2, 2810.0], [42.3, 2810.0], [42.4, 2810.0], [42.5, 2810.0], [42.6, 2810.0], [42.7, 2810.0], [42.8, 2810.0], [42.9, 2810.0], [43.0, 2828.0], [43.1, 2828.0], [43.2, 2828.0], [43.3, 2828.0], [43.4, 2828.0], [43.5, 2828.0], [43.6, 2828.0], [43.7, 2828.0], [43.8, 2828.0], [43.9, 2828.0], [44.0, 2868.0], [44.1, 2868.0], [44.2, 2868.0], [44.3, 2868.0], [44.4, 2868.0], [44.5, 2868.0], [44.6, 2868.0], [44.7, 2868.0], [44.8, 2868.0], [44.9, 2868.0], [45.0, 2874.0], [45.1, 2874.0], [45.2, 2874.0], [45.3, 2874.0], [45.4, 2874.0], [45.5, 2874.0], [45.6, 2874.0], [45.7, 2874.0], [45.8, 2874.0], [45.9, 2874.0], [46.0, 2881.0], [46.1, 2881.0], [46.2, 2881.0], [46.3, 2881.0], [46.4, 2881.0], [46.5, 2881.0], [46.6, 2881.0], [46.7, 2881.0], [46.8, 2881.0], [46.9, 2881.0], [47.0, 2888.0], [47.1, 2888.0], [47.2, 2888.0], [47.3, 2888.0], [47.4, 2888.0], [47.5, 2888.0], [47.6, 2888.0], [47.7, 2888.0], [47.8, 2888.0], [47.9, 2888.0], [48.0, 2933.0], [48.1, 2933.0], [48.2, 2933.0], [48.3, 2933.0], [48.4, 2933.0], [48.5, 2933.0], [48.6, 2933.0], [48.7, 2933.0], [48.8, 2933.0], [48.9, 2933.0], [49.0, 2934.0], [49.1, 2934.0], [49.2, 2934.0], [49.3, 2934.0], [49.4, 2934.0], [49.5, 2934.0], [49.6, 2934.0], [49.7, 2934.0], [49.8, 2934.0], [49.9, 2934.0], [50.0, 2943.0], [50.1, 2943.0], [50.2, 2943.0], [50.3, 2943.0], [50.4, 2943.0], [50.5, 2943.0], [50.6, 2943.0], [50.7, 2943.0], [50.8, 2943.0], [50.9, 2943.0], [51.0, 2951.0], [51.1, 2951.0], [51.2, 2951.0], [51.3, 2951.0], [51.4, 2951.0], [51.5, 2951.0], [51.6, 2951.0], [51.7, 2951.0], [51.8, 2951.0], [51.9, 2951.0], [52.0, 2959.0], [52.1, 2959.0], [52.2, 2959.0], [52.3, 2959.0], [52.4, 2959.0], [52.5, 2959.0], [52.6, 2959.0], [52.7, 2959.0], [52.8, 2959.0], [52.9, 2959.0], [53.0, 2966.0], [53.1, 2966.0], [53.2, 2966.0], [53.3, 2966.0], [53.4, 2966.0], [53.5, 2966.0], [53.6, 2966.0], [53.7, 2966.0], [53.8, 2966.0], [53.9, 2966.0], [54.0, 2997.0], [54.1, 2997.0], [54.2, 2997.0], [54.3, 2997.0], [54.4, 2997.0], [54.5, 2997.0], [54.6, 2997.0], [54.7, 2997.0], [54.8, 2997.0], [54.9, 2997.0], [55.0, 3021.0], [55.1, 3021.0], [55.2, 3021.0], [55.3, 3021.0], [55.4, 3021.0], [55.5, 3021.0], [55.6, 3021.0], [55.7, 3021.0], [55.8, 3021.0], [55.9, 3021.0], [56.0, 3026.0], [56.1, 3026.0], [56.2, 3026.0], [56.3, 3026.0], [56.4, 3026.0], [56.5, 3026.0], [56.6, 3026.0], [56.7, 3026.0], [56.8, 3026.0], [56.9, 3026.0], [57.0, 3044.0], [57.1, 3044.0], [57.2, 3044.0], [57.3, 3044.0], [57.4, 3044.0], [57.5, 3044.0], [57.6, 3044.0], [57.7, 3044.0], [57.8, 3044.0], [57.9, 3044.0], [58.0, 3049.0], [58.1, 3049.0], [58.2, 3049.0], [58.3, 3049.0], [58.4, 3049.0], [58.5, 3049.0], [58.6, 3049.0], [58.7, 3049.0], [58.8, 3049.0], [58.9, 3049.0], [59.0, 3053.0], [59.1, 3053.0], [59.2, 3053.0], [59.3, 3053.0], [59.4, 3053.0], [59.5, 3053.0], [59.6, 3053.0], [59.7, 3053.0], [59.8, 3053.0], [59.9, 3053.0], [60.0, 3080.0], [60.1, 3080.0], [60.2, 3080.0], [60.3, 3080.0], [60.4, 3080.0], [60.5, 3080.0], [60.6, 3080.0], [60.7, 3080.0], [60.8, 3080.0], [60.9, 3080.0], [61.0, 3081.0], [61.1, 3081.0], [61.2, 3081.0], [61.3, 3081.0], [61.4, 3081.0], [61.5, 3081.0], [61.6, 3081.0], [61.7, 3081.0], [61.8, 3081.0], [61.9, 3081.0], [62.0, 3119.0], [62.1, 3119.0], [62.2, 3119.0], [62.3, 3119.0], [62.4, 3119.0], [62.5, 3119.0], [62.6, 3119.0], [62.7, 3119.0], [62.8, 3119.0], [62.9, 3119.0], [63.0, 3124.0], [63.1, 3124.0], [63.2, 3124.0], [63.3, 3124.0], [63.4, 3124.0], [63.5, 3124.0], [63.6, 3124.0], [63.7, 3124.0], [63.8, 3124.0], [63.9, 3124.0], [64.0, 3194.0], [64.1, 3194.0], [64.2, 3194.0], [64.3, 3194.0], [64.4, 3194.0], [64.5, 3194.0], [64.6, 3194.0], [64.7, 3194.0], [64.8, 3194.0], [64.9, 3194.0], [65.0, 3210.0], [65.1, 3210.0], [65.2, 3210.0], [65.3, 3210.0], [65.4, 3210.0], [65.5, 3210.0], [65.6, 3210.0], [65.7, 3210.0], [65.8, 3210.0], [65.9, 3210.0], [66.0, 3284.0], [66.1, 3284.0], [66.2, 3284.0], [66.3, 3284.0], [66.4, 3284.0], [66.5, 3284.0], [66.6, 3284.0], [66.7, 3284.0], [66.8, 3284.0], [66.9, 3284.0], [67.0, 3299.0], [67.1, 3299.0], [67.2, 3299.0], [67.3, 3299.0], [67.4, 3299.0], [67.5, 3299.0], [67.6, 3299.0], [67.7, 3299.0], [67.8, 3299.0], [67.9, 3299.0], [68.0, 3320.0], [68.1, 3320.0], [68.2, 3320.0], [68.3, 3320.0], [68.4, 3320.0], [68.5, 3320.0], [68.6, 3320.0], [68.7, 3320.0], [68.8, 3320.0], [68.9, 3320.0], [69.0, 3354.0], [69.1, 3354.0], [69.2, 3354.0], [69.3, 3354.0], [69.4, 3354.0], [69.5, 3354.0], [69.6, 3354.0], [69.7, 3354.0], [69.8, 3354.0], [69.9, 3354.0], [70.0, 3481.0], [70.1, 3481.0], [70.2, 3481.0], [70.3, 3481.0], [70.4, 3481.0], [70.5, 3481.0], [70.6, 3481.0], [70.7, 3481.0], [70.8, 3481.0], [70.9, 3481.0], [71.0, 3494.0], [71.1, 3494.0], [71.2, 3494.0], [71.3, 3494.0], [71.4, 3494.0], [71.5, 3494.0], [71.6, 3494.0], [71.7, 3494.0], [71.8, 3494.0], [71.9, 3494.0], [72.0, 3507.0], [72.1, 3507.0], [72.2, 3507.0], [72.3, 3507.0], [72.4, 3507.0], [72.5, 3507.0], [72.6, 3507.0], [72.7, 3507.0], [72.8, 3507.0], [72.9, 3507.0], [73.0, 3510.0], [73.1, 3510.0], [73.2, 3510.0], [73.3, 3510.0], [73.4, 3510.0], [73.5, 3510.0], [73.6, 3510.0], [73.7, 3510.0], [73.8, 3510.0], [73.9, 3510.0], [74.0, 3526.0], [74.1, 3526.0], [74.2, 3526.0], [74.3, 3526.0], [74.4, 3526.0], [74.5, 3526.0], [74.6, 3526.0], [74.7, 3526.0], [74.8, 3526.0], [74.9, 3526.0], [75.0, 3527.0], [75.1, 3527.0], [75.2, 3527.0], [75.3, 3527.0], [75.4, 3527.0], [75.5, 3527.0], [75.6, 3527.0], [75.7, 3527.0], [75.8, 3527.0], [75.9, 3527.0], [76.0, 3527.0], [76.1, 3527.0], [76.2, 3527.0], [76.3, 3527.0], [76.4, 3527.0], [76.5, 3527.0], [76.6, 3527.0], [76.7, 3527.0], [76.8, 3527.0], [76.9, 3527.0], [77.0, 3535.0], [77.1, 3535.0], [77.2, 3535.0], [77.3, 3535.0], [77.4, 3535.0], [77.5, 3535.0], [77.6, 3535.0], [77.7, 3535.0], [77.8, 3535.0], [77.9, 3535.0], [78.0, 3542.0], [78.1, 3542.0], [78.2, 3542.0], [78.3, 3542.0], [78.4, 3542.0], [78.5, 3542.0], [78.6, 3542.0], [78.7, 3542.0], [78.8, 3542.0], [78.9, 3542.0], [79.0, 3549.0], [79.1, 3549.0], [79.2, 3549.0], [79.3, 3549.0], [79.4, 3549.0], [79.5, 3549.0], [79.6, 3549.0], [79.7, 3549.0], [79.8, 3549.0], [79.9, 3549.0], [80.0, 3561.0], [80.1, 3561.0], [80.2, 3561.0], [80.3, 3561.0], [80.4, 3561.0], [80.5, 3561.0], [80.6, 3561.0], [80.7, 3561.0], [80.8, 3561.0], [80.9, 3561.0], [81.0, 3625.0], [81.1, 3625.0], [81.2, 3625.0], [81.3, 3625.0], [81.4, 3625.0], [81.5, 3625.0], [81.6, 3625.0], [81.7, 3625.0], [81.8, 3625.0], [81.9, 3625.0], [82.0, 3767.0], [82.1, 3767.0], [82.2, 3767.0], [82.3, 3767.0], [82.4, 3767.0], [82.5, 3767.0], [82.6, 3767.0], [82.7, 3767.0], [82.8, 3767.0], [82.9, 3767.0], [83.0, 3773.0], [83.1, 3773.0], [83.2, 3773.0], [83.3, 3773.0], [83.4, 3773.0], [83.5, 3773.0], [83.6, 3773.0], [83.7, 3773.0], [83.8, 3773.0], [83.9, 3773.0], [84.0, 3792.0], [84.1, 3792.0], [84.2, 3792.0], [84.3, 3792.0], [84.4, 3792.0], [84.5, 3792.0], [84.6, 3792.0], [84.7, 3792.0], [84.8, 3792.0], [84.9, 3792.0], [85.0, 3820.0], [85.1, 3820.0], [85.2, 3820.0], [85.3, 3820.0], [85.4, 3820.0], [85.5, 3820.0], [85.6, 3820.0], [85.7, 3820.0], [85.8, 3820.0], [85.9, 3820.0], [86.0, 3825.0], [86.1, 3825.0], [86.2, 3825.0], [86.3, 3825.0], [86.4, 3825.0], [86.5, 3825.0], [86.6, 3825.0], [86.7, 3825.0], [86.8, 3825.0], [86.9, 3825.0], [87.0, 4000.0], [87.1, 4000.0], [87.2, 4000.0], [87.3, 4000.0], [87.4, 4000.0], [87.5, 4000.0], [87.6, 4000.0], [87.7, 4000.0], [87.8, 4000.0], [87.9, 4000.0], [88.0, 4033.0], [88.1, 4033.0], [88.2, 4033.0], [88.3, 4033.0], [88.4, 4033.0], [88.5, 4033.0], [88.6, 4033.0], [88.7, 4033.0], [88.8, 4033.0], [88.9, 4033.0], [89.0, 4230.0], [89.1, 4230.0], [89.2, 4230.0], [89.3, 4230.0], [89.4, 4230.0], [89.5, 4230.0], [89.6, 4230.0], [89.7, 4230.0], [89.8, 4230.0], [89.9, 4230.0], [90.0, 4359.0], [90.1, 4359.0], [90.2, 4359.0], [90.3, 4359.0], [90.4, 4359.0], [90.5, 4359.0], [90.6, 4359.0], [90.7, 4359.0], [90.8, 4359.0], [90.9, 4359.0], [91.0, 4471.0], [91.1, 4471.0], [91.2, 4471.0], [91.3, 4471.0], [91.4, 4471.0], [91.5, 4471.0], [91.6, 4471.0], [91.7, 4471.0], [91.8, 4471.0], [91.9, 4471.0], [92.0, 4486.0], [92.1, 4486.0], [92.2, 4486.0], [92.3, 4486.0], [92.4, 4486.0], [92.5, 4486.0], [92.6, 4486.0], [92.7, 4486.0], [92.8, 4486.0], [92.9, 4486.0], [93.0, 4543.0], [93.1, 4543.0], [93.2, 4543.0], [93.3, 4543.0], [93.4, 4543.0], [93.5, 4543.0], [93.6, 4543.0], [93.7, 4543.0], [93.8, 4543.0], [93.9, 4543.0], [94.0, 4579.0], [94.1, 4579.0], [94.2, 4579.0], [94.3, 4579.0], [94.4, 4579.0], [94.5, 4579.0], [94.6, 4579.0], [94.7, 4579.0], [94.8, 4579.0], [94.9, 4579.0], [95.0, 4639.0], [95.1, 4639.0], [95.2, 4639.0], [95.3, 4639.0], [95.4, 4639.0], [95.5, 4639.0], [95.6, 4639.0], [95.7, 4639.0], [95.8, 4639.0], [95.9, 4639.0], [96.0, 4704.0], [96.1, 4704.0], [96.2, 4704.0], [96.3, 4704.0], [96.4, 4704.0], [96.5, 4704.0], [96.6, 4704.0], [96.7, 4704.0], [96.8, 4704.0], [96.9, 4704.0], [97.0, 5145.0], [97.1, 5145.0], [97.2, 5145.0], [97.3, 5145.0], [97.4, 5145.0], [97.5, 5145.0], [97.6, 5145.0], [97.7, 5145.0], [97.8, 5145.0], [97.9, 5145.0], [98.0, 5171.0], [98.1, 5171.0], [98.2, 5171.0], [98.3, 5171.0], [98.4, 5171.0], [98.5, 5171.0], [98.6, 5171.0], [98.7, 5171.0], [98.8, 5171.0], [98.9, 5171.0], [99.0, 5400.0], [99.1, 5400.0], [99.2, 5400.0], [99.3, 5400.0], [99.4, 5400.0], [99.5, 5400.0], [99.6, 5400.0], [99.7, 5400.0], [99.8, 5400.0], [99.9, 5400.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1500.0, "maxY": 9.0, "series": [{"data": [[1500.0, 1.0], [1700.0, 1.0], [1800.0, 3.0], [1900.0, 7.0], [2000.0, 2.0], [2100.0, 4.0], [2200.0, 6.0], [2300.0, 1.0], [2400.0, 3.0], [2500.0, 3.0], [2600.0, 5.0], [2700.0, 6.0], [2800.0, 6.0], [2900.0, 7.0], [3000.0, 7.0], [3100.0, 3.0], [3200.0, 3.0], [3300.0, 2.0], [3400.0, 2.0], [3500.0, 9.0], [3600.0, 1.0], [3700.0, 3.0], [3800.0, 2.0], [4000.0, 2.0], [4300.0, 1.0], [4200.0, 1.0], [4500.0, 2.0], [4400.0, 2.0], [4600.0, 1.0], [4700.0, 1.0], [5100.0, 2.0], [5400.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 100.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 100.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 100.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 50.55, "minX": 1.70229876E12, "maxY": 50.55, "series": [{"data": [[1.70229876E12, 50.55]], "isOverall": false, "label": "Users100", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70229876E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1528.0, "minX": 1.0, "maxY": 5400.0, "series": [{"data": [[2.0, 5171.0], [3.0, 4639.0], [4.0, 5145.0], [5.0, 4033.0], [6.0, 4704.0], [7.0, 4471.0], [8.0, 4486.0], [9.0, 3825.0], [10.0, 4543.0], [11.0, 4230.0], [12.0, 4579.0], [13.0, 4000.0], [14.0, 4359.0], [15.0, 3767.0], [16.0, 3119.0], [17.0, 3507.0], [18.0, 3053.0], [19.0, 3320.0], [20.0, 3820.0], [21.0, 3080.0], [22.0, 2966.0], [23.0, 3773.0], [24.0, 3792.0], [25.0, 3044.0], [26.0, 2933.0], [27.0, 3354.0], [28.0, 3481.0], [29.0, 3527.0], [30.0, 3081.0], [31.0, 2810.0], [33.0, 2888.0], [32.0, 3535.0], [37.0, 3299.0], [36.0, 3167.3333333333335], [39.0, 3542.0], [38.0, 2733.0], [41.0, 3561.0], [40.0, 3021.0], [43.0, 3133.5], [45.0, 3527.0], [44.0, 3549.0], [47.0, 3494.0], [46.0, 3526.0], [49.0, 2619.0], [48.0, 3124.0], [51.0, 2874.0], [50.0, 3194.0], [53.0, 2653.0], [52.0, 2538.0], [55.0, 3284.0], [54.0, 3210.0], [57.0, 3049.0], [56.0, 2642.0], [59.0, 2774.0], [58.0, 2470.0], [61.0, 2816.0], [63.0, 2997.0], [62.0, 2828.0], [67.0, 2881.0], [66.0, 2630.0], [65.0, 2959.0], [64.0, 2868.0], [71.0, 2779.0], [70.0, 2353.0], [69.0, 2774.0], [68.0, 3026.0], [75.0, 2131.0], [74.0, 2225.0], [73.0, 2294.0], [72.0, 2558.0], [79.0, 2535.0], [78.0, 2703.0], [77.0, 2136.0], [76.0, 2295.0], [83.0, 2231.0], [82.0, 2003.0], [81.0, 2127.0], [80.0, 1955.0], [87.0, 2238.0], [86.0, 1934.0], [85.0, 1958.0], [84.0, 2481.0], [91.0, 1922.0], [90.0, 2269.0], [89.0, 1918.0], [88.0, 1833.0], [95.0, 1897.0], [94.0, 1948.0], [93.0, 1761.0], [92.0, 2435.0], [99.0, 2075.0], [98.0, 1982.0], [97.0, 1528.0], [96.0, 1852.0], [100.0, 2159.0], [1.0, 5400.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[50.55, 3019.9700000000016]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 190.0, "minX": 1.70229876E12, "maxY": 758978.4166666666, "series": [{"data": [[1.70229876E12, 758978.4166666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.70229876E12, 190.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70229876E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3019.9700000000016, "minX": 1.70229876E12, "maxY": 3019.9700000000016, "series": [{"data": [[1.70229876E12, 3019.9700000000016]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70229876E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2606.01, "minX": 1.70229876E12, "maxY": 2606.01, "series": [{"data": [[1.70229876E12, 2606.01]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70229876E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 485.08000000000004, "minX": 1.70229876E12, "maxY": 485.08000000000004, "series": [{"data": [[1.70229876E12, 485.08000000000004]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70229876E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1528.0, "minX": 1.70229876E12, "maxY": 5400.0, "series": [{"data": [[1.70229876E12, 5400.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.70229876E12, 4346.1]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.70229876E12, 5397.709999999999]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.70229876E12, 4635.999999999999]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.70229876E12, 1528.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.70229876E12, 2938.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70229876E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1970.0, "minX": 10.0, "maxY": 4591.0, "series": [{"data": [[10.0, 4591.0], [22.0, 1970.0], [45.0, 2874.0], [23.0, 3481.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 45.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1623.0, "minX": 10.0, "maxY": 4172.5, "series": [{"data": [[10.0, 4172.5], [22.0, 1623.0], [45.0, 2525.0], [23.0, 2864.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 45.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.70229876E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.70229876E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70229876E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.70229876E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.70229876E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70229876E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.70229876E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.70229876E12, 1.6666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70229876E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.70229876E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.70229876E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70229876E12, "title": "Total Transactions Per Second"}},
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

