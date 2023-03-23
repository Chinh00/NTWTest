
import '../../assets/css/home.css'

const data = ["KHẢO THÍ", "ĐẢM BẢO CHẤT LƯỢNG", "HỢP TÁC DOANH NGHIỆP", "HỢP TÁC QUỐC TẾ", "ĐẠI HỌC ĐIỆN TỬ", "VĂN BẢN PHÁP LUẬT"]

export const SideBar = () => {
    return <div className="row">
        <div className="sideBar">
            <ul>
                {data.map((val, key) => {
                    return (
                      <li key={key}>
                        <a href="">
                          <span>{val}</span>
                        </a>
                      </li>
                    );
                })}
            </ul>
        </div>
    </div>
}