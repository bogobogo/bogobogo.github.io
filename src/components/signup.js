import React from "react"
import './signup.css'
export default class Signup extends React.Component {
    render() {
        return (
            <form action="https://app.convertkit.com/forms/1129894/subscriptions" className="seva-form formkit-form" method="post" data-sv-form="1129894" data-uid="424b026710" data-format="inline" data-version="5" data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:null,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:null,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:null,&quot;devices&quot;:null,&quot;show_once_every&quot;:null},&quot;powered_by&quot;:{&quot;show&quot;:false,&quot;url&quot;:&quot;https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:null},&quot;slide_in&quot;:{&quot;display_in&quot;:null,&quot;trigger&quot;:null,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:null,&quot;devices&quot;:null,&quot;show_once_every&quot;:null},&quot;sticky_bar&quot;:{&quot;display_in&quot;:null,&quot;trigger&quot;:null,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:null,&quot;devices&quot;:null,&quot;show_once_every&quot;:null},&quot;incentive_email&quot;:{&quot;from_email_address_id&quot;:1417732,&quot;action&quot;:&quot;url&quot;,&quot;auto_confirm&quot;:false,&quot;send_email&quot;:true,&quot;url&quot;:&quot;https://app.convertkit.com/confirm-subscription&quot;,&quot;button_text&quot;:&quot;Confirm your subscription&quot;,&quot;content_one&quot;:&quot;Thanks for signing up. Click the link below to confirm your subscription and you'll be on your way.&quot;,&quot;content_two&quot;:&quot;It's good to have you!&quot;,&quot;subject&quot;:&quot;Important: confirm your subscription&quot;},&quot;custom_css&quot;:{},&quot;thank_you_page&quot;:{}},&quot;version&quot;:&quot;5&quot;}" min-width="400 500 600 700 800" style={{backgroundColor: 'rgb(255, 255, 255)', borderRadius: '6px'}}>
                <div data-style="full">
                        <div data-element="column" class="formkit-column" style={{backgroundColor: 'rgb(249, 250, 251)'}}>
                        <div className="formkit-background" style={{opacity: 0.3}}> </div>
                            <div className="formkit-header" data-element="header" style={{color: 'rgb(77, 77, 77)', fontSize: '20px', fontWeight: 700}}>
                                <h1>Join the Newsletter</h1>
                            </div>
                            <div className="formkit-subheader" data-element="subheader" style={{color: 'rgb(104, 104, 104)', fontSize: '15px'}}>
                                Subscribe to get my latest content by email.
                            </div>
                        </div>
                        <div data-element="column" className="formkit-column">
                            <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert">
                            </ul>
                            <div data-element="fields" className="seva-fields formkit-fields">
                                <div className="formkit-field">
                                    <input className="formkit-input" name="email_address" placeholder="Your email address" required="" type="email" style={{color: 'rgb(0, 0, 0)', borderColor: 'rgb(227, 227, 227)', borderRadius: '4px', fontWeight: 400}}></input>
                                </div>
                                <button data-element="submit" className="formkit-submit formkit-submit" style={{color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(0, 122, 204)', borderRadius: '24px', fontWeight: 700}}>
                                    <div className="formkit-spinner">
                                    <div>
                                    </div>
                                    <div>
                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                    <span>Subscribe</span>
                                </button>
                            </div>
                            <div className="formkit-guarantee" data-element="guarantee" style={{color: 'rgb(77, 77, 77)', fontSize: '13px', fontWeight: 400}}>
                                Unsubscribe at any time.
                            </div>
                        </div>
                    </div>
            </form>
        )
    }
 }