
/* readTime settings */
const
  roundTo     = 10,
  readPerMin  = 200,
  numFormat   = new Intl.NumberFormat('en');

const toMonth = new Intl.DateTimeFormat('en-US', { month: 'long' });

module.exports = {

    dateFriendly: function(date) {
        return date instanceof Date ?
            toMonth.format(date) + ' ' + date.getUTCDate() + ', ' + date.getUTCFullYear() : ''
    },

    dateYMD: function(date) {
        return date instanceof Date ?
            `${ date.getUTCFullYear() }-${ String(date.getUTCMonth() + 1).padStart(2, '0') }-${ String(date.getUTCDate()).padStart(2, '0') }` : ''
    },

    dateISO: function(date) {
        return date instanceof Date ? date.toISOString() : ''

    },

    excludePost: function (allPosts, currentPost) {
        return allPosts.filter(
            (post) => post.inputPath !== currentPost.inputPath
        )
    },

    excerpt: function (content) {
        const excerptMinimumLength = 80
        const excerptSeparator = '<!--more-->'
        const findExcerptEnd = (content) => {
            if (content === '') {
                return 0
            }
            const paragraphEnd = content.indexOf('</p>', 0) + 4
            if (paragraphEnd < excerptMinimumLength) {
                return (
                    paragraphEnd +
                    findExcerptEnd(
                        content.substring(paragraphEnd),
                        paragraphEnd
                    )
                )
            }
            return paragraphEnd
        }
        if (!content) {
            return
        }
        if (content.includes(excerptSeparator)) {
            return content.substring(0, content.indexOf(excerptSeparator))
        } else if (content.length <= excerptMinimumLength) {
            return content
        }

        const excerptEnd = findExcerptEnd(content)
        return content.substring(0, excerptEnd)
    },


    getTagList: function(collection) {
        let tagSet = new Set();
        collection.getAllSorted().forEach(function(item) {
            if( "tags" in item.data ) {
                let tags = item.data.tags;
                if( typeof tags === "string" ) {
                tags = [tags];
                }
                tags = tags.filter(function(item) {
                switch(item) {
                    // this list should match the `filter` list in tags.njk
                    case "all":
                    case "nav":
                    case "blog":
                    case "posts":
                    case "featuredPost":
                    case "projects":
                    case "featuredProjects":
                    case "rss":
                        return false;
                    }
                    return true;
                });
                for (const tag of tags) {
                    tagSet.add(tag);
                }
            }
        });
        return [...tagSet].sort();
    },

    readTime: function(count) {
        const words = Math.ceil(count / roundTo) * roundTo;
        const mins  = Math.ceil(count / readPerMin);
        return `read time: ${ numFormat.format(mins) } min`;
        //return `${ numFormat.format(words) } words, ${ numFormat.format(mins) }-minute read`;
    },

    slice: function(array, limit) {
        return limit > 0 ? 
            array.slice(0, limit) : array.slice(limit);
    }
      
}