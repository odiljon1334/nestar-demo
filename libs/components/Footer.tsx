import { Box, Stack } from "@mui/material"
import  FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";


const Footer = () => {
  return (
    <Stack className={"footer-container"}>
    <Stack className={"main"}>
      <Stack className={"left"}>
        <Box component={"div"} className={"footer-box"}>
          <img src="/img/logo/logoWhite.svg" alt="" />
        </Box>
        <Box component={"div"} className={"footer-box"}>
          <span>total free customer care</span>
          <p>+99895 577-54-54</p>
        </Box>
        <Box component={"div"} className={"footer-box"}>
          <span>nee live</span>
          <p>+99895 577-54-54</p>
					<span>Support?</span>
        </Box>
				<Box component={"div"} className={"footer-box"}>
					<p>follow us on social media</p>
					<div className={"media-box"}>
						<FacebookOutlinedIcon />
						<TelegramIcon />
						<InstagramIcon />
						<TwitterIcon />
					</div>
				</Box>
      </Stack>
			<Stack className={"right"}>
				<Box component={"div"} className={"top"}>
					<strong>keep your self up to date</strong>
					<div>
						<input type="text" placeholder={"Your Email"} />
						<span>Subscribe</span>
					</div>
				</Box>
				<Box component={"div"} className={"bottom"}>
					<div>
						<strong>Popular search</strong>
						<span>Property for rent</span>
						<span>Property Low to hide</span>
					</div>
					<div>
						<strong>Quick Links</strong>
						<span>Terms of use</span>
						<span>Privacy Policy</span>
						<span>Pricing Plans</span>
						<span>Our Services</span>
						<span>Contact Support</span>
						<span>FAQs</span>
					</div>
					<div>
						<strong>Discover</strong>
						<span>Seoul</span>
						<span>Gyongido</span>
						<span>Busan</span>
						<span>Jejudo</span>
					</div>
				</Box>
			</Stack>
    </Stack>
		<Stack className={"second"}>
			<span> © Nestar - All rights reserved. Nestar 2024</span>
			<span>Privacy · Terms · Sitemap</span>
		</Stack>
  	</Stack>
  )
}

export default Footer;