import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "65fb8ef7-903b-4e1f-a760-7cafd3849db2", // Get this from tina.io
  token: "bbdb6d9e548307467c76d8f1f6c6f8222baf7eaa", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "/",
    },
  },
  schema: {
    collections: [
		{
		  name: "post",
		  label: "Posts",
		  path: "_posts",
		  ui: {
			filename: {
			  readonly: false,
			  slugify: values => {
				const date = new Date();
				const day = date.getDate();
				const month = date.getMonth() + 1;
				const year = date.getFullYear();
		  
				let currentDate = `${year}-${month}-${day}`;
		  
				return `${currentDate}-${values?.title?.toLowerCase().replace(/ /g, '-')}`
			  }
			}
		  },
		  fields: [
			{
			  type: "string",
			  name: "layout",
			  label: "Layout",
			  required: true,
			},
			{ 
			  type: "string",
			  name: "title",
			  label: "Title",
			  isTitle: true,
			  required: true,
			},
			{ 
			  type: "datetime",
			  name: "date",
			  label: "Date",
			  required: true,
			},
			{ 
			  type: "string",
			  name: "categories",
			  label: "Categories",
			},
			{
			  type: "rich-text",
			  name: "body",
			  label: "Body",
			  isBody: true,
			},
		  ],
		},
	  ],
  },
});
