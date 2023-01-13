import logo from "../assets/logo.png";
import slide1 from "../assets/slide1.webp";
import slide2 from "../assets/slide2.webp";
import slide3 from "../assets/slide3.webp";
import sejarah from "../assets/sejarah.webp";
import tentangKami from "../assets/tentang-kami.webp";

export const config = {
  logo,
  home: {
    carousel: [
      {
        title: "Being Reel Brotherhood",
        subtitle:
          "Bersama sama menujudkan sikap dan rasa persaudaraan Bikers. Brotherhood harus tetap kita pegang teguh",
        img: slide1,
      },
      {
        title: "Tegak Sama Tinggi, Duduk Sama Rendah",
        subtitle:
          "Tak ada perbedaan antar kita, karena kita sama-sama pecinta motor",
        img: slide2,
      },
      {
        title: "Berdiri Diatas Satu Nama",
        subtitle: "Berbeda-beda tetapi tetap satu jua",
        img: slide3,
      },
    ],
    sejarah: {
      title: "Sejarah",
      caption:
        "Pada tahun 1993, PT Astra Honda Motor (AHM) mengeluarkan varian baru sepeda motor bertipe sport dengan kapasitas mesin 200cc, yaitu Honda Tiger, atau sering disebut juga GL-200. Honda Tiger adalah sepeda motor bertipe sport yang beredar di wilayah Indonesia. Honda Tiger merupakan sepeda motor dengan kapasitas mesin tertinggi yang diproduksi oleh PT AHM",
      img: sejarah,
    },
    member: {
      title: "MEMBER",
      subtitle: "Jumlah anggota dan pengurus",
      anggota: "1920 Anggota",
      pengurus: "22 Pengurus Daerah",
    },
    tentang: {
      title: "Tentang Kami",
      caption:
        "Honda Tiger Club Indonesia, Adalah wadah organisasi klub sepeda motor Honda Tiger di Indonesia. Organisasi Honda Tiger Club Indonesia (HTCI) dideklarasikan di Bandung pada tanggal 10 Oktober 2004 dengan dihadiri oleh sejumlah club dari seluruh tanah air, hingga saat ini Honda Tiger Club Indonesia (HTCI) terdiri atas Pengurus Pusat (PP), 20 Pengurus Daerah (Pengda) dan 247 klub yang tersebar di seluruh kawasan Indonesia.",
      img: tentangKami,
    },
  },
};
