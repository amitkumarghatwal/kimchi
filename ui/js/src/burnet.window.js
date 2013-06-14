/*
 * Project Burnet
 *
 * Copyright IBM, Corp. 2013
 *
 * Authors:
 *  Hongliang Wang <hlwanghl@cn.ibm.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
burnet.window = {
	open : function(url) {
		if ($("#windowField").size() < 1) {
			$(document.body).append('<div id="windowField" class="bgmask" style="display: none;"></div>');
			$('#windowField').on('click', '.window .close', function(event) {
				burnet.window.close();
			});
		}
		$("#windowField").load(url).fadeIn(100);
	},
	close : function() {
		$("#windowField").fadeOut(100, function() {
			$(this).empty();
		});
	}
};