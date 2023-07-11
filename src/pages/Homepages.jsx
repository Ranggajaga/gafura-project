import {kelasTerbaru, dataSwiper} from "../data/index";
import {useNavigate} from "react-router-dom"
import {Container, Row, Col} from "react-bootstrap";
import HeroImage from '../assets/img/hero.png';

import FaqComponent from "../components/FaqComponent";


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { Navigation, Pagination } from 'swiper/modules';


const Homepages = () => {
  let navigate = useNavigate();
  return (
    <div className="homepage">
      <header className="m-100 min-vh-100 d-flex align-item-center pt-5 overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
            <h1 className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">Temukan <br/> <span>Bakat Kreatifmu</span><br/>Bersama Kami</h1>
            <p className="mb-4 animate__animated animate__fadeInUp animate__delay-1s" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt qui quibusdam nostrum voluptate distinctio nam illo quos tenetur vitae veniam, fugiat, modi quasi atque optio amet totam perferendis quisquam non!</p>
            <button className="btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s" onClick={()=> navigate("/kelas")}>Lihat Kelas</button>
            <button className="btn btn-outline-danger btn-lg rounded-1  mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s">Lihat Promo</button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
            <img src={HeroImage} alt="hero-img" className="animate__animated animate__fadeInUp"/>
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
            <h1 className="text-center fw-bold">Kelas Terbaru</h1>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dicta ab molestias delectus recusandae! Ipsa consequuntur possimus, pariatur fugiat voluptatum iusto dolorum deleniti. Hic cupiditate a commodi, nihil labore neque.</p>
            </Col>
          </Row>
          <Row>
            {kelasTerbaru.map((kelas)=> {
              return(
                 <Col key={kelas.id} className="shadow rounded" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={kelas.delay}>
                <img src={kelas.image} alt="unsplash.com" className="w-100 mb-5 rounded-top"/>
                <div className="start mb-2 px-3">
                  <i className={kelas.star1}></i>
                  <i className={kelas.star2}></i>
                  <i className={kelas.star3}></i>
                  <i className={kelas.star4}></i>
                  <i className={kelas.star5}></i>
                </div>
                <h5 className="mb-5 px-3">{kelas.title}</h5>
                <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                  <p className="m-0 text-primary fw-bold">{kelas.price}</p>
                  <button className="btn btn-danger rounded-1">{kelas.buy}</button>
                </div>
              </Col>
              );
            })}
          </Row>
          <Row>
            <Col className="text-center">
            <button className="btn btn-success rounded-5 btn-lg" data-aos="fade-up" data-aos-duration="1000" onClick={()=> navigate ("/kelas")}>
              Lihat Semua Kelas<i className="fa-solid fa-chevron-right ms-1"></i>
              </button>
            
            </Col>
          </Row>
        </Container>
      </div>
      <div className="testimonial py-5">
        <Container>
            <Row>
              <Col>
              <h1 className="text-center fw-bold my-5">Testimonial</h1></Col>
            </Row>
            <Row>
            <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}

        dir="rtl"
        navigation={true}
       
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween:40,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {dataSwiper.map((data) => {
          return <SwiperSlide key={data.id} className="shadow-sm">
            <p className="desc">{data.desc}</p>
            <div className="people">
              <img src={data.image} alt=""></img>
              <div>
                <h5 className="mb-1">{data.name}</h5>
                <p className="m-0 fw-bold">{data.skill}</p>
              </div>
            </div>
          </SwiperSlide>;
        })}
        
       
      </Swiper>
            </Row>
        </Container>
      </div>

      {/* section faq */}
      <FaqComponent></FaqComponent>
      {/* section faq */}
    </div>
  )
}

export default Homepages