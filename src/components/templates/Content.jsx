import '../../assets/css/home.css'
const data = [0, 1, 2, 3, 4] 
const data1 = [0, 1, 2]
export const Content = () => {
    return (
      <div className="content">
        <div className="left">
          <div className="header">TIN TỨC</div>
          <div className="container">
            <div className="left_content">
              <img src="/images/t88843.jpg" alt="" width={365} />
              <div className="heading">
                HaUI hợp tác với NATV trong đào tạo nhân lực chất lượng cao
              </div>
              <div className="about">
                Ngày 21/3, TS.Kiều Xuân Thực, Hiệu trưởng Trường Đại học Công
                nghiệp Hà Nội đã có buổi tiếp và làm việc với Công ty TNHH
                Nissan Automotive Tech
              </div>
            </div>
            <div className="left_list">
                        {data.map((val, key) => {
                            return (
                              <div className="list_item">
                                <img
                                  src="/images/m88748.jpg"
                                  alt=""
                                        width={100}
                                        height={75}
                                />
                                <div className="left_list_content">
                                  Hơn 10.000 lượt học sinh, phụ huynh tham quan,
                                  tư vấn và tìm hiểu ngành nghề đào tạo của Đại
                                  học Công nghiệ
                                </div>
                              </div>
                            );
              })}
                
            </div>
          </div>
        </div>
        <div className="right">
          <div className="header">THÔNG BÁO</div>
                <div className="content">
                    <ul>
                        {data1.map((val, key) => {
                            return (
                              <li key={key}>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="10"
                                    fill="currentColor"
                                    class="bi bi-chevron-double-right"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
                                    />
                                    <path
                                      fill-rule="evenodd"
                                      d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
                                    />
                                  </svg>
                                </span>
                                <p>
                                  Kế hoạch tổ chức lễ kỷ niệm 20 năm ngày thành
                                  lập Khoa Công nghệ Hóa
                                </p>
                              </li>
                            );
                        })}
                        <li><img src="/images/banner.png" alt="" width={360} height={245} /></li>
                    </ul>
          </div>
          <div className="footer"></div>
        </div>
      </div>
    );
}