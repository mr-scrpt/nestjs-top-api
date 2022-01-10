import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
	@Post('singup')
	async singUp(@Body() dto: AuthDto) {}

	@HttpCode(200)
	@Post('singin')
	async singIn(@Body() dto: AuthDto) {}
}
