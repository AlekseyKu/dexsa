import React from 'react';
import {dsnCN} from "../../hooks/helper";


function CommentForm({className}) {


    return (
        <div className={dsnCN('form-box', className)} mt-40>
            {/* <h3 className="mb-30">Comments</h3> */}
            <form>
                <div className="input__wrap controls">
                    <div className="form-group">
                        <label>What's your name?</label>
                        <input id="form_name" type="text" name="name" placeholder="Type your name"
                               required="required"/>
                    </div>

                    <div className="form-group">
                        <label>Your email address?</label>
                        <input id="form_email" type="email" name="email" placeholder="Type your Email Address"
                               required="required"/>
                    </div>

                    <div className="form-group">
                        <label>Any quick contacts?</label>
                        <input id="form_phone" type="phone" name="phone" placeholder="Type your Phone/Messanger"
                               required="required"/>
                    </div>

                    <div className="form-group">
                        <label>Message?</label>
                        <textarea id="form_message" className="form-control" name="comment"
                                  placeholder="Write to us and we will contact you shortly" required="required"
                        />
                    </div>

                    <div className="image-zoom">
                        <button type="submit">Send Message</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CommentForm;