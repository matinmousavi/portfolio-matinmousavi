import Paragraph from '../components/Paragraph'
import SectionTitle from '../components/SectionTitle'

const AboutMe = () => {
	return (
		<div className='flex items-center justify-between'>
			<div className='w-1/2 flex items-center justify-center'>
				<img className='size-full' src='/images/person-4.png' alt='matinmousavi photo' />
			</div>
			<div className='w-6/12'>
				<SectionTitle title='درباره من' />
				<Paragraph className='my-5'>
					برنامه‌نویس فرانت‌اند با ۴ سال تجربه در طراحی و توسعه رابط‌های کاربری پویا و واکنش‌گرا. عاشق تبدیل ایده‌ها به کدهای تمیز و کارآمد هستم و
					همیشه به دنبال یادگیری تکنولوژی‌های جدید برای ارتقای کیفیت محصول نهایی. با ترکیب خلاقیت و منطق، هدفم ساخت تجربه‌های کاربری روان و جذاب است.
					آماده همکاری در تیم‌های پویا و پروژه‌های نوآورانه هستم!
				</Paragraph>
			</div>
		</div>
	)
}

export default AboutMe
