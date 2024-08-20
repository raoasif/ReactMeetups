import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        /* refs: refrene to dom elements to intract or access them */

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDesc = descInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDesc,
        };

        props.onAddMeetup(meetupData);
    }

    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="title">Meetup Ttile</label>
                <input type="text" id="title" required ref={titleInputRef} />
            </div>

            <div className={classes.control}>
                <label htmlFor="image">Meetup Image</label>
                <input type="url" id="image" required ref={imageInputRef} />
            </div>

            <div className={classes.control}>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" required ref={addressInputRef} />
            </div>

            <div className={classes.control}>
                <label htmlFor="description">Description</label>
                <textarea id="description" rows="5" required ref={descInputRef}></textarea>
            </div>

            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>

        </form>
    </Card>
}

export default NewMeetupForm;