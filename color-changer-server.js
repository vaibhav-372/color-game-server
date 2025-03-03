// require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Initialize Express app
const app = express();

// CORS configuration
const corsOptions = {
  origin: 'https://color-game.azurewebsites.net/', // Frontend URL
  methods: ['GET', 'POST', 'PUT'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  credentials: true, // Allow credentials (if using cookies or auth tokens)
};

app.use(cors(corsOptions)); // Apply CORS middleware
app.use(express.json({ limit: '3mb' })); // Increase JSON body limit
app.use(express.urlencoded({ limit: '3mb', extended: true })); // Increase URL-encoded body limit

// MongoDB connection
const uri =
  "mongodb+srv://vaibhavpv37:FPrF8g781Z37Q1ju@game-changer-cluster.9ftvk.mongodb.net/game-changer-data";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Database connection error: ", err));

// Define MongoDB schema and model
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  steps: [String],
  game11: [String],
  game12: [String],
  game13: [String],
  game14: [String],
  game15: [String],
  game16: [String],
  game17: [String],
  game18: [String],
  game19: [String],
  game20: [String],
  game21: [String],
  game22: [String],
  game23: [String],
  game24: [String],
  game25: [String],
  game26: [String],
  game27: [String],
  game28: [String],
  game29: [String],
  game30: [String],
  game31: [String],
  game32: [String],
  game33: [String],
  game34: [String],
  game35: [String],
  game36: [String],
  game37: [String],
  game38: [String],
  game39: [String],
  game40: [String],
  game41: [String],
  game42: [String],
  game43: [String],
  game44: [String],
  game45: [String],
  game46: [String],
  game47: [String],
  game48: [String],
  game49: [String],
  game50: [String],
  game51: [String],
  game52: [String],
  game53: [String],
  game54: [String],
  game55: [String],
  game56: [String],
  game57: [String],
  game58: [String],
  game59: [String],
  game60: [String],
  game61: [String],
  game62: [String],
  game63: [String],
  game64: [String],
  game65: [String],
  game66: [String],
  game67: [String],
  game68: [String],
  game69: [String],
  game70: [String],
  game71: [String],
  game72: [String],
  game73: [String],
  game74: [String],
  game75: [String],
  game76: [String],
  game77: [String],
  game78: [String],
  game79: [String],
  game80: [String],
  game81: [String],
  game82: [String],
  game83: [String],
  game84: [String],
  game85: [String],
  game86: [String],
  game87: [String],
  game88: [String],
  game89: [String],
  game90: [String],
  game91: [String],
  game92: [String],
  game93: [String],
  game94: [String],
  game95: [String],
  game96: [String],
  game97: [String],
  game98: [String],
  game99: [String],
  game100: [String],
  game101: [String],
  game102: [String],
  game103: [String],
  game104: [String],
  game105: [String],
  game106: [String],
  game107: [String],
  game108: [String],
  game109: [String],
  game110: [String],
  game111: [String],
  game112: [String],
  game113: [String],
  game114: [String],
  game115: [String],
  game116: [String],
  game117: [String],
  game118: [String],
  game119: [String],
  game120: [String],
  game121: [String],
  game122: [String],
  game123: [String],
  game124: [String],
  game125: [String],
  game126: [String],
  game127: [String],
  game128: [String],
  game129: [String],
  game130: [String],
  game131: [String],
  game132: [String],
  game133: [String],
  game134: [String],
  game135: [String],
  game136: [String],
  game137: [String],
  game138: [String],
  game139: [String],
  game140: [String],
  game141: [String],
  game142: [String],
  game143: [String],
  game144: [String],
  game145: [String],
  game146: [String],
  game147: [String],
  game148: [String],
  game149: [String],
  game150: [String],
  game151: [String],
  game152: [String],
  game153: [String],
  game154: [String],
  game155: [String],
  game156: [String],
  game157: [String],
  game158: [String],
  game159: [String],
  game160: [String],
  game161: [String],
  game162: [String],
  game163: [String],
  game164: [String],
  game165: [String],
  game166: [String],
  game167: [String],
  game168: [String],
  game169: [String],
  game170: [String],
  game171: [String],
  game172: [String],
  game173: [String],
  game174: [String],
  game175: [String],
  game176: [String],
  game177: [String],
  game178: [String],
  game179: [String],
  game180: [String],
  game181: [String],
  game182: [String],
  game183: [String],
  game184: [String],
  game185: [String],
  game186: [String],
  game187: [String],
  game188: [String],
  game189: [String],
  game190: [String],
  game191: [String],
  game192: [String],
  game193: [String],
  game194: [String],
  game195: [String],
  game196: [String],  
});

const UserData = mongoose.model("datas", userSchema);

const historySchema = new mongoose.Schema({
  username: String,
  GameName: String,
  step: [Number],
  selectedButton: [String],
  totalOne: [Number],
  totalTwo: [Number],
  percentage: [Number],
  game11ANDgame12: [{ g11: [String], g12: [String], color: [String] }],
  game13ANDgame14: [{ g13: [String], g14: [String], color: [String] }],
  game15ANDgame16: [{ g15: [String], g16: [String], color: [String] }],
  game17ANDgame18: [{ g17: [String], g18: [String], color: [String] }],
  game19ANDgame20: [{ g19: [String], g20: [String], color: [String] }],
  game21ANDgame22: [{ g21: [String], g22: [String], color: [String] }],
  game23ANDgame24: [{ g23: [String], g24: [String], color: [String] }],
  game25ANDgame26: [{ g25: [String], g26: [String], color: [String] }],
  game27ANDgame28: [{ g27: [String], g28: [String], color: [String] }],
  game29ANDgame30: [{ g29: [String], g30: [String], color: [String] }],
  game31ANDgame32: [{ g31: [String], g32: [String], color: [String] }],
  game33ANDgame34: [{ g33: [String], g34: [String], color: [String] }],
  game35ANDgame36: [{ g35: [String], g36: [String], color: [String] }],
  game37ANDgame38: [{ g37: [String], g38: [String], color: [String] }],
  game39ANDgame40: [{ g39: [String], g40: [String], color: [String] }],
  game41ANDgame42: [{ g41: [String], g42: [String], color: [String] }],
  game43ANDgame44: [{ g43: [String], g44: [String], color: [String] }],
  game45ANDgame46: [{ g45: [String], g46: [String], color: [String] }],
  game47ANDgame48: [{ g47: [String], g48: [String], color: [String] }],
  game49ANDgame50: [{ g49: [String], g50: [String], color: [String] }],
  game51ANDgame52: [{ g51: [String], g52: [String], color: [String] }],
  game53ANDgame54: [{ g53: [String], g54: [String], color: [String] }],
  game55ANDgame56: [{ g55: [String], g56: [String], color: [String] }],
  game57ANDgame58: [{ g57: [String], g58: [String], color: [String] }],
  game59ANDgame60: [{ g59: [String], g60: [String], color: [String] }],
  game61ANDgame62: [{ g61: [String], g62: [String], color: [String] }],
  game63ANDgame64: [{ g63: [String], g64: [String], color: [String] }],
  game65ANDgame66: [{ g65: [String], g66: [String], color: [String] }],
  game67ANDgame68: [{ g67: [String], g68: [String], color: [String] }],
  game69ANDgame70: [{ g69: [String], g70: [String], color: [String] }],
  game71ANDgame72: [{ g71: [String], g72: [String], color: [String] }],
  game73ANDgame74: [{ g73: [String], g74: [String], color: [String] }],
  game75ANDgame76: [{ g75: [String], g76: [String], color: [String] }],
  game77ANDgame78: [{ g77: [String], g78: [String], color: [String] }],
  game79ANDgame80: [{ g79: [String], g80: [String], color: [String] }],
  game81ANDgame82: [{ g81: [String], g82: [String], color: [String] }],
  game83ANDgame84: [{ g83: [String], g84: [String], color: [String] }],
  game85ANDgame86: [{ g85: [String], g86: [String], color: [String] }],
  game87ANDgame88: [{ g87: [String], g88: [String], color: [String] }],
  game89ANDgame90: [{ g89: [String], g90: [String], color: [String] }],
  game91ANDgame92: [{ g91: [String], g92: [String], color: [String] }],
  game93ANDgame94: [{ g93: [String], g94: [String], color: [String] }],
  game95ANDgame96: [{ g95: [String], g96: [String], color: [String] }],
  game97ANDgame98: [{ g97: [String], g98: [String], color: [String] }],
  game99ANDgame100: [{ g99: [String], g100: [String], color: [String] }],
  game101ANDgame102: [{ g101: [String], g102: [String], color: [String] }],
  game103ANDgame104: [{ g103: [String], g104: [String], color: [String] }],
  game105ANDgame106: [{ g105: [String], g106: [String], color: [String] }],
  game107ANDgame108: [{ g107: [String], g108: [String], color: [String] }],
  game109ANDgame110: [{ g109: [String], g110: [String], color: [String] }],
  game111ANDgame112: [{ g111: [String], g112: [String], color: [String] }],
  game113ANDgame114: [{ g113: [String], g114: [String], color: [String] }],
  game115ANDgame116: [{ g115: [String], g116: [String], color: [String] }],
  game117ANDgame118: [{ g117: [String], g118: [String], color: [String] }],
  game119ANDgame120: [{ g119: [String], g120: [String], color: [String] }],
  game121ANDgame122: [{ g121: [String], g122: [String], color: [String] }],
  game123ANDgame124: [{ g123: [String], g124: [String], color: [String] }],
  game125ANDgame126: [{ g125: [String], g126: [String], color: [String] }],
  game127ANDgame128: [{ g127: [String], g128: [String], color: [String] }],
  game129ANDgame130: [{ g129: [String], g130: [String], color: [String] }],
  game131ANDgame132: [{ g131: [String], g132: [String], color: [String] }],
  game133ANDgame134: [{ g133: [String], g134: [String], color: [String] }],
  game135ANDgame136: [{ g135: [String], g136: [String], color: [String] }],
  game137ANDgame138: [{ g137: [String], g138: [String], color: [String] }],
  game139ANDgame140: [{ g139: [String], g140: [String], color: [String] }],
  game141ANDgame142: [{ g141: [String], g142: [String], color: [String] }],
  game143ANDgame144: [{ g143: [String], g144: [String], color: [String] }],
  game145ANDgame146: [{ g145: [String], g146: [String], color: [String] }],
  game147ANDgame148: [{ g147: [String], g148: [String], color: [String] }],
  game149ANDgame150: [{ g149: [String], g150: [String], color: [String] }],
  game151ANDgame152: [{ g151: [String], g152: [String], color: [String] }],
  game153ANDgame154: [{ g153: [String], g154: [String], color: [String] }],
  game155ANDgame156: [{ g155: [String], g156: [String], color: [String] }],
  game157ANDgame158: [{ g157: [String], g158: [String], color: [String] }],
  game159ANDgame160: [{ g159: [String], g160: [String], color: [String] }],
  game161ANDgame162: [{ g161: [String], g162: [String], color: [String] }],
  game163ANDgame164: [{ g163: [String], g164: [String], color: [String] }],
  game165ANDgame166: [{ g165: [String], g166: [String], color: [String] }],
  game167ANDgame168: [{ g167: [String], g168: [String], color: [String] }],
  game169ANDgame170: [{ g169: [String], g170: [String], color: [String] }],
  game171ANDgame172: [{ g171: [String], g172: [String], color: [String] }],
  game173ANDgame174: [{ g173: [String], g174: [String], color: [String] }],
  game175ANDgame176: [{ g175: [String], g176: [String], color: [String] }],
  game177ANDgame178: [{ g177: [String], g178: [String], color: [String] }],
  game179ANDgame180: [{ g179: [String], g180: [String], color: [String] }],
  game181ANDgame182: [{ g181: [String], g182: [String], color: [String] }],
  game183ANDgame184: [{ g183: [String], g184: [String], color: [String] }],
  game185ANDgame186: [{ g185: [String], g186: [String], color: [String] }],
  game187ANDgame188: [{ g187: [String], g188: [String], color: [String] }],
  game189ANDgame190: [{ g189: [String], g190: [String], color: [String] }],
  game191ANDgame192: [{ g191: [String], g192: [String], color: [String] }],
  game193ANDgame194: [{ g193: [String], g194: [String], color: [String] }],
  game195ANDgame196: [{ g195: [String], g196: [String], color: [String] }],  
  time: {
    type: String,
    required: true,
    default: () => {
      const now = new Date();
      const options = {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
      };
      return now.toLocaleString("en-US", options);
    },
  }  
});

// Model
const History = mongoose.model("History", historySchema);

// Predefined user credentials (from .env)
const USERS = [
  {
    username: "user1",
    password: "password1",
  },
  {
    username: "user2",
    password: "password2",
  },
  {
    username: "user3",
    password: "password3",
  },
  {
    username: "user4",
    password: "password4",
  },
];

// Initialize user data in MongoDB
const initializeUsers = async () => {
  const emptyArray = Array(8).fill("");
  try {
    for (const user of USERS) {
      const existingUser = await UserData.findOne({ username: user.username });
      if (!existingUser) {
        const newUser = new UserData({
          username: user.username,
          steps: [],
          game11: emptyArray,
          game12: emptyArray,
          game13: emptyArray,
          game14: emptyArray,
          game15: emptyArray,
          game16: emptyArray,
          game17: emptyArray,
          game18: emptyArray,
          game19: emptyArray,
          game20: emptyArray,
          game21: emptyArray,
          game22: emptyArray,
          game23: emptyArray,
          game24: emptyArray,
          game25: emptyArray,
          game26: emptyArray,
          game27: emptyArray,
          game28: emptyArray,
          game29: emptyArray,
          game30: emptyArray,
          game31: emptyArray,
          game32: emptyArray,
          game33: emptyArray,
          game34: emptyArray,
          game35: emptyArray,
          game36: emptyArray,
          game37: emptyArray,
          game38: emptyArray,
          game39: emptyArray,
          game40: emptyArray,
          game41: emptyArray,
          game42: emptyArray,
          game43: emptyArray,
          game44: emptyArray,
          game45: emptyArray,
          game46: emptyArray,
          game47: emptyArray,
          game48: emptyArray,
          game49: emptyArray,
          game50: emptyArray,
          game51: emptyArray,
          game52: emptyArray,
          game53: emptyArray,
          game54: emptyArray,
          game55: emptyArray,
          game56: emptyArray,
          game57: emptyArray,
          game58: emptyArray,
          game59: emptyArray,
          game60: emptyArray,
          game61: emptyArray,
          game62: emptyArray,
          game63: emptyArray,
          game64: emptyArray,
          game65: emptyArray,
          game66: emptyArray,
          game67: emptyArray,
          game68: emptyArray,
          game69: emptyArray,
          game70: emptyArray,
          game71: emptyArray,
          game72: emptyArray,
          game73: emptyArray,
          game74: emptyArray,
          game75: emptyArray,
          game76: emptyArray,
          game77: emptyArray,
          game78: emptyArray,
          game79: emptyArray,
          game80: emptyArray,
          game81: emptyArray,
          game82: emptyArray,
          game83: emptyArray,
          game84: emptyArray,
          game85: emptyArray,
          game86: emptyArray,
          game87: emptyArray,
          game88: emptyArray,
          game89: emptyArray,
          game90: emptyArray,
          game91: emptyArray,
          game92: emptyArray,
          game93: emptyArray,
          game94: emptyArray,
          game95: emptyArray,
          game96: emptyArray,
          game97: emptyArray,
          game98: emptyArray,
          game99: emptyArray,
          game100: emptyArray,
          game101: emptyArray,
          game102: emptyArray,
          game103: emptyArray,
          game104: emptyArray,
          game105: emptyArray,
          game106: emptyArray,
          game107: emptyArray,
          game108: emptyArray,
          game109: emptyArray,
          game110: emptyArray,
          game111: emptyArray,
          game112: emptyArray,
          game113: emptyArray,
          game114: emptyArray,
          game115: emptyArray,
          game116: emptyArray,
          game117: emptyArray,
          game118: emptyArray,
          game119: emptyArray,
          game120: emptyArray,
          game121: emptyArray,
          game122: emptyArray,
          game123: emptyArray,
          game124: emptyArray,
          game125: emptyArray,
          game126: emptyArray,
          game127: emptyArray,
          game128: emptyArray,
          game129: emptyArray,
          game130: emptyArray,
          game131: emptyArray,
          game132: emptyArray,
          game133: emptyArray,
          game134: emptyArray,
          game135: emptyArray,
          game136: emptyArray,
          game137: emptyArray,
          game138: emptyArray,
          game139: emptyArray,
          game140: emptyArray,
          game141: emptyArray,
          game142: emptyArray,
          game143: emptyArray,
          game144: emptyArray,
          game145: emptyArray,
          game146: emptyArray,
          game147: emptyArray,
          game148: emptyArray,
          game149: emptyArray,
          game150: emptyArray,
          game151: emptyArray,
          game152: emptyArray,
          game153: emptyArray,
          game154: emptyArray,
          game155: emptyArray,
          game156: emptyArray,
          game157: emptyArray,
          game158: emptyArray,
          game159: emptyArray,
          game160: emptyArray,
          game161: emptyArray,
          game162: emptyArray,
          game163: emptyArray,
          game164: emptyArray,
          game165: emptyArray,
          game166: emptyArray,
          game167: emptyArray,
          game168: emptyArray,
          game169: emptyArray,
          game170: emptyArray,
          game171: emptyArray,
          game172: emptyArray,
          game173: emptyArray,
          game174: emptyArray,
          game175: emptyArray,
          game176: emptyArray,
          game177: emptyArray,
          game178: emptyArray,
          game179: emptyArray,
          game180: emptyArray,
          game181: emptyArray,
          game182: emptyArray,
          game183: emptyArray,
          game184: emptyArray,
          game185: emptyArray,
          game186: emptyArray,
          game187: emptyArray,
          game188: emptyArray,
          game189: emptyArray,
          game190: emptyArray,
          game191: emptyArray,
          game192: emptyArray,
          game193: emptyArray,
          game194: emptyArray,
          game195: emptyArray,
          game196: emptyArray,          
        });
        await newUser.save();
        console.log(`Initialized data for ${user.username}`);
      }
    }
  } catch (error) {
    console.error("Error initializing users:", error);
  }
};

// Call initialization on server startup
initializeUsers();

app.get("/", (req, res) => {
  res.send("Welcome to the Color Game Server!");
});

// Login route
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  const user = USERS.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    res.status(200).json({ message: "Login successful", username });
  } else {
    res.status(401).send("Invalid username or password.");
  }
});

// Fetch data for a specific user
app.post("/api/get-data", async (req, res) => {
  const { username } = req.body; // Expect username in the request body
  try {
    const userData = await UserData.findOne({ username });
    if (userData) {
      res.status(200).json(userData);
    } else {
      res.status(404).send("User data not found.");
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).send("Failed to fetch user data.");
  }
});

// Save or update data for a specific user
app.post("/api/save-data", async (req, res) => {
  const {
    username,
    steps,
    game11,
    game12,
    game13,
    game14,
    game15,
    game16,
    game17,
    game18,
    game19,
    game20,
    game21,
    game22,
    game23,
    game24,
    game25,
    game26,
    game27,
    game28,
    game29,
    game30,
    game31,
    game32,
    game33,
    game34,
    game35,
    game36,
    game37,
    game38,
    game39,
    game40,
    game41,
    game42,
    game43,
    game44,
    game45,
    game46,
    game47,
    game48,
    game49,
    game50,
    game51,
    game52,
    game53,
    game54,
    game55,
    game56,
    game57,
    game58,
    game59,
    game60,
    game61,
    game62,
    game63,
    game64,
    game65,
    game66,
    game67,
    game68,
    game69,
    game70,
    game71,
    game72,
    game73,
    game74,
    game75,
    game76,
    game77,
    game78,
    game79,
    game80,
    game81,
    game82,
    game83,
    game84,
    game85,
    game86,
    game87,
    game88,
    game89,
    game90,
    game91,
    game92,
    game93,
    game94,
    game95,
    game96,
    game97,
    game98,
    game99,
    game100,
    game101,
    game102,
    game103,
    game104,
    game105,
    game106,
    game107,
    game108,
    game109,
    game110,
    game111,
    game112,
    game113,
    game114,
    game115,
    game116,
    game117,
    game118,
    game119,
    game120,
    game121,
    game122,
    game123,
    game124,
    game125,
    game126,
    game127,
    game128,
    game129,
    game130,
    game131,
    game132,
    game133,
    game134,
    game135,
    game136,
    game137,
    game138,
    game139,
    game140,
    game141,
    game142,
    game143,
    game144,
    game145,
    game146,
    game147,
    game148,
    game149,
    game150,
    game151,
    game152,
    game153,
    game154,
    game155,
    game156,
    game157,
    game158,
    game159,
    game160,
    game161,
    game162,
    game163,
    game164,
    game165,
    game166,
    game167,
    game168,
    game169,
    game170,
    game171,
    game172,
    game173,
    game174,
    game175,
    game176,
    game177,
    game178,
    game179,
    game180,
    game181,
    game182,
    game183,
    game184,
    game185,
    game186,
    game187,
    game188,
    game189,
    game190,
    game191,
    game192,
    game193,
    game194,
    game195,
    game196,    
  } = req.body;

  try {
    const userData = await UserData.findOne({ username });
    if (userData) {
      // Update the user's data
      userData.steps = steps || userData.steps;
      userData.game11 = game11 || userData.game11;
      userData.game12 = game12 || userData.game12;
      userData.game13 = game13 || userData.game13;
      userData.game14 = game14 || userData.game14;
      userData.game15 = game15 || userData.game15;
      userData.game16 = game16 || userData.game16;
      userData.game17 = game17 || userData.game17;
      userData.game18 = game18 || userData.game18;
      userData.game19 = game19 || userData.game19;
      userData.game20 = game20 || userData.game20;
      userData.game21 = game21 || userData.game21;
      userData.game22 = game22 || userData.game22;
      userData.game23 = game23 || userData.game23;
      userData.game24 = game24 || userData.game24;
      userData.game25 = game25 || userData.game25;
      userData.game26 = game26 || userData.game26;
      userData.game27 = game27 || userData.game27;
      userData.game28 = game28 || userData.game28;
      userData.game29 = game29 || userData.game29;
      userData.game30 = game30 || userData.game30;
      userData.game31 = game31 || userData.game31;
      userData.game32 = game32 || userData.game32;
      userData.game33 = game33 || userData.game33;
      userData.game34 = game34 || userData.game34;
      userData.game35 = game35 || userData.game35;
      userData.game36 = game36 || userData.game36;
      userData.game37 = game37 || userData.game37;
      userData.game38 = game38 || userData.game38;
      userData.game39 = game39 || userData.game39;
      userData.game40 = game40 || userData.game40;
      userData.game41 = game41 || userData.game41;
      userData.game42 = game42 || userData.game42;
      userData.game43 = game43 || userData.game43;
      userData.game44 = game44 || userData.game44;
      userData.game45 = game45 || userData.game45;
      userData.game46 = game46 || userData.game46;
      userData.game47 = game47 || userData.game47;
      userData.game48 = game48 || userData.game48;
      userData.game49 = game49 || userData.game49;
      userData.game50 = game50 || userData.game50;
      userData.game51 = game51 || userData.game51;
      userData.game52 = game52 || userData.game52;
      userData.game53 = game53 || userData.game53;
      userData.game54 = game54 || userData.game54;
      userData.game55 = game55 || userData.game55;
      userData.game56 = game56 || userData.game56;
      userData.game57 = game57 || userData.game57;
      userData.game58 = game58 || userData.game58;
      userData.game59 = game59 || userData.game59;
      userData.game60 = game60 || userData.game60;
      userData.game61 = game61 || userData.game61;
      userData.game62 = game62 || userData.game62;
      userData.game63 = game63 || userData.game63;
      userData.game64 = game64 || userData.game64;
      userData.game65 = game65 || userData.game65;
      userData.game66 = game66 || userData.game66;
      userData.game67 = game67 || userData.game67;
      userData.game68 = game68 || userData.game68;
      userData.game69 = game69 || userData.game69;
      userData.game70 = game70 || userData.game70;
      userData.game71 = game71 || userData.game71;
      userData.game72 = game72 || userData.game72;
      userData.game73 = game73 || userData.game73;
      userData.game74 = game74 || userData.game74;
      userData.game75 = game75 || userData.game75;
      userData.game76 = game76 || userData.game76;
      userData.game77 = game77 || userData.game77;
      userData.game78 = game78 || userData.game78;
      userData.game79 = game79 || userData.game79;
      userData.game80 = game80 || userData.game80;
      userData.game81 = game81 || userData.game81;
      userData.game82 = game82 || userData.game82;
      userData.game83 = game83 || userData.game83;
      userData.game84 = game84 || userData.game84;
      userData.game85 = game85 || userData.game85;
      userData.game86 = game86 || userData.game86;
      userData.game87 = game87 || userData.game87;
      userData.game88 = game88 || userData.game88;
      userData.game89 = game89 || userData.game89;
      userData.game90 = game90 || userData.game90;
      userData.game91 = game91 || userData.game91;
      userData.game92 = game92 || userData.game92;
      userData.game93 = game93 || userData.game93;
      userData.game94 = game94 || userData.game94;
      userData.game95 = game95 || userData.game95;
      userData.game96 = game96 || userData.game96;
      userData.game97 = game97 || userData.game97;
      userData.game98 = game98 || userData.game98;
      userData.game99 = game99 || userData.game99;
      userData.game100 = game100 || userData.game100;
      userData.game101 = game101 || userData.game101;
      userData.game102 = game102 || userData.game102;
      userData.game103 = game103 || userData.game103;
      userData.game104 = game104 || userData.game104;
      userData.game105 = game105 || userData.game105;
      userData.game106 = game106 || userData.game106;
      userData.game107 = game107 || userData.game107;
      userData.game108 = game108 || userData.game108;
      userData.game109 = game109 || userData.game109;
      userData.game110 = game110 || userData.game110;
      userData.game111 = game111 || userData.game111;
      userData.game112 = game112 || userData.game112;
      userData.game113 = game113 || userData.game113;
      userData.game114 = game114 || userData.game114;
      userData.game115 = game115 || userData.game115;
      userData.game116 = game116 || userData.game116;
      userData.game117 = game117 || userData.game117;
      userData.game118 = game118 || userData.game118;
      userData.game119 = game119 || userData.game119;
      userData.game120 = game120 || userData.game120;
      userData.game121 = game121 || userData.game121;
      userData.game122 = game122 || userData.game122;
      userData.game123 = game123 || userData.game123;
      userData.game124 = game124 || userData.game124;
      userData.game125 = game125 || userData.game125;
      userData.game126 = game126 || userData.game126;
      userData.game127 = game127 || userData.game127;
      userData.game128 = game128 || userData.game128;
      userData.game129 = game129 || userData.game129;
      userData.game130 = game130 || userData.game130;
      userData.game131 = game131 || userData.game131;
      userData.game132 = game132 || userData.game132;
      userData.game133 = game133 || userData.game133;
      userData.game134 = game134 || userData.game134;
      userData.game135 = game135 || userData.game135;
      userData.game136 = game136 || userData.game136;
      userData.game137 = game137 || userData.game137;
      userData.game138 = game138 || userData.game138;
      userData.game139 = game139 || userData.game139;
      userData.game140 = game140 || userData.game140;
      userData.game141 = game141 || userData.game141;
      userData.game142 = game142 || userData.game142;
      userData.game143 = game143 || userData.game143;
      userData.game144 = game144 || userData.game144;
      userData.game145 = game145 || userData.game145;
      userData.game146 = game146 || userData.game146;
      userData.game147 = game147 || userData.game147;
      userData.game148 = game148 || userData.game148;
      userData.game149 = game149 || userData.game149;
      userData.game150 = game150 || userData.game150;
      userData.game151 = game151 || userData.game151;
      userData.game152 = game152 || userData.game152;
      userData.game153 = game153 || userData.game153;
      userData.game154 = game154 || userData.game154;
      userData.game155 = game155 || userData.game155;
      userData.game156 = game156 || userData.game156;
      userData.game157 = game157 || userData.game157;
      userData.game158 = game158 || userData.game158;
      userData.game159 = game159 || userData.game159;
      userData.game160 = game160 || userData.game160;
      userData.game161 = game161 || userData.game161;
      userData.game162 = game162 || userData.game162;
      userData.game163 = game163 || userData.game163;
      userData.game164 = game164 || userData.game164;
      userData.game165 = game165 || userData.game165;
      userData.game166 = game166 || userData.game166;
      userData.game167 = game167 || userData.game167;
      userData.game168 = game168 || userData.game168;
      userData.game169 = game169 || userData.game169;
      userData.game170 = game170 || userData.game170;
      userData.game171 = game171 || userData.game171;
      userData.game172 = game172 || userData.game172;
      userData.game173 = game173 || userData.game173;
      userData.game174 = game174 || userData.game174;
      userData.game175 = game175 || userData.game175;
      userData.game176 = game176 || userData.game176;
      userData.game177 = game177 || userData.game177;
      userData.game178 = game178 || userData.game178;
      userData.game179 = game179 || userData.game179;
      userData.game180 = game180 || userData.game180;
      userData.game181 = game181 || userData.game181;
      userData.game182 = game182 || userData.game182;
      userData.game183 = game183 || userData.game183;
      userData.game184 = game184 || userData.game184;
      userData.game185 = game185 || userData.game185;
      userData.game186 = game186 || userData.game186;
      userData.game187 = game187 || userData.game187;
      userData.game188 = game188 || userData.game188;
      userData.game189 = game189 || userData.game189;
      userData.game190 = game190 || userData.game190;
      userData.game191 = game191 || userData.game191;
      userData.game192 = game192 || userData.game192;
      userData.game193 = game193 || userData.game193;
      userData.game194 = game194 || userData.game194;
      userData.game195 = game195 || userData.game195;
      userData.game196 = game196 || userData.game196;      

      await userData.save();
      res.status(200).send("User data updated successfully!");
    } else {
      res.status(404).send("User not found.");
    }
  } catch (error) {
    console.error("Error saving user data:", error);
    res.status(500).send("Failed to save user data.");
  }
});

// POST API to save history
app.post("/post-history", async (req, res) => {
  try {
    const { username, GameName } = req.body;

    // Check if GameName already exists for the given username
    const existingHistory = await History.findOne({ username, GameName });
    if (existingHistory) {
      return res.status(409).json({ message: "Username already exists" });
    }

    // Save new history if it doesn't exist
    const newHistory = new History(req.body);
    await newHistory.save();
    res.status(201).json({ message: "History saved successfully!" });
  } catch (err) {
    console.error("Error saving history:", err);
    res
      .status(500)
      .json({ message: "Failed to save history", error: err.message });
  }
});

// GET API to retrieve history
app.post("/get-history", async (req, res) => {
  try {
    const { username } = req.body; // Extract username from the request body
    if (!username) {
      return res.status(400).json({ message: "Username is required" });
    }

    const histories = await History.find({ username }); // Find histories matching the username
    res.status(200).json(histories);
  } catch (err) {
    console.error("Error retrieving history:", err);
    res.status(500).json({ message: "Failed to retrieve history", error: err });
  }
});

app.delete("/delete-history", async (req, res) => {
  const { username, GameName } = req.body;
  console.log("Delete request body:", req.body);

  if (!username || !GameName) {
    return res.status(400).json({ message: "Username or GameName missing" });
  }

  try {
    // Find and delete the history record by username and GameName
    const result = await History.findOneAndDelete({
      username: username,
      GameName: GameName,
    });

    if (!result) {
      return res.status(404).json({ message: "History not found" });
    }

    res.status(200).json({ message: "History deleted successfully" });
  } catch (err) {
    console.error("Error deleting history:", err);
    res.status(500).json({ message: "Error deleting history" });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
