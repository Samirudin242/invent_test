const baseURL = "http://localhost:3000";

$(document).ready(function () {
  console.log("berhasil masuk");
  fetchData();
});

function fetchData() {
  $(".data").empty();
  $.ajax({
    method: "GET",
    url: baseURL + "/produk",
  })
    .done((datas) => {
      if (datas) {
        datas.forEach((data) => {
          let tanggal = data.tanggal.substring(0, 10);
          $(".data").append(`
              <tr>
              <th scope="row">${data.id}</th>
              <td>${data.nama_barang}</td>
              <td>${data.kode_barang}</td>
              <td>${data.jumlah_barang}</td>
              <td>${tanggal}</td>
            </tr>
              `);
        });
      }
    })
    .fail((err) => {
      console.log(err);
    });
}
