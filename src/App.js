import React from "react";
import Cable from "./Dropwire";
import { UAParser } from "ua-parser-js";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    var parser = new UAParser();
    const name = parser.getBrowser().name;
    console.log(name);
    this.state = {
      browser: name,
      scrollTop: 0,
      ios: name.includes("Safari"),
      iosNoPhoto: name.includes("Safari")
    };
    for (let i = 0; i < 220; i++) {
      this["scrollImg" + i] = React.createRef();
    }
  }
  componentDidMount = () => {
    window.addEventListener("resize", this.refresh);
    window.addEventListener("scroll", this.handleScroll);
    this.refresh(true);
  };
  componentWillUnmount = () => {
    clearTimeout(this.scrollTimeout);
    clearTimeout(this.resizeTimer);
    window.removeEventListener("resize", this.refresh);
    window.removeEventListener("scroll", this.handleScroll);
  };
  handleScroll = (e) => {
    if (!this.state.offScroll) {
      const scrollTop = window.scrollY;
      this.setState(
        {
          scrolling: true,
          scrollTop
        },
        () => {
          clearTimeout(this.scrollTimeout);
          this.scrollTimeout = setTimeout(() => {
            this.setState({
              scrolling: false
            });
          }, 100);
        }
      );
    }
  };
  refresh = (first) => {
    const width = this.state.ios ? window.screen.availWidth : window.innerWidth;
    if (first || Math.abs(this.state.lastWidth - width) > 0) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.setState({
          lastWidth: width,
          width,
          availableHeight: this.state.ios
            ? window.screen.availHeight - 20
            : window.innerHeight
        });
      }, 600);
    }
  };
  render() {
    const handleScollImgError = (e) => {
      if (e.message) {
        console.log(e.message);
        this.setState({ serviceCancelingImages: true });
      }
    };
    let arrayOfnumbers = [0];
    const scrollnum = () => {
      const num = arrayOfnumbers[arrayOfnumbers.length - 1] + 1;
      arrayOfnumbers.push(num);
      return num;
    };
    return (
      <div
        style={{
          transition: ".3s ease-out",
          position: "relative",
          minHeight: "100vh",
          width: "100%",
          fontFamily: "sans-serif",
          textAlign: "center",
          backgroundColor: "rgb(225, 100, 170)"
        }}
      >
        <div
          onClick={() => {
            window.scroll(0, 100);
            this.setState({ trigger: true });
          }}
          style={{
            display: this.state.trigger ? "none" : "block",
            position: "absolute",
            height: "101%",
            width: "100%",
            backgroundColor: "rgba(20,20,20,.5)"
          }}
        />
        <br />
        <div
          style={{
            textAlign: "left",
            padding: "10px",
            margin: "10px",
            width: "calc(100% - 40px)",
            border: "1px solid"
          }}
        >
          Why are there no fusion reactor cars?
          <br />
          Barry Gehm · Follow Asst. Prof. Of Chemistry/Biochemistry
          <br />
          There are no fusion reactors that produce positive net energy, and the
          ones that come closest are building- sized, not vehicle-engine sized.
          <br />I mean for to not deprecate the electromagnets of the battery,
          polarize them in the manufacturing. This can be very tiny and
          replicated as if semiconductor. Is that a semiconductor?
          <br />
          Why aren't fusion reactors made for the phone?
          <br />
          Ajmal Niaz · Follow Studied at NED University of Engineering and
          Technology
          <br />
          I got one. built just for your phone )whatever make & model it
          happened to be.
          <br />
          You know by combining 2 hydrogen atoms, tremendous power is produced.
          Not to start this fusion, extremely high temperature is required. It
          even not practice to build fission reactors, let alone phone power.
          <br />
          <a href="https://www.quora.com/unanswered/If-a-torus-reactor-were-not-prevented-by-the-government-to-keep-us-working-would-Larry-Kudlow-melt-into-a-puddle">
            If a torus reactor were not prevented by the government to keep us
            working, would Larry Kudlow melt into a puddle?
          </a>
          <br />
          <a href="https://commie.dev">commie.dev</a>, to make labor superfluous
          does the social not beg for labor time
        </div>
        <br />
        <img
          alt="plagerism, exclusion and monopoly by Government"
          style={{
            height: "auto",
            shapeOutside: "rect()",
            float: "left",
            width: "400px",
            maxWidth: "80%",
            border: 0
          }}
          src="https://www.dropbox.com/s/vica68gl2199r9j/Screen%20Shot%202021-03-23%20at%201.53.40%20PM.png?raw=1"
        />
        <img
          style={{
            shapeOutside: "rect()",
            float: "right",
            width: "200px",
            maxWidth: "80%",
            border: 0
          }}
          src="https://www.dropbox.com/s/t5ueazsx7ikk4ia/magnetboi.jpg?raw=1"
          alt="magnet boi"
        />
        incredible poverty on the cross-referenced life-saving sewage by
        expenses pronounced by <a href="https://qr.ae/pGdZKZ">labor costs</a>,
        but forgetting the bottom-bottom line (costs by hour)
        <br />
        <br />
        Nuclear reactors use magnets, but it should be directed by torus
        (electron non-deprecation and efficiency "plasma" tokamok...)
        <br />
        <br />
        does energy have its own real world prevalence, like seconds or meters
        <br />"
        <a href="https://www.quora.com/What-physical-constant-is-the-kilogram-based-on">
          [What's the] physical constant [a] kilogram [is] based on
        </a>
        ? "Spherical diameter and density of …water, at a{" "}
        <a href="https://qr.ae/pGjUO0">cool</a> 66 deg?
        <h2>
          Electrons aren’t just “pure energy” but gravity, e=mc^2{" "}
          <span
            style={{
              textDecoration: "line-through"
            }}
          >
            cancels out
          </span>
          , so Einstein is stupid or trolling.
        </h2>
        https://www.quora.com/profile/Nick-Carducci/questions
        <br />
        <br />
        why is Biden buying energy from Russia, but stopping their pipelines'
        operational monopolies' target marrgin instead of rent-seeking...
        especially science - revenue excess labor is profits, for it is not
        outlayed within a year (0-{"<yearOld"})
        <h3>
          <a href="https://froth.app/physics">Physics</a> is so peculiar - in
          calculus we don’t multiply disparate units!{" "}
          <a href="https://www.nist.gov/si-redefinition/kilogram-kibble-balance">
            CurrentStrengthLength=milligrams
          </a>
          . We can add their derivations to make correlations, and explain
          endogenous endogenous/endogeniositous factors unmeasured, but never
          multiply a plane of apples and oranges, let alone equate an integral
          (amongst other integrals?) to another, unless a redundant joke!
        </h3>
        <span
          style={{
            fontStyle: "italic"
          }}
        >
          educate one basic open source without obstract dependencies.{" "}
          <a href="https://gmunit.us">
            General Maintenance unit over NSF + USPTO
          </a>
          !
        </span>
        they are gentrifying HUD rent-seeking beyond units or days not price,
        racketeering medication without biomedical reason nor consent. THEY LIE
        ABOUT YOUR ELOPEMENT WHEN REFUSAL TO TAKE THE NEEDLE. I WANT THEIR
        HEADS!
        <h2>Is E=mc^2 because we live in three dimensions?</h2>
        What's the problem? combustion of cardbon binds CO2, ice cores count
        carbon. light speed squared cross multiplies and cancels out. the&nbsp;
        <a href="https://micro-theory.com">law of gravity</a>
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1ajwlrpVVX1PbqgpoBVnv7kdEZJAlaPgq/preview"
          }
          float="right"
          title="Save the Nation (Newsmax) - Myron bell on the energy industry"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <h2>
          <a href="https://magnate.mobi">generators</a>, splash,{" "}
          <a href="https://magnate.auto">model</a>
        </h2>
        <div
          style={{
            backgroundColor: "navy",
            color: "white"
          }}
        >
          It is just a torus again, accelerate, mount or just clip whole iridium
          wrap on to ...radius exxacltly in thickness
        </div>
        <a
          style={{ wordBreak: "break-word" }}
          href="https://www.academia.edu/45132997/Written_for_National_Science_Foundation_Project_Pitch"
        >
          https://www.academia.edu/45132997/Written_for_National_Science_Foundation_Project_Pitch
        </a>
        <br />
        <br />
        [mass(electrons_compositi)xlightspeedScales; light is the loss of
        electrons but most are exchanged as they move through the air. the point
        of the equation was to describe gravity but that is the&nbsp;
        <a href="https://pubs.acs.org/doi/10.1021/ac051323m">electron</a>. Do we
        know where electrons come from?&nbsp;
        <a href="https://pubs.rsc.org/en/content/articlelanding/2019/sc/c8sc04500c">
          the Protons themselves
        </a>
        ?]
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1bJOuFiP6jv_D5kv7Jiq-jVjdhaS0l8OE/preview"
          }
          float="left"
          title="Stinchfield (Newsmax) - Kelli Ward on Musk free rider immutable support delete function"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <br />
        <h2>
          demand as exclusively labor, corporate profits like net loss bonds and
          gini without home nor bond prices
        </h2>
        “Making it more expensive by crowding out,” only can be from
        intermediate-goods, competing with consumers of suppliers of other
        industries. competing with consumers cannot make it more expensive when
        discerning between apples and oranges, it is a whole new greenfield
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1kaCwWn6nDz9VQyGm2Ppbu1Re5DZoOYXp/preview"
          }
          float="right"
          title="The Count (Newsmax) - left insistence on industry discretion before willing customers"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        we know people in debt do not need to compound interest and launder
        third party beneficiary donee claimable and launder employees and
        consumers
        <br />
        <br />
        Isn’t lithium ion battery source in the ground? You are comparing carbon
        binding to mining & battery-making, because we have no lithium mines?
        Just use magnate.company, or is NSF not malfeasant in saying it is not
        transformative nor original?
        <br />
        <Cable
          style={{ width: "400px", height: "270px" }}
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1ESzXvW6FEsyssNn-S9Dfg5npIERkMv8E/preview"
          }
          float="left"
          title="The Count (Newsmax) - electric vehiicles"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <br />
        “No sound or fuel, so no sound or guzzling, so how do I know it is
        working?”
        <br />
        <Cable
          style={{ height: "270px" }}
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1Z7w03QJfMSCVknlpivZcnqxUbtzBnyAg/preview"
          }
          float="right"
          title="John Bachmann Now (Newsmax) - Tom Basile interviews Alex Epstein, Center for Industrial Progress CEO & Founder, 'The Moral Case for Fossil Fuels'"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <iframe
          style={{
            shapeOutside: "rect()",
            float: "right",
            width: "200px",
            maxWidth: "80%",
            border: 0
          }}
          src="https://www.youtube.com/embed/nKvUf7F4Xn4"
          title="YouTube video player"
        />
        95% rare earth china needed for ev, have electric care but cannot
        produce electricity.” nuclear explodes charlie gasperino and jobs for
        retarded republicans and democrats station front running without actual
        demand yet for leases to treasury instead of keep as is fungible for UT
        NM WY as we move to transaction-fee currency, with royalty and drilling
        sign off for 11/12 dollar owners, 1/hour-GDP/p efficiency
        (income/hour)/home is more than expenses third of income
        <a
          style={{
            shapeOutside: "rect()",
            float: "left",
            width: "max-content",
            padding: "0px 10px",
            fontSize: "20px",
            fontFamily: "'Pacifico', sans-serif",
            color: "rgb(230,230,255)",
            backgroundColor: "rgb(32, 22, 11)"
          }}
          href="https://2024nj.com"
        >
          2024nj.com
        </a>
      </div>
    );
  }
}
