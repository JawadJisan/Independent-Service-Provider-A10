import React from 'react';

const Footer = () => {
    return (
        <div>
           <section class="contact" id="contact">
        <div class="max-width">
            <h2 class="title">Contact me</h2>
            <div class="contact-content">
                <div class="column left">
                    <div class="text">Find me on</div>
                    <div class="contact-icon">
                        <a title="Mazharul Islam on LinkedIn" href="https://www.linkedin.com/in/md-mazharul-islam-225064183/" target="_blank"> <i class="fab fa-linkedin"></i> </a>
                        <a title="Mazharul Islam on GitHub" href="https://github.com/Maaazhar" target="_blank"> <i class="fab fa-github-square"></i> </a>
                        <a title="Mazharul Islam on Code pen" href="https://codepen.io/maaazhar" target="_blank"> <i class="fab fa-codepen"></i> </a>
                        <a title="Mazharul Islam on Code sand box" href="https://codesandbox.io/u/Maaazhar" target="_blank"> 
                            <img src="images/codesandbox.svg"  alt=""/> 
                            <svg fill="#c72041" height="43" viewBox="0 0 23 23" width="43" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd" ><path d="m11.5 11.6166v11.1704c.1945 0 .3223-.0422.4969-.1419l8.9445-5.1111c.3531-.2024.4971-.5158.4971-.9229v-10.36419c0-.2042-.043-.32636-.1422-.49691l-9.5102 5.3735c-.1769.1011-.2861.2893-.2861.4931zm4.9691 6.4143c0 .2839-.1064.4259-.3549.5679l-2.9815 1.7037c-.2129.1419-.4969.071-.4969-.213v-7.5957c0-.2032.1788-.4665.3549-.5679l6.8149-3.90429c.1893-.10894.3549.06554.3549.28395v4.04634c0 .2097-.0989.3982-.284.4969l-3.0524 1.6327c-.1851.0987-.355.2871-.355.4969z" /><path d="m1.56152 16.611v-10.36416c0-.40759.21402-.7916.5679-.99383l8.66048-4.898146c.1866-.098883.4969-.141973.7099-.141973s.5415.052741.7099.141975l8.5895 4.898144c.1699.10042.4008.33172.4969.49692l-9.5124 5.39507c-.1769.1011-.2839.2931-.2839.4969v11.1451c-.1945 0-.3933-.0423-.5679-.142l-8.73149-5.0401c-.35389-.2023-.63889-.5863-.63889-.9939zm1.27778-8.30552v4.04632c0 .2839.07099.4259.35494.5679l2.98148 1.7037c.28395.142.35494.3549.35494.5679v2.8395c0 .2839.07099.4259.35494.5679l2.98148 1.7037c.28392.142.49692.071.49692-.213v-7.5956c0-.213-.071-.426-.3549-.5679l-6.67289-3.83338c-.21296-.14197-.49691-.07099-.49691.21296zm11.642-4.82716-2.6266 1.49074c-.2129.14198-.4969.14198-.7098 0l-2.62659-1.49074c-.17289-.09772-.39472-.09722-.5679 0l-3.26543 1.84568c-.28395.14198-.28395.42593 0 .5679l6.53082 3.76235c.1748.10006.3932.10006.5679 0l6.5309-3.76235c.213-.14197.284-.42592 0-.5679l-3.2654-1.84568c-.1732-.09722-.395-.09772-.5679 0z" /></g></svg>
                        </a>
                         <a title="Mazharul Islam on Facebook" href="https://www.facebook.com/MAAAZHAAAR/" target="_blank"> <i class="fab fa-facebook-square"></i></a> 
                        <a title="Mazharul Islam on Twitter" href="https://twitter.com/maaazhaaar" target="_blank"> <i class="fab fa-twitter-square"></i> </a>
                    </div>
                    <div class="icons">
                        <div class="row">
                            <i class="fas fa-user"></i>
                            <div class="info">
                                <div class="head">Full Name</div>
                                <div class="sub-title">Md. Mazharul Islam</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-phone-alt"></i>
                            <div class="info">
                                <div class="head">Mobile</div>
                                <div class="sub-title">0088 017 222 876 98</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-envelope"></i>
                            <div class="info">
                                <div class="head">Email</div>
                                <div class="sub-title">mailformazhar@gmail.com</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-map-marked-alt"></i>
                            <div class="info">
                                <div class="head">Address</div>
                                <div class="sub-title">Dhaka, Bangladesh.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column right">
                    <div class="text">Let me know what you think about me <i class="far fa-smile"></i> </div>
                    <form class="contact-form" action="#" method="POST">
                        <div class="fields">
                            <div class="field name">
                                <input type="text" class="fullname" placeholder="Name"/>
                            </div>
                            <div class="field email">
                                <input type="text" class="email-input" placeholder="Email"/>
                            </div>
                        </div>
                        <div class="field">
                            <input type="text" class="subject" placeholder="Subject"/>
                        </div>
                        <div class="field textarea">
                            <textarea class="message" cols="30" rows="10" placeholder="Message.."></textarea>
                        </div>
                        <div class="button-area">
                            <button class="send-msg" type="submit" name="send">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- footer section start --> */}
    <footer>
        <span>Developed By <a href="https://mazharul-islam.web.app/">Mazharul Islam</a> | <span class="far fa-copyright"></span> 
        <script type="text/javascript">var year = new Date();document.write(year.getFullYear());</script>
        All rights reserved.</span>
    </footer>
        </div>
    );
};

export default Footer;