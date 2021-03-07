import React, {Component} from 'react'

import './card-address.css'

export default class CardAddress extends Component {

    state = {

    }

    render(){

        const {address} = this.props

        return(
            <div className="card-address">
                <div className="card-address-left">
                    <span className="card-address-left-label">{address.label}</span>
                    <div className="card-address-left-qr-code">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAXbklEQVR4Xu2d4XocuQpEN+//0LnfONdOvN0tidPAqLMnfy0EFEUJaezJj3/++efnPw/+9/MnC//Hjx+XWY/2HNkRGCt8PR2TF45XOdC6jWpD98zmAuHPXZtXF7AOuus5yf7pZFcAzomgACQ1yGQbBeAEoIqmvKpDha+ni6ITQE/zv7woAArAFwI7jcJOAD0ioAAoAArAJu9BPS3/3YsCoAAoAArAsQvoPbJCxehoSmPJft2l9/wKO/oaTrHcxa4Cy25eUixHcV5OAAoAhTsmppRE1E4BOCJAsaR2ecxa20kBWMNpaRQObvWx/CmnT/bkQ7CqsnlKDSryVwCCqGY3wlPIl513EPbS5U+pQQUICkAQ1exGeAr5svMOwl66/Ck1qABBAQiimt0ITyFfdt5B2EuXP6UGFSAoAEFUsxvhKeTLzjsIe+nyp9SgAoR0AaggSkWBKJj0dTcbF/pJDI2ffkJAazfyR34TkOz3sqF4VdhRztIaoI8Bs4le9VJOwdylsArAsYKUe7RBuu0oZ2mcCsAJ4gpArPEo+ciJrQCco0ZroAAoAEuHTrcoegVYKsvXIgUghtdwdTfZr4LxChCbRMhE4RvAxReCUEWhfUj90SbZ6cFLATgi4AQQ6yTaP14BvAIsMa17KlIAlsriFYBOAJTQdHIgpzyNscKOjtcULyIA9BSkuXXjXBHnf3YCoMWjhFYAYvd5BcAJ4AuB7matmCoUAAXgEwH6UaYTwAkCFc1asacCoAAoAAMJo/e3imat2FMBUAAUAAXggECF8NErEx1NKwTTNwDfAHwDKPiySio49P5JH00VAAXgtgDQE62C7LFy/lpdEX93btnTSMW0QTHJzo1w5NOGCvtf/TFgRQNRApLiVsRPyU7in4kYIS3Fn2JJYnzlTe0oztSfAhBEnBIw6MYJ4OL6Q/FXAM4ZqAAEO5MSMOhGAVAAQpRxAjiBi6p+95h85a8i/u7csu/JVIAplrSxqF2o6/9YTP05AQQRpwQMunECcAIIUUYBcAIIEeZscYW4OQEckabTCJ3eRv7QBHCbacENKIlGbuiepHi0sYivJ71AE0LTugUpt7R8p1go1xWAE+ToOHVVBAVgqZ++Lcr+RaB4BHMLBWCOUcqKCqDpnuRUVgDiNFAA4piRx2QnACeA20zLnphG1xgq3LeTDL4xUdHvjlMBUABuc04BOEKoANym1e8NKlSf7ukVIEZ2gpcTQGLzTP6mxAnACeA225wAYqJ4G/DgBuhjwKCPty2n5Ou06/Q1Oj1fP6uYfDrz6/R1B8u3NUTQ8eUEENznbcufQIgnxHiH7J35dfq6g8nbGiLoWAFIfN29Ol2fQtonxPmEGIM9+NblCoAC8IXAE5rrCTG+taODzhUABUABKPjqtWAfvm25AqAAKAAKwNsE6LbjJ4yET4jxzoNXZ36dvu5gcpvYTRv8+LnTrywlJ539Syg0PBoH9UftKpprFAv9SJLk1+mLxPcuGwXgBPlsTVQAzund2ZSdvt7VzMSvAqAAlL4BOAGQtuyzUQAUAAXg58++jtvMkwKgACgACsBmspQUDr17+wZwLEDFHbpizyvqdPpKom/LNk4ATgBOAE4AMbHpPlmpv1hWa6vpR2Vru+esojFmTz6vbGjtsr8SjMZBK7JTDYYPseT3ACiYlGDUHy3eyI4WtiKWqz1pjLQ+9KWf4ExH+W4O7VQDBSCx+2hhE0OYbkVjVACm0C4v2KkGCsBy2eYLaWHnO+etoDEqAH9nDRSAvLq2/7fPJHQF4IiaV4BzJqFPASiY9ISh/kjzzGxoc832zfw5jZHWxzeAIwI71cAJILG7aGETQ5huRWNUAKbQLi/YqQbpAkAVvwIU+ipMcxjZkY+uyH7LLExcuBPOiWmVbdUtptQfugLQ5lEAYnyjRY15WVutAKzh9LmqonYlNSC/B6AAnCPgBBBrkp3edmKRz1crACcYOQHMifPnigoSxSL4vbrk9Bl8FReNcxe7itqV1MAJ4EgZejI5AcTaj+Ic8/Ke1QqAE8AXApToFSSi7VBy+jgBhMpRUgMnACeAFRaWkE8BWIF+6SChh8XlpwAVpxYlUYVdCPk/FhOgu+Onby0jTJ6yJ6krqenMz079M3y0v5oAdkqgu4FoI1zZdcf/lGatiHPWmGc/VwBOUFEAzqlEyKIAxLGk/FMAYgh4BYjhNfxjICeAGJhOAEe8KCbkYHp5VwBinFUANpgWgyWbLqfNM7xbwwdOBSBIMArYlBUXCwhZvAJ4BVjlG+Uz4aUTwGpV/BSg5HsQKNlB2YYmtHn+sxNAd+Eq/NE9qd0VWeh+O5GWNiTNvRPLiumN5k1rPsoBvQHQBHYhyisOmgO16yQtxbnz5f1ODTqxVABO0M5ughlhK/zRPaldJ2lneF79XAE4IqMAKADfEFAAqLwc7Z6ApQKgACgAeT3/OCwVAAXgcaSl/eoVwCvAFwIVykeJmT0q3nmAyo6F7kdfhCs+utqlrhVYVvRBRZy0ruhTAFrwCruKRqBgXsWy08laUQOaH20E8qBK86a5UX8jO4rX0C77rwErEqegVMRCToRuEu0kirR2BLOKvEkcFbwrm1oVgFi5FIDYPVkBiPGrAi8ngLwaDP+7a68AMaDpSOsVICbCCkCMl8PVTgAx8lWcaApArAYKgAKQiECMfApAHvR0YkICQMOmjyb0AWcnf+QKQItK60P90frQOK/syAT22quCJ3RPKoojOxpL638NtlPilNCEgMTmDmkpzjTO7CanRKfiVoEXxaSCl0M8O78WnAJNCdHtzwmA0n7djooUPSErRKWblwrACQIVSqsArDcyXakAnCNHBc4rQJCJhIDExitAnOgVp3XFnk4ATSdyN9BOAEE1Bcu7xVQBCBaJjiIVI7kCcESAEprWJ0if6XIFID4ZDd8AXt+OdbaAFpwKwLTyFwt2irNzAqCNTEWR1jU7Trof5QnlJcWL+sN1VQDyIFcA8iaOq6ooAHG+DjFTAOKARslZMbbSRsAnRfN/dBHFePZo6gRwcXVQABSATwSeICo0RgVAAfiGQMUdzSuAV4BPBCr4RY8qrwAnyFUUSAFQABQAeFesULfhxx8FcSoACsDjBCD7bwEqmq7i/kYf5kh+FfFTwazIm8aSbUdzo9MgrSuNMxuvj4dTBSB2aikAFTTM2ZM2lgKQg/90l26gSbO+bLKVne43BRQsoE0CXLWb0Ny6eUnjrADUCeAEVdqwV4Wl+5UUfPD2sVOcJHfaWAoAQRvYdAPtBHBEgDYJKHe7Cc2tm5c0zgpAnQCcAL4QcAKItRjFSwGI4Yzv5E4ATgCfCNDfIBxx6D8rADuNTLRAnSq8E15Pb4TOugXPqW/LK+Ks4BG6AlQEQk9rBSDvlN+prtm/VHWnmYmtAtBwt54Vhp52dLS7iucJjfWK/QlxVjTWjEfk5xVxVtTHCSBRqBSAWKuQJiE2sahyVlfEqQAEa+MEcASMYkKvWvRq5xUgdrWj9XECcAL4QqDihFEAYiJM8VIAgo1cMaJ5BYiNaKQGxCYWVc7qijgrBPpyAuhOIPvhLaeMeWPYVTxPH8nv4EwJTbCkcVb0AT3lK7iiAASZ0Ula6ouK6U5kD5blYznNu6IhSfwvG1oDyhUFIFgpCjQ5tagv2giUfEEIb785ECwrYqQ4VwgO5YoCEGQGBZqQlvqixFQAYlc+irMCEHywC/Zo6XLalApArLlIEXdqSBK/VwCKWqOdApAHdieWNOqdpiIfAWkVE+06SUt90ZNwJ7KTktG8K0ZyEv9fMQFUkIg2Ai1Cpx1V9W47igltyquaZ+83y4v6m+3b+fNR/6Q/AioAsdJ2NzL1F8vq92raQAoARTz21qIA5OGMdqIN2W2Hkrvx2bwCQBFXAPKQa9ipu5GpPwqFEwBFLs/OK0Aeluk70YbstqOJKwAUuTw7BSAPy/SduhuZ+qOJKwAUuTw7BSAPy/SdaEN229HEFQCKXJ7dIwSg4tMDCiGNZZePK6k4ULxGdjQWKhzZOdCa0rwpljTvbT4FoE1HEx/Z0VgoWbJzqCAfjZHGogAcEa/ARAE4YbYCQNs9RlqKc150852oqFPhcwI4QaBC+ZwA5uTPWEEbobvmV7kqAMGGpKpO7TJI+u89aCyULNk50KbLjuO1H41FAYhNU7R2XgG8AlDuLNkpAEeY6EFRIYoKgAKw1Mh0kQKgAHwhQBWMKiZ9UKFXANIk1Be1IzG+bKi/7NpRDtE3H8qhnfwNY/l5gWhFwWnxskm00910J5wpaekpT8SIcojmpgA0PQJWFIgWjzYlITT1Re1IjE4A56hRMaIHGvXnBLCBiF0VgTYytVMA3n8nVwCCLKSAOQEEgR4sp4KTXbuSU/DHDwQUjYViQv05ATgBIIL/aaQAHCGkDakABOlIAXMCCALtBBAC7K8QgNcva51l3fmy+/JfAWbFnlRUQsxaWFwhigtuw0u6eRQOcGJQwSGKSUUsr8uPAvAvEtDmogUipKUxEl93bCjZ7/jMtKU1rbgyVcSiAJywhTYXLRAhLI2R+LpjowDE3g6ocAwf+gaPnAqAAnCnv6e2CoACMCWJbwBLEH1b5AQQx4xY0KmOnuTUzgngBIGK4vkIGGsjJwAngCXGVDRrxZ4KwFI5vxYpAArA48hAhSPWGr9WV4x8JI4qm86rCq0brQHNjYpiiV3nx4A0gSpyXu1LiUTipOQjvt5hQ5uExErrRmtAc6N9UGKnAMRGNEJM+kBDCZ0d4539aJMQnxQvBSD4gEaLShWMkOGODSUS8UnJR3y9w4ZyhcRK60ZrQHOjfVBi5wTgBECabdWGNsnq/n+uUwDOURsKhwKgAJBmW7VRAGL8qphGFIBVtv5/HT1Jgm4+ltOCE1/vsFEANheAJ3wnIH1EG9lVNDkhe8W9jjY6FSNqR+PMtqPxk3rPYq/gwyjObb4WfAbM1c9pERSAI6IVjVCBM+UK4RBtSBoj9UftFABaqRM7Ika0cBWNpQDkjeuUVhV8cAI4qUZ3A10RoqLglHwKgALwhcBTyEBO3VeSCoBXgE8EKrhORbjiQHACcAJY4mNFI1QI7VIygUUVeQfcf1uqAASRcwIIAjZYXtEICkCsPu0CcPWLQLGwf6+mBa9o5F0ITXMb1aCCKLTmND+SA7Ghec3sKNdn+5JPKzBXFIC8u3B24XBRB98BV0FaBYC2dMyuBGcFQAGI0TCGV7aIOQHEq4V+FTju5pcFPWFK1A2ehPTq4AQQYw1pZmITi2p9NeX6uofvK0t6xAkgdqKRotPCZZ+edwR6FAvNjzQzsaENN7MjXJjt2Y6zAqAA3CHly1YBuIvgmn0Jzld/DESViCo0VVMKyhrkOasqcuvGOQeJ+yNtd970OkjtKM60Dy7/FkABoKU42ikA51gS0ioAeVh+TG9OAHmNfrWTApBHWgUgD0sFoL73PzwoAHmkVQDysFQAFIAmBPJIqwDkYakANNHfCSCPtApAHpYKgALQhEAeaRWAPCyHAkA/xqB2f8OnDvSkz+5C8rp+562C1m5kd4XlTrlV5J3NhVldH/GVYFRUqB0trAJwRC67YbP3q2i4j5N18GvoVT6v9h1OTU/4VmDayNROAcijKG0EJ4C8GigAJ1jS07pCVPJK/Wun7Ka7E192LNn73cmNHhRVPp0A/oVARbNW7JlNiJ2aJDuW7P2ysf/cj8ZZEY8TgBPAEq/oVFRxEnoFWCrZ0iIFQAG4TZSlDU4W0ZNQAaCIH+2GArDLfw6al+7vnSrGdUpocj+rwKTztN7pPeIJXJjVu+J3IH4oADPYv/9cAQieMPDjsOzriAJwznMFINb/+IXdCSAGtAKQJ7ReAZreAGIU/7U6m+gkhk8bOt3Q0XQUazYuTgBOAN8QoASjTeIEEJMmWp8rLwqAAqAATHqQipsTQEzc6GqKs1cArwBLnFMAlmD6WkTxinn5vbpEAMhXgo0SoKNWN5j0/knzI6PpLjFSwr7sno7XndyzbbOvRR/1UQCOZapQWgUghvMueGU38Z39FIA76AVsFYAAWDfeFQih6aRIa5qHxP2dCF4zr04AwfeBp4+0FSSquBI6AeRMTArADAEFACC0bvJ0wVzPtH5lhXg7ASgApcxVAPLgVQDysBzuRO+LpEDdd1oS4x3YFYA76H23rahd+gSQl+79nbLJ94qI7ElsqK8ZalRwZvte/ZyStjvO7Pg730VmXBnGkv0xICVKhR1tvOzi0TioHY2/ogYKwBHVnerqBBBkPSkesZmp+lMa6ylxOgEEG+EJy2nj0RP0iuw0DmpH46+oqQLgBFDBq6U9uxtIATiWRQFQAJaatWKRAhAjX0UNFIBYDbrx8g0gyHoiKsTGN4DXl1W9/x9tSHoNo/7opyaXXwn2fujXIqj4zD67YbuLOkKO4rVWjdgqikvMy3x1dr1fHinOFZiM8lMATviRTQhaVKrqCsC86f9ckV1vBSCG/63VFUqbTQgF4LzEFJdbhGkQfAUgu0KD/RSAGNgUr5iXtdUKwBGnCky8ApzwkTYCsaNF9QqwJiR3V2VPfE4AdysSsCcNWVWgKyIpAF4BMt4cAm3xbakTgBPAFwJUMCn56INkhb+rPZ0Agg3SWZyXL1ogGme2P7rfTna0kbNz6J6mqL8RXvRqVyHe6L8Go41F7SiJdvFH49/JTgGgbDraKQBBLGkjBN18Lc/2R/fbyU4BoGxSAG4jRxuBOs72R/fbyU4BoGxSAG4jRxuBOs72R/fbyU4BoGxSAG4jRxuBOs72R/fbyU4BoGxSAG4jRxuBOs72R/fbyU4BoGz6CwWAvmJ2k4iWjOZHPjLq9PXCo8IfFapRfa72pB+FUTvKIWpH4yTc++DD6y8Xz4KlgTwlcUK+WW6kCBUN2Z2bAjBjxvrPad8R7ikAF3XpbMpOX04A5wWnNVhv6/WVCsAJVhUnTPcpeeWPkg8r/g/2TTvtxLyIsyIOWoP1tl5fWZHfkOteAXoeaRSA9SYYTSoVDaIAnNSGAh0r8+/V1B89CZ0AYpXqro+PgLGDifaBj4DBK8eobUgR6OlDfPkG4BvAvxH4qwVgl+aizUqnFOqP4hWbJe5NfTQ3iiXNLfugqIjj40D4m98AKKEpycjYSgtb8TBK8aI5kGsFrY0CcDH9KABHYCjJFICYFCgAMbwqVjsBBB9AyUlCBYX4etlQf04AFS2Wd8BURKcAKABfCCgAFS2mACyhSsbB2WlHCZ19gtL9nAB6mofyZInYiQcM9TfkkW8AeSTzDSBGUSL63WIay2htdUUOa56Pq7wCBJEjxat4sQ+GvTTmk9xoHC87cvLSGGkNSIx3MGnPzwkgVi5SIEq+WGRrq58Sy1U2BP+Z2JBJZA3t+Kr2/BSAWJFIgZ7SdCS3GHrfV5PTlcZIa0BivINJe34KQKxcpECUfLHI1lY/JRYngLV6fq6idfUNIIYz+oydFicY2tLyp8SiACyV8/bbjgIQw1kBCOI1Wk7GazKB+QZw+qVfH6VRAIKEJgR8yqlLcgvC9225AnBEj9aAcgwJwJ2iE1uaHPE1s9klFtI8s9y6f07ITvMmvrrxmE0qo3hofgpAsMoKQBCwwXJCWgXgHFCCJb4C5FFgbaddmm6m0LQIayh8X0UbgfiqsiF40byJr6q8s99FXvvR/JwAglXeRYxoIwTTLV1OSEvzJr5Kk7/YvDs/BSBYZQUgCJhXgBBgCsAJXLs0nVeAEJeni8mp3N0g0ySSF3Tn5wQQLOAuYkSJEky3dLkCcISX1pVgOXwELK184uY48cF/kLHTH4dcQUVj3AkvEkt3g9AHO5LbrC1o7sMcrv4WYBbMLj+nQNOTvKIIBEsFIIYa5YkCEMO5fTUtrAIQK1UFXqR2VICJrxlCFJPZvlc/p7k7ASQ+LFYUgRDCCSCGmgJwjtflI2AM3vetpoWl6q0AHGvdKUYUf8oTrwDv6+0lz7SwCsASvF+LKvAitVMAYnWbrXYCOEGInmgzsDN/TmMkTfeKWwE4Vo9iQnlAxW/k73+7I9EreHpPwgAAAABJRU5ErkJggg=="
                        ></img>
                    </div>
                    <div className="card-address-left-qr-border"></div>
                    <span className="card-address-left-delete-address">Delete Address</span>
                </div>

                <div className="card-address-right">
                    <div className="card-address-right-balance">
                        <span>{address.balance} BTC</span>
                        {/* <span> = $485.42</span> */}
                    </div>
                    <div className="card-address-right-border">
                        <span className="card-address-right-address">{address.address}</span>
                    </div>
                    <span className="card-address-right-more">more</span>
                </div>
            </div>
        )
    }
}