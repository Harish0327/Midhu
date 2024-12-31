import React from 'react';
import './About.css';
import Review from './Review'
import ContactButton from './ContactButton';

const AboutUs = () => {
    return (
        <div className="about-us">
            <h2>About us </h2>
            <p>Midhu Industries was founded in 2008 in Coimbatore (Tamil Nadu, India). Since then we are leading manufacturer and exporter of Stainless Steel Impeller, Stainless Steel Multistage Chamber, Stainless Steel Pump Diffuser, etc. These quality products are widely used in various application like Ro plants , Pressure Pumps,Boilwe Feeding ,Inline pumps and Submersible borewell pumps etc..,. We devote a lot of time and effort in achieving customer delight as we have customer centric policies. We are highly appreciated for our quality range of products. Our products are in demand in India and across the globe. To ensure that the finished products meet the international standards, we use superior quality raw materials and latest technology in the production process.<br/> <br/>
Under the proficient leadership of our Proprietor Mr. A. Selvaraju, we have progressed and achieved excellence in product quality and have a pool of satisfied customers. His effective business methodologies have benefited us to have a huge clientele in India and abroad. Adhering to his ethical business policies and futuristic vision towards new technology brings us to set new standards in market. <br/><br/>
To continue to bring high quality products, we have invested in building a huge infrastructure installed with highest quality machine, equipment with advanced technology for manufacturing products in compliance with latest technology and international standards. In addition, we have a highly skilled and diligent team of experienced professionals who work with passion to develop products of the highest quality standards. The company is equipped with all modern facilities for smooth running of operations. To deliver defect free products at the customer, each product undergoes through stringent quality checks at every stage of production. Our spacious warehouse has the ability to store a large quantity of finished, and raw material to complete bulk orders on time.</p>
            <h2>Factsheet</h2>
            
            <table className="factsheet-table">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nature of Business</td>
                        <td>Exporter and Manufacturer</td>
                    </tr>
                    <tr>
                        <td>Additional Business</td>
                        <td>Exporter</td>
                    </tr>
                    <tr>
                        <td>Company CEO</td>
                        <td>A. Selvaraju</td>
                    </tr>
                    <tr>
                        <td>Registered Address</td>
                        <td>S.F. No. 363, Bharath Nagar, Neelikonampalayam Post , Coimbatore- 641033, Tamil Nadu, India</td>
                    </tr>
                    <tr>
                        <td>Total Number of Employees</td>
                        <td>11 to 25 People</td>
                    </tr>
                    <tr>
                        <td>Year of Establishment</td>
                        <td>2008</td>
                    </tr>
                    <tr>
                        <td>Legal Status of Firm</td>
                        <td>Individual - Proprietor</td>
                    </tr>
                    <tr>
                        <td>Annual Turnover</td>
                        <td>Rs. 1 - 2 Crore</td>
                    </tr>
                    <tr>
                        <td>Export Percentage</td>
                        <td>20-40%</td>
                    </tr>
                    <tr>
                        <td>Quality Measures / Testing Facilities</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td>Import Export Code (IEC)</td>
                        <td>32100*****</td>
                    </tr>
                    <tr>
                        <td>Banker</td>
                        <td>Bank of Baroda</td>
                    </tr>
                    <tr>
                        <td>GST No.</td>
                        <td>33BJUPS8999C1Z8</td>
                    </tr>
                    <tr>
                        <td>Payment Mode</td>
                        <td>Cash, Cheque, Online, DD</td>
                    </tr>
                    <tr>
                        <td>Shipment Mode</td>
                        <td>By Road, By Air, By Sea</td>
                    </tr>
                </tbody>
            </table>
           <Review/>
           <ContactButton/>
        </div>
       
    );
};

export default AboutUs;
