import com.codeborne.selenide.Configuration;
import com.codeborne.selenide.Selenide;
import org.junit.Test;
import org.openqa.selenium.By;

import static com.codeborne.selenide.Selenide.*;

public class TestAleshkin {

    @Test
    public void TestRegistration(){
        open("https://mokryinos.ru/");
        $x("//a[@data-touch='0']").click();
        $x("//a[@href='/site/sign-up']").click();
        $x("//*[@id='signuprecoveryform-name']").setValue("rytjddhf");
        $x("//*[@id='signuprecoveryform-phone']").setValue("9999191999");
        $x("//*[@id='signuprecoveryform-email']").setValue("asd@mail.ru");
        $x("//*[@id='signuprecoveryform-password']").setValue("12345678");
        $x("//*[@id='signuprecoveryform-passwordconfirm']").setValue("12345678");
        $x("//button[contains(@class, 'btn--lg-mob')]").click();
        String pngFileName = Selenide.screenshot("TestRegistration");
        sleep(3000);
    }


    @Test
    public void TestAuth(){
        open("https://mokryinos.ru/");
        $x("//a[@data-touch='0']").click();
        $x("//*[@id='loginform-phone']").setValue("9523464030");
        $x("//*[@id='loginform-password']").setValue("123321St").pressEnter();
        String pngFileName = Selenide.screenshot("TestAuth");
        sleep(10000);
    }

    @Test
    public void TestBuying(){
        open("https://mokryinos.ru/");
        $x("/html/body/div[3]/div/section[2]/div/div/ul/div/div/div[5]/div/li/div/div[2]/a/picture/img").click();
        $x("//button[contains(@class, 'add')]").click();
        $x("//span[@class='basket-link__icon']").click();
        String pngFileName = Selenide.screenshot("TestBuying");
        sleep(3000);
    }

    @Test
    public void TestSearchBying(){
        open("https://mokryinos.ru/");
        $x("//*[@id='top-search-field']").setValue("Winner").pressEnter();
        $x("/html/body/div[3]/div/div/div[3]/div/div/div/div/ul/li[1]/div/div[2]/a/picture/img").click();
        $x("//button[contains(@class, 'add')]").click();
        String pngFileName = Selenide.screenshot("TestSearchBying");
        sleep(3000);
    }

    @Test
    public void TestReceive(){
        open("https://mokryinos.ru/");
        $x("//input[@type='email']").setValue("sdf@mail.ru");
        $x("//button[contains(@class, 'js-seo')]").click();
        String pngFileName = Selenide.screenshot("TestReceive");
        sleep(3000);
    }

    @Test
    public void TestResponse(){
        open("https://mokryinos.ru/");
        $x("/html/body/div[3]/header/div[1]/div/div[1]/nav/ul/li[2]/a").click();
        $x("//a[@href='/otzyvy/13-y-bronnyy-109-2']").click();
        open("https://novosibirsk.flamp.ru/addreview/70000001035100770?utm_source=widget&utm_medium=post_review&utm_campaign=responsive_widget&utm_content=flamp4");
        $x("//textarea").setValue("ываываываываыв аываываываываываыва аывааывааыва ываывааываывааывааываываыва ываывааываываываыва ываываыва");
        $x("//div[contains(@class, 'inputs-rating__value--4')]").click();
        $x("//cat-elements-button[@with-loader='true']").click();
        String pngFileName = Selenide.screenshot("TestResponse");
        sleep(3000);
    }

    @Test
    public void TestFranchise(){
        open("https://mokryinos.ru/");
        $x("/html/body/div[3]/header/div[1]/div/div[1]/nav/ul/li[4]/a").click();
        Selenide.switchTo().window(1);
        $x("//a[@href='#rec460836090']").click();
        $x("//*[@id='input_1495722502842']").setValue("Новосибирск");
        $x("//*[@id='input_1663478621399']").setValue("sdf@mail.ru");
        $x("//*[@id='input_1495722666746']").setValue("ало");
        $x("//*[@id='input_1495722692748']").setValue("89999999999");
        $x("//*[@id='input_1663478661732']").setValue("ываыва");
        $x("//button[contains(@style, 'color:#ffffff;background-color:#303030;border-radius:30px;')]").click();
        String pngFileName = Selenide.screenshot("TestFranchise");
        sleep(3000);
    }

    @Test
    public void TestLocality(){
        open("https://mokryinos.ru/");
        $x("//span[@itemprop='addressLocality']").click();
        $x("//*[@id='city-search']").setValue("Екатеринбург");
        $x("/html/body/div[4]/div[2]/div/div[4]/ul/li[8]/a/span[1]").click();
        String pngFileName = Selenide.screenshot("TestLocality");
        sleep(3000);
    }

    @Test
    public void TestAvailability(){
        open("https://mokryinos.ru/");
        $x("/html/body/div[3]/header/div[2]/div/div/ul/li[3]/a").click();
        $x("/html/body/div[3]/div/div/div[3]/div/div/div[1]/div/ul/li[2]/div/div[2]/a/picture/img").click();
        $x("//a[@href='/shop/map/product/']").click();
        $x("//div[contains(@class, 'opened')]").click();
        String pngFileName = Selenide.screenshot("TestAvailability");
        sleep(3000);
    }

    @Test
    public void TestSales(){
        open("https://mokryinos.ru/");
        $x("/html/body/div[3]/header/div[2]/div/div/ul/li[6]/a").click();
        $x("//img[contains(@src, 'dd')]").click();
        $x("/html/body/div[3]/div/div/div[2]/div/div[2]/div/div/ul/li[1]/div/div[3]/a/picture/img").click();
        $x("//button[contains(@class, 'add')]").click();
        $x("//span[@class='basket-link__text']").click();
        String pngFileName = Selenide.screenshot("TestSales");
        sleep(3000);
    }

    @Test
    public void TestBuyBigAmount(){
        open("https://mokryinos.ru/");
        $x("/html/body/div[3]/header/div[2]/div/div/ul/li[6]/a").click();
        $x("//img[contains(@src, 'dd')]").click();
        $x("/html/body/div[3]/div/div/div[2]/div/div[2]/div/div/ul/li[1]/div/div[3]/a/picture/img").click();
        $x("//*[@id='counter-plus']").click();
        $x("//*[@id='counter-plus']").click();
        $x("//*[@id='counter-plus']").click();
        $x("//button[contains(@class, 'add')]").click();
        $x("//span[@class='basket-link__text']").click();
        String pngFileName = Selenide.screenshot("TestBuyBigAmount");
        sleep(3000);
    }

    @Test
    public void TestDiscuss(){
        open("https://mokryinos.ru/");
        $x("//div[@data-b24-crm-button-icon='openline']").click();
        $x("//textarea").setValue("sdasd").pressEnter();
        $x("//button[contains(@class, 'bx-livechat-btn-success')]").click();
        $x("/html/body/div[1]/div/div/div[5]/div/div/div/div/div/div/div[1]/div[5]/div/div[1]/div/div/div/div[2]/form/div[1]/div[1]/div/div/div/input").setValue("sdfsdfsdf");
        $x("/html/body/div[1]/div/div/div[5]/div/div/div/div/div/div/div[1]/div[5]/div/div[1]/div/div/div/div[2]/form/div[1]/div[2]/div/div/div/input").setValue("sdfsdf");
        $x("/html/body/div[1]/div/div/div[5]/div/div/div/div/div/div/div[1]/div[5]/div/div[1]/div/div/div/div[2]/form/div[1]/div[3]/div/div/div/input").setValue("89999999999");
        $x("/html/body/div[1]/div/div/div[5]/div/div/div/div/div/div/div[1]/div[5]/div/div[1]/div/div/div/div[2]/form/div[1]/div[4]/div/div/div/input").setValue("asdasdasd");
        String pngFileName = Selenide.screenshot("TestDiscuss");
        sleep(3000);
    }

    @Test
    public void TestJob(){
        open("https://mokryinos.ru/");
        $x("/html/body/div[3]/footer/div/div[1]/div[2]/div[2]/ul/li[7]/a").click();
        $x("//a[@data-seo-event-ya='hhru']").click();
        Selenide.switchTo().window(1);
        sleep(3000);
    }

    @Test
    public void TestBuyFromBasket(){
        open("https://mokryinos.ru/");
        $x("//span[@class='basket-link__text']").click();
        $x("/html/body/div[3]/div/div/div[4]/div/div[2]/div/div[5]/div/div[3]/div[2]/button").click();
        String pngFileName = Selenide.screenshot("TestBuyFromBasket");
        sleep(3000);
    }

    @Test
    public void TestOrder(){
        open("https://mokryinos.ru/");
        $x("/html/body/div[3]/div/section[2]/div/div/ul/div/div/div[5]/div/li/div/div[2]/a/picture/img").click();
        $x("//button[contains(@class, 'add')]").click();
        $x("//span[@class='basket-link__icon']").click();
        $x("//*[@id='create-order']").click();
        $x("//*[@id='orderform-recipientname']").setValue("sdf");
        $x("//*[@id='orderform-recipientlastname']").setValue("sdf");
        $x("//*[@id='orderform-recipientphone']").setValue("9999999999");
        $x("//*[@id='orderform-recipientemail']").setValue("sdf@mail.ru");
        $x("/html/body/div[3]/div/div/div[2]/form/div/div[2]/div[1]/div[1]/div/div[2]/div[2]/button").click();
        $x("//label[@for='deliveryType2']").click();
        $x("//*[@id='orderformdeliveryinfo-street']").setValue("sdfs");
        $x("//*[@id='orderformdeliveryinfo-house']").setValue("sdfs");
        $x("//button[@data-step='#step3']").click();
        $x("//label[@for='paymentType-cash']").click();
        $x("//button[contains(@class, 'btn--lg')]").click();
        String pngFileName = Selenide.screenshot("TestOrder");
        sleep(3000);
    }

    @Test
    public void TestDelivery(){
        open("https://mokryinos.ru/");
        $x("/html/body/div[3]/header/div[1]/div/div[1]/nav/ul/li[1]/a").click();
        $x("/html/body/div[3]/div/div/div[2]/div/div[4]/div/h2[3]").exists();
        String pngFileName = Selenide.screenshot("TestDelivery");
        sleep(3000);
    }

    @Test
    public void TestInstall(){
        open("https://mokryinos.ru/");
        $x("//a[contains(@href, 'huawei')]").click();
        Selenide.switchTo().window(1);
        $x("//a[@class='right_install_text']").click();
        String pngFileName = Selenide.screenshot("TestInstall");
        sleep(3000);
    }

    @Test
    public void TestPrivacyAndAgree(){
        open("https://mokryinos.ru/");
        $x("//a[@href='/privacy-policy']").click();
        $x("//a[@itemprop='name']").click();
        $x("//a[@href='/user-agreement']").click();
        String pngFileName = Selenide.screenshot("TestPrivacyAndAgree");
        sleep(3000);
    }

    @Test
    public void TestInfoBuy(){
        open("https://mokryinos.ru/");
        $x("//a[@href='/articles']").click();
        $x("//img[contains(@alt, 'себе')]").click();
        $x("//a[@href='#kak_uh']").click();
        $x("//a[contains(@href, 'korotkoy')]").click();
        $x("//button[contains(@class, 'add')]").click();
        String pngFileName = Selenide.screenshot("TestInfoBuy");
        sleep(3000);
    }
    @Test
    public void TestPrices(){
        open("https://mokryinos.ru/");
        $x("/html/body/div[3]/footer/div/div[1]/div[2]/div[2]/ul/li[5]/a").click();
        $x("//img[contains(@alt, 'система')]").click();
        $x("/html/body/div[3]/div/div/div[2]/div/div/div/div/div/p[7]/a/u").click();
        String pngFileName = Selenide.screenshot("TestPrices");
        sleep(3000);
    }
}
