import { render, screen } from "@testing-library/react";
import user from '@testing-library/user-event'
import App from "./app";

it("App renders without crashing", async () => {
  render(<App />);

  expect(screen.getByText("Recommended streams")).toBeInTheDocument();
});

it("As a user I can pick a stream to see the details", async () => {
  render(<App />);

  
  user.click(screen.getByText(/MYSTERY STREAM: Max & Simmons/))
  expect(await screen.findByLabelText('Show chat')).toBeInTheDocument()
});

it("As a user I can click on show chat and see side menu with chat and donation options", async () => {
  const { asFragment } = render(<App />);

  
  user.click(screen.getByText(/MYSTERY STREAM: Max & Simmons/))
  user.click(await screen.findByLabelText('Show chat'))

  expect(await screen.findByText('Total donation:')).toBeInTheDocument()

  expect(asFragment()).toMatchInlineSnapshot(`
<DocumentFragment>
  <div
    class="app"
  >
    <div
      class="app-row"
    >
      <div
        class="top-bar"
      >
        <button
          class="back-btn"
        >
          Back
        </button>
        <h1>
          Game streamer
        </h1>
      </div>
    </div>
    <div
      class="divider"
    />
    <div
      class="app-row"
    >
      <div
        class="stream-detail"
      >
        <div
          class="stream-video narrow"
        >
          <img
            alt="MYSTERY STREAM: Max & Simmons Super Show (2-19)"
            src="https://static-cdn.jtvnw.net/previews-ttv/live_user_sfzxx-470x265.jpg"
          />
          <p
            class="streamer"
          >
            Maximilian_DOOD
          </p>
          <h4>
            MYSTERY STREAM: Max & Simmons Super Show (2-19)
          </h4>
          <p
            class="game"
          >
            Virtua Fighter 5: Ultimate Showdown
          </p>
        </div>
        <div
          class="stream-side open"
        >
          <svg
            aria-label="Hide chat"
            class="chat-toggle-btn"
            height="2rem"
            version="1.1"
            viewBox="0 0 20 20"
            width="2rem"
            x="0px"
            y="0px"
          >
            <g>
              <path
                d="M4 16V4H2v12h2zM13 15l-1.5-1.5L14 11H6V9h8l-2.5-2.5L13 5l5 5-5 5z"
              />
            </g>
          </svg>
          <div
            class="StreamDetailSide"
          >
            <form
              class="donation-form"
            >
              <span>
                Total donation:
              </span>
               
              <span
                class="amount"
              >
                $124.00
              </span>
              <div
                class="amount-input-field"
              >
                <input
                  placeholder="Enter amount"
                  type="number"
                  value="0"
                />
                <span>
                  USD
                </span>
                <button
                  type="button"
                >
                  Donate
                </button>
              </div>
            </form>
            <h3>
              Stream chat
            </h3>
            <div
              class="chat-messages-container"
            >
              <p
                class="chat-message-item"
              >
                <span
                  class="user-name"
                >
                  Nachintos
                </span>
                <span
                  class="message-content"
                >
                  : Chem do be Jealous
                </span>
              </p>
              <p
                class="chat-message-item"
              >
                <span
                  class="user-name"
                >
                  Gladgeronnjaywho
                </span>
                <span
                  class="message-content"
                >
                  : roll with it. he needs prio
                </span>
              </p>
              <p
                class="chat-message-item"
              >
                <span
                  class="user-name"
                >
                  brobe420
                </span>
                <span
                  class="message-content"
                >
                  : relax ray just have
                </span>
              </p>
              <p
                class="chat-message-item"
              >
                <span
                  class="user-name"
                >
                  funAsheeshl
                </span>
                <span
                  class="message-content"
                >
                  : @grey_syed1 he cooked himself a scuffed
                </span>
              </p>
              <p
                class="chat-message-item"
              >
                <span
                  class="user-name"
                >
                  burgerAsheeshl
                </span>
                <span
                  class="message-content"
                >
                  : on
                </span>
              </p>
              <p
                class="chat-message-item"
              >
                <span
                  class="user-name"
                >
                  streamThatSaltyBoii
                </span>
                <span
                  class="message-content"
                >
                  : is chat being shits
                </span>
              </p>
              <p
                class="chat-message-item"
              >
                <span
                  class="user-name"
                >
                  danram23
                </span>
                <span
                  class="message-content"
                >
                  : He started acting like that when you guys lost the
                </span>
              </p>
              <p
                class="chat-message-item"
              >
                <span
                  class="user-name"
                >
                  labuso_989
                </span>
                <span
                  class="message-content"
                >
                  : chat
                </span>
              </p>
              <p
                class="chat-message-item"
              >
                <span
                  class="user-name"
                >
                  puni____
                </span>
                <span
                  class="message-content"
                >
                  : chat. read the
                </span>
              </p>
              <p
                class="chat-message-item"
              >
                <span
                  class="user-name"
                >
                  roombabyhfox
                </span>
                <span
                  class="message-content"
                >
                  :  
                </span>
              </p>
              <p
                class="chat-message-item"
              >
                <span
                  class="user-name"
                >
                  SunflowerJessie
                </span>
                <span
                  class="message-content"
                >
                  : chat i swear if y’all don’t
                </span>
              </p>
              <p
                class="chat-message-item"
              >
                <span
                  class="user-name"
                >
                  stfuAsheeshl
                </span>
                <span
                  class="message-content"
                >
                  : chat don't tell him what to
                </span>
              </p>
              <p
                class="chat-message-item"
              >
                <span
                  class="user-name"
                >
                  doThatSaltyBoii
                </span>
                <span
                  class="message-content"
                >
                  : chat behave urself
                </span>
              </p>
              <p
                class="chat-message-item"
              >
                <span
                  class="user-name"
                >
                  Madgeyuvraj2000x
                </span>
                <span
                  class="message-content"
                >
                  : @danram23
                </span>
              </p>
              <p
                class="chat-message-item"
              >
                <span
                  class="user-name"
                >
                  KEKWCreeDx__
                </span>
                <span
                  class="message-content"
                >
                  : kek
                </span>
              </p>
              <p
                class="chat-message-item"
              >
                <span
                  class="user-name"
                >
                  smhgrey_syed1
                </span>
                <span
                  class="message-content"
                >
                  : chat be like " just be happy ray  
                </span>
              </p>
              <p
                class="chat-message-item"
              >
                <span
                  class="user-name"
                >
                  Asheeshl
                </span>
                <span
                  class="message-content"
                >
                  : read the room or
                </span>
              </p>
              <p
                class="chat-message-item"
              >
                <span
                  class="user-name"
                >
                  atomic0044
                </span>
                <span
                  class="message-content"
                >
                  :  shut
                </span>
              </p>
              <p
                class="chat-message-item"
                id="last-message"
              >
                <span
                  class="user-name"
                >
                  chatinaudiblecone
                </span>
                <span
                  class="message-content"
                >
                  : chat, you cant just say relax StareReplying to 
                </span>
              </p>
            </div>
            <form
              class="new-message-form"
            >
              <input
                class="send-message-input"
                placeholder="Your message"
                type="text"
                value=""
              />
              <button
                disabled=""
              >
                Send
              </button>
              <span
                class="emoji-btn"
              >
                😃
              </span>
              <div
                class="emoji-picker"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</DocumentFragment>
`)

});

it("As a user I can send a new message and make a donation", async () => {
  const { asFragment } = render(<App />);

  user.click(screen.getByText(/MYSTERY STREAM: Max & Simmons/))
  
  user.click(await screen.findByLabelText('Show chat'))
  expect(await screen.findByText('Donate')).toBeInTheDocument()
  
  await user.type(screen.getByPlaceholderText('Enter amount'), '15')
  await user.click(await screen.findByText('Donate'))
  expect(await screen.findByText('$139.00'))
  
  
  await user.type(screen.getByPlaceholderText('Your message'), 'Hello everyone!')
  await user.click(await screen.findByText('Send'))
  expect(await screen.findByText(': Hello everyone!'))
});
