

function Validation() {
    this.kiemTraRong = function (value, iderror, mess) {
        if (value.trim() === "") {
            //show thong bao loi
            domID(iderror).innerHTML = mess;
            domID(iderror).style.display = "block";
            return false;
        } else {
            domID(iderror).innerHTML = "";
            domID(iderror).style.display = "none";
            return true;
        };
    };

    this.kiemTraTKNV = function (taiKhoan, iderror, mess, min, max) {
        if (taiKhoan.length >= min && taiKhoan.length <= max) {
            domID(iderror).innerHTML = "";
            domID(iderror).style.display = "none";
            return true;
        } else {
            domID(iderror).innerHTML = mess;
            domID(iderror).style.display = "block";
            return false;

        };

    };

    this.kiemTraTkTrung = function (value, iderror, mess, arr) {
        var isExist = false;
    
        for (var i = 0; i < arr.length; i++) {
          var nv = arr[i];
          if (nv.taiKhoan === value) {
            isExist = true;
            break;
          };
        };
    
        if (isExist) {
          domID(iderror).innerHTML = mess;
          domID(iderror).style.display = "block";
          return false;
        };
    
        domID(iderror).innerHTML = "";
        domID(iderror).style.display = "none";
        return true;
      };
    

    this.kiemTraChuoiKiTu = function (value, iderror, mess) {

        var letter =
            "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
            "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
            "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";

        if (value.match(letter)) {
            domID(iderror).innerHTML = "";
            domID(iderror).style.display = "none";
            return true;
        };

        domID(iderror).innerHTML = mess;
        domID(iderror).style.display = "block";
        return false;
    };

    this.kiemTraEmail = function (value, iderror, mess) {
        var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (value.match(letter)) {
            domID(iderror).innerHTML = "";
            domID(iderror).style.display = "none";
            return true;
        };
        domID(iderror).innerHTML = mess;
        domID(iderror).style.display = "block";
        return false;
    };
    this.kiemTraMatKhau = function(value,iderror,mess){
        var letter = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
        if(value.match(letter)){
            domID(iderror).innerHTML = "";
            domID(iderror).style.display = "none";
            return true;
        };
        domID(iderror).innerHTML = mess;
        domID(iderror).style.display = "block";
        return false;

    };
    this.kiemTraNgayLam = function(value,iderror,mess){
        var letter = /(?=\d)^(?:(?!(?:10\D(?:0?[5-9]|1[0-4])\D(?:1582))|(?:0?9\D(?:0?[3-9]|1[0-3])\D(?:1752)))((?:0?[13578]|1[02])|(?:0?[469]|11)(?!\/31)(?!-31)(?!\.31)|(?:0?2(?=.?(?:(?:29.(?!000[04]|(?:(?:1[^0-6]|[2468][^048]|[3579][^26])00))(?:(?:(?:\d\d)(?:[02468][048]|[13579][26])(?!\x20BC))|(?:00(?:42|3[0369]|2[147]|1[258]|09)\x20BC))))))|(?:0?2(?=.(?:(?:\d\D)|(?:[01]\d)|(?:2[0-8])))))([-.\/])(0?[1-9]|[12]\d|3[01])\2(?!0000)((?=(?:00(?:4[0-5]|[0-3]?\d)\x20BC)|(?:\d{4}(?!\x20BC)))\d{4}(?:\x20BC)?)(?:$|(?=\x20\d)\x20))?((?:(?:0?[1-9]|1[012])(?::[0-5]\d){0,2}(?:\x20[aApP][mM]))|(?:[01]\d|2[0-3])(?::[0-5]\d){1,2})?$/;
        if(value.match(letter)){
            domID(iderror).innerHTML = "";
            domID(iderror).style.display = "none";
            return true;
        };
        domID(iderror).innerHTML = mess;
        domID(iderror).style.display = "block";
        return false;
    };
    this.kiemTraGioiHang = function(value,iderror,mess,min,max){
        if(value >= min && value <= max){
            domID(iderror).innerHTML = "";
            domID(iderror).style.display = "none";
            return true;
        }else{
            domID(iderror).innerHTML = mess;
            domID(iderror).style.display = "block";
            return false;
        };
    };
    this.kiemTraChucVu = function(idSelect,iderror,mess){
        if(domID(idSelect).selectedIndex !== 0){
            domID(iderror).innerHTML = "";
            domID(iderror).style.display = "none";
            return true;
        };
        domID(iderror).innerHTML = mess;
            domID(iderror).style.display = "block";
            return false;
    };
};
