import React from "react";
import { Image } from "react-bootstrap";

const JobCategory = () => {
  return (
    <div>
      <div className="d-flex justify-content-center mt-5">
        <h1 className="mt-5">Job Category List</h1>
      </div>
      <div className="d-flex justify-content-center">
        <p style={{ opacity: 0.5 }}>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="d-flex justify-content-center">


        <div className="me-5" style={{backgroundColor: "rgba(152, 115, 255, 0.05)", padding: "20px", borderRadius: "8px"}}>
            <Image src="../../../assets/icons/accounts.png" fluid style={{backgroundColor: "rgba(152, 115, 255, 0.1)", borderRadius: "8px", padding: "10px"}}/>
            <h6 className="mt-3">Account & Finance</h6>
            <p style={{opacity: "0.4"}}>300 Jobs Available</p>
        </div>



        <div className="me-5" style={{backgroundColor: "rgba(152, 115, 255, 0.05)", padding: "20px", borderRadius: "8px"}}>
            <Image src="../../../assets/icons/creative.png" fluid style={{backgroundColor: "rgba(152, 115, 255, 0.1)", borderRadius: "8px", padding: "10px"}}/>
            <h6 className="mt-3">Creative Design</h6>
            <p style={{opacity: "0.4"}}>100+ Jobs Available</p>
        </div>



        <div className="me-5" style={{backgroundColor: "rgba(152, 115, 255, 0.05)", padding: "20px", borderRadius: "8px"}}>
            <Image src="../../../assets/icons/marketing.png" fluid style={{backgroundColor: "rgba(152, 115, 255, 0.1)", borderRadius: "8px", padding: "10px"}}/>
            <h6 className="mt-3">Marketing & Sales</h6>
            <p style={{opacity: "0.4"}}>150 Jobs Available</p>
        </div>



        <div className="me-5" style={{backgroundColor: "rgba(152, 115, 255, 0.05)", padding: "20px", borderRadius: "8px"}}>
            <Image src="../../../assets/icons/chip.png" fluid style={{backgroundColor: "rgba(152, 115, 255, 0.1)", borderRadius: "8px", padding: "10px"}}/>
            <h6 className="mt-3">Engineering Job</h6>
            <p style={{opacity: "0.4"}}>224 Jobs Available</p>
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
