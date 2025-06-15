// Membuat Object
// Object Literral
var mhs1 = {
    nama : 'Abdullah',
    nrp : '0422062003',
    email : 'afabozz9@gmial.com',
    jurusan : 'Pengangguran'
}

var mhs2 = {
    nama : 'Doddy',
    nrp : '038937428',
    email : 'doddy@gmail.com',
    jurusan : 'Bebas'
}

// Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Novariza', '023453535', 'Nofariza@gmail.com', 'Teknik Mangan')


// Constructor 
function Mahasiswa(nama, nrp, email, jurusan) {
    // var this = {};
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
    // return this;
}

var mhs4 = new Mahasiswa('Erik', '2038423042', 'erik23@gmail.com', 'Teknik Besi');