import "./About_1.css";
import om from "../../assets/About/om.png";
import om1 from '../../assets/About/om-1.png';
import { FiArrowRightCircle } from "react-icons/fi";
const About_1 = () => {
  return (
    <div className="about_1_wrapper">
      <div className="about_1_pre_container">
        <div className="about_1_pre_container_wrapper">
          <div className="about_1_pre_container_left">
            <p className="about_1_pre_container_left_para">01</p>
            <p className="about_1_pre_container_left_para-1">
              Enhance Operational Efficiency:
            </p>
            <p className="about_1_pre_container_left_para-2">
              SecureSys streamlines your business operations, providing a
              comprehensive surveillance solution that enables efficient
              monitoring of remote employees. By automating time-tracking and
              surveillance processes, you free up valuable resources, allowing
              your team to focus on core tasks and strategic growth initiatives.
            </p>
            <div className="about_1_container-bulletpoint">
              <FiArrowRightCircle size={25} color="#f19100" />
              Comprehensive Surveillance Solution
            </div>
            <div className="about_1_container-bulletpoint">
              <FiArrowRightCircle size={25} color="#f19100" />
              Automated Time-Tracking
            </div>
            <div className="about_1_container-bulletpoint">
              <FiArrowRightCircle size={25} color="#f19100" />
              Resource Optimization
            </div>
          </div>
          <div className="about_1_pre_container_right">
            <img src={om} alt="" style={{ height: "400px", width: "400px" }} />
          </div>
        </div>
      </div>
      <div className="about_1_container">
        <div className="about_1_full_container">
          <div className="about_1_pre_container_wrapper">
            <div className="about_1_pre_container_left">
              <p className="about_1_pre_container_left_para">02</p>
              <p className="about_1_pre_container_left_para-1">
              Boost Productivity
              </p>
              <p className="about_1_pre_container_left_para-2">
              Improve productivity with SecureSys advanced surveillance tools. Gain real-time insights into employee activities, allowing you to identify areas for improvement and implement targeted strategies. Automation of surveillance processes ensures a proactive approach to performance management, fostering a more productive work environment.
              </p>
              <div className="about_1_container-bulletpoint">
                <FiArrowRightCircle size={25} color="#f19100" />
                Comprehensive Surveillance Solution
              </div>
              <div className="about_1_container-bulletpoint">
                <FiArrowRightCircle size={25} color="#f19100" />
                Automated Time-Tracking
              </div>
              <div className="about_1_container-bulletpoint">
                <FiArrowRightCircle size={25} color="#f19100" />
                Resource Optimization
              </div>
              <img src={om1} alt="" className="img-about_1" />

            </div>

          </div>
        </div>
        <div className="about_1_full_container-2">
          <div className="about_1_half_container">
            <div className="about_1_pre_container_wrapper">
              <div className="about_1_pre_container_left">
                <p className="about_1_pre_container_left_para">03</p>
                <p className="about_1_pre_container_left_para-1">
                Facilitate Seamless Expansion
                </p>
                <p className="about_1_pre_container_left_para-2">
                As your business grows, SecureSys scales with you. Our surveillance systems are designed to seamlessly adapt to the evolving needs of your enterprise. Whether you are expanding your workforce or venturing into new locations, SecureSys ensures consistent and reliable surveillance, providing a solid foundation for successful expansion.
                </p>
              </div>
            </div>
          </div>
          <div className="about_1_half_container-1">
            <div className="about_1_pre_container_wrapper">
              <div className="about_1_pre_container_left">
                <p className="about_1_pre_container_left_para">04</p>
                <p className="about_1_pre_container_left_para-1">
                Strengthen Security Measures
                </p>
                <p className="about_1_pre_container_left_para-2">
                SecureSys goes beyond traditional surveillance, offering a robust security solution for your business. With cutting-edge technology, our system provides a secure environment for both physical spaces and digital data. Strengthening your security measures not only safeguards your assets but also builds trust with employees and clients alike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_1;
