# Password Generator

### Description:

- This app generates passwords.

- There should be a "Generate Password!" button which the user can click to show a new random password. 

- By **default**, the password generated should use **mixed cases** (both lowercase and uppercase).

---

### Instructions:

Create a password generator app with the following instructions:

1. Create your page layout in HTML.

2. Add an event listener to your "Generate Password!" button. This should execute a function every time the button is clicked.

3. Use the constant "charset" in your function (move it there). It contains all characters to use.

```javascript
const charset = 'abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_';
```

4. Your function should generate a new password. For now, it should be a **default** 20 characters, and use **mixed cases** (both lowercase and uppercase characters). To achieve this in your function, you should ensure that every third character of the generated password should always be uppercase.

```
Examples for generated passwords: - 876FocMkcCv98teXc(Ov (20 characters) - %lfXcrLt-#ke3r6R5§-? (20 characters) - Nd1Z\$yRx (9 characters)
```

5. Once the "Generate Password!" button is clicked, your function should execute and immediately fill the content of your "output" field with a randomly generated password.

**Hint:** Remember you can use the following logic to get a random integer (whole number) between a `min` number and a `max` number (inclusive). 

```
Math.random() * (max - min) + min;
```

Perhaps you could apply this to the `charset` variable to pick a random **index** of the variable. Do this 20 times and you should have 20 characters chosen at random...

---

### Bonus version (only if you finish early!):

1. Add an input field so the user can define the length of the password. After filling in the input field, Clicking the "Generate Password!" button should now generate a new password of the chosen length. If the input field is blank, or has a non-number value, the new password should stay at a default of 20 characters.

2. Add a checkbox to define if the password should use mixed cases. Clicking the "Generate Password!" button will generate a new password with either mixed cases (if the checkbox is checked) or just lowercase (if the checkbox is **not** checked). 

**Hint:** Try to access the "checked" property on your "checkbox" input element in JavaScript (e.g. `myElement.checked`). This should return `true` if the checkbox is checked, and `false` if it is not checked.

> You can refer to the representation below for an idea of what your result should look like.

![demo](demo.gif)


# Password Generator - Extra Question
​
3. Add a new button to your Password Generator app called "I feel lucky!". You should give both the new button and the "Generate Password!" button a class of "button". You should then target both your ".button" class elements using `document.querySelectorAll()`. 
​
Finally, you should add some extra functionality to your "generate password" function:
​
- If you clicked the "I feel lucky!" button, you should generate a password in the normal way. However, after the first password has been generated, you should (a) remove the event listener from the "I feel lucky!" button, and (b) make the "I feel lucky!" button disabled, so the user cannot click on it any more. If you cannot remember how to do this, you are welcome to research it!
​
- Meanwhile, you should be able to click the "Generate Password!" button more than once, and continue to generate a new password each time. However, after you click the "Generate Password!" button 10 times in the same session, you should also generate an `alert()` box saying "Your basic account allows for you to generate a maximum of ten passwords. To generate more passwords, please upgrade your account!" After this box is displayed, the "Generate Password!" box should also have its event listener removed, and be made disabled so the user cannot click on it any more.
​
- If you finish early, check your program to make sure there are no bugs (e.g. that you have handled the case where the user inputs a word in the "password length" field, rather than a number). If you are happy with your program, feel free to add some extra styling, or play around with one or two more different types of event listener to make sure you understand how different events are triggered. :-)