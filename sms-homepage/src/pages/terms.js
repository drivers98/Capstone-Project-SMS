import React, { Component } from "react";
import '../pagesCSS/terms.css';
import { Link } from "react-router-dom";

const title = 'Terms and conditions'
const bp1 = 'Search a Syllabus'
const bp2 = 'About'
const bp3 = 'Help'
const he1 = 'intoduction'
const he2 = 'Intellectual Property Rights'
const he3 = 'Restrictions'
const he4 = 'Your Content'
const he5 = 'No Warranties'
const he6 = 'Limitation of liability'
const he7 = 'Indemification'
const he8 = 'Severability'
const he9 = 'Variation of Terms'
const he10 = 'Assignment'
const he11 = 'Entire Agreement'
const he12 = 'Governing Law & Jurisdiction'


class Terms extends Component {
  render() {
    return (
      <div>
      <header className="Terms-header">
        <img src="/images/KentLogo.png" alt=""/>
        <h1>{title}</h1>
        </header>
<body className="Terms-body">
<tb1>{he1}</tb1>

 <wb1>These Website Standard Terms and Conditions written on this webpage shall manage </wb1>
<wb1>your use of our website, Webiste Name accessible at Softscape.</wb1>
<wb1>These Terms will be applied fully and affect your use of this Website. By using this </wb1>
<wb1>Website, you agreed to accept all terms and conditions written in here. You must not </wb1>
<wb1>use this Website if you disagree with any of these Website Standard Terms and </wb1>
<wb1>Conditions.</wb1>

<tb1>{he2}</tb1>
<wb1>Other than the content you own, under these Terms, Kent State University and/or its</wb1>
<wb1>licensors own all the intellectual property rights and materials contained in this Website.</wb1>
<wb1>You are granted limited license only for purposes of viewing the material contained on</wb1>
<wb1>this Website.</wb1> 

<tb1>{he3}</tb1>
<wb1>You are specifically restricted from all of the following:</wb1>
<ul>
  <li>publishing any Website material in any other media;</li>
  <li>selling, sublicensing and/or otherwise commercializing any Website material;</li>
  <li>publicly performing and/or showing any Website material;</li>
  <li>using this Website in any way that is or may be damaging to this Website;</li>
  <li>using this Website in any way that impacts user access to this Website;</li>
  <li>using this Website contrary to applicable laws and regulations, or in any way may <br></br>cause harm to the Website, or to any person or business entity</li>
  <li>engaging in any data mining, data harvesting, data extracting or any other <br></br>similar activity in relation to this Website</li>
  <li>using this Website to engage in any advertising or marketing.</li>
</ul>
<wb1>Certain areas of this Website are restricted from being accessed by you and Kent State</wb1>
<wb1>University may further restrict access by you to any areas of this Website, at any time,</wb1>
<wb1>in absolute discretion. Any user ID and password you may have for this Website are </wb1>
<wb1>confidential and you must maintain confidentiality as well.</wb1>

<tb1>{he4}</tb1>
<wb1>In these Website Standard Terms and Conditions, “Your Content” shall mean any audio,</wb1>
<wb1>video text, images or other material you choose to display on this Website. By </wb1>
<wb1>displaying Your Content, you grant Kent State University a non-exclusive, worldwide </wb1>
<wb1>irrevocable, sub-licensable license to use, reproduce, adapt, publish, translate and</wb1>
<wb1>distribute it in any and all media.</wb1>
<wb1>Your Content must be your own and must not be invading any third-party's rights. Kent </wb1>
<wb1>State University reserves the right to remove any of Your Content from this Website at </wb1>
<wb1>any time without notice.</wb1>

<tb1>{he5}</tb1>
<wb1>This Website is provided “as is,” with all faults, and Kent State University express no</wb1>
<wb1>representations or warranties, of any kind related to this Website or the materials </wb1>
<wb1>contained on this Website. Also, nothing contained on this Website shall be interpreted </wb1>
<wb1>as advising you.</wb1>

<tb1>{he6}</tb1>
<wb1>In no event shall Kent State University, nor any of its officers, directors and employees, </wb1>
<wb1>shall be held liable for anything arising out of or in any way connected with your use of </wb1>
<wb1>this Website whether such liability is under contract.  Kent State University, including its </wb1>
<wb1>officers, directors and employees shall not be held liable for any indirect, consequential </wb1>
<wb1>or special liability arising out of or in any way related to your use of this Website.</wb1>

<tb1>{he7}</tb1>
<wb1><b>You hereby indemnify to the fullest extent Kent State University </b></wb1>
<wb1><b>from and against any and/or all liabilities, costs, demands,</b></wb1>
<wb1><b>causes of action, damages and expenses arising in any way</b></wb1>
<wb1><b>related to your breach of any of the provisions of these Terms.</b></wb1>

<tb1>{he8}</tb1>
<wb1>If any provision of these Terms is found to be invalid under any applicable law, such </wb1>
<wb1>provisions shall be deleted without affecting the remaining provisions herein.</wb1>

<tb1>{he9}</tb1>
<wb1>Kent State University is permitted to revise these Terms at any time as it sees fit, and by </wb1>
<wb1>using this Website you are expected to review these Terms on a regular basis.</wb1>

<tb1>{he10}</tb1>
<wb1>The Kent State University is allowed to assign, transfer, and subcontract its rights and/or</wb1>
<wb1>obligations under these Terms without any notification. However, you are not allowed to</wb1>
<wb1>assign, transfer, or subcontract any of your rights and/or obligations under these Terms.</wb1>


<tb1>{he11}</tb1>
<wb1>These Terms constitute the entire agreement between Kent State University and you in </wb1>
<wb1>relation to your use of this Website, and supersede all prior agreements and </wb1>
<wb1>understandings.</wb1>

<tb1>{he12}</tb1>
<wb1>These Terms will be governed by and interpreted in accordance with the laws of the</wb1>
<wb1>State of Ohio, and you submit to the non-exclusive jurisdiction of the state and federal</wb1>
<wb1>courts located in the US for the resolution of any disputes.</wb1>


</body>

        <footer className="Terms-footer">
          <b1>
           <t3><Link to="/">{bp1}</Link></t3>  
            <t2><Link to="/about">{bp2}</Link></t2>
           <t1><Link to="/help">{bp3}</Link></t1>
          </b1>
        </footer>
       
        </div>
    ); 
  }
}


export default Terms;
