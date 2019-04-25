import $ from 'jquery'

export function $request(data, url, callback) {
  $.ajax({
    type: 'POST',
    url,
    contentType: 'application/json;charset=UTF-8',
    data: JSON.stringify(data),
    async: false,
    dataType: 'json',
    success: callback
  })
}
