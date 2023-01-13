import logo from "../assets/logo.png";
import slide1 from "../assets/slide1.webp";
import slide2 from "../assets/slide2.webp";
import slide3 from "../assets/slide3.webp";
import sejarah from "../assets/sejarah.webp";
import tentangKami from "../assets/tentang-kami.webp";
import gallery1 from "../assets/gallery1.webp";
import gallery2 from "../assets/gallery2.webp";
import gallery3 from "../assets/gallery3.webp";
import gallery4 from "../assets/gallery4.webp";
import gallery5 from "../assets/gallery5.webp";
import gallery6 from "../assets/gallery6.webp";
import gallery7 from "../assets/gallery7.webp";
import gallery8 from "../assets/gallery8.webp";
import gallery9 from "../assets/gallery9.webp";
import map from "../assets/map.webp";
import { AiOutlinePhone } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { IoTimeSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

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
      pengurus: "22 Pengurus",
    },
    tentang: {
      title: "Tentang Kami",
      caption:
        "Honda Tiger Club Indonesia, Adalah wadah organisasi klub sepeda motor Honda Tiger di Indonesia. Organisasi Honda Tiger Club Indonesia (HTCI) dideklarasikan di Bandung pada tanggal 10 Oktober 2004 dengan dihadiri oleh sejumlah club dari seluruh tanah air, hingga saat ini Honda Tiger Club Indonesia (HTCI) terdiri atas Pengurus Pusat (PP), 20 Pengurus Daerah (Pengda) dan 247 klub yang tersebar di seluruh kawasan Indonesia.",
      img: tentangKami,
    },
  },

  gallery: {
    title: "Gallery",
    subtitle: "Dokumentasi Event Motor Club Indonesia",
    img: [
      gallery1,
      gallery2,
      gallery3,
      gallery4,
      gallery5,
      gallery6,
      gallery7,
      gallery8,
      gallery9,
    ],
  },
  contact: {
    map,
    leave: {
      title: "Leave Message",
      subtitle: "Kami akan segera menjawab pesan anda.",
      form: [
        {
          name: "name",
          placeholder: "Nama anda...",
        },
        {
          name: "email",
          placeholder: "Email anda...",
        },
        {
          name: "pesan",
          placeholder: "Pesan anda...",
        },
      ],
    },
    info: [
      {
        icon: <AiOutlinePhone />,
        title: "Phone",
        subtitle: "+628281 82818 1029",
      },
      {
        icon: <IoLocationSharp />,
        title: "Address",
        subtitle: "Jl. A. Natasukarya No.30 Subang, Jawa Barat. 41214",
      },
      { icon: <IoTimeSharp />, title: "Open time", subtitle: "Everyday Open" },
      { icon: <MdEmail />, title: "Email", subtitle: "mci@mail.com" },
    ],
  },
};
