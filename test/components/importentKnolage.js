//event propagation
// Event propagation is the way events move through the DOM tree when an event is triggered.

// There are three phases:

// Capturing Phase (Trickles down)

// Target Phase (The actual target element)

// Bubbling Phase (Bubbles up)


//   .split(" ")                                           // Split sentence into words
//   .filter(word => word !== " ")                        // Remove extra spaces (optional)
//   .map(word => word[0].toUpperCase() + word.slice(1)) // Capitalize first letter
//   .join(" ");                                         // Join words back into a sentence


//  Event Delegation kya hota hai ?
//     Event delegation ek technique hai jisme hum parent element par ek hi
//     event listener lagate hain, aur uske andar ke sabhi child elements
//     ke events ko handle kar lete hain.

//     Matlab:

// Har chhoti chhoti cheez pe onclick lagane ki jagah, sirf ek upar
// wale element pe lagate hain — aur wahi sabka kaam dekh leta hai.


// Infinite currying me hum function ko
// baar - baar call kar sakte hain jitni baar chahe, aur sab arguments ko accumulate karte rehte hain.
// Aur jab hume final result chahiye hota hai,
// to hum function ko bina argument call karte hain ya koi termination condition dete hain.


// Hooks used in Dynamic Routing(React Router v6 +)
// Hook Name	         Use	Example
// useParams()	         URL ke andar jo dynamic values(parameters) hain, unhe read karne ke liye / user /:id se id nikalne ke liye
// useNavigate()	     Programmatically navigate karne ke liye(button click ya function ke andar)	Kisi page se dusre page pe le jane ke liye
// useLocation()	     Current URL path, query params, state nikalne ke liye	Current route ka info lene ke liye
// useSearchParams()	 Query string parameters(?key = value) read / set karne ke liye / products ? category = mobile se data lene ke liye