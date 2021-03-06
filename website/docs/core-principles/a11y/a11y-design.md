---
title: UI/UX requirements
---

@## General principles

These principles were inspired by an [article from the Google design team](https://design.google/library/designers-guide-accessibility-research/) 🖤

- Try accessibility technologies on yourself
- Develop your empathy and open-mindedness to new things
- Be humble and willing to admit your own ignorance
- Work with different people and technologies. Involve different stakeholders in your research
- Test on your target audience and beyond

@## Scaling

Make sure that when you zoom in to 200%, the page is still readable and functional, and the user doesn't need to scroll horizontally to see everything.

> **Why it's important**. It's important for people with poor eyesight and when browsing the site on a mobile device.

Use adaptive layout to allow the user to choose their preferred scale while preserving the readability of the site. This is especially important for blocks that contain small and low-contrast text.

This way you will both cover the needs of the visually impaired and ensure that your site can adapt for devices with any screen size. When the layout is ready, test the scaling by zooming in to 200% using `Control+` (or `Command+` on Mac).

@## Layout and structure

![headings](/core-principles/a11y/static/structure.png)

Make sure that the user can easily understand the meaning and structure of the page and complete the required task. The design should help the user find key information quickly and easily.

> **Why it's important**
>
> - It allows users to quickly find the necessary information and solve their problems
> - It helps users quickly understand what's happening on the page

**Requirements:**

- All content and design of the page should fit into the logical structure of the headings.
- Make sure that users can navigate the site in multiple ways: a table of contents, a sitemap, links between pages, and search on the site.
- Screen readers should read the information in the same order it is displayed.
- Try not to use modal windows. Screen readers don't work well with pop-up objects.
- Use styles correctly. Level 1 headings in the layout must be H1 headings in code. At the same time, text that is clearly not a level 1 heading should not be marked up as H1 in the code. Also, don't use plain text for headings.

@## Typography

Make sure that the user can easily read the text on the page.

**Requirements:**

- **Use a font size sufficient for comfortable reading**. The minimal font size for the body text is 16 pixels, but this size may vary depending on the font style.

- **Set the paragraph width for comfortable reading**. Don't make paragraphs too long or too short: 45 to 75 characters is an acceptable length, 66 is optimal. Shorter text is good for forms, image captions, and marginal notes.

- **Choose a legible font**. It's recommended to use sans serif fonts for interfaces and serif fonts for long documents, but this is not an absolute rule. Make sure that your font:

  - Reads well regardless of the scale
  - Has large-height lowercase letters (x-height)
  - Is sufficiently large in the selected size
  - Has constant parameters for letter forms (lowercase letter height and other parameters)
  - Has unique characters that cannot be confused with each other, for example `0` and `O`
  - Supports all necessary symbols and styles

- **Use headings to draw the user's attention to the hierarchy**. Make sure that the headings differ from the main text in size, thickness, style, and color. This will ensure visual consistency and readability against the background of the main text.

- **Determine the height of the text for optimal reading**. The larger the font size and line thickness, the larger the spacing should be. For the body text, the spacing to font size ratio should be around 1.4–1.65, for headings — 1–1.3, for captions and short lines — around 1.3. Lines that are spaced too tightly or too loosely make text less readable, so finding a new line becomes more difficult.

> **Useful resources**
>
> Web content accessibility guidelines on:
>
> - [Visual Presentation ›](https://www.w3.org/TR/WCAG21/#visual-presentation)
> - [Text Spacing ›](https://www.w3.org/TR/WCAG21/#text-spacing)

@## Color and contrast

![contrast](/core-principles/a11y/static/contrast.png)

**Requirements**:

- **Make sure that there is sufficient contrast between the text color and the background**.

- **Make sure that the minimum contrast ratio is 4.5:1**. For enlarged text, you can lower the contrast to 3:1. Enlarged text is text with a minimum size of 18 points in normal or 14 points in bold. There are some exceptions:

  - Logos or decorative elements on the page
  - Inactive controls

- **Make sure to use additional ways of communication or markup besides color**. This is important for colorblind users. For example, highlighting a field in red will not inform the user about an error if they cannot distinguish between colors.

> **Don't rely on color as your only visual medium**. Use bold, asterisks, icons, typography, text, check required boxes, etc.

@## Graphics and images

Make sure that the user understands all content, including charts, icons, and images.

### Graphics

- Don't use graphics if the problem can be solved with text.
- Make sure all graphics are accompanied by a clear and brief description.
- Use icons as additional visual cues, not decorations, and only where it's really necessary. Choose easily recognizable icons (for example, a trash can for deleting something).
- Don't forget about contrast when placing text on an image. Use a solid background or make the image darker.

### Data visualization

- To immerse the user in the context, provide a brief description for the visualizations
- Make sure data and specifications are clearly labeled
- Provide sufficient contrast between the presented data (for example, lines in charts), so that colorblind users can distinguish between them

### Alternate versions

- Create an alternate form for the content that cannot be presented as text. For example, to help the user find an ATM, you could offer a map, a table, or a list.
- Captcha tops the list of the most difficult and common problems that blind users face. It's often used needlessly from a security point of view, and can be replaced with other validation methods. If using a Captcha is absolutely necessary, be sure to add an audio alternative for visually impaired users.

To learn more, visit the [text alternatives](https://www.w3.org/TR/WCAG21/#text-alternatives) section of the WCAG website.

@## Media content

Make sure that your media content (videos, images, etc.) is accessible to hearing and visually impaired users.

**Requirements**:

- Add subtitles or a transcript to your audio and video content to make it accessible to the hard-of-hearing and the users who don't speak the language the content is presented in.
- Avoid harmful design elements. Make sure that you don't have elements that flash more than three times per second.

> Animated website elements, flickering or flashing logos or ads can cause a seizure in people suffering from photosensitive epilepsy.

@## Forms

![forms](/core-principles/a11y/static/forms.png)

Provide instructions and hints to help users avoid mistakes when filling out a form.

- Make sure that all input elements have meaningful labels that remain visible even after a field has been filled out.
- Let the user know the data format in advance (date, phone number, zip code, etc.). It's also a good practice letting the user know when their `CAPS LOCK` is on.
- Provide clear instructions to help the user fix any errors.

> Minimize the need to enter text or search. Whenever possible, enable voice input, text field autocomplete, and previews.
>
> **Useful resources**
>
> Web content accessibility guidelines on:
>
> - [Non-text Content ›](https://www.w3.org/TR/WCAG21/#non-text-content)
> - [Info and Relationships ›](https://www.w3.org/TR/WCAG21/#info-and-relationships)
> - [On Focus ›](https://www.w3.org/TR/WCAG21/#on-focus)
> - [Error Identification ›](https://www.w3.org/TR/WCAG21/#error-identification)
> - [Labels or Instructions ›](https://www.w3.org/TR/WCAG21/#labels-or-instructions)
> - [Error Suggestion ›](https://www.w3.org/TR/WCAG21/#error-suggestion)
> - [Error Prevention ›](https://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data)
> - [Name, Role, Value ›](https://www.w3.org/TR/WCAG21/#name-role-value)

@## Captions and instructions

Make sure that the captions for the elements clearly indicate what will happen when the user clicks on them.

**Requirements**:

- **It should be clear from the link text what will happen on click**. Don't use naked links or the _Click here_ anchor text for your links, as they are too uninformative. For example, instead of _Click here_ use _Download report_, or _Create account_ instead of _Finish_. This way, the user will have a clear idea of what will happen next.
- **Links should be an organic part of a sentence**. For example, it's better to write _In the new version of the iPhone application, we added support for the Cyrillic alphabet_ instead of _In the new application for the iPhone, we added support for the Cyrillic alphabet. Download_. Sentences like this are easier to understand for all users, and especially for those who use screen readers.
- **If clicking on a link leads to the download of a document, let the user know**. If your link leads to a PDF file, write _Download instructions in PDF_. This is important for mobile users with data caps.

![captions](/core-principles/a11y/static/captions.png)

- **Make sure that the instructions can be followed by hearing or visually impaired users**.

- **Don't make references to the shape, size, visual layout, or sound**. Prompts like `See image above` or `Find instructions in the right column` will mean nothing to a blind user, while a deaf user will not be able to follow the instructions like `Continue after the beep` or `Confirm the transfer via a phone call`.

![instructions](/core-principles/a11y/static/instructions.png)

> **Useful resources**
>
> Web content accessibility guidelines on:
>
> - [Link Purpose (In Context) ›](https://www.w3.org/TR/WCAG21/#link-purpose-in-context)
> - [Sensory Characteristics ›](https://www.w3.org/TR/WCAG21/#sensory-characteristics)

@## Touch targets

![touch targets](/core-principles/a11y/static/click-zone.png)

Make sure that the touch targets of the items are large enough and are easily accessible.

**Requirements**:

- **Make sure that it's possible to reach the main controls with your thumb on both hands, even on larger phones**.
- **Set target areas to at least 44px**. An average adult's fingertip size is around 10mm, so you'll need to increase the size of the target area around your icons to make them easier to hit.
- **Separate tappable elements with a 8px margin**. This will help the user hit the element they're aiming for.

> **Useful resources**
>
> Web content accessibility guidelines on:
>
> - [Touch Target ›](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
> - [Touch Target Size and Spacing ›](https://www.w3.org/TR/mobile-accessibility-mapping/#touch-target-size-and-spacing)
> - [Placing buttons where they are easy to access ›](https://www.w3.org/TR/mobile-accessibility-mapping/#h-placing-buttons-where-they-are-easy-to-access)

@## Keyboard controls

Make sure that the focus position and the transition between elements is clear and logical to the user navigating the page with a keyboard.

**Requirements**:

- **Users should be able to select and activate any interactive element on the page using the `Tab`, `Space`, and `Arrow` keys**
- **For sighted users, it's important that interactive elements have visible and familiar states: focus, hover, active, and visited**. For blind users, it's important to support a way to easily navigate to the main content. This would allow them to skip ads and jump over long navigation to the main information of the page, reducing the amount of information they need to listen to.
- **The user expects that the focus between elements will switch in a logical order, usually from left to right and from top to bottom**. The order may be obvious to the development team, but for more complex cases be sure to mark it on your prototypes and mockups.
- **Before pushing the build to production, use the `Tab` key to make sure that it's possible to see where the focus is when navigating the interface with the keyboard**. Pay special attention to the pages that use JavaScript and are not built using standard HTML elements.

> **Useful resources**
>
> Web content accessibility guidelines on:
>
> - [Meaningful Sequence ›](https://www.w3.org/TR/WCAG21/#meaningful-sequence)
> - [Keyboard Accessible ›](https://www.w3.org/TR/WCAG21/#keyboard-accessible)
> - [Keyboard ›](https://www.w3.org/TR/WCAG21/#keyboard)
> - [No Keyboard Trap ›](https://www.w3.org/TR/WCAG21/#no-keyboard-trap)
> - [Focus Order ›](https://www.w3.org/TR/WCAG21/#focus-order)
> - [Focus Visible ›](https://www.w3.org/TR/WCAG21/#focus-visible)
> - [On Focus ›](https://www.w3.org/TR/WCAG21/#on-focus)

@## Text readability

Make the text simple.

> **Why it's important**
>
> Some of your users may suffer from dyslexia or developmental disorders, making it difficult for them to read and understand complex sentences with rich or wordy expressions. Some of your users might not understand technical terms or slang. Mobile users also have difficulty reading long paragraphs of text.

**Requirements**:

- **Use clear headings**. Make your headings clear and descriptive so that readers can easily understand what the following text is about. Try to keep your paragraphs short for easier viewing on mobile devices. Use short sentences whenever possible.

- **Be careful with typos**. Watch your keyboard layout. Remember that the English letter _C_ and the Russian letter _С_ are 2 completely different characters, despite the fact that they look the same. Screen readers read symbols based on their code in the symbol table, and not from its typeface. So if there are any typos like this in the text of the page, it makes it extremely difficult to work with for your blind or visually impaired users.

- **Avoid idioms**. Try not to use idioms or other expressions whose meaning cannot be easily recognized from the usual meanings of the words that they consist of. For example, an expression like _play the fool_ can be taken literally by users with mental disabilities or those who use a sign language to communicate.

> To learn more, visit the [Readable](https://www.w3.org/TR/WCAG21/#readable) section of the WCAG website.
