
import '../../assets/css/home.css'
const data = [
  { title: "TIN KHOA HỌC CÔNG NGHỆ", img: "/images/1.png" },
  { title: "CÔNG BỐ QUỐC TẾ", img: "/images/2.png" },
  { title: "NHIỆM VỤ KHOA HỌC CÔNG NGHỆ", img: "/images/3.png" },
];
export const About = () => {
    return <div className='about'>
        <div className="header">
            KHOA HỌC CÔNG NGHỆ
        </div>
        <div className="about_content">
            <div className="box">
                <div>TOP 25</div>
                ĐẠI HỌC DẪN ĐẦU VỀ NGHIÊN CỨU TẠI VIỆT NAM
            </div>
            <div className="box">
                <div>1500</div>
                CÔNG BỐ QUỐC TẾ
            </div>
            <div className="box">
                <div>550</div>
                ĐỀ TÀI/ ĐỀ ÁN KHOA HỌC CÔNG NGHỆ
            </div>
        </div>
        <div className="about_extend">
            {data.map((val, key) => {
                return (
                  <div className="about_box" key={key}>
                    <div className="img">
                      <img src={val.img} alt="" />
                    </div>
                        <div className="title">{val.title }</div>
                  </div>
                );
            })}
        </div>
    </div>
}