<?php

/*
 * This file is part of EC-CUBE
 *
 * Copyright(c) EC-CUBE CO.,LTD. All Rights Reserved.
 *
 * http://www.ec-cube.co.jp/
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Page\Admin;

use Facebook\WebDriver\WebDriverKeys;

class JavaScriptManagePage extends AbstractAdminPageStyleGuide
{
    /**
     * MaintenanceManagePage constructor.
     */
    public function __construct(\AcceptanceTester $I)
    {
        parent::__construct($I);
    }

    public static function go($I)
    {
        $page = new self($I);

        return $page->goPage('/content/js', 'JavaScript管理コンテンツ管理');
    }

    public function 入力($value)
    {
        $this->tester->wait(3); // XXX 確実に画面遷移してから入力するため wait を入れる
        $this->tester->click('.ace_content');
        $this->tester->wait(0.5); // XXX 入力エリアにフォーカスするまで待つ
        $this->tester->sendKeys([WebDriverKeys::CONTROL, 'a']);
        $this->tester->wait(0.5); // XXX 全選択するまで待つ
        $this->tester->sendKeys(WebDriverKeys::DELETE);
        $this->tester->wait(0.5); // XXX 削除するまで待つ
        $this->tester->sendKeys($value);

        return $this;
    }

    public function 登録()
    {
        $this->tester->click('#save-button');

        return $this;
    }
}
