import { motion } from "framer-motion";
import ImmersivePhoto from "@/components/ImmersivePhoto";
import RatingBar from "@/components/RatingBar";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* ─── HERO ─── */}
      <ImmersivePhoto
        src="/images/o-6.jpg"
        alt="Steakhouse entrance on Figueroa Street, Downtown Los Angeles"
      
        <motion.div
          className="text-center max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-blog-gold mb-4">
            The Boujee College Foodie
          </p>
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4">
            The $18 Steakhouse Secret
          </h1>
          <p className="font-display text-lg md:text-2xl italic text-primary-foreground opacity-80">
            Is it Giving Boujee… or Just Giving $8 Saratoga Water?
          </p>
        </motion.div>
      </ImmersivePhoto>

      {/* ─── INTRO ─── */}
      <motion.section className="blog-section" {...fadeUp}>
        <p className="font-body text-xs uppercase tracking-[0.25em] text-blog-gold mb-2">
          March 4, 2026 &nbsp;·&nbsp; Maia Weingard
        </p>
        <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
          WRIT 340 &nbsp;·&nbsp; Dr. Stephanie Renée Payne
        </p>

        <p className="font-body text-lg leading-relaxed blog-dropcap">
          Wondering how to stay boujee on a budget as a college student? If so, welcome to my blog, <em>The Boujee College Foodie!</em> My name is Maia and here, we talk about all the tips and tricks for keeping both your belly and your wallet full as I explore the city of Los Angeles as a student at the University of Southern California (USC).
        </p>

        <p className="font-body text-lg leading-relaxed mt-6">
          In collaboration with Lillian Qiao–your inclusive foodie blogger and fellow USC student–we are going to see what all the hype is about around the recent attention of a well-known restaurant: <strong>Fogo de Chão</strong>.
        </p>

        <div className="blog-divider" />

        <p className="font-body text-lg leading-relaxed">
          Fogo de Chão is a renowned Brazilian steakhouse known for its buffet style yet luxurious dining. Many guests visit to celebrate special occasions while indulging in decadent cuts of meats and an endless selection of wine. However, what many don't know about is a hidden experience Fogo de Chão offers, coined <strong>The Market Table</strong>.
        </p>

        <div className="bg-blog-blush rounded-xl p-6 md:p-8 my-10">
          <p className="font-display text-xl md:text-2xl font-semibold text-primary text-center">
            💰 The Market Table — $18
          </p>
          <p className="font-body text-base text-center text-muted-foreground mt-2">
            Specialty salads · Seasonal Brazilian dishes · Charcuterie · Fresh superfoods
          </p>
        </div>

        <p className="font-body text-lg leading-relaxed">
          So, Lillian and I made our way over to the <em>Fogo de Chão - Downtown Los Angeles</em> to get our questions answered: Is this $18 buffet a boujee bargain, or a luxe letdown? And is it dietary-friendly and diverse?
        </p>
      </motion.section>

      {/* ─── PHOTO: Restaurant Interior ─── */}
      <ImmersivePhoto
        src="/images/o-8.jpg"
        alt="Elegant interior of Fogo de Chão Downtown Los Angeles"
        caption="The warm, well-lit interior of Fogo de Chão DTLA"
      />

     {/* ─── YOUR PHOTOS: Arrival ─── */}
      <section className="blog-section">
        <p className="font-display text-sm uppercase tracking-[0.25em] text-blog-gold text-center mb-6">
          📸 Upon Entering...
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PhotoPlaceholder src="/images/o-10.jpg" alt="entrance-seating" aspectRatio="square" />
          <PhotoPlaceholder src="/images/o-9.jpg" alt="table-seating" aspectRatio="square" />
        </div>
      </section>

      {/* ─── THE AMBIANCE ─── */}
      <motion.section className="blog-section" {...fadeUp}>
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-8">
          Setting the Scene ✨
        </h2>

        <p className="font-body text-lg leading-relaxed">
          Going to a steakhouse in a big city was already a striking experience, as once we arrived, the Fogo de Chão blended seamlessly into the busyness of Figueroa and 8th Street. Upon entering the restaurant, we were greeted warmly by the hostess, who led us to a small two-person table positioned beside a laminated glass window.
        </p>

        <p className="font-body text-lg leading-relaxed mt-6">
          The glass, designed to prevent pedestrians from seeing inside, created a subtle, yet contrived separation from the bustling street. It felt exclusive, though slightly performative. It was a gloomy, overcast day, contrasting sharply with the well-lit interior.
        </p>

        <div className="blog-pullquote">
          "The dining area felt expansive at first glance… each carefully set with a bottle of Saratoga water and matching branded glasses, reinforcing the restaurant's high-end stature."
        </div>

        <p className="font-body text-lg leading-relaxed">
          Near the entrance was a small bar with a TV displaying sports and a separate booth that extended across the wall designed for wine tasting. While the space appeared huge, the arrangement of tables and chairs felt extremely confining, as despite only five or six groups dining at a time during our visit, the layout constricted everyone into one section of the restaurant.
        </p>


      </motion.section>

      {/* ─── COMPLIMENTARY BITES ─── */}
      <motion.section className="blog-section" {...fadeUp}>
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-8">
          Free Apps? Say Less 🧀
        </h2>

        <p className="font-body text-lg leading-relaxed">
          Within seconds of being seated, we were greeted by a waitress, who briefly introduced herself and asked if we had dined at Fogo de Chão before. When we told her it was our first visit, she welcomed us and presented us a choice between still or mineral water.
        </p>

        <p className="font-body text-lg leading-relaxed mt-6">
          As we reviewed the menu with our order in mind, our waitress brought us complimentary <strong>pão de queijo</strong> (cheese bread), crispy <strong>polenta</strong>, and <strong>caramelized bananas</strong>. Free apps at a steakhouse? My inner broke-but-boujee college student approved immediately.
        </p>
      </motion.section>

      {/* ─── PHOTO: Charcuterie ─── */}
      <ImmersivePhoto
        src="/images/IMG_5217.jpg"
        alt="Charcuterie board with prosciutto, cheeses, and arugula"
        caption="Plate one: the charcuterie spread that started it all"
      />

      {/* ─── PLATE ONE ─── */}
      <motion.section className="blog-section" {...fadeUp}>
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-8">
          Plate One: The Charcuterie Era 🍷
        </h2>

        <p className="font-body text-lg leading-relaxed">
          Our first plates contained staple charcuterie items, including sliced prosciutto, chorizo salami, grana cheese (parmesan), manchego, bleu cheese, and smoked provolone. We added a pear and arugula salad, malagueta peppers, and mozzarella caprese topped with lox, roasted garlic, and sweety drop peppers.
        </p>

        <div className="blog-pullquote">
          "My personal favorite pairing was the prosciutto with parmesan, despite the fact that I am not very fond of parmesan. (Too bad the wine isn't included…)."
        </div>

        <p className="font-body text-lg leading-relaxed">
          Moving on to the pear and arugula salad, which was a fabulous mixture of pear, butternut squash, and arugula topped with balsamic vinegar and feta cheese. The salad gave a refreshing contrast, as it balanced sweetness with sharpness. The combination reminded me of my mother's butternut squash, onion and balsamic vinegar dish, adding a touch of familiarity and comfort to the experience.
        </p>

        <p className="font-body text-lg leading-relaxed mt-6">
          Finally, I ended this plate with the mozzarella caprese topped with lox, roasted garlic, and sweety drop peppers. My first bite excluded the lox, which was incredible as every component played a role in the flavor profile, making the dish feel abundantly light and refreshing; <em>it was giving main character energy</em>.
        </p>
      </motion.section>

      {/* ─── PHOTO: Feijoada ─── */}
      <ImmersivePhoto
        src="/images/IMG_5223.jpg"
        alt="Brazilian feijoada with white rice and candied bacon"
        caption="The fogo feijoada — rich, warm, and unapologetically comforting"
      />

      {/* ─── PLATE TWO ─── */}
      <motion.section className="blog-section" {...fadeUp}>
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-8">
          Plate Two: Let the Phone Eat First 📱
        </h2>

        <p className="font-body text-lg leading-relaxed">
          For our second plate, we let the phone eat first, selecting cucumbers, cauliflower, eggplant, mushrooms, artichoke hearts, bell peppers, pickled onions, and a peppadew for our IG. When returning to the buffet, Lillian and I were not met with any uncomfortable glances or scrutiny, which eased the apprehension we had previously felt.
        </p>

        <p className="font-body text-lg leading-relaxed mt-6">
          We also discovered the hot station, where fogo feijoada was being served over white rice.
        </p>

        <div className="bg-blog-blush rounded-xl p-6 my-8">
          <p className="font-display text-lg text-primary text-center italic">
            🪰 "We noticed a basket of Italian bread, however, small gnats had covered the surface. Not exactly the kind of luxury garnish we had in mind."
          </p>
        </div>

        <p className="font-body text-lg leading-relaxed mt-6">
          Instead, we began with the beans over white rice, a dish that immediately offered warmth and comfort. The fogo feijoada was immensely rich and well-seasoned as its flavors soaked into the soft rice. However, the heat of this dish contradicted harshly with the chilled vegetables on our plates; <em>it was culinary whiplash</em>.
        </p>

        <p className="font-body text-lg leading-relaxed mt-6">
            Many of them were ice cold, as we later realized that every platter at the buffet sat on a large bed of ice. This disrupted our palates, as the eggplant, cauliflower, mushrooms, and artichoke hearts tasted excessively herbed and felt unpleasantly mushy. While the cucumbers, bell peppers, pickled onions, and peppadew (another favorite) were unapologetically refreshing, the difference in temperature between the dishes gradually faded our enthusiasm to continue eating.
        </p>

      </motion.section>

      {/* ─── PHOTO: Dessert / Final plate ─── */}
      <ImmersivePhoto
        src="/images/IMG_5233.jpg"
        alt="Brazilian potato salad, tri-bean salad, and quinoa tabouleh"
        caption="The grand finale: pink pineapple, roasted apple, and all the sides"
      />

      {/* ─── PLATE THREE ─── */}
      <motion.section className="blog-section" {...fadeUp}>
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-8">
          Plate Three: The Grand Finale 🍍
        </h2>

        <p className="font-body text-lg leading-relaxed">
          As we plated our final serving, we chose to end with roasted apple and butternut squash, quinoa tabouleh, tri-bean salad, Brazilian potato salad, Brazilian street corn, and a slice of <strong>pink pineapple</strong>.
        </p>

        <p className="font-body text-lg leading-relaxed mt-6">
          We first retried the fogo feijoada with candied bacon. The candied bacon entered the dish like a diva, but left like a distraction, as it felt too sweet and chewy for the heartiness of this dish.
        </p>

        <div className="blog-pullquote">
          "The Brazilian potato salad? Cute, but basic, and peas?? Really?"
        </div>

        <p className="font-body text-lg leading-relaxed">
          I particularly enjoyed the Brazilian street corn, as the kernels were firmer than typical street corn and that added texture made the dish satisfying when chewing. Finally, the tri-bean salad was robust and citrusy, as it contained garbanzo beans, black beans, edamame, bell peppers, and cilantro, all topped with lime juice.
        </p>
      </motion.section>

      /*{ ─── YOUR PHOTO SECTION ─── }
      <section className="blog-section">
        <p className="font-display text-sm uppercase tracking-[0.25em] text-blog-gold text-center mb-6">
          📸 More of Your Photos
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <PhotoPlaceholder label="Photo 1" aspectRatio="square" />
          <PhotoPlaceholder label="Photo 2" aspectRatio="square" />
          <PhotoPlaceholder label="Photo 3" aspectRatio="square" />
          <PhotoPlaceholder label="Photo 4" aspectRatio="square" />
        </div>
      </section>*/

      {/* ─── THE VERDICT ─── */}
      <motion.section className="blog-section" {...fadeUp}>
        <div className="blog-divider" />

        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-8 text-center">
          The Verdict 💅
        </h2>

        <p className="font-body text-lg leading-relaxed">
          Overall, our trip to Fogo de Chão ate (literally). It gave elegance, variety, and thoughtful service, though with a couple minor L’s. 
        </p>

        <p className="font-body text-lg leading-relaxed mt-6">
        One of the first things Lillian and I discerned was how frequently the waitress checked on us, as we counted almost ten times while we were still enjoying our first plate. This form of attentiveness began to feel targeted and slightly uncomfortable, adding to the tension I previously mentioned. 
        </p>

        <p className="font-body text-lg leading-relaxed mt-6">
        The restaurant exemplifies a polished, luxury feel, yet the seating placement diminished that experience, as despite the spacious combination of the bar, booths, and tables, it felt crowded. Many guests were dressed in corporate clothing, likely on lunch breaks, which contributed to a businesslike tone of ambiance compared to other Fogo de Chão locations. (Honestly, Lillian and I might have been the only ones there calculating the cost). 
        </p>

        <p className="font-body text-lg leading-relaxed mt-6">
          The buffet itself offered a vast array of fresh and flavorful dishes, my favorites including the mozzarella caprese topped with roasted garlic and sweety drop peppers, pear and arugula salad, and peppadew. Though, many of the cold vegetable dishes felt like they would have been better served warm or as side dishes for the decadent meats.
        </p>

        <div className="bg-blog-blush rounded-xl p-6 my-8">
          <p className="font-display text-lg text-primary text-center italic">
            💧 "The Saratoga water was an unexpected $8 charge per bottle… Mind you, that $8 could have been half a Trader Joe's haul."
          </p>
        </div>
      </motion.section>

      {/* ─── RATINGS ─── */}
      <motion.section className="blog-section" {...fadeUp}>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
          The Ratings ⭐
        </h2>

        <div className="max-w-lg mx-auto">
          <RatingBar label="Ambiance" score={6} />
          <RatingBar label="Boujeeness" score={7.5} />
          <RatingBar label="Affordability" score={8.5} />
          <RatingBar label="Food" score={7} />
        </div>

        <div className="blog-divider" />

        <div className="text-center">
          <p className="font-display text-xl md:text-2xl italic text-primary mb-4">
            "A cautious yes." 💋
          </p>
          <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Fogo de Chão presents a sophisticated and diverse dining experience with attentive service and classy presentation. While not every element was perfect, the mix of variety, flavor, and inclusivity makes it a boujee bargain, especially for college students looking to feel luxurious on a budget.
          </p>
        </div>
      </motion.section>

      {/* ─── FOOTER ─── */}
      <footer className="py-16 text-center border-t border-border">
        <p className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
          The Boujee College Foodie
        </p>
        <p className="font-body text-sm text-muted-foreground mb-4">
          by Maia Weingard · USC · WRIT 340
        </p>
        <p className="font-body text-xs text-muted-foreground">
          In collaboration with Lillian Qiao
        </p>
        <div className="flex justify-center gap-2 mt-6">
          <span className="inline-block px-3 py-1 rounded-full bg-blog-blush text-primary text-xs font-body">
            #BoujeeBargain
          </span>
          <span className="inline-block px-3 py-1 rounded-full bg-blog-blush text-primary text-xs font-body">
            #FogoDeChão
          </span>
          <span className="inline-block px-3 py-1 rounded-full bg-blog-blush text-primary text-xs font-body">
            #CollegeFoodie
          </span>
        </div>
      </footer>
    </main>
  );
};

export default Index;
