// // src\components\blog\bizContactForm.jsx

import React, { useRef, useState } from 'react';
import { dsnCN } from "../../hooks/helper";
import { useFormSubmit } from "../../hooks/useFormSubmit";

function BizContactForm({ className }) {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const { sendForm } = useFormSubmit();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResult(null);
        setLoading(true);

        const formData = new FormData(form.current);

        try {
            const result = await sendForm(formData, form.current);
            setLoading(false);
            setResult(result);
            form.current.reset();
        } catch (error) {
            setLoading(false);
            setResult({ success: false, message: error.message });
            console.error("Error:", error);
        }
    };

    return (
        <div className={dsnCN('form-box', className)} mt-40>
            <form ref={form} onSubmit={handleSubmit}>
                <div className="input__wrap controls">
                    <div className="form-group">
                        <label>What's your name?</label>
                        <input id="form_name" type="text" name="name" placeholder="Type your name"
                               required="required" />
                    </div>

                    <div className="form-group">
                        <label>Your email address?</label>
                        <input id="form_email" type="email" name="email" placeholder="Type your Email Address"
                               required="required" />
                    </div>

                    <div className="form-group">
                        <label>Any quick contacts?</label>
                        <input id="form_phone" type="phone" name="phone" placeholder="Type your Phone/Messanger"
                               required="required" />
                    </div>

                    <div className="form-group">
                        <label>Message?</label>
                        <textarea id="form_message" className="form-control" name="message"
                                  placeholder="Write to us and we will contact you shortly" required="required" />
                    </div>

                    <div className="image-zoom">
                        <button type="submit" disabled={loading}>Send Message</button>
                    </div>
                    {loading && <div className="loading-message mt-20">Sending message...</div>}
                    {result && (
                        <p className={`${result.success ? 'success-message' : 'error-message'} mt-20`}>
                            {result.message}
                        </p>
                    )}
                </div>
            </form>
        </div>
    );
}

export default BizContactForm;


// import React from 'react';
// import {dsnCN} from "../../hooks/helper";


// function CommentForm({className}) {


//     return (
//         <div className={dsnCN('form-box', className)} mt-40>
//             {/* <h3 className="mb-30">Comments</h3> */}
//             <form>
//                 <div className="input__wrap controls">
//                     <div className="form-group">
//                         <label>What's your name?</label>
//                         <input id="form_name" type="text" name="name" placeholder="Type your name"
//                                required="required"/>
//                     </div>

//                     <div className="form-group">
//                         <label>Your email address?</label>
//                         <input id="form_email" type="email" name="email" placeholder="Type your Email Address"
//                                required="required"/>
//                     </div>

//                     <div className="form-group">
//                         <label>Any quick contacts?</label>
//                         <input id="form_phone" type="phone" name="phone" placeholder="Type your Phone/Messanger"
//                                required="required"/>
//                     </div>

//                     <div className="form-group">
//                         <label>Message?</label>
//                         <textarea id="form_message" className="form-control" name="comment"
//                                   placeholder="Write to us and we will contact you shortly" required="required"
//                         />
//                     </div>

//                     <div className="image-zoom">
//                         <button type="submit">Send Message</button>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default CommentForm;