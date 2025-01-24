import { GradientText, HeroAvatar, HeroSocial, Section } from 'astro-boilerplate-components'

const Profile = () => (
	<Section>
		<HeroAvatar
			title={
				<>
					<GradientText>St</GradientText>one's L<GradientText>og</GradientText> → <GradientText>Stog</GradientText>
				</>
			}
			description={
				<>
					만나서 반갑습니다. 호기심 많은 개발자 이현석입니다.
					<br />
					우선순위를 바탕으로 함께 소통하며 협업하는 것을 중요하게 생각합니다.
				</>
			}
			avatar={<img className="h-80 w-64" src="/assets/images/stone-profile.jpeg" alt="Avatar image" loading="lazy" />}
			socialButtons={
				<>
					<a href="https://github.com/Hyunstone" target="_blank">
						<HeroSocial src="/assets/images/github-icon.png" alt="Github icon" />
					</a>
					<a href="https://www.linkedin.com/in/hyunseok-lee-b994b2298" target="_blank">
						<HeroSocial src="/assets/images/linkedin-icon.png" alt="Linkedin icon" />
					</a>
					<a href="https://instagram.com/hyunsseekkk" target="_blank">
						<HeroSocial src="/assets/images/instagram-icon.png" alt="Instagram icon" />
					</a>
				</>
			}
		/>
	</Section>
)

export { Profile }
