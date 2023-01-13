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
  news: {
    title: "Berita Terbaru",
    berita: [
      {
        id: 1,
        title: "Hajatan 4 Tahunan PENGDA HTCI JATIM Blakra'an lll",
        img: slide1,
        caption:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        time: "March 04, 2022",
      },
      {
        id: 2,
        title: "Kumpul Guyub seluruh club PengDa HTCI JaTeng-DIY",
        img: slide2,
        caption:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.   The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
        time: "February 02, 2022",
      },
      {
        id: 3,
        title:
          "SK Pengangkatan Dewan Pengawas HTCI Periode Kerja (Masa Bhakti) 2021 - 2023",
        img: slide3,
        caption:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        time: "Januari 28, 2022",
      },
    ],
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
