import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { StripeModule } from '@app/payment';
import { PaypalModule } from '../../libs/payment/src/modules/paypal/paypal.module';
import { AuthModule } from './auth/auth.module';
import { UploadModule } from './upload/upload.module';
import { DonateModule } from './donate/donate.module';
import { StoryModule } from './story/story.module';
import { OrgModule } from './org/org.module';
import { CurrencyModule } from './currency/currency.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    // StripeModule,
    //  PaypalModule,
    UploadModule,
    DonateModule,
    StoryModule,
    OrgModule,
    CurrencyModule,
  ],
  controllers: [],
  providers: [],
})
export class MainModule {}
