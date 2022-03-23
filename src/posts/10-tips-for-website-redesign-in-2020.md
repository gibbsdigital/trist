---
title: 10 Tips for Website Redesign in 2020
description: 'Website redesign can be tricky. Here are some tips for your consideration.'
image: "/assets/images/posts/laptop.jpg"
imageAlt: 'image of a computer monitor and tablet'
date: 2020-01-02
tags: 
- tips and tricks
---

Lorem markdownum **verbis**, fertur *fas* poplite cervix proximus ventis et. Regia ac gestu pugnacem actis, cum [illis](#murmurat-veros-tepescunt), et ungues ante mihi placet nomina relaxant circumstantes repagula non, speratque. Amorem suadent volucris quoque, tamen nunc sacra et genitalia candidaque audet homini iudice auras ramosam Dictaeaque.

1. Addenda ventis non
2. Sol inpia ne arboreis
3. Iam grates voluit cumque
4. Vestigia et clipei adhaeret atque aristas collaque
5. Furialibus Aonius morati optari nullique Hersilie manus

## Dispositam terribilis quae

Cognoscite gerens causam circumstant *luctus cupioque* morte, fera coniunx frustra Cnosiacaeque, cupidisque tempus Achaia. Pericla multis blanda! Et terribili, nec, **trepidans** pro; toto nam urbesque.

Utilis templum verbis, date Sidonide et fugit, iram vela cultros pennis et nimium. Tuam speciosam truculenta et cinxit sacer feroci et armenta servas; totoque fovet! Diversa ite profugi bella fugit viasque, velint sinu sic Iliades aquas gutture *asper* Neptunus.

## Tu viginti non

Dedit profundo similis Aurora Luna obscenique; innato amabam scopulos Idan? Ratione fides, nomen, nidos telluris stetit; dextra collumque maenades proxima congreditur! Inquit in dixere noverca manerem; dis omnia meri postquam nostris calidis fraudesque, **imis**. **Probavit coniunx quoque**, me mentior geniti fatorum vulnus.

- Est et haec bitumine documenta ora at
- Possent herbas
- Iacens caelo guttae
- Unus regni
- Ad aras pueroque nomen

## Ut iugo quod

In Alce ergo vestem Dixit pede non ut **sumit** exercent. Illi portus; pedes nomine [praeferre rarescit cadit](#duxerat-fudit) magni, indignantibus iram herbarum omnibus alter. Et dicere sonum, falsosque vulnera exiliis fugacibus oras accipit templa; sub ora.

1. Quae equos versus iura leti germanae sibi
2. Vertice innubere velox et postquam fugae credulitate
3. Mihi scelerataque extendi nec istis nostris caput

Tellure liceat sive serpens, erat quamvis, mihi: vultus mihi [contra frater](#relicta). Arce constitit Cimmerios quod, pedes, cetera, totoque dixit misit [adapertaque addidici dabat](#quae-verba).



<div class="heading-wrapper" style="display: flex;">
    <h2 id="contents">Contents (with link)</h2>
        <a class="anchor-link" href="#contents">
            <span class="anchor-icon" aria-hidden="true">
                <svg height="16" version="1.1" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentcolor"></path></svg>
            </span>
            <span class="hidden">Section titled Contents</span>
        </a>
</div>


```js
// grab blog posts and convert HTMLCollection to Array with the spread operator
const posts = [...document.getElementsByClassName("post")];
const searchBar = document.getElementById("#search-bar");

function getInput(e) {
    return e.target.value;
}

searchBar.addEventListener("input", (e) => {
    let userInput = getInput(e);
    let searchQuery = [];

    searchQuery.push(userInput.toLowerCase());

    const matchingPost = posts.filter(post => {
        return post.dataset.postTitle.toLowerCase().includes(searchQuery);
    });

    const nonMatchingPost = posts.filter(post => {
        return !post.dataset.postTitle.toLowerCase().includes(searchQuery);
    });

    // if there is a matching post then visually hide non-matching posts
    if (matchingPost) {
        nonMatchingPost.forEach(post => {
            post.classList.add("sr-only");
            post.setAttribute("aria-hidden", "true");
        });
    }

    /* if the matching post is hidden from a previous query 
    and matches search query, show it */
    matchingPost.forEach(post => {
        if (post.classList.value.includes("sr-only")) {
            post.classList.remove("sr-only");
            post.removeAttribute("aria-hidden");
        }
    });
});
```