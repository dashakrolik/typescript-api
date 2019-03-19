export interface Page {
  content: string,
  id: number,
  title: string
}

export interface PageList {
  pages: Page[] //pages is an array of objects of type Page. Page is an object with properties id, content, and title
}

export const allPages: PageList = {
  pages: [
      {
          content: "<h1>Homepage</h1>This is the homepage, and everything starts with a <strong>home</strong>page.",
          id: 1,
          title: "Homepage"
      },
      {
          content: "<h1>Links</h1>Here's where we will give you <i>links</i> to other pages.",
          id: 2,
          title: "Links"
      },
      {
          content: "<h1>Social media</h1>This is where you'll find links to our social media thing. Find us on Insta!",
          id: 3,
          title: "Social media"
      }
  ]
}
