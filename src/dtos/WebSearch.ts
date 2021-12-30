interface Items {
  enum: string[];
  enumNames: string[];
  type: string;
}

interface Value {
  items: Items;
  title: string;
  type: string;
}

interface Properties2 {
  value: Value;
}

interface Status {
  additionalProperties: boolean;
  properties: Properties2;
  title: string;
  type: string;
}

interface Properties {
  status: Status;
}

interface JsonSchema {
  properties: Properties;
  type: string;
}

interface UiOptions {
  'display-text-format': string;
  'is-advanced': boolean;
  label: string;
  'parent-category-slug': string;
  'post-set-label': string;
}

interface Display {
  'like-new': string[];
  new: string[];
  'repair-needed': string[];
  used: string[];
}

interface Urischema {
  display: Display;
  order: number;
}

interface Items2 {
}

interface UiOptions2 {
}

interface Value2 {
  items: Items2;
  'ui:options': UiOptions2;
  'ui:placeholder': string;
  'ui:widget': string;
}

interface Status2 {
  'ui:field': string;
  'ui:options': UiOptions;
  urischema: Urischema;
  value: Value2;
}

interface UiSchema {
  status: Status2;
}

interface InputSuggestion {
  json_schema: JsonSchema;
  ui_schema: UiSchema;
}

interface MetaRobots {
  follow: boolean;
  index: boolean;
}

interface BreadCrumb {
  name: string;
  url: string;
}

interface SeoDetails {
  title: string;
  description: string;
  headline: string;
  meta_robots: MetaRobots;
  bread_crumbs: BreadCrumb[];
  next: string;
  web_url: string;
  android_url: string;
  canonical: string;
  prev: string;
  meta_tags: any[];
}

interface WebImage {
  src: string;
  type: string;
}

interface Data {
  title: string;
  image: string;
  web_image: WebImage[];
  description: string;
  has_chat: boolean;
  red_text: string;
  normal_text: string;
  token: string;
  image_overlay_tag?: any;
  image_top_left_tag?: any;
  index: number;
  'postapi-version': number;
  city: string;
  district: string;
  category: string;
  category_hierarchy: string[];
}

interface WidgetList {
  widget_type: string;
  data: Data;
}

interface WebImage2 {
  src: string;
  type: string;
}

interface Category {
  value: string;
}

interface Filters {
  query: string;
  category: Category;
}

interface Suggestion {
  query_title: string;
  category: string;
  count: string;
  has_divider: boolean;
  filters: Filters;
}

interface Data2 {
  title: string;
  image: string;
  web_image: WebImage2[];
  description: string;
  has_chat: boolean;
  red_text: string;
  normal_text: string;
  token: string;
  image_overlay_tag?: any;
  image_top_left_tag?: any;
  index: number;
  'postapi-version': number;
  city: string;
  district: string;
  category: string;
  category_hierarchy: string[];
  suggestions: Suggestion[];
}

interface PostList {
  widget_type: string;
  data: Data2;
}

interface WebWidgets {
  toolbox: any[];
  post_list: PostList[];
}

interface GoodsBusinessType {
  value: string;
}

interface Filters2 {
  'goods-business-type': GoodsBusinessType;
}

interface Tab {
  type: number;
  text: string;
  filters: Filters2;
}

interface TabList {
  current_tab: number;
  tabs: Tab[];
}

interface Value3 {
  type: string;
}

interface Properties4 {
  value: Value3;
}

interface Category2 {
  additionalProperties: boolean;
  properties: Properties4;
  title: string;
  type: string;
}

interface Items3 {
  type: string;
}

interface Cities {
  default: string[];
  items: Items3;
  type: string;
}

interface NearVacancies {
  title: string;
  type: string;
}

interface Items4 {
  enum: string[];
  enumNames: string[];
  type: string;
}

interface Vacancies {
  items: Items4;
  minItems: number;
  title: string;
  type: string;
}

interface Properties5 {
  'near-vacancies': NearVacancies;
  vacancies: Vacancies;
}

interface Districts {
  additionalProperties: boolean;
  properties: Properties5;
  required: string[];
  title: string;
  type: string;
}

interface Divider {
  title: string;
  type: string;
}

interface Value4 {
  enum: string[];
  enumNames: string[];
  type: string;
}

interface Properties6 {
  value: Value4;
}

interface Exchange {
  additionalProperties: boolean;
  properties: Properties6;
  title: string;
  type: string;
}

interface Value5 {
  enum: string[];
  enumNames: string[];
  type: string;
}

interface Properties7 {
  value: Value5;
}

interface GoodsBusinessType2 {
  additionalProperties: boolean;
  properties: Properties7;
  title: string;
  type: string;
}

interface HasPhoto {
  title: string;
  type: string;
}

interface NonNegotiable {
  title: string;
  type: string;
}

interface Max {
  multipleOf: number;
  type: string;
}

interface Min {
  minimum: number;
  multipleOf: number;
  type: string;
}

interface Properties8 {
  max: Max;
  min: Min;
}

interface Price {
  additionalProperties: boolean;
  properties: Properties8;
  title: string;
  type: string;
}

interface Query {
  type: string;
}

interface Items5 {
  enum: string[];
  enumNames: string[];
  type: string;
}

interface Value6 {
  items: Items5;
  title: string;
  type: string;
}

interface Properties9 {
  value: Value6;
}

interface Status3 {
  additionalProperties: boolean;
  properties: Properties9;
  title: string;
  type: string;
}

interface Urgent {
  title: string;
  type: string;
}

interface Properties3 {
  category: Category2;
  cities: Cities;
  districts: Districts;
  divider: Divider;
  exchange: Exchange;
  'goods-business-type': GoodsBusinessType2;
  'has-photo': HasPhoto;
  'non-negotiable': NonNegotiable;
  price: Price;
  query: Query;
  status: Status3;
  urgent: Urgent;
}

interface JsonSchema2 {
  additionalProperties: boolean;
  properties: Properties3;
  type: string;
}

interface UiOptions3 {
  'display-text-format': string;
  icon: string;
  'is-advanced': boolean;
  label: string;
  'parent-category-slug': string;
  'post-set-label': string;
}

interface Display2 {
  CCTV: string[];
  ROOT: string[];
  accessories: string[];
  'accounting-and-finance': string[];
  'accounting-finance-legal': string[];
  'administration-and-hr': string[];
  'air-conditioning-fan-coil': string[];
  animals: string[];
  'antiques-and-art': string[];
  'apartment-rent': string[];
  'apartment-sell': string[];
  appliance: string[];
  art: string[];
  'artificial-flower': string[];
  'audio-video': string[];
  'baby-and-toys': string[];
  'ball-sports': string[];
  'barbershop-and-beautysalon': string[];
  batch: string[];
  'bathroom-accessories': string[];
  'bathroom-wc-sauna': string[];
  bathrooms: string[];
  'beauty-and-haircare': string[];
  'bed-pillow-blanket': string[];
  'bed-service': string[];
  'bed-sheet': string[];
  'beds-bedroom': string[];
  bicycle: string[];
  birds: string[];
  boat: string[];
  'book-student-literature': string[];
  'bookcase-shelf': string[];
  'broadband-internet-service': string[];
  'buffet-showcases': string[];
  'building-and-garden': string[];
  'building-equipment': string[];
  'bus-metro-train': string[];
  businesses: string[];
  'cafe-and-restaurant': string[];
  'camera-camcoders': string[];
  'camping-outdoor': string[];
  'car-and-motor': string[];
  'care-health-beauty': string[];
  carpet: string[];
  'carpet-moquette': string[];
  carpets: string[];
  cars: string[];
  cat: string[];
  catering: string[];
  'chair-bench': string[];
  chandeliers: string[];
  'child-car-seat': string[];
  'childrens-clothing-and-shoe': string[];
  'childrens-furniture': string[];
  classic: string[];
  cleaning: string[];
  'cleaning-supplies': string[];
  'clothes-rack': string[];
  clothing: string[];
  'clothing-and-shoes': string[];
  'coin-stamp': string[];
  'commercial-rent': string[];
  'commercial-sell': string[];
  community: string[];
  'computer-and-it': string[];
  'computer-and-mobile': string[];
  'computer-hardware-and-software': string[];
  computers: string[];
  concert: string[];
  'conference-meeting': string[];
  'construction-craft': string[];
  consulting: string[];
  'container-organizers': string[];
  containers: string[];
  'cooking-utensils': string[];
  'cookware-tableware': string[];
  crafts: string[];
  craftsmen: string[];
  'curtains-table-cover': string[];
  decoration: string[];
  desk: string[];
  desktops: string[];
  'detergent-tissue': string[];
  'dining-table': string[];
  dishwasher: string[];
  'diving-watersports': string[];
  dog: string[];
  'domains-and-websites': string[];
  'drink-maker': string[];
  'drums-percussion': string[];
  education: string[];
  educational: string[];
  'electronic-devices': string[];
  entertainment: string[];
  'equipments-and-machinery': string[];
  event: string[];
  'events-sports': string[];
  'fan-ventilator-humidifier': string[];
  'farm-animals': string[];
  figurines: string[];
  fish: string[];
  fishing: string[];
  'food-and-drink': string[];
  'food-mill': string[];
  'for-sale': string[];
  'for-the-home': string[];
  'foreign-language': string[];
  furniture: string[];
  'furniture-and-home-decore': string[];
  'furniture-wood': string[];
  'game-consoles-and-video-games': string[];
  'garden-and-landscaping': string[];
  'garden-and-patio': string[];
  'garden-tools': string[];
  'gift-certificate': string[];
  'guitar-bass-amplifier': string[];
  'health-beauty': string[];
  heavy: string[];
  historical: string[];
  'historical-objects': string[];
  'hobby-collectibles': string[];
  'home-catering': string[];
  'home-kitchen': string[];
  'home-lighting': string[];
  'horses-equestrian': string[];
  'hosting-and-web-design': string[];
  'house-villa-rent': string[];
  'house-villa-sell': string[];
  industrial: string[];
  'industrial-machinery': string[];
  'industrial-technology': string[];
  'industry-agriculture-business-rent': string[];
  'industry-agriculture-business-sell': string[];
  'instrument-cleaning-tailoring': string[];
  'janitorial-cleaning': string[];
  jewelry: string[];
  'jewelry-and-watches': string[];
  jobs: string[];
  juicers: string[];
  kitchen: string[];
  'kitchen-utensils': string[];
  lamps: string[];
  lampshade: string[];
  laptops: string[];
  'leisure-hobbies': string[];
  'leisure-hobbies-toys': string[];
  light: string[];
  lighting: string[];
  literary: string[];
  'lost-and-found': string[];
  'lost-animals': string[];
  'lost-things': string[];
  'lumbar-pillow': string[];
  magazines: string[];
  mat: string[];
  mattress: string[];
  'media-advertising': string[];
  'medical-equipment': string[];
  'microwave-stove': string[];
  mirror: string[];
  'mobile-phone-repair': string[];
  'mobile-phones': string[];
  'mobile-tablet': string[];
  'mobile-tablet-accessories': string[];
  'modem-and-network-equipment': string[];
  moquette: string[];
  motorcycles: string[];
  'movies-and-music': string[];
  'mp3-player': string[];
  'musical-instruments': string[];
  'natural-plants': string[];
  'office-decoration': string[];
  'office-rent': string[];
  'office-sell': string[];
  offices: string[];
  'other-appliances': string[];
  'oven-baking-appliances': string[];
  'paintings-picture': string[];
  partnership: string[];
  'parts-accessories': string[];
  'parts-and-accessories': string[];
  personal: string[];
  'personal-toys': string[];
  phone: string[];
  'phone-desk': string[];
  'piano-keyboard': string[];
  'pictorial-carpet': string[];
  'plot-old': string[];
  'pot-kettle': string[];
  presell: string[];
  'printer-scaner-copier': string[];
  'range-hood': string[];
  'real-estate': string[];
  'real-estate-services': string[];
  'refrigerator-freezer': string[];
  religious: string[];
  rental: string[];
  'repair-tool': string[];
  reptile: string[];
  research: string[];
  'residential-rent': string[];
  'residential-sell': string[];
  rhinestones: string[];
  'rodents-rabbits': string[];
  'rubber-carpet': string[];
  'rugs-woolen-cloth': string[];
  'sales-marketing': string[];
  school: string[];
  services: string[];
  'services-sports': string[];
  'sewing-accessories': string[];
  'sewing-knitting': string[];
  'sewing-machine': string[];
  'shoe-rack-drawer': string[];
  'shoes-belt-bag': string[];
  'shop-and-cash': string[];
  'shop-rent': string[];
  'shop-restaurant': string[];
  'shop-sell': string[];
  'sim-card': string[];
  'sleep-goods': string[];
  'sofa-armchair': string[];
  software: string[];
  sport: string[];
  'sport-leisure': string[];
  stationery: string[];
  'steam-iron': string[];
  'stereo-surround': string[];
  storage: string[];
  'stove-and-heating': string[];
  'stoves-heaters-fireplaces': string[];
  'strollers-and-accessories': string[];
  'suite-apartment': string[];
  tablecloths: string[];
  'tables-and-chairs': string[];
  tablet: string[];
  teaching: string[];
  'temporary-rent': string[];
  'textile-ornaments': string[];
  'theatre-and-cinema': string[];
  ticket: string[];
  'tickets-sports': string[];
  toolbox: string[];
  'tools-materials-equipment': string[];
  traditional: string[];
  training: string[];
  transport: string[];
  transportation: string[];
  'travel-packages': string[];
  'tv-projector': string[];
  'tv-stand': string[];
  'utensils-and-appliances': string[];
  utility: string[];
  'vacuums-cleaner': string[];
  vehicles: string[];
  'ventilation-cooling-heating': string[];
  'video-dvdplayer': string[];
  villa: string[];
  violins: string[];
  volunteers: string[];
  'wall-clock': string[];
  'washer-dryer': string[];
  'washing-cleaning': string[];
  'washing-machines': string[];
  watches: string[];
  'water-cooler': string[];
  'water-cooler-refinery': string[];
  'water-heater-package-radiator': string[];
  'wc-accessories': string[];
  wind: string[];
  'winter-sports': string[];
  'work-equipment': string[];
  workspace: string[];
  'yarn-lights': string[];
}

interface Urischema2 {
  display: Display2;
  order: number;
}

interface UiOptions4 {
  'default-text': string;
}

interface Value7 {
  'ui:options': UiOptions4;
}

interface Category3 {
  'ui:field': string;
  'ui:options': UiOptions3;
  urischema: Urischema2;
  value: Value7;
}

interface UiOptions5 {
  'is-advanced': boolean;
  'parent-category-slug': string;
}

interface Cities2 {
  'ui:options': UiOptions5;
  'ui:widget': string;
}

interface UiOptions6 {
  enabled: boolean;
}

interface NearVacancies2 {
  'ui:options': UiOptions6;
}

interface SelectInMap {
  enabled: boolean;
}

interface UiOptions7 {
  'active-internal-links': boolean;
  'display-text-format': string;
  icon: string;
  'is-advanced': boolean;
  label: string;
  'parent-category-slug': string;
  'post-set-label': string;
  select_in_map: SelectInMap;
}

interface Urischema3 {
  order: number;
}

interface Items6 {
}

interface Child {
  enum: string;
  enumName: string;
  tags: string[];
}

interface Data3 {
  children: Child[];
  enum: string;
  enumName: string;
}

interface UiOptions8 {
  data: Data3;
}

interface Vacancies2 {
  items: Items6;
  'ui:options': UiOptions8;
}

interface Districts2 {
  'near-vacancies': NearVacancies2;
  'ui:field': string;
  'ui:options': UiOptions7;
  urischema: Urischema3;
  vacancies: Vacancies2;
}

interface Divider2 {
  'ui:field': string;
}

interface UiOptions9 {
  'display-text-format': string;
  icon: string;
  'is-advanced': boolean;
  label: string;
  'parent-category-slug': string;
  'post-set-label': string;
}

interface Display3 {
  'exclude-exchanges': string[];
  'only-exchanges': string[];
}

interface Urischema4 {
  display: Display3;
}

interface UiOptions10 {
}

interface Value8 {
  'ui:options': UiOptions10;
  'ui:placeholder': string;
  'ui:widget': string;
}

interface Exchange2 {
  'ui:field': string;
  'ui:options': UiOptions9;
  urischema: Urischema4;
  value: Value8;
}

interface UiOptions11 {
  always_open: boolean;
  'display-text-format': string;
  hidden_mobile: boolean;
  icon: string;
  'is-advanced': boolean;
  label: string;
  'parent-category-slug': string;
  'post-set-label': string;
}

interface Display4 {
  marketplace: string[];
  personal: string[];
}

interface Urischema5 {
  display: Display4;
}

interface UiOptions12 {
  'postfix-label': string;
}

interface Value9 {
  'ui:options': UiOptions12;
  'ui:placeholder': string;
  'ui:widget': string;
}

interface GoodsBusinessType3 {
  'ui:field': string;
  'ui:options': UiOptions11;
  urischema: Urischema5;
  value: Value9;
}

interface UiOptions13 {
  'display-text-format': string;
  icon: string;
  'is-advanced': boolean;
  label: string;
  'parent-category-slug': string;
  'post-set-label': string;
}

interface HasPhoto2 {
  'ui:options': UiOptions13;
  'ui:widget': string;
}

interface UiOptions14 {
  'display-text-format': string;
  icon: string;
  'is-advanced': boolean;
  label: string;
  'parent-category-slug': string;
  'post-set-label': string;
}

interface NonNegotiable2 {
  'ui:options': UiOptions14;
  'ui:widget': string;
}

interface UiOptions15 {
  label: string;
  'manual-input-button-label': string;
  'not-set-value': string;
  'postfix-label': string;
}

interface Max2 {
  enum: number[];
  enumNames: string[];
  'ui:options': UiOptions15;
  'ui:placeholder': string;
  'ui:widget': string;
}

interface UiOptions16 {
  label: string;
  'manual-input-button-label': string;
  'not-set-value': string;
  'overlay-label': string;
  'postfix-label': string;
}

interface Min2 {
  enum: number[];
  enumNames: string[];
  'ui:options': UiOptions16;
  'ui:placeholder': string;
  'ui:widget': string;
}

interface UiOptions17 {
  'display-text-format': string;
  icon: string;
  'is-advanced': boolean;
  label: string;
  'parent-category-slug': string;
  'post-set-label': string;
}

interface Price2 {
  max: Max2;
  min: Min2;
  'ui:field': string;
  'ui:options': UiOptions17;
  'ui:order': string[];
}

interface UiOptions18 {
  'is-advanced': boolean;
  'parent-category-slug': string;
}

interface Query2 {
  'ui:options': UiOptions18;
  'ui:widget': string;
}

interface UiOptions19 {
  'display-text-format': string;
  'is-advanced': boolean;
  label: string;
  'parent-category-slug': string;
  'post-set-label': string;
}

interface Display5 {
  'like-new': string[];
  new: string[];
  'repair-needed': string[];
  used: string[];
}

interface Urischema6 {
  display: Display5;
  order: number;
}

interface Items7 {
}

interface UiOptions20 {
}

interface Value10 {
  items: Items7;
  'ui:options': UiOptions20;
  'ui:placeholder': string;
  'ui:widget': string;
}

interface Status4 {
  'ui:field': string;
  'ui:options': UiOptions19;
  urischema: Urischema6;
  value: Value10;
}

interface UiOptions21 {
  'display-text-format': string;
  icon: string;
  'is-advanced': boolean;
  label: string;
  'parent-category-slug': string;
  'post-set-label': string;
}

interface Urgent2 {
  'ui:options': UiOptions21;
  'ui:widget': string;
}

interface UiSchema2 {
  category: Category3;
  cities: Cities2;
  districts: Districts2;
  divider: Divider2;
  exchange: Exchange2;
  'goods-business-type': GoodsBusinessType3;
  'has-photo': HasPhoto2;
  'non-negotiable': NonNegotiable2;
  price: Price2;
  query: Query2;
  status: Status4;
  'ui:order': string[];
  urgent: Urgent2;
}

interface Schema {
  json_schema: JsonSchema2;
  ui_schema: UiSchema2;
}

interface Category4 {
  value: string;
}

interface Districts3 {
  vacancies: string[];
}

interface GoodsBusinessType4 {
  value: string;
}

interface Jli {
  category: Category4;
  districts: Districts3;
  'goods-business-type': GoodsBusinessType4;
  query: string;
}

export interface WebSearchResponseDto {
  input_suggestion: InputSuggestion;
  title?: any;
  subtitle: string;
  seo_details: SeoDetails;
  internal_link_sections?: any;
  widget_list: WidgetList[];
  last_post_date: number;
  first_post_date: number;
  web_widgets: WebWidgets;
  banners: any[];
  tab_list: TabList;
  suggestion_list: any[];
  schema: Schema;
  jli: Jli;
}
