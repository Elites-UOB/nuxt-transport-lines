<template>
    <div flex justify-center sm:justify-end items-center h="100vh" class="container" mx-auto>
        <Car position-absolute bottom-0 left-0 h="75vh" hidden lg:block />
        <div w="full" flex flex-col px="20px lg:70px" dir="rtl" items-center justify-center lg:items-start lg:justify-start>
            <img src="/logo.png" h="200px" w="216px" alt="" />
            <h1 text="64px lg:85px">خطوط</h1>
            <p text="24px lg:30px center lg:right">
                <span>تطبيقك الأول للحصول على خطوط</span>
                <br />
                <span>تطبيقك الأول لعرض خطوطك والترويج لها</span>
            </p>

            <div flex flex-col gap-4 mt-10>
                <span font="semibold" text="27px center lg:right">لتحميل التطبيق</span>
                <GooglePlay hover:opacity="90" cursor="pointer" />
                <Apple hover:opacity="90" cursor="pointer" />
            </div>
        </div>
    </div>
</template>