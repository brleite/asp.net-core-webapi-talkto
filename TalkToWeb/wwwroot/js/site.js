function TesteCors() {
    var tokenJWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRoaWFnb0B0ZXN0ZS5jb20iLCJzdWIiOiJjOGZlMjc3OC1jYWVhLTRhMmUtYjNiMS1hZWM0ODljZWY4YWMiLCJleHAiOjE1OTY3NDAzNTZ9.ajFik54Ma0PpekKPVG7o1-qZwr7nkg9PDv6xGujF12U";
    var servico = "https://localhost:44380/api/mensagem/33539519-2962-4260-a7f6-283f1def407e/c8fe2778-caea-4a2e-b3b1-aec489cef8ac";
    $("#resultado").html("---Solicitando---");
    $.ajax({
        url: servico,
        method: "GET",
        crossDomain: true,
        headers: { "Accept": "application/json" },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + tokenJWT);
        },
        success: function (data, status, xhr) {
            $("#resultado").html(data);
            console.info(data);
        }
    });
}