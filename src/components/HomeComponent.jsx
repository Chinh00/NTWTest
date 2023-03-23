

import "../assets/css/home.css"
import { About } from "./templates/About";
import { Content } from "./templates/Content";
import { ContentSlide } from "./templates/ContentSlide";
import { Footer } from "./templates/Footer";
import { HeaderNavbar } from "./templates/HeaderNavbar";
import { SideBar } from "./templates/SideBar";
import { Slide } from "./templates/Slide";
const data = ["Lãnh đạo", "Phòng", "Khoa", "TT Đào tạo", "TT Dịch vụ", "Viện nghiên cứu", "Letco", "Trường ngoại ngữ du lịch", "Đoàn thể", "Tạp chí KH&CN", "Thư viện", "Thư điện tử", "Sitemap"]



const HomeComponent = () => {
  document.onscroll = () => {
    const header = document.querySelector(".header")
    const size = header.getBoundingClientRect()
    console.log(size.height)
      console.log(window.scrollY);

    if (window.scrollY == size.height) {
    }
    
  }

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="header">
              {data.map((val, key) => {
                return (
                  <li key={key}>
                    <a href="google.com">{val}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        
        <HeaderNavbar />
        <Slide />
        <SideBar />
        <Content />
        <ContentSlide />
        <Content />
        <About />

        <Footer />


      </div>
    );





}

export default HomeComponent