// *TODO*
// use interfaces to aid in dynamic data-binding
export interface IResponse {
  available: boolean;
  screens: string[];
}

// there are 4 child (0, 1, 2, 3) groups under screens
// each child is made up of: id, type and config
// TARGET >> config
export interface IScreens {
  id: string;
  type?: string;
  config?: IConfig;
}
// id: "s01", type: "Selector" >> for Selector Compnonet meta data
// id: "video_titles_here" (e.g walle), type: "BrandWrapper" >> for Player Component's src=url's

// under the next level of the hierchy, config contains 1 property
// the views << TARGET
export interface IConfig {
  views: IViews[];
}

// on the next level down the hiearchy, views has 3 children made up of this data
// TARGET >> thumbnail, title, description + info [for the Selector]
// TARGET >> files (for next level access)
export interface IViews {
  id: string;
  thumbnail: string;
  title: string;
  description: string;
  info: string;
  type?: string; // 'constant' type: selectorItem
  files?: IFile[];
}

// each file contains 3 attributes below
// TARGET >> url
export interface IFile {
  type?: string;
  codecs?: string;
  url: string;
}
