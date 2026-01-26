/**
 * WhoIsConsumer.jsx - Topic 1 of Lesson 3
 *
 * Content to add:
 * - Definition of a consumer
 * - Characteristics of a consumer
 * - Difference between consumer and producer
 * - Types of consumers (direct/indirect)
 * - Consumer behavior basics
 *
 * Related quiz topic: who-is-consumer
 */

import { FaUser, FaShoppingCart, FaIndustry, FaArrowRight } from 'react-icons/fa';
import '../../css/lessons.css';
import '../../css/quiz.css';

function WhoIsConsumer() {
  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Chapter 3</span>
        <h2 className="section-title-lesson">Who is a Consumer?</h2>
        <p className="section-subtitle-lesson">Understanding the concept of a consumer in economics</p>
      </div>

      {/* Main Content Card */}
      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="highlight-gold">Definition of a Consumer</h3>

          {/* Enhanced Definition Box */}
          <div className="definition-box-enhanced">
            {/* Decorative corner elements */}
            <div className="corner-decor top-left"></div>
            <div className="corner-decor bottom-right"></div>

            <div style={{
              position: 'relative',
              zIndex: 1
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                marginBottom: '1rem'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #ffd700, #ffaa00)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(255, 215, 0, 0.4)'
                }}>
                  <FaUser style={{ color: '#000', fontSize: '1.2rem' }} />
                </div>
                <h4 style={{
                  margin: 0,
                  fontSize: '1.3rem',
                  color: '#ffd700',
                  fontWeight: 'bold',
                  letterSpacing: '0.5px'
                }}>Consumer - The Final User</h4>
              </div>

              <p style={{
                fontSize: '1.15rem',
                lineHeight: '1.8',
                color: '#fff',
                fontStyle: 'italic',
                fontWeight: '500',
                margin: '1rem 0',
                padding: '1rem',
                background: 'rgba(0, 0, 0, 0.3)',
                borderLeft: '4px solid #ffd700',
                borderRadius: '8px',
                boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.2)'
              }}>
                "A consumer is a person who buys goods and services for personal consumption
                and not for resale or commercial purposes."
              </p>

              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '10px',
                padding: '1.2rem',
                marginTop: '1rem'
              }}>
                <p style={{ margin: '0 0 1rem 0', color: '#e8e8e8', lineHeight: '1.7' }}>
                  In economics, a consumer is the <strong style={{ color: '#ffd700' }}>end-user of goods and services</strong>.
                  Unlike a producer who creates or supplies goods, a consumer purchases them to satisfy their wants and needs.
                  Every individual acts as a consumer when they buy products for personal use - whether it's
                  food for eating, clothes for wearing, or entertainment for enjoyment.
                </p>
                <p style={{ margin: 0, color: '#e8e8e8', lineHeight: '1.7' }}>
                  The term <strong style={{ color: '#ffaa00' }}>"consumer"</strong> is derived from the Latin word
                  <em style={{ color: '#ffd700' }}> "consumere"</em> which means <strong>"to use up."</strong>
                  In the economic sense, consumption refers to the final use of goods and services by
                  individuals to satisfy their immediate wants. When you buy a smartphone for personal use,
                  you are a consumer. But if a mobile shop owner buys smartphones to resell them, they are
                  a trader, not a consumer in that transaction.
                </p>
              </div>
            </div>
          </div>

          <h3 className="highlight-green">Key Characteristics of a Consumer</h3>
          <ul className="bullet-list">
            <li><strong>Has Wants and Needs:</strong> Every consumer has specific desires and requirements
              they want to satisfy. For example, a student needs textbooks for study and wants the latest
              gaming console for entertainment.</li>
            <li><strong>Purchases for Personal Use:</strong> Goods are bought for final consumption,
              not for resale. When you buy groceries for your family, you're consuming them, not selling them further.</li>
            <li><strong>Makes Rational Choices:</strong> Consumers make purchasing decisions based on
              their income, preferences, and the utility they expect to receive. A person earning ₹30,000
              per month will make different choices than someone earning ₹1,00,000.</li>
            <li><strong>Faces Budget Constraint:</strong> Has limited income but unlimited wants. This
              scarcity forces consumers to prioritize - choosing between buying a new phone or saving for
              a vacation.</li>
            <li><strong>Seeks Maximum Satisfaction:</strong> Every consumer aims to get the highest
              possible satisfaction (utility) from their limited budget. This is why we compare prices,
              read reviews, and look for deals before purchasing.</li>
          </ul>

          {/* Real-world Examples */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 200, 255, 0.1), rgba(0, 150, 255, 0.1))',
            border: '3px solid rgba(0, 200, 255, 0.3)',
            borderRadius: '15px',
            padding: '1.8rem',
            margin: '1.5rem 0',
            boxShadow: '0 8px 32px rgba(0, 200, 255, 0.2)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Animated background pattern */}
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '150px',
              height: '150px',
              background: 'radial-gradient(circle, rgba(0, 200, 255, 0.2), transparent)',
              borderRadius: '50%',
              opacity: 0.5
            }}></div>
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100px',
              height: '100px',
              background: 'radial-gradient(circle, rgba(0, 150, 255, 0.2), transparent)',
              borderRadius: '50%',
              opacity: 0.5
            }}></div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  width: '45px',
                  height: '45px',
                  background: 'linear-gradient(135deg, #00c8ff, #0080ff)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(0, 200, 255, 0.4)',
                  transform: 'rotate(5deg)'
                }}>
                  <FaShoppingCart style={{ color: '#fff', fontSize: '1.3rem' }} />
                </div>
                <h4 style={{
                  margin: 0,
                  fontSize: '1.4rem',
                  color: '#00c8ff',
                  fontWeight: 'bold',
                  letterSpacing: '0.5px'
                }}>Real-World Example</h4>
              </div>

              {/* Scenario Box */}
              <div style={{
                background: 'rgba(0, 0, 0, 0.4)',
                borderRadius: '12px',
                padding: '1.5rem',
                marginBottom: '1.2rem',
                border: '2px solid rgba(0, 200, 255, 0.3)',
                boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.3)'
              }}>
                <div style={{
                  display: 'inline-block',
                  background: 'linear-gradient(90deg, #00c8ff, #0080ff)',
                  color: '#000',
                  padding: '0.4rem 1rem',
                  borderRadius: '20px',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                  marginBottom: '1rem',
                  boxShadow: '0 2px 10px rgba(0, 200, 255, 0.5)'
                }}>
                  SCENARIO
                </div>
                <p style={{
                  margin: 0,
                  color: '#fff',
                  fontSize: '1.05rem',
                  lineHeight: '1.7'
                }}>
                  <strong style={{ color: '#ffd700' }}>Rahul</strong> has <strong style={{ color: '#00ff00' }}>₹5,000</strong> to
                  spend this month after paying his bills. He wants to buy:
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: '0.5rem 0 0 0',
                  margin: 0
                }}>
                  <li style={{ padding: '0.4rem 0', color: '#e8e8e8', fontSize: '1rem' }}>
                    🥾 <strong>New shoes:</strong> <span style={{ color: '#ff6b6b' }}>₹2,500</span>
                  </li>
                  <li style={{ padding: '0.4rem 0', color: '#e8e8e8', fontSize: '1rem' }}>
                    🍽️ <strong>Dinner at restaurant:</strong> <span style={{ color: '#ff6b6b' }}>₹1,500</span>
                  </li>
                  <li style={{ padding: '0.4rem 0', color: '#e8e8e8', fontSize: '1rem' }}>
                    📚 <strong>A book:</strong> <span style={{ color: '#ff6b6b' }}>₹500</span>
                  </li>
                  <li style={{ padding: '0.4rem 0', color: '#e8e8e8', fontSize: '1rem' }}>
                    🎬 <strong>Movie ticket:</strong> <span style={{ color: '#ff6b6b' }}>₹300</span>
                  </li>
                  <li style={{ padding: '0.4rem 0', color: '#e8e8e8', fontSize: '1rem' }}>
                    💰 <strong>Savings goal:</strong> <span style={{ color: '#ffaa00' }}>₹1,200</span>
                  </li>
                </ul>
              </div>

              {/* Analysis Box */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                padding: '1.5rem',
                borderLeft: '5px solid #00c8ff'
              }}>
                <div style={{
                  display: 'inline-block',
                  background: 'rgba(0, 200, 255, 0.2)',
                  color: '#00c8ff',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '15px',
                  fontWeight: 'bold',
                  fontSize: '0.85rem',
                  marginBottom: '1rem',
                  border: '1px solid rgba(0, 200, 255, 0.5)'
                }}>
                  CONSUMER BEHAVIOR IN ACTION
                </div>
                <p style={{
                  margin: '0 0 1rem 0',
                  color: '#e8e8e8',
                  lineHeight: '1.7',
                  fontSize: '1rem'
                }}>
                  As a consumer, Rahul must make choices because his wants (total <strong style={{ color: '#ff6b6b' }}>₹4,800</strong>)
                  plus savings (<strong style={{ color: '#ffaa00' }}>₹1,200</strong>) exceed his budget of
                  <strong style={{ color: '#00ff00' }}> ₹5,000</strong>.
                </p>
                <div style={{
                  background: 'rgba(0, 200, 255, 0.15)',
                  padding: '1rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(0, 200, 255, 0.3)'
                }}>
                  <p style={{ margin: '0 0 0.5rem 0', color: '#00c8ff', fontWeight: 'bold' }}>
                    Rahul's Decision:
                  </p>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    <li style={{ padding: '0.3rem 0', color: '#00ff00' }}>
                      ✅ Buy the shoes (need)
                    </li>
                    <li style={{ padding: '0.3rem 0', color: '#ff6b6b' }}>
                      ❌ Skip the dinner (want)
                    </li>
                    <li style={{ padding: '0.3rem 0', color: '#00ff00' }}>
                      ✅ Buy the book (moderate need)
                    </li>
                    <li style={{ padding: '0.3rem 0', color: '#00ff00' }}>
                      ✅ Watch the movie (entertainment)
                    </li>
                    <li style={{ padding: '0.3rem 0', color: '#ffd700' }}>
                      💾 Save the rest (₹1,200)
                    </li>
                  </ul>
                </div>
                <p style={{
                  margin: '1rem 0 0 0',
                  color: '#e8e8e8',
                  lineHeight: '1.7',
                  fontSize: '0.95rem',
                  fontStyle: 'italic'
                }}>
                  This decision-making process reflects <strong style={{ color: '#00c8ff' }}>consumer behavior</strong> - balancing
                  needs, wants, and savings within a limited budget.
                </p>
              </div>
            </div>
          </div>

          <div className="highlight-card gold">
            <div className="highlight-icon"><FaUser /></div>
            <div className="highlight-content">
              <h3>Consumer vs Producer: Key Differences</h3>
              <div className="two-column">
                <div className="column">
                  <h4><FaShoppingCart /> Consumer</h4>
                  <ul className="bullet-list">
                    <li><strong>Purpose:</strong> Buys goods for personal use and satisfaction</li>
                    <li><strong>Goal:</strong> Maximize utility (satisfaction) from consumption</li>
                    <li><strong>Activity:</strong> Final user of goods and services</li>
                    <li><strong>Example:</strong> You buying a pizza to eat for dinner</li>
                    <li><strong>Economic Role:</strong> Drives demand in the market</li>
                  </ul>
                </div>
                <div className="column">
                  <h4><FaIndustry /> Producer</h4>
                  <ul className="bullet-list">
                    <li><strong>Purpose:</strong> Creates/supplies goods for sale in market</li>
                    <li><strong>Goal:</strong> Maximize profit from production and sales</li>
                    <li><strong>Activity:</strong> Transforms inputs into outputs (goods/services)</li>
                    <li><strong>Example:</strong> Pizza shop owner making pizzas to sell</li>
                    <li><strong>Economic Role:</strong> Provides supply in the market</li>
                  </ul>
                </div>
              </div>
              <p className="note-text">
                <strong>Note:</strong> The same person can be both! A baker is a consumer when buying
                flour for home cooking, but a producer when buying flour for their bakery business.
              </p>
            </div>
          </div>

          <h3 className="highlight-cyan">Types of Consumers</h3>
          <div className="two-column">
            <div className="reason-card">
              <h4>1. Direct Consumers (Final Consumers)</h4>
              <p>
                Individuals who consume goods directly for personal satisfaction without any further
                processing or transformation. These are the ultimate end-users.
              </p>
              <p className="note-text">
                <strong>Examples:</strong>
              </p>
              <ul className="bullet-list">
                <li>A family eating rice and dal for dinner</li>
                <li>A student wearing school uniform</li>
                <li>A person watching a movie in a theatre</li>
                <li>A patient consuming medicine for treatment</li>
                <li>A commuter riding a bus to work</li>
              </ul>
            </div>
            <div className="reason-card">
              <h4>2. Indirect Consumers (Producers)</h4>
              <p>
                Businesses or producers who use goods as raw materials or inputs to produce other
                goods and services for sale. They "consume" inputs in the production process.
              </p>
              <p className="note-text">
                <strong>Examples:</strong>
              </p>
              <ul className="bullet-list">
                <li>A bakery using flour, sugar, and eggs to make cakes</li>
                <li>A textile mill using cotton to produce fabric</li>
                <li>A restaurant using vegetables and spices to cook meals</li>
                <li>A furniture maker using wood to craft tables</li>
                <li>A power plant using coal to generate electricity</li>
              </ul>
            </div>
          </div>

          {/* Consumer Behavior Introduction */}
          <h3 className="highlight-gold">Understanding Consumer Behavior</h3>
          <p>
            Consumer behavior is the study of how individuals make decisions to spend their limited
            resources (time, money, effort) on consumption-related items. It analyzes what consumers
            buy, why they buy it, when they buy it, where they buy it, how often they buy it, and
            how frequently they use it.
          </p>
          <div className="note-text">
            <h4><strong>Factors Influencing Consumer Behavior:</strong></h4>
            <ul className="bullet-list">
              <li><strong>Price of the Good:</strong> Higher prices generally reduce demand, lower
                prices increase it. Example: During sale seasons, consumers buy more clothes.</li>
              <li><strong>Income Level:</strong> Rich consumers can afford luxury goods, while
                middle-income consumers focus on necessities and some comforts.</li>
              <li><strong>Tastes and Preferences:</strong> Personal likes and dislikes shape choices.
                A vegetarian won't buy meat products regardless of price.</li>
              <li><strong>Prices of Related Goods:</strong> If tea prices rise, consumers might switch
                to coffee (substitute). If car prices fall, demand for petrol rises (complement).</li>
              <li><strong>Future Expectations:</strong> If consumers expect prices to rise next month,
                they buy more today. If expecting income increase, they might borrow and spend now.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Additional Content - Role of Consumers */}
      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="highlight-green">Role of Consumers in the Economy</h3>
          <p>
            Consumers play a vital role in the functioning of any economy. Their spending decisions
            drive production, create jobs, and shape market trends. Understanding the role of consumers
            helps us appreciate how individual choices collectively impact the entire economic system.
          </p>

          <div className="role-grid">
            <div className="reason-card">
              <h4>1. Driving Demand</h4>
              <p>
                Consumer purchases create demand for goods and services, which signals producers what
                to manufacture. High demand for smartphones leads to more smartphone production.
              </p>
            </div>
            <div className="reason-card">
              <h4>2. Allocating Resources</h4>
              <p>
                Through their choices, consumers determine how society's resources are used. Preference
                for electric vehicles shifts resources from petrol car production to EV manufacturing.
              </p>
            </div>
            <div className="reason-card">
              <h4>3. Creating Employment</h4>
              <p>
                Consumer spending creates jobs across industries. When you buy a shirt, you support
                jobs for cotton farmers, textile workers, retail staff, and delivery personnel.
              </p>
            </div>
            <div className="reason-card">
              <h4>4. Economic Growth</h4>
              <p>
                Consumer expenditure is the largest component of GDP in most economies. In India,
                household consumption accounts for about 55-60% of GDP, driving economic growth.
              </p>
            </div>
            <div className="reason-card">
              <h4>5. Influencing Prices</h4>
              <p>
                Collective consumer behavior affects market prices. When many consumers demand organic
                food, prices adjust based on supply and demand dynamics.
              </p>
            </div>
            <div className="reason-card">
              <h4>6. Innovation Catalyst</h4>
              <p>
                Consumer needs and preferences drive innovation. Demand for faster internet led to
                5G technology, demand for convenience led to e-commerce platforms like Amazon and Flipkart.
              </p>
            </div>
          </div>

          <h3 className="highlight-cyan">Consumer Rights in India</h3>
          <p>
            The Consumer Protection Act, 2019 provides several fundamental rights to protect consumers
            from exploitation and ensure fair treatment in the marketplace.
          </p>

          <div className="assumptions-list">
            <div className="assumption-item">
              <span className="assumption-number">1</span>
              <div className="assumption-content">
                <h4>Right to Safety</h4>
                <p>Protection against goods and services that are hazardous to life and health.
                  Example: Food products must meet safety standards; electrical appliances must be ISI certified.</p>
              </div>
            </div>
            <div className="assumption-item">
              <span className="assumption-number">2</span>
              <div className="assumption-content">
                <h4>Right to Information</h4>
                <p>Access to complete information about quality, quantity, price, and standards of goods.
                  Example: Packaged foods must display ingredients, manufacturing date, and expiry date.</p>
              </div>
            </div>
            <div className="assumption-item">
              <span className="assumption-number">3</span>
              <div className="assumption-content">
                <h4>Right to Choose</h4>
                <p>Freedom to select from a variety of products at competitive prices without monopolistic practices.
                  Example: You can choose between different mobile brands and telecom operators.</p>
              </div>
            </div>
            <div className="assumption-item">
              <span className="assumption-number">4</span>
              <div className="assumption-content">
                <h4>Right to be Heard</h4>
                <p>Opportunity to voice complaints and be heard in consumer forums and courts.
                  Example: Filing complaints in consumer courts against defective products or poor service.</p>
              </div>
            </div>
            <div className="assumption-item">
              <span className="assumption-number">5</span>
              <div className="assumption-content">
                <h4>Right to Seek Redressal</h4>
                <p>Fair settlement of genuine grievances through consumer courts and mechanisms.
                  Example: Getting refund or replacement for defective products within warranty period.</p>
              </div>
            </div>
            <div className="assumption-item">
              <span className="assumption-number">6</span>
              <div className="assumption-content">
                <h4>Right to Consumer Education</h4>
                <p>Access to knowledge and skills needed to make informed consumer decisions.
                  Example: Government awareness campaigns about consumer rights, reading product labels carefully.</p>
              </div>
            </div>
          </div>

          <div className="highlight-card gold">
            <div className="highlight-icon"><FaUser /></div>
            <div className="highlight-content">
              <h3>Practice Exercise: Identify the Consumer</h3>
              <p>Determine whether the person is acting as a consumer or not in these scenarios:</p>
              <ul className="bullet-list">
                <li><strong>Scenario 1:</strong> Priya buys 5kg of rice from a grocery store for her family.
                  <br /><em>Answer: Yes, consumer (buying for personal consumption)</em></li>
                <li><strong>Scenario 2:</strong> A restaurant owner buys 100kg of rice from a wholesaler.
                  <br /><em>Answer: No, not a consumer (buying for business/resale purpose)</em></li>
                <li><strong>Scenario 3:</strong> Amit downloads a paid app on his smartphone for entertainment.
                  <br /><em>Answer: Yes, consumer (buying service for personal use)</em></li>
                <li><strong>Scenario 4:</strong> A school purchases 500 textbooks for students.
                  <br /><em>Answer: Debatable - school is end-user but buying for students, considered consumer</em></li>
                <li><strong>Scenario 5:</strong> A shopkeeper buys cold drinks to sell in their shop.
                  <br /><em>Answer: No, not a consumer (buying for resale)</em></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="section-navigation">
        <div className="nav-hint">
          <FaArrowRight /> Next: Concept of Utility
        </div>
      </div>
    </section>
  );
}

export default WhoIsConsumer;

/*
 * FUTURE IMPROVEMENTS:
 * - Add real-world examples of consumers
 * - Add video explanation
 * - Add quiz questions
 * - Add consumer decision-making flowchart
 */
