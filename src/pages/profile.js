import Navigation from '../components/navigation';
import Footer from '../components/footer';
import Tablist from '../components/tablist';
import Button from '../components/button';
import Avatar from '../images/avatar.jpeg';
import Upsell from '../images/media-upsell.jpeg';
import {ReactComponent as OptionsIcon} from '../images/options.svg';

export default function Profile() {
    return (
        <div className="min-h-screen bg-app-gray-100">
            <Navigation />
            <main className="max-w-[975px] mx-auto pt-[30px] px-[20px] mb-[54px]">
                <header className="flex mb-[44px]">
                    <div className="flex justify-center grow-[1]">
                        <button >
                            <img className="h-[150px] w-[150px] rounded-[50%]" src={Avatar} alt="add a profile picture" />
                        </button>
                    </div>
                    <section className="grow-[2]">
                        <div className="flex items-center mb-[20px]">
                            <h2 className="text-app-gray-3700 text-[28px] leading-[32px] font-light mr-[20px]">joelmee94</h2>
                            <Button>Edit profile</Button>
                            <button className="p-[8px] ml-[5px]">
                                <OptionsIcon />
                            </button>
                        </div>
                        <ul className="flex mb-[20px] text-[16px] leading-[24px]">
                            <li className="mr-[40px]">posts</li>
                            <li className="mr-[40px]">followers</li>
                            <li>following</li>
                        </ul>
                        <div className="text-[16px] leading-[24px] font-semibold">
                            Bio
                        </div>
                    </section>
                </header>
                <Tablist />
                <article className="flex">
                    <img className="h-[380px] w-[380px]" src={Upsell} alt=""/>
                    <div className="flex flex-col grow items-center justify-center bg-white">
                        <h2 className="text-[18px] leading-[18px] font-semibold mb-[10px]">Start capturing and sharing your moments.</h2>
                        <h3 className="text-[16px] leading-[18px]">Get the app to share your first photo or video.</h3>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    )
}