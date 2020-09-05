const moment = require('moment');
const faker = require('faker');
const csvWriter = require('csv-write-stream');
const fs = require('fs');
const writer = csvWriter({
sendHeaders: false,
});


writer.pipe(fs.createWriteStream('../reviews.csv', {flags: 'a'}));
//
const generateUser = () => {
  const rand = Math.floor(Math.random() * 3);
  let user = faker.name.firstName();
  if (rand <= 1) {
    user = faker.name.firstName() + faker.name.lastName();
  } else if (rand === 2) {
    user = faker.random.alpha() + faker.name.lastName() + faker.random.number();
  } else if (rand >= 3) {
    user = faker.name.prefix() + faker.name.findName();
  }
  return user;
};

const generateReview = () => {
  const rand = Math.ceil(Math.random() * 3);
  // const review = reviewDescriptions(rand);
  let review = '';
  const reviewStatements = ['Pork belly narwhal chambray ramps messenger bag retro. Intelligentsia try-hard tumblr fingerstache heirloom.', 'Aesthetic copper mug mixtape, roof party raclette humblebrag bushwick edison bulb tumblr.', 'Brooklyn viral everyday carry vegan blog cloud bread tbh lo-fi.', 'Brooklyn helvetica fam viral, vegan YOLO before they sold out lumbersexual air plant authentic literally raclette.', 'Leggings waistcoat trust fund green juice hashtag blog schlitz enamel pin salvia four dollar toast pork belly.', 'Subway tile microdosing single-origin coffee distillery fam pok pok.', 'Ethical small batch mumblecore street art, umami williamsburg intelligentsia freegan.', 'Locavore put a bird on it forage neutra, try-hard deep v shaman copper mug pour-over salvia cronut live-edge pork belly.', 'Heirloom vice literally live-edge VHS cliche squid typewriter hoodie viral woke.', 'Pour-over gochujang iPhone, air plant health goth next level stumptown you probably haven\'t heard of them succulents bicycle rights ethical VHS.', 'Celiac photo booth flannel retro selvage DIY.', 'Messenger bag organic offal viral cred craft beer.', 'Copper mug narwhal air plant truffaut direct trade squid flannel meh synth etsy salvia church-key ugh venmo plaid.', 'Prism mumblecore lyft tattooed hashtag, trust fund chia woke crucifix knausgaard 8-bit artisan whatever.', 'Humblebrag lomo pork belly green juice.', 'Yuccie shaman chia gastropub taxidermy keffiyeh sartorial seitan, selfies craft beer.', 'Pork belly XOXO YOLO mlkshk 90\'s messenger bag.', 'Bushwick brunch craft beer man braid literally selvage XOXO.', 'Gentrify YOLO waistcoat lyft raw denim, selfies organic artisan.', 'Squid green juice poutine iceland shoreditch selfies.', 'Gentrify iceland subway tile godard adaptogen drinking vinegar chillwave franzen glossier viral edison bulb.', 'Lyft leggings lomo pitchfork pork belly tattooed.', 'Hexagon affogato seitan jean shorts live-edge schlitz.', 'Mumblecore kogi waistcoat, af edison bulb photo booth thundercats offal hammock cliche hashtag sriracha.', 'I\'m baby meditation synth tbh vinyl iceland gentrify art party forage. DIY chartreuse microdosing lumbersexual ethical keffiyeh.', 'Pour-over succulents polaroid, tacos fashion axe flexitarian vape synth affogato artisan meggings selfies unicorn gluten-free.', 'Plaid portland taxidermy shabby chic bicycle rights migas flannel narwhal shoreditch poke pickled selvage adaptogen everyday carry.', 'Photo booth intelligentsia enamel pin scenester, woke snackwave authentic man bun portland.', 'Master cleanse succulents irony pitchfork green juice organic.', 'Kinfolk vice meh PBR&B synth, tattooed air plant post-ironic shoreditch quinoa tofu hoodie bespoke fixie thundercats.', 'Paleo pinterest yuccie you probably haven\'t heard of them affogato tbh.', 'Skateboard heirloom hella, humblebrag hammock lyft pork belly kinfolk food truck locavore hexagon chambray kickstarter butcher.', 'Hell of godard banjo tousled sartorial, wayfarers freegan DIY.', 'Drinking vinegar kombucha post-ironic fashion axe single-origin coffee listicle glossier intelligentsia.', 'Humblebrag af occupy literally hexagon, sustainable poke fingerstache gluten-free.', 'Thundercats etsy cred gastropub tote bag succulents.', 'Glossier sustainable jianbing migas artisan lumbersexual kitsch humblebrag listicle mustache gluten-free cloud bread lyft tofu asymmetrical.', 'Kombucha PBR&B health goth, hot chicken cornhole keffiyeh next level raclette typewriter pork belly man braid.', 'Humblebrag lo-fi adaptogen affogato bespoke freegan gluten-free activated charcoal helvetica flexitarian.', 'Affogato next level seitan, meh pop-up cold-pressed vice pour-over wolf.', 'Truffaut art party iPhone vinyl everyday carry af mixtape cornhole williamsburg mustache salvia affogato.', 'Intelligentsia viral taiyaki brooklyn, la croix shabby chic plaid master cleanse try-hard VHS kombucha jean shorts fanny pack cliche.', 'Lomo blog microdosing celiac, kombucha cliche iPhone cloud bread meh succulents.', 'Meditation ramps stumptown mlkshk kitsch aesthetic slow-carb shoreditch everyday carry blue bottle.', 'Everyday carry hell of heirloom, four dollar toast pitchfork fingerstache celiac cornhole locavore squid crucifix kogi waistcoat direct trade.', 'Fixie direct trade semiotics kinfolk pug irony unicorn mustache, butcher stumptown sustainable DIY master cleanse gastropub blue bottle.', 'Celiac normcore health goth snackwave viral hoodie cloud bread tumblr.'];

  for (let i = 0; i < rand; i += 1) {
    const randomSent = Math.floor(Math.random() * reviewStatements.length);
    if (i === 0)
    {
      review = reviewStatements[randomSent];
    } else {
      review = review + ' ' + reviewStatements[randomSent];
    }
  }
  return review;
};

const generateHostelRecord = async (count, max) => {

  writer.setMaxListeners(0);
  while (count < max) { // iterate through all 10000000 hostel records
    console.log(count);
    try {
      if (count % 4 === 0) {
        const currentAuthor = generateUser(); // Generate a name for the current author
        authors += 1;
        const userDescriptions = ['Globetrotter', 'Avid Traveller', 'Novice Nomad'];
        const userAges = ['18-24', '25-30', '31-40', '41+'];
        const ageIndex = Math.floor(Math.random() * 4);
        const age = userAges[ageIndex];
        const genders = ['Female', 'Male'];
        const genIdx = Math.floor(Math.random() * 2);
        const gender = genders[genIdx];
        const descIndex = Math.floor(Math.random() * 3);
        const desc = userDescriptions[descIndex];
        const imgIndex = Math.ceil(Math.random() * 5);
        const img = `server/database/images/img${imgIndex}.jpg`;
        const numberofReviews = Math.floor(Math.random() * 120) + 1;
        for (let j = count; j < (count + numberofReviews); j++) {
          const reviewData = await generateReview();
          let hostel = 'hostel' + j;
          if (j > max) {
            hostel = 'hostel' + (j - max);
          }
          const security = Math.ceil(Math.random() * 10);
          const location = Math.ceil(Math.random() * 10);
          const staff = Math.ceil(Math.random() * 10);
          const atmosphere = Math.ceil(Math.random() * 10);
          const cleanliness = Math.ceil(Math.random() * 10);
          const facilities = Math.ceil(Math.random() * 10);
          const value = Math.ceil(Math.random() * 10);
          const total = ((security + location + staff + atmosphere + cleanliness + facilities + value) / 7).toFixed(1);
          const randDate = new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));
          const date = moment(randDate).format('YYYY-MM-DD');
          await writer.write({hostelId: hostel, review: reviewData, user: currentAuthor, description: desc, age: age, gender: gender, security: security, location: location, staff: staff, atmosphere: atmosphere, cleanliness: cleanliness, facilities: facilities, value: value, total: total, date: date});
          totalRows += 1;
        }
      }
    } catch (err) {
      console.log(err);
      process.exit();
    }
    count += 1;
  }
  console.log('Authors: ' + authors);
};

const timer = async (count, max) => {
  try {
    const startTime = new Date();
    await generateHostelRecord(count, max);
    writer.end();
    const endTime = new Date();
    console.log('Time to generate: ' + ((endTime - startTime) + 0) + 'ms');
    console.log('Rows generated: ' + totalRows);
    totalRows = 0;
  } catch (err) {
    console.log(err);
    process.exit();
  }
};
let authors = 2550000;
let totalRows = 153469244;
timer(9800000, 10000001);


